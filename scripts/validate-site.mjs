import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categories, productCatalog } from '../data/product-catalog.mjs';
import { LOCALE_CODES } from '../data/product-schema.mjs';
import { mountedUnitsForSeries, unitModelGroups } from '../data/mounted-units-spec.mjs';
import { housingSeriesSpec } from '../data/bearing-housing-spec.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const domain = 'https://www.natermanufacture.com';
const locales = [...LOCALE_CODES];
const seriesWord = {
  en: 'Series', es: 'Serie', de: 'Serie', fr: 'Série', pt: 'Série', ar: 'السلسلة',
  tr: 'Seri', ru: 'Серия', it: 'Serie', vi: 'Dòng sản phẩm', id: 'Seri', ja: 'シリーズ', ko: '시리즈'
};
const companyNameLabels = {
  en: 'Company Name', es: 'Nombre de la empresa', de: 'Unternehmensname', fr: 'Nom de l\'entreprise',
  pt: 'Nome da empresa', ar: 'اسم الشركة', tr: 'Şirket Adı', ru: 'Название компании',
  it: 'Nome dell\'azienda', vi: 'Tên công ty', id: 'Nama perusahaan', ja: '会社名', ko: '회사명'
};
// Footer/contact row labels. Must stay in sync with contactFieldLabels in scripts/build-pages.mjs.
const contactFieldLabels = {
  email: { en: 'E-mail', es: 'Correo electrónico', de: 'E-Mail', fr: 'E-mail', pt: 'E-mail', ar: 'البريد الإلكتروني', tr: 'E-posta', ru: 'Электронная почта', it: 'E-mail', vi: 'Email', id: 'E-mail', ja: 'メール', ko: '이메일' },
  facility: { en: 'Manufacturing Facility', es: 'Planta de fabricación', de: 'Fertigungsstandort', fr: 'Site de fabrication', pt: 'Unidade de fabricação', ar: 'منشأة التصنيع', tr: 'Üretim tesisi', ru: 'Производственная площадка', it: 'Sede di produzione', vi: 'Cơ sở sản xuất', id: 'Fasilitas produksi', ja: '製造工場', ko: '생산 공장' }
};
const activeSeries = categories.flatMap(category => category.series.filter(series => series.status === 'active').map(series => ({
  category: category.code,
  code: series.seriesCode,
  slug: series.seriesCode.toLowerCase(),
  record: series
})));
const categoryRoutes = categories.map(category => category.code);
const seriesRoutes = activeSeries;
const errors = [];

function fail(message) {
  errors.push(message);
}

function routeFor(file) {
  const path = relative(root, file).replaceAll('\\', '/');
  return `/${path.replace(/index\.html$/, '')}`.replace(/\/+/g, '/');
}

function publicRoute(locale, path = '') {
  return `/${locale}${path ? `/${path.replace(/^\/+|\/+$/g, '')}` : ''}/`;
}

function htmlText(value) {
  return value.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}

function attribute(tag, name) {
  return tag.match(new RegExp(`${name}="([^"]*)"`, 'i'))?.[1] ?? null;
}

async function filesUnder(directory, extension = null) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path, extension));
    else if (!extension || entry.name.endsWith(extension)) files.push(path);
  }
  return files;
}

function requiredRoutes(locale) {
  return [
    publicRoute(locale),
    publicRoute(locale, 'products'),
    ...categoryRoutes.map(category => publicRoute(locale, `products/${category}`)),
    ...seriesRoutes.map(({ category, slug }) => publicRoute(locale, `products/${category}/${slug}`)),
    publicRoute(locale, 'contact-us'),
    publicRoute(locale, 'cross-reference')
  ];
}

/** Guides 栏目（仅英文） */
const guideRoutes = ['guides', ...['ucp-vs-ucf-vs-ucfl-which-housing', 'why-housing-bore-tolerance-matters', 'how-to-read-a-bearing-housing-model-number', 'how-to-choose-bearing-housing-material', 'bearing-lubrication-basics', 'bearing-housing-mounting-types'].map(slug => `guides/${slug}`)]
  .map(slug => publicRoute('en', slug));
/** Privacy and Terms are published in all 13 locales. */
const legalSlugs = ['privacy', 'terms'];

