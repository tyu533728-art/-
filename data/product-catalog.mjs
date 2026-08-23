import { ACTIVE_SERIES, PRODUCT_CATEGORIES, SERIES_BY_CATEGORY, validateProductCatalog } from './product-schema.mjs';

const image = (src, width, height) => ({ src, width, height });

const confirmedImages = Object.freeze({
  UCT: image('/assets/product-images/uct-product.webp', 800, 800),
  UCPA: image('/assets/product-images/ucpa-unit.webp', 800, 800),
  UCF: image('/assets/product-images/ucf-unit.webp', 800, 800),
  UCFC: image('/assets/product-images/ucfc-unit.webp', 800, 800),
  UCFL: image('/assets/product-images/ucfl-unit.webp', 800, 800),
  UCP: image('/assets/product-images/ucp-unit.webp', 800, 800),
  UCPH: image('/assets/product-images/ucph-unit.webp', 800, 800),
  UCFA: image('/assets/product-images/ucfa-unit.webp', 800, 800),
  UCFB: image('/assets/product-images/ucfb-unit.webp', 800, 800),
  PBU: image('/assets/product-images/pbu-unit.webp', 800, 800),
  MBU: image('/assets/product-images/mbu-unit.webp', 800, 800),
  UC: image('/assets/product-images/uc-product.webp', 800, 800),
  FB: image('/assets/product-images/housing-1.webp', 900, 1000),
  FL: image('/assets/product-images/housing-2.webp', 900, 1000),
  P: image('/assets/product-images/housing-3.webp', 900, 1000),
  T: image('/assets/product-images/housing-4.webp', 900, 900),
  F: image('/assets/product-images/housing-5.webp', 900, 1000),
  PBH: image('/assets/product-images/housing-6.webp', 900, 1000),
  FC: image('/assets/product-images/housing-7.webp', 900, 1000),
  FU: image('/assets/product-images/housing-8.webp', 900, 1000),
  PH: image('/assets/product-images/housing-9.webp', 900, 1000),
  PA: image('/assets/product-images/housing-10.webp', 900, 1000),
  PAS: image('/assets/product-images/housing-11.webp', 900, 1000)
});

const englishAlts = Object.freeze({
  UCT: 'UCT wide inner ring insert bearing, set-screw locking',
  UEL: 'UEL wide inner ring insert bearing, eccentric locking collar',
  UK: 'UK insert bearing, tapered bore for adapter sleeve',
  UCPA: 'UCPA tapped-base pillow block unit with insert bearing',
  UCF: 'UCF four-bolt flanged unit with insert bearing',
  UCFC: 'UCFC piloted round flanged unit with insert bearing',
  UCFL: 'UCFL two-bolt flanged unit with insert bearing',
  UCP: 'UCP pillow block unit with insert bearing',
  UCPH: 'UCPH pillow block unit with long shaft and insert bearing',
  UCFA: 'UCFA flanged unit with insert bearing',
  UCFB: 'UCFB flanged unit with insert bearing',
  PBU: 'PBU pillow block bearing unit with insert bearing',
  MBU: 'MBU mounted bearing unit with insert bearing',
  UC: 'UC wide inner ring insert bearing, set-screw locking',
  FB: 'FB pillow block housing',
  FL: 'FL two-bolt flanged housing',
  P: 'P pillow block housing',
  T: 'T take-up housing',
  F: 'F four-bolt flanged housing',
  PBH: 'PBH pillow block housing',
  FC: 'FC bearing housing',
  FU: 'FU bearing housing',
  PH: 'PH bearing housing',
  PA: 'PA bearing housing',
  PAS: 'PAS bearing housing',
  FS: 'FS square flange with spigot housing'
});

export function userConfirmedSeries(category, seriesCode, seriesImage = null, displayName = null) {
  const isActive = Boolean(seriesImage);
  return {
    category,
    seriesCode,
    seriesName: `${seriesCode} Series`,
    displayName: displayName ?? seriesCode,
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
        userConfirmedSeries(pillowBlockBearingUnits, 'UCT', confirmedImages.UCT),
        userConfirmedSeries(pillowBlockBearingUnits, 'UEL'),
        userConfirmedSeries(pillowBlockBearingUnits, 'UK'),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCP', confirmedImages.UCP),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCF', confirmedImages.UCF),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCFC', confirmedImages.UCFC),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCFL', confirmedImages.UCFL),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCPA', confirmedImages.UCPA),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCPH', confirmedImages.UCPH),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCFA', confirmedImages.UCFA),
        userConfirmedSeries(pillowBlockBearingUnits, 'UCFB', confirmedImages.UCFB),
        userConfirmedSeries(pillowBlockBearingUnits, 'PBU', confirmedImages.PBU, 'Mounted Bearing Unit'),
        userConfirmedSeries(pillowBlockBearingUnits, 'MBU', confirmedImages.MBU, 'Pillow Block Bearing Unit'),
        userConfirmedSeries(pillowBlockBearingUnits, 'UC', confirmedImages.UC)
      ],
      products: [],
      publish: true
    },
    {
      category: bearingHousingSeries,
      slug: 'bearing-housing-series',
      images: [],
      series: SERIES_BY_CATEGORY[bearingHousingSeries].map(seriesCode => userConfirmedSeries(bearingHousingSeries, seriesCode, confirmedImages[seriesCode], seriesCode === 'PBH' ? 'Pillow Block Housing' : seriesCode === 'PAS' ? 'Pillow Block Bearing Housing PA Series' : null)),
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
