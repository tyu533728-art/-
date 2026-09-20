// Presentation audit: desktop and phone layout, typography and interaction.
//
// The responsive suite checks overflow, header/footer bounds, image loading and console errors.
// This audit adds what a visitor actually feels:
//   1. no element in <main> is pushed outside the viewport horizontally
//   2. no visible text is clipped by its own box
//   3. every primary control is at least 24x24 CSS px on touch viewports (WCAG 2.5.8 minimum)
//   4. body copy is at least 12px on touch viewports
//   5. paragraphs stay within a readable measure on wide screens (<= 95 characters per line)
//   6. every interactive control is the top-most element at its own centre (nothing covers it)
//   7. no text is painted under a positioned element on top of it
//   8. the hero photo never sits under the hero text
//   9. the language dropdown exposes all 13 languages without scrolling
//  10. Arabic spec values resolve to RTL while Latin code cells stay LTR
//  11. the product-image lightbox opens, fits the viewport and closes again
//
// The home-page intro overlay covers the viewport while it plays, so every measurement waits for
// it to finish; otherwise each rule would report the overlay.
//
// Run: node tests/presentation-audit.e2e.mjs
// Screenshots for human review:
//   PRESENTATION_SCREENSHOTS=1 PRESENTATION_DIR=<dir> node tests/presentation-audit.e2e.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright';

const origin = 'http://127.0.0.1:8089';
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const locales = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];
const routes = [
  ['', 'home'],
  ['products/', 'products'],
  ['products/pillow-block-bearing-units/', 'units-index'],
  ['products/pillow-block-bearing-units/uct/', 'series-uct'],
  ['products/bearing-housing-series/', 'housing-index'],
  ['products/bearing-housing-series/fb/', 'series-fb'],
  ['products/custom/', 'custom'],
  ['contact-us/', 'contact'],
  ['cross-reference/', 'cross-reference']
];
const viewports = [
  { name: 'wide-1920', width: 1920, height: 1080, touch: false },
  { name: 'desktop-1440', width: 1440, height: 900, touch: false },
  { name: 'laptop-1366', width: 1366, height: 768, touch: false },
  { name: 'tablet-768', width: 768, height: 1024, touch: true },
  { name: 'phone-430', width: 430, height: 932, touch: true },
  { name: 'phone-390', width: 390, height: 844, touch: true },
  { name: 'android-360', width: 360, height: 800, touch: true },
  { name: 'phone-320', width: 320, height: 720, touch: true }
];
const screenshotLocales = ['en', 'de', 'ru', 'ar', 'ja'];
const screenshotRoutes = ['home', 'series-uct', 'series-fb', 'products'];
const screenshotViewports = ['wide-1920', 'phone-390'];
const captureScreenshots = process.env.PRESENTATION_SCREENSHOTS === '1';
// Screenshots are review artifacts, so they are written outside the repository by default.
const screenshotDirectory = process.env.PRESENTATION_DIR ?? join(tmpdir(), 'nater-layout-review');

const buckets = new Map();
let checked = 0;
const shots = [];

function record(rule, signature, where) {
  if (!buckets.has(rule)) buckets.set(rule, new Map());
  const group = buckets.get(rule);
  const entry = group.get(signature) ?? { count: 0, example: where };
  entry.count += 1;
  group.set(signature, entry);
}