function allRequiredRoutes(locale) {
  const base = requiredRoutes(locale);
  const legal = legalSlugs.map(slug => publicRoute(locale, slug));
  return locale === 'en' ? [...base, ...legal, ...guideRoutes] : [...base, ...legal];
}

for (const locale of locales) {
  for (const route of allRequiredRoutes(locale)) {
    try {
      await access(join(root, route.slice(1), 'index.html'));
    } catch {
      fail(`missing generated route ${route}`);
    }
  }
  for (const pending of ['uel', 'uk', 'uelp', 'ucfs']) {
    try {
      await access(join(root, locale, 'products', 'pillow-block-bearing-units', pending, 'index.html'));
      fail(`/${locale}/products/pillow-block-bearing-units/${pending}/: pending Series must not be generated`);
    } catch {
      // Expected.
    }
  }
}

const localizedFiles = (await Promise.all(locales.map(locale => filesUnder(join(root, locale), '.html')))).flat();
const expectedPageCount = locales.reduce((sum, locale) => sum + allRequiredRoutes(locale).length, 0);
if (localizedFiles.length !== expectedPageCount) fail(`expected ${expectedPageCount} localized pages, found ${localizedFiles.length}`);

const requiredPageSet = new Set(locales.flatMap(locale => allRequiredRoutes(locale)));
const localizedHtml = new Map();
for (const file of localizedFiles) localizedHtml.set(routeFor(file), await readFile(file, 'utf8'));

