import { productCatalog, validateProductCatalog } from '../data/product-catalog.mjs';
import { PRODUCT_CATEGORIES, PRODUCT_MODEL_FIELDS, RETAINED_SOURCE_SERIES } from '../data/product-schema.mjs';

validateProductCatalog(productCatalog);

const modelCount = productCatalog.categories
  .flatMap(category => category.products)
  .length;
const sourceSeriesCount = productCatalog.retainedSourceSeries
  .filter(series => series.sourceReference).length;

console.log(`Validated V3.5 product data: ${PRODUCT_CATEGORIES.length} categories, ${RETAINED_SOURCE_SERIES.length} retained source series, ${modelCount} source-backed products, ${sourceSeriesCount} retained source records, ${productCatalog.unmappedSourceSeries.length} retained unmapped source series, ${PRODUCT_MODEL_FIELDS.length} required model fields.`);