// The home page plays a full-screen intro overlay; measuring before it finishes would report
// the overlay instead of the page.
async function settle(page) {
  await page.waitForFunction(() => {
    const splash = document.getElementById('brand-splash');
    if (!splash) return true;
    const style = getComputedStyle(splash);
    return document.documentElement.classList.contains('splash-done')
      && (style.display === 'none' || style.visibility === 'hidden');
  }, { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(120);
}

const browser = await chromium.launch({ headless: true, executablePath: edge });
try {
  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
      hasTouch: viewport.touch,
      isMobile: viewport.touch && viewport.width <= 430
    });
    const browserErrors = [];
    page.on('console', message => {
      if (message.type() === 'error') browserErrors.push(message.text());
    });
    page.on('pageerror', error => browserErrors.push(error.message));

    for (const locale of locales) {
      for (const [route, name] of routes) {
        const pathname = `/${locale}/${route}`;
        browserErrors.length = 0;
        const response = await page.goto(`${origin}${pathname}`, { waitUntil: 'domcontentloaded' });
        if (!response?.ok()) {
          record('http', `HTTP ${response?.status() ?? 'no response'}`, `${viewport.name} ${pathname}`);
          continue;
        }
        await settle(page);
        checked += 1;

        const state = await page.evaluate(({ touch, wide }) => {
          const tolerance = 2;
          const visible = element => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return style.display !== 'none' && style.visibility !== 'hidden'
              && Number(style.opacity) > 0.05 && rect.width > 0 && rect.height > 0;
          };
          const signature = element => {
            const classes = String(element.className || '').trim().split(/\s+/).filter(Boolean).slice(0, 2).join('.');
            const text = element.textContent.trim().replace(/\s+/g, ' ').slice(0, 40);
            return `${element.tagName.toLowerCase()}${classes ? `.${classes}` : ''} "${text}"`;
          };

          // 1. anything in main sticking out horizontally (decorative art may bleed by design,
          //    a resulting scrollbar is caught by the document-overflow rule below; the wide
          //    cross-reference tables scroll horizontally inside their own wrapper on purpose)
          const outOfBounds = [...document.querySelectorAll('main *, .brand-splash__stage')]
            .filter(visible)
            .filter(element => !element.closest('.table-scroll, .brand-splash'))
            .filter(element => !(element.textContent.trim() === '' && ['absolute', 'fixed'].includes(getComputedStyle(element).position)))
            .map(element => ({ element, rect: element.getBoundingClientRect() }))
            .filter(({ rect }) => rect.left < -tolerance || rect.right > innerWidth + tolerance)
            .map(({ element, rect }) => `${signature(element)} [${Math.round(rect.width)}px wide, right=${Math.round(rect.right)} of ${innerWidth}]`)
            .slice(0, 8);

          // 2. text clipped by its own box
          const clipped = [...document.querySelectorAll('main p, main h1, main h2, main h3, main h4, main dt, main dd, main li, main summary, main figcaption, main a, main span, main strong')]
            .filter(visible)
            .filter(element => element.textContent.trim())
            .filter(element => {
              const style = getComputedStyle(element);
              if (['auto', 'scroll'].includes(style.overflowX)) return false;
              if (element.getAttribute('dir') === 'ltr' && style.overflow === 'visible') return false;
              return element.scrollWidth > element.clientWidth + tolerance;
            })
            .map(element => `${signature(element)} [${element.scrollWidth}>${element.clientWidth}]`)
            .slice(0, 6);

          // 3. touch targets
          const smallTargets = touch
            ? [...document.querySelectorAll('a, button, summary, input, select, textarea')]
              .filter(visible)
              .filter(element => !element.closest('p, li, figcaption'))
              .map(element => ({ element, rect: element.getBoundingClientRect() }))
              .filter(({ rect }) => rect.width < 24 || rect.height < 24)
              .map(({ element, rect }) => `${signature(element)} [${Math.round(rect.width)}x${Math.round(rect.height)}]`)
              .slice(0, 8)
            : [];

          // 4. body copy size (the .eyebrow label is decorative, not prose)
          const tinyText = touch
            ? [...document.querySelectorAll('main p, main dd, main li, main figcaption')]
              .filter(visible)
              .filter(element => !element.classList.contains('eyebrow'))
              .filter(element => element.textContent.trim().length > 24)
              .filter(element => Number.parseFloat(getComputedStyle(element).fontSize) < 12)
              .map(element => `${signature(element)} [${getComputedStyle(element).fontSize}]`)
              .slice(0, 6)
            : [];

          // 5. readable measure on wide screens
          const longMeasure = wide
            ? [...document.querySelectorAll('main p, main dd, main li')]
              .filter(visible)
              .filter(element => element.textContent.trim().length > 180)
              .map(element => {
                const size = Number.parseFloat(getComputedStyle(element).fontSize);
                const width = element.getBoundingClientRect().width;
                return { element, perLine: Math.round(width / (size * 0.52)) };
              })
              .filter(item => item.perLine > 95)
              .map(item => `${signature(item.element)} [~${item.perLine} chars/line]`)
              .slice(0, 6)
            : [];

          // 6. every control must be the top-most element at its own centre
          const blocked = [];
          for (const element of document.querySelectorAll('a, button, summary, input')) {
            if (!visible(element) || element.closest('.brand-splash, .language-switcher__menu')) continue;
            const rect = element.getBoundingClientRect();
            if (rect.top < 0 || rect.bottom > innerHeight) continue;
            for (const [x, y] of [
              [rect.left + rect.width / 2, rect.top + rect.height / 2],
              [rect.left + Math.min(4, rect.width / 4), rect.top + rect.height / 2]
            ]) {
              const hit = document.elementFromPoint(x, y);
              if (!hit || hit === element || element.contains(hit) || hit.contains(element)) continue;
              blocked.push(`${signature(element)} <- ${signature(hit)}`);
              break;
            }
          }

          // 7. text painted under a positioned element
          const coveredText = [];
          for (const element of document.querySelectorAll('main p, main h1, main h2, main h3, main dd, main dt, main li, main figcaption')) {
            if (!visible(element) || !element.textContent.trim()) continue;
            const rect = element.getBoundingClientRect();
            if (rect.width < 40 || rect.height < 12) continue;
            for (const [x, y] of [
              [rect.left + rect.width / 2, rect.top + rect.height / 2],
              [rect.left + rect.width * 0.25, rect.top + rect.height / 2]
            ]) {
              if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) continue;
              const hit = document.elementFromPoint(x, y);
              if (!hit || hit === element || element.contains(hit) || hit.contains(element)) continue;
              if (!['absolute', 'fixed', 'sticky'].includes(getComputedStyle(hit).position)) continue;
              coveredText.push(`${signature(element)} <- ${signature(hit)}`);
              break;
            }
          }

          // 8. the decorative hero photo is allowed to bleed over the copy column by design, but it
          //    must never paint over the text: only a hit test inside the intersection decides.
          const heroOverlap = [];
          const copy = document.querySelector('.home-hero__copy');
          if (copy && visible(copy)) {
            for (const node of copy.querySelectorAll('h1, p')) {
              if (!visible(node) || !node.textContent.trim()) continue;
              const text = node.getBoundingClientRect();
              for (const image of document.querySelectorAll('.home-hero img')) {
                if (!visible(image)) continue;
                const box = image.getBoundingClientRect();
                const x = Math.min(text.right, box.right) - Math.max(text.left, box.left);
                const y = Math.min(text.bottom, box.bottom) - Math.max(text.top, box.top);
                if (x <= 4 || y <= 4) continue;
                for (const [px, py] of [
                  [Math.max(text.left, box.left) + 3, Math.max(text.top, box.top) + y / 2],
                  [Math.min(text.right, box.right) - 3, Math.max(text.top, box.top) + y / 2]
                ]) {
                  const hit = document.elementFromPoint(px, py);
                  if (!hit || hit === image || image.contains(hit)) {
                    heroOverlap.push(`${signature(image)} paints over hero text ${signature(node)} by ${Math.round(x)}x${Math.round(y)}px`);
                    break;
                  }
                }
              }
            }
          }

          const specDirections = [...document.querySelectorAll('.unit-spec dt, .unit-spec dd')].map(element => ({
            text: element.textContent.trim().slice(0, 18),
            direction: getComputedStyle(element).direction,
            arabic: /[\u0600-\u06FF]/.test(element.textContent)
          }));

          return {
            outOfBounds, clipped, smallTargets, tinyText, longMeasure, blocked,
            coveredText: coveredText.slice(0, 6), heroOverlap,
            documentOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
            specDirections
          };
        }, { touch: viewport.touch, wide: viewport.width >= 1200 });

        const where = `${viewport.name} ${pathname}`;
        if (state.documentOverflow > 1) record('document-overflow', `${state.documentOverflow}px wider than viewport`, where);
        for (const item of state.outOfBounds) record('outside-viewport', item, where);
        for (const item of state.clipped) record('clipped-text', item, where);
        for (const item of state.smallTargets) record('touch-target', item, where);
        for (const item of state.tinyText) record('small-text', item, where);
        for (const item of state.longMeasure) record('line-measure', item, where);
        for (const item of state.blocked.slice(0, 6)) record('covered-control', item, where);
        for (const item of state.coveredText) record('covered-text', item, where);
        for (const item of state.heroOverlap) record('hero-overlap', item, where);
        if (locale === 'ar') {
          for (const item of state.specDirections) {
            const wrong = (item.arabic && item.direction !== 'rtl') || (!item.arabic && item.direction === 'rtl' && item.text.length <= 8);
            if (wrong) record('bidi', `${item.text} (${item.direction})`, where);
          }
        }
        if (browserErrors.length) record('console-error', browserErrors.join(' | ').slice(0, 120), where);

        if (captureScreenshots && screenshotLocales.includes(locale) && screenshotRoutes.includes(name) && screenshotViewports.includes(viewport.name)) {
          await page.evaluate(() => {
            document.querySelector('.language-switcher')?.removeAttribute('open');
            window.scrollTo(0, 0);
          });
          const file = `${locale}-${name}-${viewport.name}.png`;
          await page.screenshot({ path: join(screenshotDirectory, file), fullPage: true });
          shots.push(file);
        }
      }
    }

    // 9. the language dropdown must expose all 13 languages, without scrolling where it fits
    await page.goto(`${origin}/en/`, { waitUntil: 'domcontentloaded' });
    await settle(page);
    await page.evaluate(() => { document.querySelector('.language-switcher').open = true; });
    await page.waitForTimeout(150);
    const switcher = await page.evaluate(() => {
      const menu = document.querySelector('.language-switcher__menu');
      const rect = menu.getBoundingClientRect();
      const unreachable = [];
      for (const link of menu.querySelectorAll('a')) {
        const box = link.getBoundingClientRect();
        const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
        if (!hit || !(hit === link || link.contains(hit))) unreachable.push(link.textContent.trim());
      }
      return {
        insideViewport: rect.left >= -1 && rect.right <= innerWidth + 1 && rect.top >= -1 && rect.bottom <= innerHeight + 1,
        unreachable,
        links: menu.querySelectorAll('a').length
      };
    });
    if (switcher.links !== 13) record('language-menu', `only ${switcher.links} languages listed`, viewport.name);
    if (!switcher.insideViewport) record('language-menu', 'open menu leaves the viewport', viewport.name);
    if (switcher.unreachable.length) record('language-menu', `not clickable without scrolling: ${switcher.unreachable.join(', ')}`, viewport.name);
    await page.close();
    console.log(`${viewport.name}: done (${checked} page checks so far)`);
  }

  // 11. lightbox interaction on a wide screen and on a phone
  for (const viewport of [viewports[0], viewports[5]]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, hasTouch: viewport.touch });
    for (const locale of ['en', 'ar']) {
      const where = `${viewport.name} /${locale}/.../fb/`;
      await page.goto(`${origin}/${locale}/products/bearing-housing-series/fb/`, { waitUntil: 'domcontentloaded' });
      const trigger = page.locator('.product-image-zoom').first();
      if (await trigger.count() === 0) {
        record('lightbox', 'trigger missing', where);
        continue;
      }
      await trigger.click();
      await page.waitForTimeout(250);
      const open = await page.evaluate(() => {
        const dialog = document.querySelector('.lightbox');
        if (!dialog) return null;
        const image = dialog.querySelector('img');
        const imageRect = image?.getBoundingClientRect();
        const closeRect = dialog.querySelector('.lightbox__close')?.getBoundingClientRect();
        return {
          visible: getComputedStyle(dialog).display !== 'none',
          imageVisible: imageRect ? imageRect.width > 40 && imageRect.height > 40 : false,
          imageFits: imageRect ? imageRect.left >= -2 && imageRect.right <= innerWidth + 2 && imageRect.top >= -2 && imageRect.bottom <= innerHeight + 2 : false,
          closeFits: closeRect ? closeRect.left >= 0 && closeRect.right <= innerWidth && closeRect.top >= 0 && closeRect.bottom <= innerHeight : false,
          closeSize: closeRect ? `${Math.round(closeRect.width)}x${Math.round(closeRect.height)}` : 'none'
        };
      });
      if (!open) record('lightbox', 'did not open', where);
      else {
        if (!open.visible) record('lightbox', 'not visible after click', where);
        if (!open.imageVisible) record('lightbox', 'image not rendered', where);
        if (!open.imageFits) record('lightbox', 'image does not fit viewport', where);
        if (!open.closeFits) record('lightbox', 'close control outside viewport', where);
        if (open.closeSize !== 'none' && open.closeSize.split('x').some(value => Number(value) < 24)) record('lightbox', `close control too small ${open.closeSize}`, where);
      }
      if (open) {
        await page.keyboard.press('Escape');
        await page.waitForTimeout(250);
        const stillOpen = await page.evaluate(() => {
          const dialog = document.querySelector('.lightbox');
          return dialog ? getComputedStyle(dialog).display !== 'none' : false;
        });
        if (stillOpen) record('lightbox', 'does not close on Escape', where);
      }
    }
    await page.close();
  }
} finally {
  await browser.close();
}