for (const [route, html] of localizedHtml) {
  const locale = route.split('/')[1];
  const parts = route.split('/').filter(Boolean);
  const localizedPath = parts.slice(1).join('/');
  const routePath = localizedPath ? `/${localizedPath}/` : '/';
  const canonical = `${domain}${route}`;
  const seriesRoute = seriesRoutes.find(item => `${item.category}/${item.slug}` === parts.slice(2).join('/'));

  if (!requiredPageSet.has(route)) fail(`${route}: obsolete or unsupported route remains`);
  if ((html.match(/<h1\b/gi) || []).length !== 1) fail(`${route}: expected exactly one H1`);
  if (!/<main id="main-content">/i.test(html)) fail(`${route}: missing main landmark`);
  const robots = [...html.matchAll(/<meta\b[^>]*\bname="robots"[^>]*>/gi)];
  if (robots.length !== 1 || attribute(robots[0][0], 'content')?.toLowerCase() !== 'index, follow') fail(`${route}: robots meta must be exactly index, follow`);
  if (!new RegExp(`<html lang="${locale}"`, 'i').test(html)) fail(`${route}: incorrect html language`);
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => match[0]);
  const canonicalTags = links.filter(tag => /\brel="canonical"/i.test(tag));
  if (canonicalTags.length !== 1 || attribute(canonicalTags[0] ?? '', 'href') !== canonical) fail(`${route}: invalid canonical`);
  const expectedAlternates = new Map();
  if (parts[1] === 'guides') {
    expectedAlternates.set('en', `${domain}${publicRoute('en', localizedPath)}`);
  } else {
    for (const code of locales) expectedAlternates.set(code, `${domain}${publicRoute(code, localizedPath)}`);
  }
  expectedAlternates.set('x-default', `${domain}${publicRoute('en', localizedPath)}`);
  const alternates = links.filter(tag => /\brel="alternate"/i.test(tag) && /\bhreflang=/i.test(tag));
  if (alternates.length !== expectedAlternates.size) fail(`${route}: expected ${expectedAlternates.size} hreflang links`);
  for (const [language, href] of expectedAlternates) {
    const matching = alternates.filter(tag => attribute(tag, 'hreflang') === language && attribute(tag, 'href') === href);
    if (matching.length !== 1) fail(`${route}: invalid or missing ${language} hreflang`);
  }
  if (!/<script type="application\/ld\+json">/i.test(html)) fail(`${route}: missing structured data`);
  if ((html.match(/<nav class="site-nav"[\s\S]*?<\/nav>/gi) || []).length !== 1) fail(`${route}: missing primary navigation`);
  if ((html.match(/<a\b/gi) || []).length < 3) fail(`${route}: primary links are incomplete`);
  const footerHtml = html.match(/<footer class="site-footer"[\s\S]*?<\/footer>/i)?.[0] ?? '';
  if (!footerHtml) fail(`${route}: missing footer`);
  const footerLabels = [...footerHtml.matchAll(/<dt>([\s\S]*?)<\/dt>/gi)].map(match => htmlText(match[1]));
  for (const label of ['WhatsApp', 'Facebook', 'LinkedIn', companyNameLabels[locale], contactFieldLabels.email[locale], contactFieldLabels.facility[locale]]) {
    if (!footerLabels.includes(label)) fail(`${route}: footer missing ${label}`);
  }
  if (locale === 'ar' && !/<html lang="ar" dir="rtl">/i.test(html)) fail(`${route}: Arabic page missing RTL`);
  if ((locale === 'ja' || locale === 'ko') && html.includes('\uFFFD')) fail(`${route}: contains Unicode replacement characters`);
  // Retired category names and the old About Us entry must not reappear anywhere. This is the
  // original strict rule: the category copy was reworded to avoid the phrases rather than
  // narrowing the guard.
  if (/>Bearings<|>Bearing Housing<|>Bearing Units<|Mounted Spherical|Mounted Ball|About Us/i.test(html)) fail(`${route}: obsolete product or About Us text remains`);
  if (/<form\b|<table\b|products\.html#|about-us/i.test(html) && seriesRoute) fail(`${route}: Series page contains forbidden detail or obsolete route content`);

  // Every locale must publish the confirmed specification: the block is localized through
  // data/spec-i18n/, so a locale that silently loses it would fall back to a thin page.
  if (seriesRoute) {
    const hasModel = mountedUnitsForSeries(seriesRoute.code).length > 0;
    const hasRange = Boolean(unitModelGroups(seriesRoute.code));
    const hasHousingSpec = Boolean(housingSeriesSpec(seriesRoute.code));
    if (hasModel || hasRange || hasHousingSpec) {
      if (!/class="spec-note"/.test(html)) fail(`${route}: missing standard construction note`);
      if (!/class="unit-contact"/.test(html)) fail(`${route}: missing specification enquiry line`);
    }
    if (hasModel || hasHousingSpec) {
      if (!/class="unit-spec"/.test(html)) fail(`${route}: missing localized specification block`);
    }
    if (hasRange) {
      if (!/class="model-names"/.test(html)) fail(`${route}: missing full model range`);
    }
  }

  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map(match => match[0]);
  for (const imageTag of images) {
    const src = attribute(imageTag, 'src');
    if (!src || !/\.(?:webp|avif)$/i.test(src)) fail(`${route}: non-WebP/AVIF image ${src}`);
    if (!Number.isInteger(Number(attribute(imageTag, 'width'))) || !Number.isInteger(Number(attribute(imageTag, 'height')))) fail(`${route}: invalid image dimensions ${src}`);
    if (src?.startsWith('/')) {
      try { await access(resolve(root, src.slice(1))); } catch { fail(`${route}: missing image ${src}`); }
    }
  }

  if (seriesRoute) {
    const h1 = htmlText(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '');
    // The H1 must identify the series by the code the owner displays (PBU -> UCHA, PAS -> HA,
    // FB -> FB) and must carry a type phrase as well: a bare "UCP" heading is not acceptable,
    // because then every non-English series page loses its keywords.
    const displayOverride = seriesRoute.record.displayName;
    const displayedCode = displayOverride ?? seriesRoute.code;
    const h1IdentifiesSeries = h1.toLowerCase().includes(displayedCode.toLowerCase())
      || h1.toLowerCase().includes(seriesRoute.code.toLowerCase());
    if (!h1IdentifiesSeries) fail(`${route}: H1 must identify ${displayedCode}`);
    const headingPhrase = h1.replace(new RegExp(displayedCode, 'i'), '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    if (headingPhrase.length < 8) fail(`${route}: H1 must describe ${displayedCode}, not repeat only its code`);
    const main = html.match(/<main id="main-content">([\s\S]*?)<\/main>/i)?.[1] ?? '';
    const mainImages = [...main.matchAll(/<img\b[^>]*>/gi)].map(match => match[0]);
    const expectedImage = seriesRoute.record.image;
    if (mainImages.length !== (expectedImage ? 1 : 0)) fail(`${route}: Series image count does not match its source`);
    if (mainImages.some(tag => !attribute(tag, 'alt')?.toLowerCase().includes(displayedCode.toLowerCase()))) fail(`${route}: Series image ALT must identify ${displayedCode}`);
    if (/<table\b|class="catalogue-card"|class="model-list"|"@type":"Product"/i.test(main)) fail(`${route}: Series page contains model/detail content`);
    if (!html.includes(`href="/${locale}/products/"`)) fail(`${route}: missing Products breadcrumb link`);
    if (!html.includes(`href="/${locale}/products/${seriesRoute.category}/"`)) fail(`${route}: missing category link`);
  }
}

const productsPage = await readFile(join(root, 'en', 'products', 'index.html'), 'utf8');
for (const category of ['Pillow Block Bearing Units', 'Bearing Housing Series', 'Custom']) {
  if (!productsPage.includes(`>${category}<`)) fail(`English Products page: missing ${category}`);
}
for (const category of categories) {
  const categoryFile = join(root, 'en', 'products', category.code, 'index.html');
  const categoryHtml = await readFile(categoryFile, 'utf8');
  for (const series of category.series.filter(item => item.status === 'active')) {
    const href = `href="/en/products/${category.code}/${series.seriesCode.toLowerCase()}/"`;
    if (!categoryHtml.includes(href)) fail(`${category.code}: missing active Series link ${href}`);
  }
  for (const series of category.series.filter(item => item.status === 'pending')) {
    if (categoryHtml.includes(`/${series.seriesCode.toLowerCase()}/`)) fail(`${category.code}: pending Series link is visible`);
  }
}

// Metadata quality. A unique title and a unique description per locale keep 397 pages from
// competing with each other in the results, and both must fit what search engines display.
const metaSeen = new Map();
for (const [route, html] of localizedHtml) {
  const locale = route.split('/')[1];
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  const description = html.match(/<meta\b[^>]*\bname="description"[^>]*\bcontent="([^"]*)"/i)?.[1] ?? '';
  if (!title.trim()) fail(`${route}: missing title`);
  else if (title.length > 70) fail(`${route}: title is ${title.length} characters, search engines cut it`);
  if (!description.trim()) fail(`${route}: missing meta description`);
  else if (description.length > 165) fail(`${route}: meta description is ${description.length} characters`);
  else if (description.length < 20) fail(`${route}: meta description is only ${description.length} characters`);
  for (const [kind, value] of [['title', title], ['description', description]]) {
    const key = `${locale}:${kind}:${value}`;
    if (metaSeen.has(key)) fail(`${route}: duplicate ${kind} — already used by ${metaSeen.get(key)}`);
    else metaSeen.set(key, route);
  }
}

