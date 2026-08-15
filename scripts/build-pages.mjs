import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categories, productCatalog, validateProductCatalog } from '../data/product-catalog.mjs';
import { LOCALE_CODES } from '../data/product-schema.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const domain = 'https://www.example.com';
const localeCodes = [...LOCALE_CODES];
validateProductCatalog(productCatalog);

const site = {
  brand: '耐特',
  companyName: 'Company name pending confirmation',
  email: 'Pending confirmation',
  phone: 'Pending confirmation',
  whatsapp: 'Pending confirmation',
  address: 'Pending confirmation',
  website: 'Pending confirmation'
};

const locales = {
  en: { name: 'English', navHome: 'Home', navProducts: 'Products', navAbout: 'About Us', homeTitle: 'Bearing & Bearing Housing Manufacturer', homeLead: 'Product information for bearings, bearing units and bearing housings.', homeIntro: 'A focused industrial product catalogue built around verified product information.', factory: 'Factory and manufacturing information will be published after confirmation.', productsHeading: 'Bearings, bearing housing and custom products.', productsLead: 'Browse bearings, bearing housing and custom product categories.', categoryLead: 'Products in this category.', productLead: 'Product information.', aboutLead: 'Company, manufacturing and quality information.', aboutCompany: 'Company introduction will be published after confirmation.', aboutManufacturing: 'Manufacturing capability will be published after confirmation.', aboutQuality: 'Quality control information will be published after confirmation.', footer: 'Public company contact information.', pending: 'Pending confirmation', category: 'Product category', series: 'Series', models: 'Models', referenceImage: 'Reference product image', sourceNote: 'Images show product appearance only. They are not a source of technical parameters.' },
  es: { name: 'Español', navHome: 'Inicio', navProducts: 'Productos', navAbout: 'Nosotros', homeTitle: 'Fabricante de rodamientos y soportes de rodamientos', homeLead: 'Informacion de productos para rodamientos, unidades de rodamiento y soportes de rodamientos.', homeIntro: 'Catalogo industrial centrado en informacion de producto verificada.', factory: 'La informacion de fabrica y fabricacion se publicara tras la confirmacion.', productsHeading: 'Rodamientos, soportes de rodamientos y productos personalizados.', productsLead: 'Explore las categorías de rodamientos, soportes de rodamientos y productos personalizados.', categoryLead: 'Productos de esta categoría.', productLead: 'Información del producto.', aboutLead: 'Informacion de empresa, fabricacion y calidad.', aboutCompany: 'La presentacion de la empresa se publicara tras la confirmacion.', aboutManufacturing: 'La capacidad de fabricacion se publicara tras la confirmacion.', aboutQuality: 'La informacion de control de calidad se publicara tras la confirmacion.', footer: 'Informacion publica de contacto de la empresa.', pending: 'Pendiente de confirmacion', category: 'Categoria de producto', series: 'Serie', models: 'Modelos', referenceImage: 'Imagen de referencia del producto', sourceNote: 'Las imagenes solo muestran la apariencia del producto. No son una fuente de parametros tecnicos.' },
  de: { name: 'Deutsch', navHome: 'Startseite', navProducts: 'Produkte', navAbout: 'Uber uns', homeTitle: 'Hersteller von Lagern und Lagergehausen', homeLead: 'Produktinformationen zu Lagern, Lagereinheiten und Lagergehausen.', homeIntro: 'Ein fokussierter Industriekatalog mit verifizierten Produktinformationen.', factory: 'Informationen zu Werk und Fertigung werden nach Bestatigung veroffentlicht.', productsHeading: 'Lager, Lagergehäuse und kundenspezifische Produkte.', productsLead: 'Entdecken Sie die Kategorien Lager, Lagergehäuse und kundenspezifische Produkte.', categoryLead: 'Produkte in dieser Kategorie.', productLead: 'Produktinformationen.', aboutLead: 'Informationen zu Unternehmen, Fertigung und Qualitat.', aboutCompany: 'Die Unternehmensvorstellung wird nach Bestatigung veroffentlicht.', aboutManufacturing: 'Fertigungskapazitaten werden nach Bestatigung veroffentlicht.', aboutQuality: 'Informationen zur Qualitatskontrolle werden nach Bestatigung veroffentlicht.', footer: 'Offentliche Kontaktinformationen des Unternehmens.', pending: 'Bestatigung ausstehend', category: 'Produktkategorie', series: 'Serie', models: 'Modelle', referenceImage: 'Produktreferenzbild', sourceNote: 'Bilder zeigen nur das Erscheinungsbild. Sie sind keine Quelle fur technische Parameter.' },
  fr: { name: 'Français', navHome: 'Accueil', navProducts: 'Produits', navAbout: 'A propos', homeTitle: 'Fabricant de roulements et de paliers', homeLead: 'Informations produits pour roulements, unites de roulement et paliers.', homeIntro: 'Catalogue industriel centre sur des informations produit verifiees.', factory: 'Les informations sur l usine et la fabrication seront publiees apres confirmation.', productsHeading: 'Roulements, paliers et produits sur mesure.', productsLead: 'Découvrez les catégories de roulements, de paliers et de produits sur mesure.', categoryLead: 'Produits de cette catégorie.', productLead: 'Informations sur le produit.', aboutLead: 'Informations sur l entreprise, la fabrication et la qualite.', aboutCompany: 'La presentation de l entreprise sera publiee apres confirmation.', aboutManufacturing: 'La capacite de fabrication sera publiee apres confirmation.', aboutQuality: 'Les informations de controle qualite seront publiees apres confirmation.', footer: 'Coordonnees publiques de l entreprise.', pending: 'En attente de confirmation', category: 'Categorie de produit', series: 'Serie', models: 'Modeles', referenceImage: 'Image de reference du produit', sourceNote: 'Les images montrent uniquement l apparence du produit. Elles ne sont pas une source de parametres techniques.' },
  pt: { name: 'Português', navHome: 'Inicio', navProducts: 'Produtos', navAbout: 'Sobre nos', homeTitle: 'Fabricante de rolamentos e mancais', homeLead: 'Informacoes de produtos para rolamentos, unidades de rolamento e mancais.', homeIntro: 'Catalogo industrial focado em informacoes verificadas de produtos.', factory: 'As informacoes de fabrica e fabricacao serao publicadas apos confirmacao.', productsHeading: 'Rolamentos, mancais e produtos personalizados.', productsLead: 'Explore as categorias de rolamentos, mancais e produtos personalizados.', categoryLead: 'Produtos desta categoria.', productLead: 'Informações do produto.', aboutLead: 'Informacoes sobre empresa, fabricacao e qualidade.', aboutCompany: 'A apresentacao da empresa sera publicada apos confirmacao.', aboutManufacturing: 'A capacidade de fabricacao sera publicada apos confirmacao.', aboutQuality: 'As informacoes de controle de qualidade serao publicadas apos confirmacao.', footer: 'Informacoes publicas de contato da empresa.', pending: 'Pendente de confirmacao', category: 'Categoria de produto', series: 'Serie', models: 'Modelos', referenceImage: 'Imagem de referencia do produto', sourceNote: 'As imagens mostram apenas a aparencia do produto. Elas nao sao fonte de parametros tecnicos.' },
  ar: { name: 'العربية', navHome: 'الرئيسية', navProducts: 'المنتجات', navAbout: 'من نحن', homeTitle: 'مصنع المحامل وبيوت المحامل', homeLead: 'معلومات المنتجات للمحامل ووحدات المحامل وبيوت المحامل.', homeIntro: 'كتالوج صناعي مركز على معلومات منتجات موثقة.', factory: 'ستنشر معلومات المصنع والتصنيع بعد التأكيد.', productsHeading: 'المحامل وبيوت المحامل والمنتجات المخصصة.', productsLead: 'تصفح فئات المحامل وبيوت المحامل والمنتجات المخصصة.', categoryLead: 'منتجات هذه الفئة.', productLead: 'معلومات المنتج.', aboutLead: 'معلومات الشركة والتصنيع والجودة.', aboutCompany: 'سينشر تعريف الشركة بعد التأكيد.', aboutManufacturing: 'ستنشر قدرة التصنيع بعد التأكيد.', aboutQuality: 'ستنشر معلومات مراقبة الجودة بعد التأكيد.', footer: 'معلومات الاتصال العامة بالشركة.', pending: 'بانتظار التأكيد', category: 'فئة المنتج', series: 'السلسلة', models: 'الطرازات', referenceImage: 'صورة مرجعية للمنتج', sourceNote: 'تعرض الصور مظهر المنتج فقط وليست مصدرا للمعلمات الفنية.' },
  tr: { name: 'Türkçe', navHome: 'Ana sayfa', navProducts: 'Urunler', navAbout: 'Hakkimizda', homeTitle: 'Rulman ve rulman yatagi ureticisi', homeLead: 'Rulmanlar, rulman unite leri ve rulman yataklari icin urun bilgileri.', homeIntro: 'Dogrulanmis urun bilgilerine odaklanan endustriyel katalog.', factory: 'Fabrika ve uretim bilgileri onaydan sonra yayinlanacaktir.', productsHeading: 'Rulmanlar, rulman yatakları ve özel ürünler.', productsLead: 'Rulman, rulman yatağı ve özel ürün kategorilerini inceleyin.', categoryLead: 'Bu kategorideki ürünler.', productLead: 'Ürün bilgileri.', aboutLead: 'Sirket, uretim ve kalite bilgileri.', aboutCompany: 'Sirket tanitimi onaydan sonra yayinlanacaktir.', aboutManufacturing: 'Uretim kapasitesi onaydan sonra yayinlanacaktir.', aboutQuality: 'Kalite kontrol bilgileri onaydan sonra yayinlanacaktir.', footer: 'Sirketin acik iletisim bilgileri.', pending: 'Onay bekleniyor', category: 'Urun kategorisi', series: 'Seri', models: 'Modeller', referenceImage: 'Referans urun gorseli', sourceNote: 'Gorseller yalnizca urun gorunumunu gosterir; teknik parametre kaynagi degildir.' },
  ru: { name: 'Русский', navHome: 'Главная', navProducts: 'Продукция', navAbout: 'О нас', homeTitle: 'Производитель подшипников и корпусов подшипников', homeLead: 'Информация о подшипниках, подшипниковых узлах и корпусах подшипников.', homeIntro: 'Промышленный каталог с подтвержденной информацией о продукции.', factory: 'Информация о заводе и производстве будет опубликована после подтверждения.', productsHeading: 'Подшипники, корпуса подшипников и изделия на заказ.', productsLead: 'Просмотрите категории подшипников, корпусов подшипников и изделий на заказ.', categoryLead: 'Продукция этой категории.', productLead: 'Информация о продукте.', aboutLead: 'Информация о компании, производстве и качестве.', aboutCompany: 'Информация о компании будет опубликована после подтверждения.', aboutManufacturing: 'Производственные возможности будут опубликованы после подтверждения.', aboutQuality: 'Информация о контроле качества будет опубликована после подтверждения.', footer: 'Открытая контактная информация компании.', pending: 'Ожидает подтверждения', category: 'Категория продукции', series: 'Серия', models: 'Модели', referenceImage: 'Справочное изображение продукции', sourceNote: 'Изображения показывают только внешний вид продукции и не являются источником технических параметров.' },
  it: { name: 'Italiano', navHome: 'Home', navProducts: 'Prodotti', navAbout: 'Chi siamo', homeTitle: 'Produttore di cuscinetti e supporti per cuscinetti', homeLead: 'Informazioni sui prodotti per cuscinetti, unita di supporto e supporti per cuscinetti.', homeIntro: 'Catalogo industriale basato su informazioni di prodotto verificate.', factory: 'Le informazioni su fabbrica e produzione saranno pubblicate dopo la conferma.', productsHeading: 'Cuscinetti, supporti per cuscinetti e prodotti personalizzati.', productsLead: 'Consulta le categorie di cuscinetti, supporti per cuscinetti e prodotti personalizzati.', categoryLead: 'Prodotti di questa categoria.', productLead: 'Informazioni sul prodotto.', aboutLead: 'Informazioni su azienda, produzione e qualita.', aboutCompany: 'La presentazione aziendale sara pubblicata dopo la conferma.', aboutManufacturing: 'La capacita produttiva sara pubblicata dopo la conferma.', aboutQuality: 'Le informazioni sul controllo qualita saranno pubblicate dopo la conferma.', footer: 'Informazioni di contatto pubbliche dell azienda.', pending: 'In attesa di conferma', category: 'Categoria di prodotto', series: 'Serie', models: 'Modelli', referenceImage: 'Immagine di riferimento del prodotto', sourceNote: 'Le immagini mostrano solo l aspetto del prodotto. Non sono una fonte di parametri tecnici.' },
  vi: { name: 'Tiếng Việt', navHome: 'Trang chu', navProducts: 'San pham', navAbout: 'Gioi thieu', homeTitle: 'Nha san xuat vong bi va go do vong bi', homeLead: 'Thong tin san pham ve vong bi, cum vong bi va go do vong bi.', homeIntro: 'Danh muc cong nghiep tap trung vao thong tin san pham da duoc xac minh.', factory: 'Thong tin nha may va san xuat se duoc cong bo sau khi xac nhan.', productsHeading: 'Vòng bi, gối đỡ vòng bi và sản phẩm tùy chỉnh.', productsLead: 'Khám phá các danh mục vòng bi, gối đỡ vòng bi và sản phẩm tùy chỉnh.', categoryLead: 'Sản phẩm trong danh mục này.', productLead: 'Thông tin sản phẩm.', aboutLead: 'Thong tin doanh nghiep, san xuat va chat luong.', aboutCompany: 'Gioi thieu doanh nghiep se duoc cong bo sau khi xac nhan.', aboutManufacturing: 'Nang luc san xuat se duoc cong bo sau khi xac nhan.', aboutQuality: 'Thong tin kiem soat chat luong se duoc cong bo sau khi xac nhan.', footer: 'Thong tin lien he cong khai cua doanh nghiep.', pending: 'Cho xac nhan', category: 'Danh muc san pham', series: 'Dong san pham', models: 'Mau', referenceImage: 'Hinh anh tham khao san pham', sourceNote: 'Hinh anh chi the hien ngoai quan san pham, khong phai nguon thong so ky thuat.' },
  id: { name: 'Bahasa Indonesia', navHome: 'Beranda', navProducts: 'Produk', navAbout: 'Tentang kami', homeTitle: 'Produsen bantalan dan rumah bantalan', homeLead: 'Informasi produk untuk bantalan, unit bantalan, dan rumah bantalan.', homeIntro: 'Katalog industri yang berfokus pada informasi produk terverifikasi.', factory: 'Informasi pabrik dan manufaktur akan diterbitkan setelah konfirmasi.', productsHeading: 'Bantalan, rumah bantalan, dan produk khusus.', productsLead: 'Jelajahi kategori bantalan, rumah bantalan, dan produk khusus.', categoryLead: 'Produk dalam kategori ini.', productLead: 'Informasi produk.', aboutLead: 'Informasi perusahaan, manufaktur, dan mutu.', aboutCompany: 'Profil perusahaan akan diterbitkan setelah konfirmasi.', aboutManufacturing: 'Kemampuan manufaktur akan diterbitkan setelah konfirmasi.', aboutQuality: 'Informasi pengendalian mutu akan diterbitkan setelah konfirmasi.', footer: 'Informasi kontak publik perusahaan.', pending: 'Menunggu konfirmasi', category: 'Kategori produk', series: 'Seri', models: 'Model', referenceImage: 'Gambar referensi produk', sourceNote: 'Gambar hanya menunjukkan tampilan produk dan bukan sumber parameter teknis.' },
  ja: { name: '日本語', navHome: 'ホーム', navProducts: '製品', navAbout: '会社案内', homeTitle: '軸受及び軸受ハウジングメーカー', homeLead: '軸受、軸受ユニット、軸受ハウジングの製品情報。', homeIntro: '確認済みの製品情報に基づく産業用カタログです。', factory: '工場及び製造情報は確認後に公開します。', productsHeading: '軸受、軸受ハウジング、カスタム製品。', productsLead: '軸受、軸受ハウジング、カスタム製品のカテゴリーをご覧ください。', categoryLead: 'このカテゴリーの製品。', productLead: '製品情報。', aboutLead: '会社、製造、品質に関する情報。', aboutCompany: '会社紹介は確認後に公開します。', aboutManufacturing: '製造能力は確認後に公開します。', aboutQuality: '品質管理情報は確認後に公開します。', footer: '会社の公開連絡先情報。', pending: '確認待ち', category: '製品分類', series: 'シリーズ', models: 'モデル', referenceImage: '製品参考画像', sourceNote: '画像は製品外観のみを示し、技術パラメータの根拠ではありません。' },
  ko: { name: '한국어', navHome: '홈', navProducts: '제품', navAbout: '회사 소개', homeTitle: '베어링 및 베어링 하우징 제조업체', homeLead: '베어링, 베어링 유닛 및 베어링 하우징 제품 정보.', homeIntro: '검증된 제품 정보를 중심으로 한 산업용 카탈로그입니다.', factory: '공장 및 제조 정보는 확인 후 공개됩니다.', productsHeading: '베어링, 베어링 하우징 및 맞춤형 제품.', productsLead: '베어링, 베어링 하우징 및 맞춤형 제품 카테고리를 확인하십시오.', categoryLead: '이 카테고리의 제품.', productLead: '제품 정보.', aboutLead: '회사, 제조 및 품질 정보.', aboutCompany: '회사 소개는 확인 후 공개됩니다.', aboutManufacturing: '제조 역량은 확인 후 공개됩니다.', aboutQuality: '품질 관리 정보는 확인 후 공개됩니다.', footer: '회사의 공개 연락처 정보.', pending: '확인 대기', category: '제품 분류', series: '시리즈', models: '모델', referenceImage: '제품 참고 이미지', sourceNote: '이미지는 제품 외관만 보여 주며 기술 파라미터의 근거가 아닙니다.' }
};

