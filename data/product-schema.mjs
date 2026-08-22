export const LOCALE_CODES = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];

export const PRODUCT_CATEGORIES = ['Pillow Block Bearing Units', 'Bearing Housing Series', 'Custom'];

export const SERIES_BY_CATEGORY = Object.freeze({
  'Pillow Block Bearing Units': ['UCT', 'UEL', 'UK', 'UCPA', 'UCF', 'UCFC', 'UCFL', 'UCP', 'UCPH', 'UCFA', 'UCPB'],
  'Bearing Housing Series': ['P', 'PA', 'F', 'FL', 'FC', 'FS', 'T'],
  Custom: []
});

export const ACTIVE_SERIES = ['UCT', 'UCPA', 'UCF', 'UCFC', 'UCFL', 'UCP', 'UCPH', 'UCFA', 'UCPB', 'P', 'PA', 'F', 'FL', 'FC', 'FS', 'T'];
export const PENDING_SERIES = ['UEL', 'UK'];
export const MODEL_TECHNICAL_FIELD_NAMES = [];
export const PRODUCT_MODEL_FIELDS = [];
export const STANDARD_MATERIAL_NAMES = ['GCr15', 'Cast Iron', 'Ductile Iron', 'Stainless Steel'];

function assert(condition, message) {
  if (!condition) throw new Error(`Product catalog validation failed: ${message}`);
}

function assertImage(image, seriesCode) {
  if (image === null) return;
  assert(image && typeof image === 'object' && !Array.isArray(image), `${seriesCode}: image must be an object or null`);
  assert(typeof image.src === 'string' && /^\/assets\/product-images\/(?:[a-z-]+)\.(?:webp|avif)$/i.test(image.src), `${seriesCode}: image source must be a public WebP/AVIF product image`);
  assert(Number.isInteger(image.width) && image.width > 0, `${seriesCode}: image width must be positive`);
  assert(Number.isInteger(image.height) && image.height > 0, `${seriesCode}: image height must be positive`);
}

export function validateSeries(series, category, expectedCode) {
  assert(series && typeof series === 'object' && !Array.isArray(series), `${category}: Series record must be an object`);
  assert(series.category === category, `${series.seriesCode ?? 'unknown'}: category must match parent category`);
  assert(series.seriesCode === expectedCode, `${category}: Series order/code must remain ${expectedCode}`);
  assert(typeof series.seriesName === 'string' && series.seriesName === `${expectedCode} Series`, `${expectedCode}: seriesName must be "${expectedCode} Series"`);
  assert(typeof series.alt === 'string', `${expectedCode}: alt must be a string`);
  assert(typeof series.description === 'string' && series.description.trim(), `${expectedCode}: description is required`);
  assert(['active', 'pending'].includes(series.status), `${expectedCode}: status must be active or pending`);
  assert(series.sourceReference?.document && series.sourceReference?.locator, `${expectedCode}: sourceReference is required`);
  assertImage(series.image, expectedCode);
  if (series.status === 'active') {
    assert(series.image, `${expectedCode}: active Series must have a confirmed image`);
    assert(series.alt.toLowerCase().includes(expectedCode.toLowerCase()), `${expectedCode}: active Series ALT must identify its code`);
  } else {
    assert(series.image === null, `${expectedCode}: pending Series must not expose an image`);
    assert(series.alt === '', `${expectedCode}: pending Series ALT must be empty`);
  }
}

export function validateProductCatalog(productCatalog) {
  assert(productCatalog && typeof productCatalog === 'object', 'catalog must be an object');
  assert(productCatalog.schemaVersion === '4.0.0', 'schemaVersion must be 4.0.0');
  assert(Array.isArray(productCatalog.categories), 'categories must be an array');
  assert(Array.isArray(productCatalog.retainedSourceSeries), 'retainedSourceSeries must be an array');
  assert(Array.isArray(productCatalog.unmappedSourceSeries), 'unmappedSourceSeries must be an array');
  assert(productCatalog.retainedSourceSeries.length === 0, 'retainedSourceSeries must be empty in V4.0');
  assert(productCatalog.unmappedSourceSeries.length === 0, 'unmappedSourceSeries must be empty in V4.0');

  const categories = new Set();
  for (const category of productCatalog.categories) {
    assert(PRODUCT_CATEGORIES.includes(category.category), `${category.category}: invalid top-level category`);
    assert(!categories.has(category.category), `${category.category}: duplicate category`);
    categories.add(category.category);
    assert(typeof category.slug === 'string' && category.slug.trim(), `${category.category}: missing slug`);
    assert(Array.isArray(category.images) && category.images.length === 0, `${category.category}: category images must remain empty`);
    assert(Array.isArray(category.products) && category.products.length === 0, `${category.category}: product model arrays must remain empty`);
    assert(Array.isArray(category.series), `${category.category}: series must be an array`);
    const expectedSeries = SERIES_BY_CATEGORY[category.category];
    assert(category.series.length === expectedSeries.length, `${category.category}: Series count must remain fixed`);
    category.series.forEach((series, index) => validateSeries(series, category.category, expectedSeries[index]));
    if (category.category === 'Custom') assert(category.series.length === 0, 'Custom cannot expose Series');
  }

  for (const requiredCategory of PRODUCT_CATEGORIES) assert(categories.has(requiredCategory), `missing fixed category ${requiredCategory}`);
  const activeCodes = productCatalog.categories.flatMap(category => category.series.filter(series => series.status === 'active').map(series => series.seriesCode));
  assert(JSON.stringify(activeCodes) === JSON.stringify(ACTIVE_SERIES), 'active Series order must remain fixed');
  const pendingCodes = productCatalog.categories.flatMap(category => category.series.filter(series => series.status === 'pending').map(series => series.seriesCode));
  assert(JSON.stringify(pendingCodes) === JSON.stringify(PENDING_SERIES), 'pending Series must remain UEL and UK');
}
