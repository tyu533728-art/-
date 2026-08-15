import { chromium } from 'playwright';

const origin = 'http://127.0.0.1:8089';
const seoOrigin = 'https://www.example.com';
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const locales = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];
const checks = [
  { path: '/ar/products/bearing-housing/', locale: 'ar', widths: [390, 1280] },
  { path: '/ar/about-us/', locale: 'ar', widths: [390, 1280] },
  { path: '/ja/', locale: 'ja', widths: [390] },
  { path: '/ko/', locale: 'ko', widths: [390] }
];
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const browser = await chromium.launch({ headless: true, executablePath: edge });
try {
  for (const check of checks) {
    for (const width of check.widths) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const consoleErrors = [];
      page.on('console', message => {
        if (message.type() === 'error') consoleErrors.push(message.text());
      });
      page.on('pageerror', error => consoleErrors.push(error.message));
      const response = await page.goto(`${origin}${check.path}`, { waitUntil: 'domcontentloaded' });
      assert(response?.ok(), `${check.path} at ${width}px returned ${response?.status()}`);
      const result = await page.evaluate(({ locales, seoOrigin, path, locale }) => {
        const links = [...document.querySelectorAll('link[rel="alternate"][hreflang]')]
          .map(link => ({ lang: link.hreflang, href: link.href }));
        const expectedPath = path.replace(new RegExp(`^/${locale}`), '');
        const expected = Object.fromEntries(locales.map(code => [code, `${seoOrigin}/${code}${expectedPath}`]));
        expected['x-default'] = `${seoOrigin}/en${expectedPath}`;
        const contacts = [...document.querySelectorAll('dt')]
          .filter(dt => ['Email', 'Phone', 'WhatsApp', 'Address'].includes(dt.textContent.trim()))
          .map(dt => ({ label: dt.textContent.trim(), value: dt.parentElement.querySelector('[dir="ltr"]') }));
        const switcher = document.querySelector('.language-switcher');
        const switcherRect = switcher?.getBoundingClientRect();
        const tables = [...document.querySelectorAll('.parameter-table')].map(table => ({
          dir: table.dir,
          direction: getComputedStyle(table).direction,
          textAlign: getComputedStyle(table).textAlign
        }));
        return {
          lang: document.documentElement.lang,
          dir: document.documentElement.dir,
          replacement: document.documentElement.outerHTML.includes('\uFFFD'),
          links,
          expected,
          contacts: contacts.map(({ label, value }) => ({
            label,
            dir: value?.dir,
            direction: value ? getComputedStyle(value).direction : null,
            unicodeBidi: value ? getComputedStyle(value).unicodeBidi : null
          })),
          switcher: switcherRect ? { left: switcherRect.left, right: innerWidth - switcherRect.right, top: switcherRect.top } : null,
          tables
        };
      }, { locales, seoOrigin, path: check.path, locale: check.locale });

      assert(result.lang === check.locale, `${check.path}: html lang mismatch`);
      if (check.locale === 'ar') {
        assert(result.dir === 'rtl', `${check.path} at ${width}px: missing RTL`);
        for (const contact of result.contacts) {
          assert(contact.dir === 'ltr' && contact.direction === 'ltr' && contact.unicodeBidi === 'isolate', `${check.path} at ${width}px: ${contact.label} is not isolated LTR`);
        }
        for (const table of result.tables) {
          assert(table.dir === 'ltr' && table.direction === 'ltr' && table.textAlign === 'left', `${check.path} at ${width}px: parameter table is not LTR`);
        }
        assert(result.switcher && result.switcher.left > width * 0.6 && result.switcher.top < 100, `${check.path} at ${width}px: language selector is not at physical upper-right`);
      }
      if (check.locale === 'ja' || check.locale === 'ko') assert(!result.replacement, `${check.path}: Unicode replacement character found`);
      assert(result.links.length === locales.length + 1, `${check.path}: browser saw incomplete hreflang list`);
      for (const [lang, href] of Object.entries(result.expected)) {
        assert(result.links.filter(link => link.lang === lang && link.href === href).length === 1, `${check.path}: browser hreflang mismatch for ${lang}`);
      }
      assert(consoleErrors.length === 0, `${check.path} at ${width}px: browser errors ${consoleErrors.join(' | ')}`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('International SEO browser checks passed: Arabic RTL/LTR, exact hreflang, Japanese and Korean rendering.');
