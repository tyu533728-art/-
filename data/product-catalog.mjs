import { MOUNTED_UNIT_ASSEMBLY_RULES, validateProductCatalog } from './product-schema.mjs';

const workbook = '外球面轴承座.xlsx';
const extractedWorkbook = 'assets/source-products/xl';
const importedWorkbook = '2026.8.16.xlsx';

function sourceReference(series, fields) {
  return {
    document: workbook,
    locator: `座子型号=${series}`,
    extractedWorkbook,
    fields
  };
}

function importedImageReference(locator) {
  return {
    document: importedWorkbook,
    locator,
    extractedWorkbook: null,
    fields: ['Unit Code', 'Photo']
  };
}

function workbookSeries(series, slug, images, fields, assembly = null) {
  return {
    series,
    slug,
    images,
    models: [],
    assembly,
    sourceReference: sourceReference(series, fields),
    publicationStatus: 'series-reference-only'
  };
}

const retainedSourceSeries = [
  workbookSeries('UCP', 'ucp', [{ src: '/assets/product-images/ucp-pillow-block-bearing.webp', alt: 'UCP bearing unit reference image', width: 512, height: 294 }], ['UC+P 立式座', '长方形底座，平底', '水平面落地安装', '2 孔', '输送机、风机、农机，最通用'], MOUNTED_UNIT_ASSEMBLY_RULES.UCP),
  workbookSeries('UCF', 'ucf', [{ src: '/assets/product-images/ucf-flange-bearing.webp', alt: 'UCF bearing unit reference image', width: 1003, height: 998 }], ['UC+F 方形法兰座', '正方形法兰盘', '竖直板面贴装', '4 孔', '机架侧板、设备墙板，受力大']),
  workbookSeries('UCFL', 'ucfl', [{ src: '/assets/product-images/ucfl-bearing.webp', alt: 'UCFL bearing unit reference image', width: 1295, height: 805 }, { src: '/assets/product-images/ucfl-reference-2-upright.webp', alt: 'UCFL bearing unit reference image', width: 1254, height: 1254 }], ['UC+FL 菱形法兰座', '菱形 / 橄榄形法兰', '竖直板面贴装', '2 孔', '空间狭小，安装位置受限']),
  workbookSeries('UCFC', 'ucfc', [{ src: '/assets/product-images/ucfc-round-flange-bearing.webp', alt: 'UCFC bearing unit reference image', width: 1082, height: 1097 }], ['UC+FC 圆形法兰座', '圆形带止口法兰', '端面定位安装', '4 孔', '设备端盖，需要定心定位']),
  workbookSeries('UCT', 'uct', [{ src: '/assets/product-images/uct-take-up-bearing.webp', alt: 'UCT bearing unit reference image', width: 985, height: 1302 }], ['UC+T 滑块座', '底座长条形滑槽', '水平面，可滑动调节', '2 孔', '皮带轮、链条张紧，调轴距']),
  workbookSeries('UKP', 'ukp', [], ['UK+P 锥孔紧定套立式座', '长方形平底底座，锥孔轴承，必须配紧定套 H', '水平面落地安装', '2 孔', '高速重载冲击，光轴无键槽，拆卸方便'], MOUNTED_UNIT_ASSEMBLY_RULES.UKP),
  workbookSeries('UELP', 'uelp', [], ['UEL+P 偏心套锁紧立式座', '长方形平底底座，带偏心锁套', '水平面落地安装', '2 孔', '农机、振动设备，抗轴向窜动防松'], MOUNTED_UNIT_ASSEMBLY_RULES.UELP)
];