const localeKeys = Object.keys(locales);
if (localeKeys.length !== localeCodes.length || localeCodes.some(code => !localeKeys.includes(code))) {
  throw new Error('Language catalogue must define exactly the fixed 13 locale codes.');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function localizedText(value, locale, fallback = '') {
  if (typeof value === 'string' && value.trim()) return value;
  if (value && typeof value === 'object') {
    const text = value[locale] ?? value.en;
    if (typeof text === 'string' && text.trim()) return text;
  }
  return fallback;
}

function productSeoTitle(locale, category, product) {
  return localizedText(product.seoTitle, locale, `${product.code} | ${category.title} | ${site.brand}`);
}

function productSeoDescription(locale, product) {
  const text = locales[locale];
  return localizedText(product.seoDescription, locale, `${product.code}: ${text.productLead}`);
}

function productDescription(locale, product) {
  return localizedText(product.description, locale, locales[locale].productLead);
}

function productImageAlt(locale, product, image) {
  const alt = localizedText(product.altText, locale, image.alt || `${product.code} product image`);
  return alt.toLowerCase().includes(product.code.toLowerCase()) ? alt : `${product.code} - ${alt}`;
}

function publicPath(locale, path = '') {
  return `/${locale}${path ? `/${path.replace(/^\/+|\/+$/g, '')}` : ''}/`;
}

function categoryPath(locale, category) {
  return publicPath(locale, `products/${category.code}`);
}

function productPath(locale, category, product) {
  return publicPath(locale, `products/${category.code}/${product.slug}`);
}

function absoluteUrl(path) {
  return `${domain}${path}`;
}

function languageLinks(path) {
  return `${localeCodes.map(code => `<link rel="alternate" hreflang="${code}" href="${absoluteUrl(publicPath(code, path))}">`).join('')}<link rel="alternate" hreflang="x-default" href="${absoluteUrl(publicPath('en', path))}">`;
}

function organizationSchema(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.brand,
    url: absoluteUrl(publicPath(locale)),
    description: locales[locale].homeLead
  };
}

