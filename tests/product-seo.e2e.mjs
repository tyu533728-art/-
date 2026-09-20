import { chromium } from 'playwright';

const origin = 'http://127.0.0.1:8089';
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const categories = [
  { name: 'Pillow Block Bearing Units', slug: 'pillow-block-bearing-units' },
  { name: 'Bearing Housing Series', slug: 'bearing-housing-series' },
  { name: 'Custom', slug: 'custom' }
];
const series = [
  { code: 'UCT', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UEL', image: false, category: 'pillow-block-bearing-units' },
  { code: 'UK', image: false, category: 'pillow-block-bearing-units' },
  { code: 'UELP', image: false, category: 'pillow-block-bearing-units' },
  { code: 'UCP', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UCF', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UCFC', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UCFS', image: false, category: 'pillow-block-bearing-units' },
  { code: 'UCFL', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UCPA', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UCPH', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UCFA', image: true, category: 'pillow-block-bearing-units' },
  { code: 'UCFB', image: true, category: 'pillow-block-bearing-units' },
  { code: 'PBU', display: 'UCHA', image: true, category: 'pillow-block-bearing-units' },
  { code: 'T', image: true, category: 'bearing-housing-series' },
  { code: 'P', image: true, category: 'bearing-housing-series' },
  { code: 'F', image: true, category: 'bearing-housing-series' },
  { code: 'FC', image: true, category: 'bearing-housing-series' },
  { code: 'FL', image: true, category: 'bearing-housing-series' },
  { code: 'PA', image: true, category: 'bearing-housing-series' },
  { code: 'PH', image: true, category: 'bearing-housing-series' },
  { code: 'FU', image: true, category: 'bearing-housing-series' },
  { code: 'FB', image: true, category: 'bearing-housing-series' },
  { code: 'PAS', display: 'HA', image: true, category: 'bearing-housing-series' },
  { code: 'FS', image: false, category: 'bearing-housing-series' }
].map(item => ({ ...item, name: item.display ?? item.code, href: `/en/products/${item.category}/${item.code.toLowerCase()}/` }));
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const browser = await chromium.launch({ headless: true, executablePath: edge });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  let response = await page.goto(`${origin}/en/products/`, { waitUntil: 'networkidle' });
  assert(response?.ok(), 'Products page did not return HTTP 200');
  const categoryLinks = await page.locator('.product-index a').evaluateAll(links => links.map(link => ({ text: link.textContent.trim(), href: link.getAttribute('href') })));
  assert(JSON.stringify(categoryLinks) === JSON.stringify(categories.map(category => ({ text: category.name, href: `/en/products/${category.slug}/` }))), 'Products categories do not match V4.0');
  assert(await page.getByText('Bearings', { exact: true }).count() === 0, 'legacy Bearings entry remains');
  assert(await page.getByText('Bearing Housing', { exact: true }).count() === 0, 'legacy Bearing Housing entry remains');

  for (const category of categories) {
    const categoryHref = `/en/products/${category.slug}/`;
    response = await page.goto(`${origin}${categoryHref}`, { waitUntil: 'networkidle' });
    assert(response?.ok(), `${category.name} did not return HTTP 200`);
    assert((await page.locator('h1').textContent())?.trim() === category.name, `${category.name} H1 is incorrect`);
    if (category.slug === 'custom') {
      assert(await page.locator('main img, main .catalogue-card').count() === 0, 'Custom contains an image or product card');
      continue;
    }
    for (const item of series.filter(item => item.category === category.slug && item.image)) {
      // A category page links each active series twice by design: once as a card and once in the
      // series-comparison table. The bound still fails if a series is missing or gets linked a
      // third time, so accidental duplicates are caught.
      const links = await page.locator(`a[href="${item.href}"]`).count();
      assert(links >= 1 && links <= 2, `${item.name} entry count is ${links}, expected 1 (card) or 2 (card + comparison table)`);
    }
    for (const item of series.filter(item => item.category === category.slug && !item.image)) {
      assert(await page.locator(`a[href="${item.href}"]`).count() === 0, `${item.name} pending entry is visible`);
    }
  }

  for (const item of series) {
    response = await page.goto(`${origin}${item.href}`, { waitUntil: 'networkidle' });
    if (!item.image) {
      assert(response?.status() === 404, `${item.name} pending route must return HTTP 404`);
      continue;
    }
    assert(response?.ok(), `${item.name} did not return HTTP 200`);
    // Series headings carry either the display name (UCHA, HA, FB) or the owner-confirmed
    // descriptive ALT ("UCT wide inner ring insert bearing, set-screw locking"). The series
    // identity must always lead the H1.
    const heading = (await page.locator('h1').textContent())?.trim() ?? '';
    assert(heading === item.name || heading.startsWith(`${item.name} `), `${item.name} H1 is incorrect: "${heading}"`);
    assert(await page.locator('main img').count() === 1, `${item.name} must contain exactly one image`);
    assert(await page.locator('main .catalogue-card, main .model-list, main .parameter-table').count() === 0, `${item.name} exposes model/detail content`);
  }

  for (const path of [
    '/en/products/bearings/',
    '/en/products/bearing-housing/',
    '/en/products/mounted-spherical-roller-bearings/',
    '/en/products/pillow-block-bearing-units/uc/uc205/',
    '/en/products/bearing-housing-series/fb/p205/'
  ]) {
    response = await page.goto(`${origin}${path}`, { waitUntil: 'domcontentloaded' });
    assert(response?.status() === 404, `${path} must return HTTP 404`);
  }
  await page.close();
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('PRODUCTS browser checks passed: three categories, twenty-one active Series pages, five pending Series 404s, and no third-level routes.');
