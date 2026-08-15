export const LOCALE_CODES = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];

export const PRODUCT_CATEGORIES = ['Bearings', 'Bearing Housing', 'Custom'];
export const RETAINED_SOURCE_SERIES = ['UCP', 'UCF', 'UCFL', 'UCFC', 'UCT', 'UKP', 'UELP'];

export const MODEL_TECHNICAL_FIELD_NAMES = [
  'Bearing Number',
  'Housing Type',
  'Material',
  'Bore Size',
  'Dimensions',
  'Weight',
  'Technical Parameters'
];

export const STANDARD_MATERIAL_NAMES = ['GCr15', 'Cast Iron', 'Ductile Iron', 'Stainless Steel'];

export const MOUNTED_UNIT_ASSEMBLY_RULES = Object.freeze({
  UCP: Object.freeze({ bearingSeries: 'UC', housingSeries: 'P', assemblyType: 'complete-set', interchangeGroup: 'P' }),
  UELP: Object.freeze({ bearingSeries: 'UEL', housingSeries: 'P', assemblyType: 'complete-set', interchangeGroup: 'P' }),
  UKP: Object.freeze({ bearingSeries: 'UK', housingSeries: 'P', assemblyType: 'complete-set', interchangeGroup: 'P' })
});

export const PRODUCT_MODEL_FIELDS = [
  'category',
  'series',
  'model',
  'productName',
  'material',
  'bearingType',
  'dimensions',
  'weight',
  'technicalParameters',
  'applications',
  'description',
  'image',
  'seoTitle',
  'seoDescription',
  'altText',
  'sourceReference'
];

const descriptiveFields = ['applications', 'description', 'seoTitle', 'seoDescription', 'altText'];

function assert(condition, message) {
  if (!condition) throw new Error(`Product catalog validation failed: ${message}`);
}

function assertDeferredText(record, field, model) {
  const value = record[field];
  assert(value === null || typeof value === 'string' || (value && typeof value === 'object' && !Array.isArray(value)), `${model}: ${field} must be source text, a locale record, or null until localization`);
  if (value && typeof value === 'object') {
    for (const [locale, text] of Object.entries(value)) {
      assert(LOCALE_CODES.includes(locale), `${model}: ${field}.${locale} is not an approved locale`);
      assert(typeof text === 'string' && text.trim(), `${model}: ${field}.${locale} must be non-empty text`);
    }
  }
}

function assertImageItems(items, label, identifier = null) {
  assert(Array.isArray(items), `${label}: images must be an array`);
  for (const item of items) {
    assert(typeof item.src === 'string' && /\.(?:webp|avif)$/i.test(item.src), `${label}: image source must be a WebP or AVIF path`);
    assert(typeof item.alt === 'string' && item.alt.trim(), `${label}: image ALT must be non-empty text`);
    assert(Number.isInteger(item.width) && item.width > 0, `${label}: image width must be a positive source pixel value`);
    assert(Number.isInteger(item.height) && item.height > 0, `${label}: image height must be a positive source pixel value`);
    if (identifier) assert(item.alt.toLowerCase().includes(identifier.toLowerCase()), `${label}: image ALT must identify ${identifier}`);
  }
}

function assertImage(image, model) {
  assert(image && typeof image === 'object' && !Array.isArray(image), `${model}: image must be an object`);
  assert(Array.isArray(image.items) && image.items.length, `${model}: image.items must contain approved product images`);
  assertImageItems(image.items, model, model);
}

function assertAssembly(series) {
  const expected = MOUNTED_UNIT_ASSEMBLY_RULES[series.series];
  assert(series.assembly === null || (series.assembly && typeof series.assembly === 'object' && !Array.isArray(series.assembly)), `${series.series}: assembly must be null or an object`);
  if (!expected) return;
  for (const [field, value] of Object.entries(expected)) {
    assert(series.assembly[field] === value, `${series.series}: assembly.${field} must remain ${value}`);
  }
}

