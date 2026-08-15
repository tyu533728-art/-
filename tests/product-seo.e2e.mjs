import { chromium } from 'playwright';

const origin = 'http://127.0.0.1:8089';
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const failures = [];
const categories = [
  { name: 'Bearings', href: '/en/products/bearings/' },
  { name: 'Bearing Housing', href: '/en/products/bearing-housing/' },
  { name: 'Custom', href: '/en/products/custom/' }
];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const browser = await chromium.launch({ headless: true, executablePath: edge });
try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const browserErrors = [];
    page.on('console', message => {
      if (message.type() === 'error') browserErrors.push(message.text());
    });
    page.on('pageerror', error => browserErrors.push(error.message));

    let response = await page.goto(`${origin}/en/products/`, { waitUntil: 'networkidle' });
    assert(response?.ok(), `${viewport.name}: Products page did not return HTTP 200`);
    const categoryLinks = await page.locator('.product-index a').evaluateAll(links => links.map(link => ({ text: link.textContent.trim(), href: link.getAttribute('href') })));
    assert(JSON.stringify(categoryLinks) === JSON.stringify(categories.map(category => ({ text: category.name, href: category.href }))), `${viewport.name}: Products categories are not the fixed three-category structure`);
    assert(await page.getByText('Bearing Units', { exact: true }).count() === 0, `${viewport.name}: Bearing Units remains visible`);
    assert(await page.getByText(/^(?:UCP|UCF|UCFL|UCFC|UCT|UKP|UELP)(?: Series)?$/).count() === 0, `${viewport.name}: a Series entry remains visible`);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${viewport.name}: Products page has horizontal overflow`);

    for (const category of categories) {
      response = await page.goto(`${origin}${category.href}`, { waitUntil: 'networkidle' });
      assert(response?.ok(), `${viewport.name}: ${category.name} did not return HTTP 200`);
      assert((await page.locator('h1').textContent())?.trim() === category.name, `${viewport.name}: ${category.name} H1 is incorrect`);
      assert(await page.locator('.series-card, .model-list, .parameter-table').count() === 0, `${viewport.name}: ${category.name} exposes Series or technical entry content`);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${viewport.name}: ${category.name} has horizontal overflow`);
    }

    response = await page.goto(`${origin}/en/products/custom/`, { waitUntil: 'networkidle' });
    assert(response?.ok(), `${viewport.name}: Custom page did not return HTTP 200`);
    assert(await page.getByText('Custom non-standard size products.', { exact: true }).count() >= 1, `${viewport.name}: Custom statement is missing`);
    assert(await page.locator('main img, main .catalogue-card').count() === 0, `${viewport.name}: Custom page contains a product, image or product list`);
    assert(browserErrors.length === 0, `${viewport.name}: browser errors: ${browserErrors.join(' | ')}`);
    await page.close();
  }

  for (const path of ['/en/products/bearing-units/', '/en/products/bearing-units/ucp/', '/en/products/bearings/ucp/']) {
    const page = await browser.newPage();
    const response = await page.goto(`${origin}${path}`, { waitUntil: 'domcontentloaded' });
    assert(response?.status() === 404, `${path}: obsolete Series or third-level route must return HTTP 404`);
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('PRODUCTS browser checks passed: three categories, no Series layer, no third-level routes, responsive at desktop/tablet/mobile.');
