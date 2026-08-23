import { mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const origin = 'http://127.0.0.1:8089';
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const locales = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet-landscape', width: 1024, height: 768 },
  { name: 'tablet-portrait', width: 768, height: 1024 },
  { name: 'mobile-large', width: 430, height: 932 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'mobile-small', width: 320, height: 720 }
];
const captureRoutes = new Map([
  ['/en/', 'home'],
  ['/en/products/', 'products'],
  ['/en/products/pillow-block-bearing-units/', 'pillow-block-units'],
  ['/ar/products/bearing-housing-series/fb/', 'bearing-housing-series-ar'],
  ['/ja/contact-us/', 'contact-ja'],
  ['/ko/products/custom/', 'custom-ko']
]);
const captureViewports = new Set(['desktop', 'tablet-portrait', 'mobile-small']);
const artifactDirectory = new URL('./artifacts/responsive-v35/', import.meta.url);
const captureScreenshots = process.env.RESPONSIVE_SCREENSHOTS === '1';
const failures = [];
let checkedPages = 0;
let checkedImages = 0;

function fail(message) {
  if (failures.length < 200) failures.push(message);
}

function localeSuffix(pathname) {
  return pathname.replace(/^\/[a-z]{2}(?=\/)/, '');
}

const sitemap = await readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(match => new URL(match[1]).pathname)
  .filter(pathname => locales.some(locale => pathname.startsWith(`/${locale}/`)));

if (paths.length !== 182) {
  fail(`Expected 182 indexable localized routes, found ${paths.length}.`);
}

if (captureScreenshots) await mkdir(artifactDirectory, { recursive: true });