if (captureScreenshots && shots.length) {
  await mkdir(screenshotDirectory, { recursive: true });
  const rows = shots.map(file => `<figure><figcaption>${file}</figcaption><img src="${file}" loading="lazy"></figure>`).join('\n');
  await writeFile(join(screenshotDirectory, 'index.html'), `<!doctype html><html lang="en"><meta charset="utf-8"><title>Layout review</title><style>body{font:14px/1.5 system-ui;margin:24px;background:#111;color:#eee}figure{margin:0 0 32px}figcaption{margin-bottom:8px;font-weight:600}img{max-width:100%;border:1px solid #444}</style><h1>Presentation review (${shots.length} screenshots)</h1>${rows}</html>`, 'utf8');
  console.log(`Screenshots written to ${screenshotDirectory} (open index.html)`);
}

console.log(`\nPresentation audit finished: ${checked} page/viewport checks across ${viewports.length} viewports and ${locales.length} locales.`);

let total = 0;
for (const [rule, group] of [...buckets.entries()].sort((a, b) => b[1].size - a[1].size)) {
  const count = [...group.values()].reduce((sum, entry) => sum + entry.count, 0);
  total += count;
  console.log(`\n[${rule}] ${group.size} distinct signature(s), ${count} occurrence(s)`);
  for (const [signature, entry] of [...group.entries()].slice(0, 12)) {
    console.log(`   x${String(entry.count).padStart(3)}  ${signature}\n         first: ${entry.example}`);
  }
}

if (total === 0) {
  console.log('PRESENTATION OK: layout, typography, touch targets, stacking, language menu and lightbox all behave on every viewport.');
} else {
  process.exit(1);
}
