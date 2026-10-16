// Interface labels that are not page content: the two hero buttons and the aria-labels that a
// screen reader announces.
//
// These used to be English string literals inside the render functions, which meant every locale
// showed an English "Get Quote" button on its home page and every locale announced English
// navigation names to assistive technology. They live here so one locale cannot half-translate
// them and so the text can be reviewed in one place.
//
// `whatsapp` stays "WhatsApp" in most locales because it is a brand name; only the locales that
// conventionally inflect it carry a translated form.

export const UI_LABELS = Object.freeze({
  en: {
    quote: 'Get Quote',
    whatsapp: 'WhatsApp Us',
    language: 'Language',
    primaryNav: 'Primary navigation',
    productCategories: 'Product categories',
    productBreadcrumb: 'Product breadcrumb',
    breadcrumb: 'Breadcrumb'
  },
  es: {
    quote: 'Solicitar presupuesto',
    whatsapp: 'WhatsApp',
    language: 'Idioma',
    primaryNav: 'Navegación principal',
    productCategories: 'Categorías de producto',
    productBreadcrumb: 'Ruta de navegación del producto',
    breadcrumb: 'Ruta de navegación'
  },
  de: {
    quote: 'Angebot anfordern',
    whatsapp: 'WhatsApp',
    language: 'Sprache',
    primaryNav: 'Hauptnavigation',
    productCategories: 'Produktkategorien',
    productBreadcrumb: 'Produkt-Navigationspfad',
    breadcrumb: 'Navigationspfad'
  },
  fr: {
    quote: 'Demander un devis',
    whatsapp: 'WhatsApp',
    language: 'Langue',
    primaryNav: 'Navigation principale',
    productCategories: 'Catégories de produits',
    productBreadcrumb: 'Fil d’Ariane du produit',
    breadcrumb: 'Fil d’Ariane'
  },
  pt: {
    quote: 'Pedir orçamento',
    whatsapp: 'WhatsApp',
    language: 'Idioma',
    primaryNav: 'Navegação principal',
    productCategories: 'Categorias de produto',
    productBreadcrumb: 'Trilha do produto',
    breadcrumb: 'Trilha de navegação'
  },
  ar: {
    quote: 'اطلب عرض سعر',
    whatsapp: 'واتساب',
    language: 'اللغة',
    primaryNav: 'التنقل الرئيسي',
    productCategories: 'فئات المنتجات',
    productBreadcrumb: 'مسار المنتج',
    breadcrumb: 'مسار التنقل'
  },
  tr: {
    quote: 'Teklif alın',
    whatsapp: 'WhatsApp',
    language: 'Dil',
    primaryNav: 'Ana gezinme',
    productCategories: 'Ürün kategorileri',
    productBreadcrumb: 'Ürün gezinme yolu',
    breadcrumb: 'Gezinme yolu'
  },
  ru: {
    quote: 'Запросить цену',
    whatsapp: 'WhatsApp',
    language: 'Язык',
    primaryNav: 'Основная навигация',
    productCategories: 'Категории продукции',
    productBreadcrumb: 'Путь к товару',
    breadcrumb: 'Навигационная цепочка'
  },
  it: {
    quote: 'Richiedi preventivo',
    whatsapp: 'WhatsApp',
    language: 'Lingua',
    primaryNav: 'Navigazione principale',
    productCategories: 'Categorie di prodotto',
    productBreadcrumb: 'Percorso del prodotto',
    breadcrumb: 'Percorso di navigazione'
  },
  vi: {
    quote: 'Yêu cầu báo giá',
    whatsapp: 'WhatsApp',
    language: 'Ngôn ngữ',
    primaryNav: 'Điều hướng chính',
    productCategories: 'Danh mục sản phẩm',
    productBreadcrumb: 'Đường dẫn sản phẩm',
    breadcrumb: 'Đường dẫn điều hướng'
  },
  id: {
    quote: 'Minta penawaran',
    whatsapp: 'WhatsApp',
    language: 'Bahasa',
    primaryNav: 'Navigasi utama',
    productCategories: 'Kategori produk',
    productBreadcrumb: 'Jalur produk',
    breadcrumb: 'Jalur navigasi'
  },
  ja: {
    quote: '見積もりを依頼',
    whatsapp: 'WhatsApp',
    language: '言語',
    primaryNav: 'メインナビゲーション',
    productCategories: '製品カテゴリ',
    productBreadcrumb: '製品のパンくず',
    breadcrumb: 'パンくず'
  },
  ko: {
    quote: '견적 요청',
    whatsapp: 'WhatsApp',
    language: '언어',
    primaryNav: '주 내비게이션',
    productCategories: '제품 카테고리',
    productBreadcrumb: '제품 경로',
    breadcrumb: '경로'
  }
});

const SHAPE = Object.keys(UI_LABELS.en);
const LOCALES = Object.keys(UI_LABELS);

const failures = [];
for (const locale of LOCALES) {
  const entry = UI_LABELS[locale];
  const keys = Object.keys(entry);
  const missing = SHAPE.filter(key => typeof entry[key] !== 'string' || !entry[key].trim());
  if (missing.length) failures.push(`${locale}: missing or empty ${missing.join(', ')}`);
  const extra = keys.filter(key => !SHAPE.includes(key));
  if (extra.length) failures.push(`${locale}: unexpected key(s) ${extra.join(', ')}`);
}

if (failures.length) {
  throw new Error(`Interface labels are incomplete or malformed:\n  ${failures.join('\n  ')}`);
}

/** Localized interface labels, falling back to English for an unknown locale. */
export function uiLabels(locale) {
  return UI_LABELS[locale] ?? UI_LABELS.en;
}
