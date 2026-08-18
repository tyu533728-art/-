import { ACTIVE_SERIES, PRODUCT_CATEGORIES, SERIES_BY_CATEGORY, validateProductCatalog } from './product-schema.mjs';

const image = (src, width, height) => ({ src, width, height });

const confirmedImages = Object.freeze({
  UC: image('/assets/product-images/uc-product.webp', 223, 248),
  P: image('/assets/product-images/p-housing.webp', 1000, 1000),
  PA: image('/assets/product-images/pa-housing.webp', 1000, 1000),
  F: image('/assets/product-images/f-housing.webp', 1000, 1000),
  FL: image('/assets/product-images/fl-housing.webp', 1000, 1000),
  FC: image('/assets/product-images/fc-housing.webp', 1000, 1000),
  FS: image('/assets/product-images/fs-housing.webp', 1000, 1000),
  T: image('/assets/product-images/t-housing.webp', 1000, 1000)
});

const englishAlts = Object.freeze({
  UC: 'UC wide inner ring insert bearing, set-screw locking',
  UEL: 'UEL wide inner ring insert bearing, eccentric locking collar',
  UK: 'UK insert bearing, tapered bore for adapter sleeve',
  P: 'P pillow block housing',
  PA: 'PA tapped-base pillow block housing',
  F: 'F four-bolt flanged housing',
  FL: 'FL two-bolt flanged housing',
  FC: 'FC piloted round flanged housing',
  FS: 'FS square flange with spigot housing',
  T: 'T take-up housing'
});

export function userConfirmedSeries(category, seriesCode, seriesImage = null) {
  const isActive = Boolean(seriesImage);
  return {
    category,
    seriesCode,
    seriesName: `${seriesCode} Series`,
    image: seriesImage,
    alt: isActive ? englishAlts[seriesCode] : '',
    description: isActive ? 'Confirmed series reference image. No model-level data is published.' : 'Series retained for future publication after a confirmed image is supplied.',
    status: isActive ? 'active' : 'pending',
    sourceReference: {
      document: 'V4.0 user-confirmed structure',
      locator: `Series=${seriesCode}`,
      fields: ['Series Name', ...(isActive ? ['Series Image'] : [])]
    }
  };
}

const pillowBlockBearingUnits = PRODUCT_CATEGORIES[0];
const bearingHousingSeries = PRODUCT_CATEGORIES[1];

export const productCatalog = {
  schemaVersion: '4.0.0',
  categories: [
    {
      category: pillowBlockBearingUnits,
      slug: 'pillow-block-bearing-units',
      images: [],
      series: [
        userConfirmedSeries(pillowBlockBearingUnits, 'UC', confirmedImages.UC),
        userConfirmedSeries(pillowBlockBearingUnits, 'UEL'),
        userConfirmedSeries(pillowBlockBearingUnits, 'UK')
      ],
      products: [],
      publish: true
    },
    {
      category: bearingHousingSeries,
      slug: 'bearing-housing-series',
      images: [],
      series: SERIES_BY_CATEGORY[bearingHousingSeries].map(seriesCode => userConfirmedSeries(bearingHousingSeries, seriesCode, confirmedImages[seriesCode])),
      products: [],
      publish: true
    },
    {
      category: 'Custom',
      slug: 'custom',
      images: [],
      series: [],
      products: [],
      publish: true,
      statement: 'Custom non-standard size products.'
    }
  ],
  retainedSourceSeries: [],
  unmappedSourceSeries: []
};

validateProductCatalog(productCatalog);

export const categories = productCatalog.categories
  .filter(category => category.publish)
  .map(category => ({
    code: category.slug,
    title: category.category,
    images: category.images,
    series: category.series,
    products: [],
    statement: category.statement ?? null
  }));

export const customProducts = [];
export { ACTIVE_SERIES, validateProductCatalog };