const customHtml = await readFile(join(root, 'en', 'products', 'custom', 'index.html'), 'utf8');
if (!customHtml.includes('Custom non-standard size products.')) fail('Custom statement is missing');
const customMain = customHtml.match(/<main id="main-content">([\s\S]*?)<\/main>/i)?.[1] ?? '';
if (/catalogue-card|model-list|parameter-table/i.test(customMain)) fail('Custom page contains a product card or technical detail entry');
const customImages = customMain.match(/<img\b[^>]*>/gi) ?? [];
if (customImages.some(tag => !/src="\/assets\/custom-solutions\.webp"/.test(tag))) fail('Custom page contains an image other than the solutions banner');
if (customImages.length > 1) fail('Custom page must contain at most the solutions banner image');

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const expectedSitemap = locales.flatMap(locale => allRequiredRoutes(locale));
if (sitemapRoutes.length !== expectedSitemap.length) fail(`sitemap must contain ${expectedSitemap.length} URLs, found ${sitemapRoutes.length}`);
for (const route of expectedSitemap) if (!sitemapRoutes.includes(route)) fail(`sitemap missing ${route}`);
if (sitemapRoutes.some(route => /(?:\/uel|\/uk|\/uelp|\/ucfs)\/$/i.test(route) || (route.includes('/products/') && route.split('/').filter(Boolean).length >= 5))) fail('sitemap contains pending or third-level product URL');

