import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categories, productCatalog, validateProductCatalog } from '../data/product-catalog.mjs';
import { LOCALE_CODES } from '../data/product-schema.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const domain = 'https://www.example.com';
const locales = [...LOCALE_CODES];
const localePrefix = new RegExp(`^/(?:${locales.join('|')})(?:/|$)`);
validateProductCatalog(productCatalog);
const categoryRoutes = categories.map(category => category.code);
const productRoutes = categories.flatMap(category => category.products.map(product => ({
  category: category.code,
  product: product.slug,
  code: product.code,
  record: product
})));
const productRouteLookup = new Map(productRoutes.map(route => [`${route.category}/${route.product}`, route]));
const retainedProductAssets = new Set(productCatalog.retainedSourceSeries.flatMap(series => series.images.map(image => image.src)));
const errors = [];
const productSeoValues = {
  title: new Map(),
  description: new Map(),
  h1: new Map()
};

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1] ?? null;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function textFromHtml(fragment) {
  return fragment.replace(/<[^>]+>/g, '').replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&#39;', "'").trim();
}

function jsonLdBlocks(html) {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi), match => {
    try {
      return JSON.parse(match[1]);
    } catch {
      return null;
    }
  }).filter(Boolean);
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(entryPath));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(entryPath);
  }
  return files;
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(entryPath));
    if (entry.isFile()) files.push(entryPath);
  }
  return files;
}

function routeFor(file) {
  const filePath = relative(root, file).replaceAll('\\', '/');
  return `/${filePath.replace(/index\.html$/, '')}`.replace(/\/+/g, '/');
}

function requiredRoutes(locale) {
  return [
    `/${locale}/`,
    `/${locale}/products/`,
    ...categoryRoutes.map(category => `/${locale}/products/${category}/`),
    ...productRoutes.map(({ category, product }) => `/${locale}/products/${category}/${product}/`),
    `/${locale}/about-us/`
  ];
}

for (const locale of locales) {
  for (const route of requiredRoutes(locale)) {
    const file = join(root, route.slice(1), 'index.html');
    try {
      await access(file);
    } catch {
      errors.push(`missing generated route ${route}`);
    }
  }
}

for (const removedFile of ['contact.html', 'products.html']) {
  try {
    await access(join(root, removedFile));
    errors.push(`${removedFile}: obsolete V3.4 page remains`);
  } catch {
    // Expected: V3.5 has no standalone Contact page or root products page.
  }
}

const forbiddenRootDirectories = new Set(['admin', 'api', 'cart', 'checkout', 'crm', 'database', 'downloads', 'inquiry', 'products', 'shop', 'source-inspection', 'uploads']);
const rootEntries = await readdir(root, { withFileTypes: true });
for (const entry of rootEntries) {
  if (entry.isDirectory() && forbiddenRootDirectories.has(entry.name.toLowerCase())) {
    errors.push(`${entry.name}: obsolete V3.4 directory remains`);
  }
  if (entry.isFile() && /(?:^|[-_.])(inquir|crm|api|admin|upload|download|cart|checkout|payment|order|shop)(?:[-_.]|$)/i.test(entry.name)) {
    errors.push(`${entry.name}: obsolete V3.4 file remains`);
  }
}

const projectFiles = await filesUnder(root);
for (const file of projectFiles) {
  if (/\.gif$/i.test(file)) errors.push(`${relative(root, file)}: GIF assets are prohibited`);
}

const packageJson = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const declaredDependencies = JSON.stringify({
  dependencies: packageJson.dependencies ?? {},
  devDependencies: packageJson.devDependencies ?? {},
  optionalDependencies: packageJson.optionalDependencies ?? {}
});
if (/(?:mysql|nodemailer|express|sequelize|prisma|mongoose|stripe|paypal|shopify|socket\.io)/i.test(declaredDependencies)) {
  errors.push('package.json: contains a prohibited backend, database, payment or commerce dependency');
}

const forbiddenCssPattern = /(?:@keyframes|animation(?:-name)?\s*:|transition\s*:|scroll-behavior\s*:\s*smooth)/i;
const css = await readFile(join(root, 'assets', 'styles.css'), 'utf8');
if (forbiddenCssPattern.test(css)) errors.push('assets/styles.css: contains animation or smooth-scroll behavior');