function head({ locale, path, title, description, schema = organizationSchema(locale), noindex = false }) {
  const canonical = absoluteUrl(publicPath(locale, path));
  const direction = locale === 'ar' ? ' dir="rtl"' : '';
  return `<!doctype html>
<html lang="${locale}"${direction}>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}">
  <link rel="canonical" href="${canonical}">
  ${languageLinks(path)}
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/styles.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>`;
}

function languageSwitcher(locale, path) {
  return `<details class="language-switcher"><summary aria-label="Language">${locale.toUpperCase()}</summary><div class="language-switcher__menu">${localeCodes.map(code => `<a href="${publicPath(code, path)}" lang="${code}"${code === locale ? ' aria-current="true"' : ''}>${escapeHtml(locales[code].name)}</a>`).join('')}</div></details>`;
}

function nav(locale, path, active) {
  const text = locales[locale];
  return `<header class="site-header"><div class="site-shell header-inner"><a class="brand" href="${publicPath(locale)}" aria-label="${site.brand} home"><span class="brand-mark" aria-hidden="true"></span><span>${site.brand}<small>BEARING &amp; BEARING HOUSING</small></span></a><nav class="site-nav" aria-label="Primary navigation"><a href="${publicPath(locale)}"${active === 'home' ? ' aria-current="page"' : ''}>${escapeHtml(text.navHome)}</a><a href="${publicPath(locale, 'products')}"${active === 'products' ? ' aria-current="page"' : ''}>${escapeHtml(text.navProducts)}</a><a href="${publicPath(locale, 'about-us')}"${active === 'about' ? ' aria-current="page"' : ''}>${escapeHtml(text.navAbout)}</a></nav>${languageSwitcher(locale, path)}</div></header>`;
}