const browser = await chromium.launch({ headless: true, executablePath: edge });
try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const browserErrors = [];
    page.on('console', message => {
      if (message.type() === 'error') browserErrors.push(message.text());
    });
    page.on('pageerror', error => browserErrors.push(error.message));

    for (const [index, pathname] of paths.entries()) {
      browserErrors.length = 0;
      const response = await page.goto(`${origin}${pathname}`, { waitUntil: 'domcontentloaded' });
      if (!response?.ok()) {
        fail(`${viewport.name} ${pathname}: HTTP ${response?.status() ?? 'no response'}`);
        continue;
      }

      await page.locator('img').evaluateAll(images => Promise.all(images.map(image => {
        image.loading = 'eager';
        if (image.complete) return Promise.resolve();
        return new Promise(resolve => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        });
      })));
      const state = await page.evaluate(localesToCheck => {
        const tolerance = 1.5;
        const visible = element => {
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
        };
        const label = element => {
          const text = element.textContent.trim().replace(/\s+/g, ' ').slice(0, 70);
          return `${element.tagName.toLowerCase()}${element.className ? `.${String(element.className).trim().replace(/\s+/g, '.')}` : ''} \"${text}\"`;
        };
        const textOverflow = [...document.querySelectorAll('h1,h2,p,dt,dd,th,td,figcaption,summary,.site-nav a,.language-switcher__menu a,.product-index a,.text-link,.category-card__label,.category-card__link,.catalogue-card__blank,.image-state span')]
          .filter(element => visible(element) && element.textContent.trim())
          .filter(element => {
            const style = getComputedStyle(element);
            return element.scrollWidth > element.clientWidth + tolerance && !['auto', 'scroll'].includes(style.overflowX);
          })
          .map(label);
        const documentOverflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        const header = document.querySelector('.site-header');
        const headerRect = header?.getBoundingClientRect();
        const headerItems = [...document.querySelectorAll('.header-inner > .brand, .header-inner > .site-nav, .header-inner > .language-switcher')]
          .filter(visible)
          .map(element => ({ label: label(element), rect: element.getBoundingClientRect().toJSON() }));
        const headerOutOfBounds = headerItems.filter(item => item.rect.left < -tolerance || item.rect.right > innerWidth + tolerance);
        const headerOverlaps = [];
        for (let left = 0; left < headerItems.length; left += 1) {
          for (let right = left + 1; right < headerItems.length; right += 1) {
            const a = headerItems[left].rect;
            const b = headerItems[right].rect;
            if (Math.min(a.right, b.right) - Math.max(a.left, b.left) > tolerance && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > tolerance) {
              headerOverlaps.push(`${headerItems[left].label} overlaps ${headerItems[right].label}`);
            }
          }
        }
        const footer = document.querySelector('.site-footer');
        const footerRect = footer?.getBoundingClientRect();
        const footerItems = [...document.querySelectorAll('.footer-contact > div')]
          .filter(visible)
          .map(element => ({ label: label(element), rect: element.getBoundingClientRect().toJSON() }));
        const footerOutOfBounds = footerItems.filter(item => item.rect.left < -tolerance || item.rect.right > innerWidth + tolerance);
        const imageIssues = [...document.images].map(image => {
          const style = getComputedStyle(image);
          const naturalRatio = image.naturalWidth && image.naturalHeight ? image.naturalWidth / image.naturalHeight : 0;
          const horizontalInset = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight);
          const verticalInset = Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom);
          const contentWidth = image.clientWidth - horizontalInset;
          const contentHeight = image.clientHeight - verticalInset;
          const renderedRatio = contentWidth && contentHeight ? contentWidth / contentHeight : 0;
          const distorted = style.objectFit === 'fill' && naturalRatio && renderedRatio && Math.abs(naturalRatio - renderedRatio) / naturalRatio > 0.03;
          return {
            src: image.getAttribute('src'),
            loaded: image.complete && image.naturalWidth > 0,
            distorted
          };
        }).filter(image => !image.loaded || image.distorted);
        const switcherLinks = [...document.querySelectorAll('.language-switcher__menu a')].map(link => link.getAttribute('href'));
        const switcher = document.querySelector('.language-switcher');
        if (switcher) switcher.open = true;
        const menu = document.querySelector('.language-switcher__menu');
        const menuStyle = menu ? getComputedStyle(menu) : null;
        const menuRect = menu?.getBoundingClientRect();
        const parameterTables = [...document.querySelectorAll('.parameter-table')].map(table => ({
          direction: getComputedStyle(table).direction,
          textAlign: getComputedStyle(table).textAlign,
          overflow: table.scrollWidth - table.clientWidth
        }));
        return {
          lang: document.documentElement.lang,
          dir: document.documentElement.dir,
          documentOverflow,
          textOverflow,
          headerPresent: Boolean(headerRect),
          headerOutOfBounds,
          headerOverlaps,
          footerPresent: Boolean(footerRect),
          footerOutOfBounds,
          imageCount: document.images.length,
          imageIssues,
          switcherLinks,
          menuDirection: menuStyle?.direction,
          menuOutOfBounds: !menuRect || menuRect.left < -tolerance || menuRect.right > innerWidth + tolerance,
          parameterTables,
          localeCount: localesToCheck.length
        };
      }, locales);

      checkedPages += 1;
      checkedImages += state.imageCount;
      const locale = pathname.split('/')[1];
      const suffix = localeSuffix(pathname);
      const expectedLanguageLinks = locales.map(code => `/${code}${suffix}`);
      if (state.lang !== locale) fail(`${viewport.name} ${pathname}: html lang is ${state.lang}`);
      if (locale === 'ar' && state.dir !== 'rtl') fail(`${viewport.name} ${pathname}: Arabic page is not RTL`);
      if (locale !== 'ar' && state.dir === 'rtl') fail(`${viewport.name} ${pathname}: non-Arabic page is RTL`);
      if (state.documentOverflow > 1) fail(`${viewport.name} ${pathname}: document overflows by ${state.documentOverflow}px`);
      if (state.textOverflow.length) fail(`${viewport.name} ${pathname}: text overflow: ${state.textOverflow.join(' | ')}`);
      if (!state.headerPresent) fail(`${viewport.name} ${pathname}: header missing`);
      if (state.headerOutOfBounds.length) fail(`${viewport.name} ${pathname}: header item out of bounds: ${state.headerOutOfBounds.map(item => item.label).join(' | ')}`);
      if (state.headerOverlaps.length) fail(`${viewport.name} ${pathname}: header overlap: ${state.headerOverlaps.join(' | ')}`);
      if (!state.footerPresent) fail(`${viewport.name} ${pathname}: footer missing`);
      if (state.footerOutOfBounds.length) fail(`${viewport.name} ${pathname}: footer item out of bounds: ${state.footerOutOfBounds.map(item => item.label).join(' | ')}`);
      if (state.imageIssues.length) fail(`${viewport.name} ${pathname}: image issue: ${state.imageIssues.map(image => `${image.src} (${image.loaded ? 'distorted' : 'not loaded'})`).join(' | ')}`);
      if (state.switcherLinks.length !== 13 || state.localeCount !== 13 || state.switcherLinks.some((href, linkIndex) => href !== expectedLanguageLinks[linkIndex])) {
        fail(`${viewport.name} ${pathname}: language switcher does not preserve the current page across all 13 locales`);
      }
      if (state.menuOutOfBounds) fail(`${viewport.name} ${pathname}: open language menu is outside the viewport`);
      if (locale === 'ar' && state.parameterTables.some(table => table.direction !== 'ltr' || table.textAlign !== 'left' || table.overflow > 1)) {
        fail(`${viewport.name} ${pathname}: Arabic parameter table is not stable LTR`);
      }
      if (browserErrors.length) fail(`${viewport.name} ${pathname}: browser errors: ${browserErrors.join(' | ')}`);

      if (captureScreenshots && captureRoutes.has(pathname) && captureViewports.has(viewport.name)) {
        await page.evaluate(() => {
          document.querySelector('.language-switcher')?.removeAttribute('open');
          window.scrollTo(0, 0);
        });
        await page.screenshot({ path: fileURLToPath(new URL(`${captureRoutes.get(pathname)}-${viewport.name}.png`, artifactDirectory)), fullPage: true });
      }

      if ((index + 1) % 40 === 0) console.log(`${viewport.name}: ${index + 1}/${paths.length} routes checked`);
    }

    const parameterProbe = await browser.newPage({ viewport });
    await parameterProbe.setContent(`<!doctype html><html lang="ar" dir="rtl"><head><link rel="stylesheet" href="${origin}/assets/styles.css"></head><body><main class="section"><div class="site-shell"><table class="parameter-table" dir="ltr"><tbody><tr><th>Bearing Number</th><td>MODEL-REFERENCE-1234567890</td></tr><tr><th>Technical Parameters</th><td>120 x 45 x 60 mm / GCr15 / Cast Iron / Stainless Steel</td></tr></tbody></table></div></main></body></html>`, { waitUntil: 'load' });
    const probe = await parameterProbe.evaluate(() => {
      const table = document.querySelector('.parameter-table');
      const cells = [...table.querySelectorAll('th,td')];
      return {
        documentOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        tableOverflow: table.scrollWidth - table.clientWidth,
        cellOverflow: cells.map(cell => cell.scrollWidth - cell.clientWidth),
        direction: getComputedStyle(table).direction,
        textAlign: getComputedStyle(table).textAlign
      };
    });
    if (probe.documentOverflow > 1 || probe.tableOverflow > 1 || probe.cellOverflow.some(value => value > 1)) {
      fail(`${viewport.name} parameter probe: table or cell overflow`);
    }
    if (probe.direction !== 'ltr' || probe.textAlign !== 'left') fail(`${viewport.name} parameter probe: Arabic technical data is not LTR`);
    await parameterProbe.close();
    await page.close();
  }

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    // Negative regression: an obsolete third-level product URL must remain unavailable.
  const response = await page.goto(`${origin}/en/products/bearing-housing-series/fb/p205/`, { waitUntil: 'domcontentloaded' });
    if (response?.status() !== 404) fail(`${viewport.name}: obsolete third-level product URL must return HTTP 404`);
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(`Responsive V3.5 checks failed (${failures.length} reported):\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`Responsive V3.5 checks passed: ${checkedPages} page/viewport combinations, ${checkedImages} rendered images, ${viewports.length} parameter-table probes and all 13 locale routes.`);