export const productCatalog = {
  schemaVersion: '3.5.0',
  categories: [
    {
      category: 'Bearings',
      slug: 'bearings',
      images: [],
      displayItems: [
        { code: 'UC', professionalName: 'UC wide inner ring insert bearing, set-screw locking', imageStatus: 'confirmed', image: { src: '/assets/product-images/uc-product.webp', alt: 'UC wide inner ring insert bearing, set-screw locking', width: 223, height: 248 }, sourceReference: importedImageReference('2026.8.16!A6/C6') },
        { code: 'UEL', professionalName: 'UEL wide inner ring insert bearing, eccentric locking collar', imageStatus: 'missing-confirmed-image', image: null, sourceReference: importedImageReference('2026.8.16!A7/C7') },
        { code: 'UK', professionalName: 'UK insert bearing, tapered bore for adapter sleeve', imageStatus: 'pending-confirmation', image: { src: '/assets/product-images/uk-product.webp', alt: 'UK insert bearing, tapered bore for adapter sleeve', width: 204, height: 216 }, sourceReference: importedImageReference('2026.8.16!A8/C8') }
      ],
      products: [],
      publish: true
    },
    {
      category: 'Bearing Housing',
      slug: 'bearing-housing',
      images: [{ src: '/assets/bearing-housing.webp', alt: 'Bearing housing reference image', width: 1280, height: 956 }],
      displayItems: [
        { code: 'P', professionalName: 'P pillow block housing', imageStatus: 'confirmed', image: { src: '/assets/product-images/p-housing.webp', alt: 'P pillow block housing', width: 1000, height: 1000 }, sourceReference: sourceReference('UCP', ['参考实物']) },
        { code: 'PA', professionalName: 'PA tapped-base pillow block housing', imageStatus: 'confirmed', image: { src: '/assets/product-images/pa-housing.webp', alt: 'PA tapped-base pillow block housing', width: 1000, height: 1000 }, sourceReference: sourceReference('UCPA', ['参考实物']) },
        { code: 'F', professionalName: 'F four-bolt flanged housing', imageStatus: 'confirmed', image: { src: '/assets/product-images/f-housing.webp', alt: 'F four-bolt flanged housing', width: 1000, height: 1000 }, sourceReference: sourceReference('UCF', ['参考实物']) },
        { code: 'FL', professionalName: 'FL two-bolt flanged housing', imageStatus: 'confirmed', image: { src: '/assets/product-images/fl-housing.webp', alt: 'FL two-bolt flanged housing', width: 1000, height: 1000 }, sourceReference: sourceReference('UCFL', ['参考实物']) },
        { code: 'FC', professionalName: 'FC piloted round flanged housing', imageStatus: 'confirmed', image: { src: '/assets/product-images/fc-housing.webp', alt: 'FC piloted round flanged housing', width: 1000, height: 1000 }, sourceReference: sourceReference('UCFC', ['参考实物']) },
        { code: 'FS', professionalName: 'FS square flange with spigot housing', imageStatus: 'confirmed', image: { src: '/assets/product-images/fs-housing.webp', alt: 'FS square flange with spigot housing', width: 1000, height: 1000 }, sourceReference: sourceReference('UCFS', ['参考实物']) },
        { code: 'T', professionalName: 'T take-up housing', imageStatus: 'confirmed', image: { src: '/assets/product-images/t-housing.webp', alt: 'T take-up housing', width: 1000, height: 1000 }, sourceReference: sourceReference('UCT', ['参考实物']) }
      ],
      products: [],
      publish: true
    },
    { category: 'Custom', slug: 'custom', images: [], displayItems: [], products: [], publish: true, statement: 'Custom non-standard size products.' }
  ],
  retainedSourceSeries,
  unmappedSourceSeries: [
    { series: 'UCPA', sourceReference: sourceReference('UCPA', ['UC+PA 窄底座立式座', '短窄底座，底座螺纹孔（非通孔）', '水平面落地安装', '2 孔', '机架空间狭小，不能穿螺栓，外贸欧美小设备']), publicationStatus: 'mapping-required' },
    { series: 'UCFS', sourceReference: sourceReference('UCFS', ['UC+FS 重型凸台方形法兰座', '加厚正方形法兰盘，背面带圆形止口凸台', '竖直板面贴装，止口嵌入板孔定位', '4 孔', '搅拌机、破碎机，中东非洲出口重载设备']), publicationStatus: 'mapping-required' }
  ]
};

validateProductCatalog(productCatalog);

function toBuildProduct(model) {
  return {
    category: model.category,
    code: model.model,
    productName: model.productName,
    material: model.material,
    bearingType: model.bearingType,
    dimensions: model.dimensions,
    weight: model.weight,
    slug: model.model.toLowerCase(),
    images: model.image.items,
    technical: [...model.dimensions, ...model.technicalParameters].map(parameter => [parameter.name, parameter.value]),
    technicalParameters: model.technicalParameters,
    applications: model.applications,
    description: model.description,
    seoTitle: model.seoTitle,
    seoDescription: model.seoDescription,
    altText: model.altText,
    sourceRef: model.sourceReference
  };
}

export const categories = productCatalog.categories
  .filter(category => category.publish)
  .map(category => ({
    code: category.slug,
    title: category.category,
    images: category.images,
    displayItems: category.displayItems ?? [],
    products: category.products.map(toBuildProduct),
    statement: category.statement ?? null
  }));

export const customProducts = productCatalog.categories
  .find(category => category.category === 'Custom')
  .products;

export { validateProductCatalog };
