import { ACTIVE_SERIES, PENDING_SERIES, PRODUCT_CATEGORIES, SERIES_BY_CATEGORY } from '../data/product-schema.mjs';
import { productCatalog, validateProductCatalog } from '../data/product-catalog.mjs';

validateProductCatalog(productCatalog);

const activeCount = productCatalog.categories.flatMap(category => category.series).filter(series => series.status === 'active').length;
const pendingCount = productCatalog.categories.flatMap(category => category.series).filter(series => series.status === 'pending').length;
const modelCount = productCatalog.categories.reduce((total, category) => total + category.products.length, 0);

if (PRODUCT_CATEGORIES.length !== 3 || ACTIVE_SERIES.length !== 18 || PENDING_SERIES.length !== 3 || modelCount !== 0) {
  throw new Error('V4.0 product catalog counts do not match the frozen structure.');
}
for (const category of productCatalog.categories) {
  if (category.series.map(series => series.seriesCode).join(',') !== SERIES_BY_CATEGORY[category.category].join(',')) {
    throw new Error(`${category.category}: Series order does not match V4.0.`);
  }
}

console.log(`Validated V4.0 product data: ${PRODUCT_CATEGORIES.length} categories, ${activeCount} active Series, ${pendingCount} pending Series, ${modelCount} model pages.`);