const forbiddenCodePattern = /(?:fetch\s*\(|XMLHttpRequest|WebSocket|FormData|localStorage|sessionStorage|indexedDB|addEventListener|removeEventListener|on(?:submit|click|change)\s*=|(?:^|["'`])\/api(?:\/|["'`])|mysql|nodemailer|express|sequelize|prisma|mongoose|stripe|paypal)/i;
const sourceFiles = [
  join(root, 'server.mjs'),
  ...(await filesUnder(join(root, 'scripts'))),
  ...(await filesUnder(join(root, 'data')))
].filter(file => !file.endsWith('validate-site.mjs'));
for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8');
  if (forbiddenCodePattern.test(source)) errors.push(`${relative(root, file)}: contains prohibited runtime/API/customer-data behavior`);
}

const forbiddenMarkupPattern = /(?:<script\b[^>]*\bsrc=|<form\b|<input\b|<textarea\b|<button\b|<canvas\b|<model-viewer\b|inquir(?:y|ies)|request\s+(?:a\s+)?quote|get\s+quote|send\s+inquiry|online\s+(?:chat|consultation)|customer\s+(?:data|details|database)|shopping\s+cart|checkout|buy\s+now|newsletter|crm|mysql|nodemailer|upload|download|drawing|\bprice\b|\border\b|\bpayment\b|\bshop(?:ping)?\b|\b3d\b|\.gif\b|@keyframes|animation\s*:|scroll-behavior\s*:\s*smooth|popup|modal|lead\s+funnel|social\s+(?:media|marketing)|询盘|询价|留言|在线咨询|客户数据|客户资料|获客|表单|上传|下载|图纸|价格|订单|支付|商城)/i;

const localizedFiles = (await Promise.all(locales.map(locale => htmlFiles(join(root, locale))))).flat();
const expectedPageCount = locales.length * requiredRoutes('en').length;
if (localizedFiles.length !== expectedPageCount) errors.push(`expected ${expectedPageCount} localized pages, found ${localizedFiles.length}`);

for (const file of localizedFiles) {
  const html = await readFile(file, 'utf8');
  const route = routeFor(file);
  const locale = route.split('/')[1];
  const routeParts = route.split('/').filter(Boolean);
  const localizedPath = routeParts.slice(1).join('/');
  const localizedRoutePath = localizedPath ? `/${localizedPath}/` : '/';
  const canonical = `${domain}${route}`;
  const productRoute = productRouteLookup.get(routeParts.slice(2).join('/'));
  const expectedAlternates = new Map(locales.map(code => [code, `${domain}/${code}${localizedRoutePath}`]));
  expectedAlternates.set('x-default', `${domain}/en${localizedRoutePath}`);

  if ((html.match(/<h1\b/gi) || []).length !== 1) errors.push(`${route}: expected one H1`);
  if (!/<main id="main-content">/i.test(html)) errors.push(`${route}: missing main landmark`);
  if (!/<meta name="viewport"/i.test(html)) errors.push(`${route}: missing viewport meta`);
  const robotsTags = Array.from(html.matchAll(/<meta\b[^>]*\bname="robots"[^>]*>/gi), match => match[0]);
  if (robotsTags.length !== 1 || attribute(robotsTags[0], 'content')?.toLowerCase() !== 'noindex, follow') {
    errors.push(`${route}: robots meta must be exactly noindex, follow`);
  }
  if (!new RegExp(`<html lang="${locale}"`, 'i').test(html)) errors.push(`${route}: incorrect html language`);
  const linkTags = Array.from(html.matchAll(/<link\b[^>]*>/gi), match => match[0]);
  const canonicalTags = linkTags.filter(tag => /\brel="canonical"/i.test(tag));
  if (canonicalTags.length !== 1) errors.push(`${route}: expected exactly one canonical link`);
  else if (attribute(canonicalTags[0], 'href') !== canonical) errors.push(`${route}: invalid canonical`);
  if (!/<script type="application\/ld\+json">/i.test(html)) errors.push(`${route}: missing structured data`);
  const alternateLinks = linkTags
    .filter(tag => /\brel="alternate"/i.test(tag) && /\bhreflang=/i.test(tag))
    .map(tag => ({ tag, hreflang: attribute(tag, 'hreflang'), href: attribute(tag, 'href') }));
  if (alternateLinks.length !== locales.length + 1) errors.push(`${route}: expected exactly ${locales.length + 1} hreflang links`);
  const alternateCounts = new Map();
  for (const link of alternateLinks) {
    alternateCounts.set(link.hreflang, (alternateCounts.get(link.hreflang) ?? 0) + 1);
    const expectedHref = expectedAlternates.get(link.hreflang);
    if (!expectedHref) errors.push(`${route}: unknown hreflang ${link.hreflang}`);
    else if (link.href !== expectedHref) errors.push(`${route}: ${link.hreflang} hreflang URL must be ${expectedHref}`);
    if (/[?#]/.test(link.href ?? '')) errors.push(`${route}: hreflang URL cannot contain query or Hash ${link.href}`);
  }
  for (const [hreflang, expectedHref] of expectedAlternates) {
    if (alternateCounts.get(hreflang) !== 1) errors.push(`${route}: hreflang ${hreflang} must appear exactly once`);
    if (!alternateLinks.some(link => link.hreflang === hreflang && link.href === expectedHref)) errors.push(`${route}: missing exact ${hreflang} hreflang URL`);
  }
  if ((html.match(/<nav class="site-nav"[\s\S]*?<\/nav>/gi) || []).length !== 1) errors.push(`${route}: missing primary navigation`);
  if ((html.match(/aria-label="Primary navigation"/gi) || []).length !== 1) errors.push(`${route}: missing primary navigation label`);
  if ((html.match(/<footer class="site-footer"/gi) || []).length !== 1) errors.push(`${route}: missing normal-flow footer`);
  for (const label of ['Email', 'Phone', 'WhatsApp', 'Address', 'Website']) {
    if (!new RegExp(`<dt>${label}<\\/dt>`, 'i').test(html)) errors.push(`${route}: footer missing ${label}`);
  }
  if (/(?:contact\.html|>Contact<|api\/)/i.test(html) || forbiddenMarkupPattern.test(html)) errors.push(`${route}: contains a prohibited V3.5 feature`);
  if (/products\.html#/i.test(html)) errors.push(`${route}: product Hash URL remains`);
  if (html.includes('Custom Products')) errors.push(`${route}: obsolete Custom Products label remains`);
  if (locale === 'ar' && !/<html lang="ar" dir="rtl">/i.test(html)) errors.push(`${route}: Arabic page missing RTL`);
  if (locale === 'ar') {
    for (const label of ['Email', 'Phone', 'WhatsApp', 'Address']) {
      const contactPattern = new RegExp(`<dt>${label}<\\/dt>[\\s\\S]{0,500}?<[^>]*class="contact-value"[^>]*dir="ltr"`, 'i');
      if (!contactPattern.test(html)) errors.push(`${route}: Arabic ${label} value must be LTR`);
    }
    const parameterTables = Array.from(html.matchAll(/<table\b[^>]*class="parameter-table"[^>]*>/gi), match => match[0]);
    for (const table of parameterTables) {
      if (attribute(table, 'dir') !== 'ltr') errors.push(`${route}: Arabic parameter table must be LTR`);
    }
    const knownIdentifiers = [...productRoutes.map(product => product.code)];
    for (const code of knownIdentifiers) {
      if (html.includes(`>${code}<`)) {
        const identifierPattern = new RegExp(`<[^>]*dir="ltr"[^>]*>\\s*${escapeRegExp(code)}\\s*</`, 'i');
        if (!identifierPattern.test(html)) errors.push(`${route}: Arabic identifier ${code} must be LTR`);
      }
    }
  }
  if ((locale === 'ja' || locale === 'ko') && html.includes('\uFFFD')) errors.push(`${route}: contains Unicode replacement characters`);

  if (productRoute) {
    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '';
    const metaTags = Array.from(html.matchAll(/<meta\b[^>]*>/gi), match => match[0]);
    const descriptionTag = metaTags.find(tag => /\bname="description"/i.test(tag));
    const description = attribute(descriptionTag ?? '', 'content') ?? '';
    const h1 = textFromHtml(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '');
    for (const [field, value, seen] of [['title', title, productSeoValues.title], ['description', description, productSeoValues.description], ['h1', h1, productSeoValues.h1]]) {
      if (!value) errors.push(`${route}: product ${field} is missing`);
      const key = `${locale}:${value}`;
      if (seen.has(key)) errors.push(`${route}: model ${field} duplicates ${seen.get(key)}`);
      else seen.set(key, route);
    }
    if (h1 !== productRoute.code) errors.push(`${route}: H1 must be the exact product code ${productRoute.code}`);

    const imageTags = Array.from(html.matchAll(/<img\b[^>]*>/gi), match => match[0]);
    if (!imageTags.length) errors.push(`${route}: model image is missing`);
    for (const imageTag of imageTags) {
      const alt = attribute(imageTag, 'alt') ?? '';
      if (!alt || !alt.toLowerCase().includes(productRoute.code.toLowerCase())) errors.push(`${route}: image ALT must identify ${productRoute.code}`);
    }

    const productSchemas = jsonLdBlocks(html).filter(schema => schema['@type'] === 'Product');
    if (productSchemas.length !== 1) errors.push(`${route}: expected exactly one Product Schema`);
    else {
      const schema = productSchemas[0];
      if (schema.name !== productRoute.code || schema.model !== productRoute.code || schema.sku !== productRoute.code) errors.push(`${route}: Product Schema model/sku must match ${productRoute.code}`);
      if (schema.url !== canonical) errors.push(`${route}: Product Schema URL must match canonical`);
      const expectedImages = productRoute.record.images.map(image => `${domain}${image.src}`);
      if (JSON.stringify(schema.image) !== JSON.stringify(expectedImages)) errors.push(`${route}: Product Schema images must match source images`);
      const properties = Array.isArray(schema.additionalProperty) ? schema.additionalProperty : [];
      for (const [name, value] of productRoute.record.technical) {
        if (!properties.some(property => property.name === name && property.value === value)) errors.push(`${route}: Product Schema is missing source parameter ${name}`);
      }
    }

    const internalLinks = [
      `href="/${locale}/products/"`,
      `href="/${locale}/products/${productRoute.category}/"`
    ];
    for (const href of internalLinks) if (!html.includes(href)) errors.push(`${route}: missing internal product link ${href}`);
  }

  const nav = Array.from(html.matchAll(/<nav class="site-nav"[\s\S]*?<\/nav>/gi))[0]?.[0] ?? '';
  if ((nav.match(/<a\b/gi) || []).length !== 3) errors.push(`${route}: navigation must contain only HOME, PRODUCTS and ABOUT US`);

  const languageMenu = Array.from(html.matchAll(/<div class="language-switcher__menu">[\s\S]*?<\/div>/gi))[0]?.[0] ?? '';
  const languageHrefs = Array.from(languageMenu.matchAll(/href="([^"]+)"/gi), match => match[1]);
  if (languageHrefs.length !== locales.length) errors.push(`${route}: language switcher must contain all fixed locale links`);
  for (const href of languageHrefs) {
    if (!localePrefix.test(href) || /[?#]/.test(href)) errors.push(`${route}: language switcher contains a non-crawlable URL ${href}`);
  }

  for (const match of html.matchAll(/<(?:img)\b[^>]*\bsrc="([^"]+)"[^>]*>/gi)) {
    const tag = match[0];
    const source = match[1];
    const width = Number(attribute(tag, 'width'));
    const height = Number(attribute(tag, 'height'));
    const loading = attribute(tag, 'loading');
    const classes = (attribute(tag, 'class') ?? '').split(/\s+/);
    const isHeroProduct = classes.includes('hero-product');
    if (!/\.(?:webp|avif)$/i.test(source)) errors.push(`${route}: non-WebP/AVIF image ${source}`);
    if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) errors.push(`${route}: image has invalid intrinsic dimensions ${source}`);
    if (isHeroProduct) {
      if (loading !== 'eager' || attribute(tag, 'fetchpriority') !== 'high') errors.push(`${route}: primary hero image must be eager with high fetch priority`);
    } else if (loading !== 'lazy') {
      errors.push(`${route}: non-primary image must use lazy loading ${source}`);
    }
    if (source.startsWith('/')) {
      try {
        await access(resolve(root, source.slice(1)));
      } catch {
        errors.push(`${route}: missing image ${source}`);
      }
    }
  }

  const eagerImages = html.match(/<img\b[^>]*\bloading="eager"[^>]*>/gi) || [];
  if (eagerImages.length > 1) errors.push(`${route}: more than one eager image`);
  if (route === `/${locale}/` && eagerImages.length !== 1) errors.push(`${route}: homepage requires one primary eager image`);
  if (route !== `/${locale}/` && eagerImages.length) errors.push(`${route}: non-homepage cannot contain eager images`);
}

const products = await readFile(join(root, 'en', 'products', 'index.html'), 'utf8');
for (const category of ['Bearings', 'Bearing Housing', 'Custom']) {
  if (!products.includes(`>${category}<`)) errors.push(`English products page: missing category ${category}`);
}
if (products.includes('Bearing Units') || />(?:UCP|UCF|UCFL|UCFC|UCT|UKP|UELP)(?: Series)?</i.test(products)) {
  errors.push('English products page: obsolete Bearing Units or Series entry remains');
}
for (const locale of locales) {
  const localeProducts = await readFile(join(root, locale, 'products', 'index.html'), 'utf8');
  for (const category of categories) {
    const categoryHref = `/${locale}/products/${category.code}/`;
    if (!localeProducts.includes(`href="${categoryHref}"`)) errors.push(`/${locale}/products/: missing category link ${categoryHref}`);
    const categoryHtml = await readFile(join(root, locale, 'products', category.code, 'index.html'), 'utf8');
    for (const product of category.products) {
      const productHref = `${categoryHref}${product.slug}/`;
      if (!categoryHtml.includes(`href="${productHref}"`)) errors.push(`${categoryHref}: missing product link ${productHref}`);
    }
  }
}

for (const { category, product, code } of productRoutes) {
  const route = `/en/products/${category}/${product}/`;
  const file = join(root, route.slice(1), 'index.html');
  const html = await readFile(file, 'utf8');
  if (!html.includes(`>${code}<`) && !html.includes(`>${code}&lt;`)) errors.push(`${route}: model code is missing`);
  if (!/<table class="parameter-table"/i.test(html)) errors.push(`${route}: parameter detail table is missing`);
}

const expectedProductRoutes = new Set(locales.flatMap(locale => requiredRoutes(locale).filter(route => route.includes('/products/'))));
for (const file of localizedFiles) {
  const route = routeFor(file);
  if (!route.includes('/products/')) continue;
  if (!expectedProductRoutes.has(route)) errors.push(`${route}: obsolete or unsupported Products route remains`);
}

const generatedFiles = [join(root, 'index.html'), ...localizedFiles];
const allGeneratedHtml = await Promise.all(generatedFiles.map(file => readFile(file, 'utf8')));
if (allGeneratedHtml.some(html => /products\.html#/i.test(html))) errors.push('generated site contains products.html Hash links');

const generatedAssetReferences = new Set(allGeneratedHtml.flatMap(html => Array.from(html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/gi), match => match[1])));
for (const file of projectFiles) {
  const assetPath = relative(root, file).replaceAll('\\', '/');
  if (!/^assets\/(?!source\/|source-products\/).+\.(?:webp|avif|svg)$/i.test(assetPath)) continue;
  const publicPath = `/${assetPath}`;
  if (!generatedAssetReferences.has(publicPath) && !retainedProductAssets.has(publicPath)) errors.push(`${assetPath}: unused public image asset`);
}

const rootHtml = await readFile(join(root, 'index.html'), 'utf8');
if (!/noindex, follow/i.test(rootHtml) || !/url=\/en\//i.test(rootHtml)) errors.push('root redirect is missing noindex English fallback');
const robots = await readFile(join(root, 'robots.txt'), 'utf8');
if (!/^User-agent:\s*\*$/im.test(robots) || !/^Allow:\s*\/$/im.test(robots)) errors.push('robots.txt: crawler access must remain allowed');
if (/^Disallow:/im.test(robots)) errors.push('robots.txt: noindex pages must remain crawlable');
if (/^Sitemap:/im.test(robots)) errors.push('robots.txt: placeholder sitemap must not be advertised before launch');
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
for (const locale of locales) {
  if (!sitemap.includes(`${domain}/${locale}/`)) errors.push(`sitemap.xml: missing ${locale} root`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated V3.5 static site: ${localizedFiles.length} pages, ${locales.length} localized URL sets, ${productRoutes.length} source-backed product routes, product SEO constraints enforced.`);