const robots = await readFile(join(root, 'robots.txt'), 'utf8');
if (!/^User-agent:\s*\*$/im.test(robots) || !/^Allow:\s*\/$/im.test(robots) || /^Disallow:/im.test(robots) || !/^Sitemap:\s*https:\/\/www\.natermanufacture\.com\/sitemap\.xml$/im.test(robots)) fail('robots.txt must allow crawling and advertise the sitemap');
const rootHtml = await readFile(join(root, 'index.html'), 'utf8');
if (!/noindex, follow/i.test(rootHtml) || !/url=\/en\//i.test(rootHtml)) fail('root redirect must remain noindex with English fallback');

// The 404 page is the single file a host serves for every unmatched path. It must carry a message
// block for each locale (assets/site.js reveals the visitor's own) and stay out of the index.
const notFoundHtml = await readFile(join(root, '404.html'), 'utf8');
const notFoundBlocks = (notFoundHtml.match(/data-not-found="/g) ?? []).length;
if (notFoundBlocks !== locales.length) fail(`404.html must carry one message block per locale, found ${notFoundBlocks}`);
if (!/name="robots" content="noindex/i.test(notFoundHtml)) fail('404.html must stay noindex');
if (!/assets\/site\.js/i.test(notFoundHtml)) fail('404.html must load the script that picks the language');

const publicProductImages = (await filesUnder(join(root, 'assets', 'product-images'))).map(file => relative(join(root, 'assets', 'product-images'), file).replaceAll('\\', '/'));
const expectedPublicImages = ['uct-product.webp', 'uc-product.webp', 'ucpa-unit.webp', 'ucf-unit.webp', 'ucfc-unit.webp', 'ucfl-unit.webp', 'ucp-unit.webp', 'ucph-unit.webp', 'ucfa-unit.webp', 'ucfb-unit.webp', 'pbu-unit.webp', 'housing-1.webp', 'housing-2.webp', 'housing-3.webp', 'housing-4.webp', 'housing-5.webp', 'housing-7.webp', 'housing-8.webp', 'housing-9.webp', 'housing-10.webp', 'housing-11.webp'];
if (JSON.stringify(publicProductImages.sort()) !== JSON.stringify(expectedPublicImages.sort())) fail('assets/product-images must contain exactly the 21 active images');
const legacyImages = (await filesUnder(join(root, 'assets', 'source-products', 'legacy-product-images'))).map(file => relative(join(root, 'assets', 'source-products', 'legacy-product-images'), file).replaceAll('\\', '/'));
const expectedLegacy = ['ucp-pillow-block-bearing.webp', 'ucf-flange-bearing.webp', 'ucfl-bearing.webp', 'ucfl-reference-2-upright.webp', 'ucfc-round-flange-bearing.webp', 'uct-take-up-bearing.webp', 'uk-product.webp'];
if (JSON.stringify(legacyImages.sort()) !== JSON.stringify(expectedLegacy.sort())) fail('legacy product image archive is incomplete');

try {
  const distImages = (await filesUnder(join(root, 'dist', 'assets', 'product-images'))).map(file => relative(join(root, 'dist', 'assets', 'product-images'), file).replaceAll('\\', '/'));
  if (JSON.stringify(distImages.sort()) !== JSON.stringify(expectedPublicImages.sort())) fail('dist must deploy exactly the 21 active product images');
  const leaked = (await filesUnder(join(root, 'dist', 'assets'))).filter(file => /source-products|source[\\/]/i.test(relative(join(root, 'dist', 'assets'), file)));
  if (leaked.length) fail('dist contains source-product files');
} catch {
  // dist is optional before a build.
}

// Every internal link and asset reference on a generated page must resolve to a generated file.
// This is the rule for the class of bug where the generator already knows a page is English-only
// (hreflang and the sitemap handle that) while the visible language menu still links to locales
// that have no such page — 108 dead links once shipped that way.
const sitePages = (await filesUnder(root, '.html')).filter(file => !relative(root, file).startsWith('dist'));
const routeSet = new Set(sitePages.map(routeFor));
const assetSet = new Set((await filesUnder(join(root, 'assets'))).map(routeFor));
for (const file of sitePages) {
  const html = await readFile(file, 'utf8');
  const route = routeFor(file);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)"/g)) {
    const target = match[1];
    if (target.startsWith('//')) continue;
    if (/\.[a-z0-9]{2,5}$/i.test(target)) {
      if (!assetSet.has(target) && !['/robots.txt', '/sitemap.xml'].includes(target)) fail(`${route}: missing asset ${target}`);
    } else if (!routeSet.has(target.endsWith('/') ? target : `${target}/`)) {
      fail(`${route}: link to missing page ${target}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated V4.0 static site: ${localizedFiles.length} pages, ${locales.length} locales, ${seriesRoutes.length} active Series routes, no model pages.`);