function confirmedContactValue(value) {
  return typeof value === 'string' && value.trim() && value !== 'Pending confirmation';
}

function contactHref(value, kind) {
  if (!confirmedContactValue(value)) return null;
  if (kind === 'email') return `mailto:${value.trim()}`;
  if (kind === 'phone') {
    const phone = value.replace(/[^\d+().\-\s]/g, '').replace(/[().\-\s]/g, '');
    return phone ? `tel:${phone}` : null;
  }
  if (kind === 'whatsapp') {
    const phone = value.replace(/\D/g, '');
    return phone ? `https://wa.me/${phone}` : null;
  }
  if (kind === 'website' && /^https?:\/\//i.test(value.trim())) return value.trim();
  return null;
}

function contactValue(value, locale, kind = 'text') {
  const display = value === 'Pending confirmation' ? locales[locale].pending : value;
  const href = contactHref(value, kind);
  if (!href) return `<span class="contact-value" dir="ltr">${escapeHtml(display)}</span>`;
  const external = kind === 'whatsapp' ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="contact-value" dir="ltr" href="${escapeHtml(href)}"${external}>${escapeHtml(display)}</a>`;
}

function footer(locale) {
  const text = locales[locale];
  return `<footer class="site-footer"><div class="site-shell footer-inner"><div><a class="brand brand--footer" href="${publicPath(locale)}"><span class="brand-mark" aria-hidden="true"></span><span>${site.brand}<small>BEARING &amp; BEARING HOUSING</small></span></a><p>${escapeHtml(text.footer)}</p></div><dl class="footer-contact"><div><dt>Email</dt><dd>${contactValue(site.email, locale, 'email')}</dd></div><div><dt>Phone</dt><dd>${contactValue(site.phone, locale, 'phone')}</dd></div><div><dt>WhatsApp</dt><dd>${contactValue(site.whatsapp, locale, 'whatsapp')}</dd></div><div><dt>Address</dt><dd>${contactValue(site.address, locale)}</dd></div><div><dt>Website</dt><dd>${contactValue(site.website, locale, 'website')}</dd></div></dl></div><div class="site-shell footer-bottom">© 2026 ${site.brand}. All rights reserved.</div></footer>`;
}

function page({ locale, path = '', active, title, description, content, schema }) {
  return `${head({ locale, path, title, description, schema })}
<body data-page="${active}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  ${nav(locale, path, active)}
  <main id="main-content">${content}</main>
  ${footer(locale)}
</body>
</html>`;
}

function lazyImage(image, className = '') {
  return `<img${className ? ` class="${className}"` : ''} src="${image.src}" alt="${escapeHtml(image.alt)}" width="${image.width}" height="${image.height}" loading="lazy">`;
}

function heroImage() {
  return `<img class="hero-product" src="/assets/bearing-housing.webp" alt="Bearing housing reference image" width="1280" height="956" loading="eager" fetchpriority="high">`;
}

function homeContent(locale) {
  const text = locales[locale];
  const productCards = categories.map(category => `<a class="category-card" href="${categoryPath(locale, category)}">${category.images[0] ? lazyImage(category.images[0]) : '<span class="category-card__blank" aria-hidden="true">BEARINGS</span>'}<span class="category-card__label">${escapeHtml(text.category)}</span><h2>${escapeHtml(category.title)}</h2><span class="category-card__link">${escapeHtml(text.navProducts)}</span></a>`).join('');
  return `<section class="home-hero"><div class="site-shell home-hero__grid"><div class="home-hero__copy"><p class="eyebrow">Industrial product catalogue</p><h1>${escapeHtml(text.homeTitle)}</h1><p>${escapeHtml(text.homeLead)}</p><a class="text-link" href="${publicPath(locale, 'products')}">${escapeHtml(text.navProducts)}</a></div><div class="home-hero__media">${heroImage()}<img class="hero-factory" src="/assets/cnc-milling.webp" alt="Industrial machining reference image" width="1280" height="853" loading="lazy"></div></div></section><section class="section"><div class="site-shell split-intro"><p class="eyebrow">${escapeHtml(text.navAbout)}</p><div><h2>Bearings, bearing units and bearing housings.</h2><p>${escapeHtml(text.homeIntro)}</p></div></div></section><section class="section section--soft"><div class="site-shell"><div class="section-heading"><p class="eyebrow">${escapeHtml(text.navProducts)}</p><h2>Product categories.</h2></div><div class="category-grid">${productCards}</div></div></section><section class="section"><div class="site-shell factory-layout"><div><p class="eyebrow">Manufacturing</p><h2>Industrial manufacturing environment.</h2><p>${escapeHtml(text.factory)}</p></div><div class="factory-strip"><img src="/assets/factory-floor.webp" alt="Factory floor reference image" width="1280" height="508" loading="lazy"><img src="/assets/cnc-turning.webp" alt="CNC turning reference image" width="1280" height="960" loading="lazy"></div></div></section>`;
}

function productIndex(locale) {
  return `<nav class="product-index" aria-label="Product categories"><div class="site-shell">${categories.map(category => `<a href="${categoryPath(locale, category)}">${escapeHtml(category.title)}</a>`).join('')}</div></nav>`;
}

function categoryCard(locale, category) {
  const text = locales[locale];
  return `<a class="catalogue-card" href="${categoryPath(locale, category)}">${category.images[0] ? lazyImage(category.images[0]) : '<span class="catalogue-card__blank" aria-hidden="true">DATA</span>'}<div><p class="eyebrow">${escapeHtml(text.category)}</p><h2>${escapeHtml(category.title)}</h2></div></a>`;
}

function productsContent(locale) {
  const text = locales[locale];
  return `<section class="page-intro"><div class="site-shell"><p class="eyebrow">${escapeHtml(text.navProducts)}</p><h1>${escapeHtml(text.navProducts)}</h1></div></section>${productIndex(locale)}<section class="section"><div class="site-shell"><div class="section-heading"><p class="eyebrow">${escapeHtml(text.category)}</p><h2>${escapeHtml(text.productsHeading)}</h2></div><div class="catalogue-grid">${categories.map(category => categoryCard(locale, category)).join('')}</div></div></section>`;
}

function categorySeoDescription(locale, category) {
  return `${category.title}. ${locales[locale].categoryLead}`;
}

function categoryContent(locale, category) {
  const text = locales[locale];
  const productCards = category.products.map(product => `<a class="catalogue-card" href="${productPath(locale, category, product)}" dir="ltr">${product.images[0] ? lazyImage(product.images[0]) : ''}<h2>${escapeHtml(product.productName)}</h2></a>`).join('');
  const content = category.products.length ? `<section class="section"><div class="site-shell"><div class="catalogue-grid">${productCards}</div></div></section>` : '';
  const statement = category.code === 'custom' ? '<p>Custom non-standard size products.</p>' : '';
  return `<section class="page-intro page-intro--compact"><div class="site-shell"><p class="eyebrow">${escapeHtml(text.category)}</p><h1>${escapeHtml(category.title)}</h1>${statement}</div></section>${productIndex(locale)}${content}`;
}

function productBreadcrumb(locale, category, product) {
  const text = locales[locale];
  return `<nav class="product-breadcrumb" aria-label="Product breadcrumb"><a href="${publicPath(locale, 'products')}">${escapeHtml(text.navProducts)}</a><span aria-hidden="true">/</span><a href="${categoryPath(locale, category)}">${escapeHtml(category.title)}</a><span aria-hidden="true">/</span><span aria-current="page" dir="ltr">${escapeHtml(product.code)}</span></nav>`;
}

function productSchema(locale, category, product) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.code,
    sku: product.code,
    model: product.code,
    category: category.title,
    brand: { '@type': 'Brand', name: site.brand },
    url: absoluteUrl(productPath(locale, category, product)),
    image: product.images.map(image => absoluteUrl(image.src)),
    additionalProperty: product.technical.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
    description: productDescription(locale, product)
  };
  return schema;
}

function productContent(locale, category, product) {
  const text = locales[locale];
  const gallery = `<div class="series-gallery">${product.images.map(image => `<figure>${lazyImage({ ...image, alt: productImageAlt(locale, product, image) })}<figcaption>${escapeHtml(text.referenceImage)}</figcaption></figure>`).join('')}</div>`;
  const technicalRows = product.technical.map(([name, value]) => `<tr><th scope="row">${escapeHtml(name)}</th><td>${escapeHtml(value)}</td></tr>`).join('');
  const description = productDescription(locale, product);
  return `<section class="page-intro page-intro--compact"><div class="site-shell">${productBreadcrumb(locale, category, product)}<p class="eyebrow">${escapeHtml(category.title)}</p><h1 dir="ltr">${escapeHtml(product.code)}</h1><p>${escapeHtml(description)}</p></div></section>${productIndex(locale)}<section class="section"><div class="site-shell series-layout">${gallery}<div><p class="eyebrow">${escapeHtml(text.models)}</p><h2 dir="ltr">${escapeHtml(product.code)}</h2><p>${escapeHtml(description)}</p><table class="parameter-table" dir="ltr"><tbody>${technicalRows}</tbody></table></div></div></section>`;
}

function aboutContent(locale) {
  const text = locales[locale];
  return `<section class="page-intro"><div class="site-shell"><p class="eyebrow">${escapeHtml(text.navAbout)}</p><h1>${escapeHtml(text.navAbout)}</h1><p>${escapeHtml(text.aboutLead)}</p></div></section><section class="section"><div class="site-shell about-grid"><article><p class="eyebrow">Company</p><h2>Company information.</h2><p>${escapeHtml(text.aboutCompany)}</p></article><article><p class="eyebrow">Factory</p><h2>Factory presentation.</h2><p>${escapeHtml(text.factory)}</p></article><article><p class="eyebrow">Manufacturing</p><h2>Manufacturing capability.</h2><p>${escapeHtml(text.aboutManufacturing)}</p></article><article><p class="eyebrow">Quality</p><h2>Quality control.</h2><p>${escapeHtml(text.aboutQuality)}</p></article></div></section><section class="section section--soft"><div class="site-shell public-info"><p class="eyebrow">Public information</p><h2>Company contact information.</h2><dl><div><dt>Company Name</dt><dd>${contactValue(site.companyName, locale)}</dd></div><div><dt>Address</dt><dd>${contactValue(site.address, locale)}</dd></div><div><dt>Email</dt><dd>${contactValue(site.email, locale, 'email')}</dd></div><div><dt>Phone</dt><dd>${contactValue(site.phone, locale, 'phone')}</dd></div><div><dt>WhatsApp</dt><dd>${contactValue(site.whatsapp, locale, 'whatsapp')}</dd></div><div><dt>Website</dt><dd>${contactValue(site.website, locale, 'website')}</dd></div></dl></div></section>`;
}

async function writePage(locale, path, html, routes) {
  const route = publicPath(locale, path);
  const target = join(root, locale, ...path.split('/').filter(Boolean), 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, 'utf8');
  routes.push(route);
}

async function buildLocale(locale, routes) {
  const text = locales[locale];
  await writePage(locale, '', page({ locale, active: 'home', title: `${text.homeTitle} | ${site.brand}`, description: text.homeLead, content: homeContent(locale) }), routes);
  await buildProductsLocale(locale, routes);
  await writePage(locale, 'about-us', page({ locale, path: 'about-us', active: 'about', title: `${text.navAbout} | ${site.brand}`, description: text.aboutLead, content: aboutContent(locale) }), routes);
}

async function buildProductsLocale(locale, routes) {
  const text = locales[locale];
  await writePage(locale, 'products', page({ locale, path: 'products', active: 'products', title: `${text.navProducts} | ${site.brand}`, description: text.productsLead, content: productsContent(locale), schema: { ...organizationSchema(locale), description: text.productsLead } }), routes);
  for (const category of categories) {
    const categoryPath = `products/${category.code}`;
    const description = categorySeoDescription(locale, category);
    await writePage(locale, categoryPath, page({ locale, path: categoryPath, active: 'products', title: `${category.title} | ${site.brand}`, description, content: categoryContent(locale, category), schema: { ...organizationSchema(locale), description } }), routes);
    for (const product of category.products) {
      if (!product.sourceRef || !product.images?.length || !product.technical?.length) {
        throw new Error(`${product.code}: product pages require sourceRef, images and technical data.`);
      }
      const productRoute = `${categoryPath}/${product.slug}`;
      await writePage(locale, productRoute, page({ locale, path: productRoute, active: 'products', title: productSeoTitle(locale, category, product), description: productSeoDescription(locale, product), content: productContent(locale, category, product), schema: productSchema(locale, category, product) }), routes);
    }
  }
}

function rootRedirect() {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, follow"><link rel="canonical" href="${absoluteUrl('/en/')}"><meta http-equiv="refresh" content="0; url=/en/"><title>${site.brand}</title></head><body><a href="/en/">English</a></body></html>`;
}

const productsOnly = process.argv.includes('--products-only');
const routes = [];
if (productsOnly) {
  for (const locale of localeCodes) {
    await rm(join(root, locale, 'products'), { recursive: true, force: true });
    await buildProductsLocale(locale, routes);
  }
  console.log(`Generated PRODUCTS-only V3.5 pages: ${routes.length} pages across ${localeCodes.length} languages.`);
} else {
  await rm(join(root, 'contact.html'), { force: true });
  for (const locale of localeCodes) {
    await rm(join(root, locale), { recursive: true, force: true });
    await buildLocale(locale, routes);
  }

  await writeFile(join(root, 'index.html'), rootRedirect(), 'utf8');
  await rm(join(root, 'products.html'), { force: true });
  await writeFile(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`, 'utf8');
  const sitemapUrls = routes.map(route => `  <url><loc>${absoluteUrl(route)}</loc></url>`).join('\n');
  await writeFile(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`, 'utf8');

  console.log(`Generated V3.5 static site: ${routes.length} localized pages across ${localeCodes.length} languages.`);
}