function validateProduct(product, category, seenModels) {
  for (const field of PRODUCT_MODEL_FIELDS) {
    assert(Object.hasOwn(product, field), `${product.model ?? 'unknown model'}: missing required field ${field}`);
  }

  assert(product.category === category.category, `${product.model}: category must match its parent category`);
  assert(typeof product.model === 'string' && product.model.trim(), 'model must be a non-empty exact designation');
  assert(!seenModels.has(product.model), `${product.model}: duplicate model`);
  seenModels.add(product.model);

  for (const field of ['productName', 'material', 'bearingType', 'weight']) {
    assert(typeof product[field] === 'string' && product[field].trim(), `${product.model}: ${field} must be fixed source text`);
  }
  assert(Array.isArray(product.dimensions) && product.dimensions.length, `${product.model}: dimensions must contain source values`);
  assert(Array.isArray(product.technicalParameters) && product.technicalParameters.length, `${product.model}: technicalParameters must contain source values`);
  const technicalRows = [...product.dimensions, ...product.technicalParameters];
  for (const parameter of technicalRows) {
    assert(typeof parameter.name === 'string' && parameter.name.trim(), `${product.model}: every technical parameter needs a name`);
    assert(typeof parameter.value === 'string' && parameter.value.trim(), `${product.model}: every technical parameter needs an immutable string value`);
  }
  for (const fieldName of MODEL_TECHNICAL_FIELD_NAMES) {
    assert(technicalRows.some(parameter => parameter.name === fieldName), `${product.model}: missing source technical field ${fieldName}`);
  }

  for (const field of descriptiveFields) assertDeferredText(product, field, product.model);
  assertImage(product.image, product.model);
  assert(product.sourceReference && typeof product.sourceReference.document === 'string' && typeof product.sourceReference.locator === 'string', `${product.model}: sourceReference document and locator are required`);
}

function validateRetainedSeries(series) {
  assert(RETAINED_SOURCE_SERIES.includes(series.series), `${series.series}: invalid retained source series`);
  assert(typeof series.slug === 'string' && series.slug.trim(), `${series.series}: missing slug`);
  assertImageItems(series.images, series.series, series.series);
  assert(Array.isArray(series.models), `${series.series}: retained source models must be an array`);
  assertAssembly(series);
  assert(series.sourceReference?.document && series.sourceReference?.locator, `${series.series}: source reference is required`);
}

export function validateProductCatalog(productCatalog) {
  assert(productCatalog && typeof productCatalog === 'object', 'catalog must be an object');
  assert(productCatalog.schemaVersion === '3.5.0', 'schemaVersion must be 3.5.0');
  assert(Array.isArray(productCatalog.categories), 'categories must be an array');
  assert(Array.isArray(productCatalog.retainedSourceSeries), 'retainedSourceSeries must be an array');
  assert(Array.isArray(productCatalog.unmappedSourceSeries), 'unmappedSourceSeries must be an array');

  const categories = new Set();
  const seenModels = new Set();
  for (const category of productCatalog.categories) {
    assert(PRODUCT_CATEGORIES.includes(category.category), `${category.category}: invalid top-level category`);
    assert(!categories.has(category.category), `${category.category}: duplicate category`);
    categories.add(category.category);
    assert(typeof category.slug === 'string' && category.slug.trim(), `${category.category}: missing slug`);
    assertImageItems(category.images, category.category);
    assert(Array.isArray(category.products), `${category.category}: products must be an array`);
    for (const product of category.products) validateProduct(product, category, seenModels);
  }

  for (const requiredCategory of PRODUCT_CATEGORIES) assert(categories.has(requiredCategory), `missing fixed category ${requiredCategory}`);
  for (const series of productCatalog.retainedSourceSeries) validateRetainedSeries(series);

  for (const sourceSeries of productCatalog.unmappedSourceSeries) {
    assert(typeof sourceSeries.series === 'string' && sourceSeries.series.trim(), 'unmapped source series needs the original exact code');
    assert(sourceSeries.sourceReference?.document && sourceSeries.sourceReference?.locator, `${sourceSeries.series}: unmapped source series requires traceability`);
  }
}
