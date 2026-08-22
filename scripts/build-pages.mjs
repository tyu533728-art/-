import { cp, copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categories, productCatalog, validateProductCatalog } from '../data/product-catalog.mjs';
import { LOCALE_CODES } from '../data/product-schema.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const domain = 'https://www.natermanufacture.com';
const localeCodes = [...LOCALE_CODES];
validateProductCatalog(productCatalog);

const site = {
  brand: 'Naite',
  email: '729865273lq@gmail.com',
  whatsapp: '+8617600510039',
  facebook: 'Sixty-seven Liu',
  manufacturingPartner: 'Guantao County Naite Bearing Co., Ltd.',
  manufacturingFacility: 'No. 005, Malan Village, Nanxu Township, Guantao County, Handan City, Hebei Province, P.R.China'
};

const locales = {
  en: { name: 'English', navHome: 'Home', navProducts: 'Products', navAbout: 'About Us', homeTitle: 'Industrial Bearings & Bearing Housings', homeLead: 'Product information for industrial bearings, bearing housings, and custom products.', homeIntro: 'A focused industrial product catalogue built around verified product information.', factory: 'Supported by a long-term manufacturing partner with industrial production capabilities.', productsHeading: 'Bearings, bearing housings and custom products.', productsLead: 'Browse bearings, bearing housings and custom product categories.', categoryLead: 'Products in this category.', productLead: 'Product information.', aboutLead: 'Company, manufacturing and quality information.', aboutCompany: 'Company introduction will be published after confirmation.', aboutManufacturing: 'Manufacturing capability will be published after confirmation.', aboutQuality: 'Quality control information will be published after confirmation.', footer: 'Public company contact information.', pending: 'Pending confirmation', category: 'Product category', series: 'Series', models: 'Models', referenceImage: 'Reference product image', sourceNote: 'Images show product appearance only. They are not a source of technical parameters.', homeEyebrow: 'Industrial Product Catalogue', homeCategoriesHeading: 'Product categories.', homeManufacturingEyebrow: 'Manufacturing Partner', homeManufacturingHeading: 'Manufacturing Partner', aboutCompanyLabel: 'Company', aboutCompanyHeading: 'Company information.', aboutFactoryLabel: 'Factory', aboutFactoryHeading: 'Factory presentation.', aboutManufacturingLabel: 'Manufacturing', aboutManufacturingHeading: 'Manufacturing capability.', aboutQualityLabel: 'Quality', aboutQualityHeading: 'Quality control.', aboutPublicInfoLabel: 'Public information', aboutPublicInfoHeading: 'Company contact information.' },
  es: { name: 'Español', navHome: 'Inicio', navProducts: 'Productos', navAbout: 'Nosotros', homeTitle: 'Fabricante de rodamientos y soportes de rodamientos', homeLead: 'Información de productos para rodamientos, soportes de rodamientos y productos personalizados.', homeIntro: 'Catálogo industrial centrado en información de producto verificada.', factory: 'La información de fábrica y fabricación se publicará tras la confirmación.', productsHeading: 'Rodamientos, soportes de rodamientos y productos personalizados.', productsLead: 'Explore las categorías de rodamientos, soportes de rodamientos y productos personalizados.', categoryLead: 'Productos de esta categoría.', productLead: 'Información del producto.', aboutLead: 'Información de empresa, fabricación y calidad.', aboutCompany: 'La presentación de la empresa se publicará tras la confirmación.', aboutManufacturing: 'La capacidad de fabricación se publicará tras la confirmación.', aboutQuality: 'La información de control de calidad se publicará tras la confirmación.', footer: 'Información pública de contacto de la empresa.', pending: 'Pendiente de confirmación', category: 'Categoría de producto', series: 'Serie', models: 'Modelos', referenceImage: 'Imagen de referencia del producto', sourceNote: 'Las imágenes solo muestran la apariencia del producto. No son una fuente de parámetros técnicos.', homeEyebrow: 'Catálogo industrial', homeCategoriesHeading: 'Categorías de productos.', homeManufacturingEyebrow: 'Fabricación', homeManufacturingHeading: 'Entorno de fabricación industrial.', aboutCompanyLabel: 'Empresa', aboutCompanyHeading: 'Información de la empresa.', aboutFactoryLabel: 'Fábrica', aboutFactoryHeading: 'Presentación de la fábrica.', aboutManufacturingLabel: 'Fabricación', aboutManufacturingHeading: 'Capacidad de fabricación.', aboutQualityLabel: 'Calidad', aboutQualityHeading: 'Control de calidad.', aboutPublicInfoLabel: 'Información pública', aboutPublicInfoHeading: 'Información de contacto de la empresa.' },
  de: { name: 'Deutsch', navHome: 'Startseite', navProducts: 'Produkte', navAbout: 'Über uns', homeTitle: 'Hersteller von Lagern und Lagergehäusen', homeLead: 'Produktinformationen zu Lagern, Lagergehäusen und kundenspezifischen Produkten.', homeIntro: 'Ein fokussierter Industriekatalog mit verifizierten Produktinformationen.', factory: 'Informationen zu Werk und Fertigung werden nach Bestätigung veröffentlicht.', productsHeading: 'Lager, Lagergehäuse und kundenspezifische Produkte.', productsLead: 'Entdecken Sie die Kategorien Lager, Lagergehäuse und kundenspezifische Produkte.', categoryLead: 'Produkte in dieser Kategorie.', productLead: 'Produktinformationen.', aboutLead: 'Informationen zu Unternehmen, Fertigung und Qualität.', aboutCompany: 'Die Unternehmensvorstellung wird nach Bestätigung veröffentlicht.', aboutManufacturing: 'Fertigungskapazitäten werden nach Bestätigung veröffentlicht.', aboutQuality: 'Informationen zur Qualitätskontrolle werden nach Bestätigung veröffentlicht.', footer: 'Öffentliche Kontaktinformationen des Unternehmens.', pending: 'Bestätigung ausstehend', category: 'Produktkategorie', series: 'Serie', models: 'Modelle', referenceImage: 'Produktreferenzbild', sourceNote: 'Bilder zeigen nur das Erscheinungsbild. Sie sind keine Quelle für technische Parameter.', homeEyebrow: 'Industrieller Produktkatalog', homeCategoriesHeading: 'Produktkategorien.', homeManufacturingEyebrow: 'Fertigung', homeManufacturingHeading: 'Industrielle Fertigungsumgebung.', aboutCompanyLabel: 'Unternehmen', aboutCompanyHeading: 'Unternehmensinformationen.', aboutFactoryLabel: 'Werk', aboutFactoryHeading: 'Werkspräsentation.', aboutManufacturingLabel: 'Fertigung', aboutManufacturingHeading: 'Fertigungskapazität.', aboutQualityLabel: 'Qualität', aboutQualityHeading: 'Qualitätskontrolle.', aboutPublicInfoLabel: 'Öffentliche Informationen', aboutPublicInfoHeading: 'Öffentliche Kontaktinformationen des Unternehmens.' },
  fr: { name: 'Français', navHome: 'Accueil', navProducts: 'Produits', navAbout: 'À propos', homeTitle: 'Fabricant de roulements et de paliers', homeLead: 'Informations produits sur les roulements, les paliers et les produits sur mesure.', homeIntro: 'Catalogue industriel centré sur des informations produit vérifiées.', factory: 'Les informations sur l\'usine et la fabrication seront publiées après confirmation.', productsHeading: 'Roulements, paliers et produits sur mesure.', productsLead: 'Découvrez les catégories de roulements, de paliers et de produits sur mesure.', categoryLead: 'Produits de cette catégorie.', productLead: 'Informations sur le produit.', aboutLead: 'Informations sur l\'entreprise, la fabrication et la qualité.', aboutCompany: 'La présentation de l\'entreprise sera publiée après confirmation.', aboutManufacturing: 'La capacité de fabrication sera publiée après confirmation.', aboutQuality: 'Les informations de contrôle qualité seront publiées après confirmation.', footer: 'Coordonnées publiques de l\'entreprise.', pending: 'En attente de confirmation', category: 'Catégorie de produit', series: 'Série', models: 'Modèles', referenceImage: 'Image de référence du produit', sourceNote: 'Les images montrent uniquement l\'apparence du produit. Elles ne sont pas une source de paramètres techniques.', homeEyebrow: 'Catalogue industriel', homeCategoriesHeading: 'Catégories de produits.', homeManufacturingEyebrow: 'Fabrication', homeManufacturingHeading: 'Environnement industriel de fabrication.', aboutCompanyLabel: 'Entreprise', aboutCompanyHeading: 'Informations sur l\'entreprise.', aboutFactoryLabel: 'Usine', aboutFactoryHeading: 'Présentation de l\'usine.', aboutManufacturingLabel: 'Fabrication', aboutManufacturingHeading: 'Capacité de fabrication.', aboutQualityLabel: 'Qualité', aboutQualityHeading: 'Contrôle qualité.', aboutPublicInfoLabel: 'Informations publiques', aboutPublicInfoHeading: 'Coordonnées de l\'entreprise.' },
  pt: { name: 'Português', navHome: 'Início', navProducts: 'Produtos', navAbout: 'Sobre nós', homeTitle: 'Fabricante de rolamentos e mancais', homeLead: 'Informações de produtos para rolamentos, mancais e produtos personalizados.', homeIntro: 'Catálogo industrial focado em informações verificadas de produtos.', factory: 'As informações de fábrica e fabricação serão publicadas após confirmação.', productsHeading: 'Rolamentos, mancais e produtos personalizados.', productsLead: 'Explore as categorias de rolamentos, mancais e produtos personalizados.', categoryLead: 'Produtos desta categoria.', productLead: 'Informações do produto.', aboutLead: 'Informações sobre empresa, fabricação e qualidade.', aboutCompany: 'A apresentação da empresa será publicada após confirmação.', aboutManufacturing: 'A capacidade de fabricação será publicada após confirmação.', aboutQuality: 'As informações de controle de qualidade serão publicadas após confirmação.', footer: 'Informações públicas de contato da empresa.', pending: 'Pendente de confirmação', category: 'Categoria de produto', series: 'Série', models: 'Modelos', referenceImage: 'Imagem de referência do produto', sourceNote: 'As imagens mostram apenas a aparência do produto. Elas não são fonte de parâmetros técnicos.', homeEyebrow: 'Catálogo industrial', homeCategoriesHeading: 'Categorias de produtos.', homeManufacturingEyebrow: 'Fabricação', homeManufacturingHeading: 'Ambiente industrial de fabricação.', aboutCompanyLabel: 'Empresa', aboutCompanyHeading: 'Informações da empresa.', aboutFactoryLabel: 'Fábrica', aboutFactoryHeading: 'Apresentação da fábrica.', aboutManufacturingLabel: 'Fabricação', aboutManufacturingHeading: 'Capacidade de fabricação.', aboutQualityLabel: 'Qualidade', aboutQualityHeading: 'Controle de qualidade.', aboutPublicInfoLabel: 'Informações públicas', aboutPublicInfoHeading: 'Informações de contato da empresa.' },
  ar: { name: 'العربية', navHome: 'الرئيسية', navProducts: 'المنتجات', navAbout: 'من نحن', homeTitle: 'مصنع المحامل وبيوت المحامل', homeLead: 'معلومات المنتجات للمحامل وبيوت المحامل والمنتجات المخصصة.', homeIntro: 'كتالوج صناعي مركز على معلومات منتجات موثقة.', factory: 'ستنشر معلومات المصنع والتصنيع بعد التأكيد.', productsHeading: 'المحامل وبيوت المحامل والمنتجات المخصصة.', productsLead: 'تصفح فئات المحامل وبيوت المحامل والمنتجات المخصصة.', categoryLead: 'منتجات هذه الفئة.', productLead: 'معلومات المنتج.', aboutLead: 'معلومات الشركة والتصنيع والجودة.', aboutCompany: 'سينشر تعريف الشركة بعد التأكيد.', aboutManufacturing: 'ستنشر قدرة التصنيع بعد التأكيد.', aboutQuality: 'ستنشر معلومات مراقبة الجودة بعد التأكيد.', footer: 'معلومات الاتصال العامة بالشركة.', pending: 'بانتظار التأكيد', category: 'فئة المنتج', series: 'السلسلة', models: 'الطرازات', referenceImage: 'صورة مرجعية للمنتج', sourceNote: 'تعرض الصور مظهر المنتج فقط وليست مصدرا للمعلمات الفنية.', homeEyebrow: 'كتالوج المنتجات الصناعية', homeCategoriesHeading: 'فئات المنتجات.', homeManufacturingEyebrow: 'التصنيع', homeManufacturingHeading: 'بيئة التصنيع الصناعي.', aboutCompanyLabel: 'الشركة', aboutCompanyHeading: 'معلومات الشركة.', aboutFactoryLabel: 'المصنع', aboutFactoryHeading: 'عرض المصنع.', aboutManufacturingLabel: 'التصنيع', aboutManufacturingHeading: 'القدرة التصنيعية.', aboutQualityLabel: 'الجودة', aboutQualityHeading: 'مراقبة الجودة.', aboutPublicInfoLabel: 'المعلومات العامة', aboutPublicInfoHeading: 'معلومات الاتصال بالشركة.' },
  tr: { name: 'Türkçe', navHome: 'Ana sayfa', navProducts: 'Ürünler', navAbout: 'Hakkımızda', homeTitle: 'Rulman ve rulman yatağı üreticisi', homeLead: 'Rulmanlar, rulman yatakları ve özel ürünler hakkında ürün bilgileri.', homeIntro: 'Doğrulanmış ürün bilgilerine odaklanan endüstriyel katalog.', factory: 'Fabrika ve üretim bilgileri onaydan sonra yayınlanacaktır.', productsHeading: 'Rulmanlar, rulman yatakları ve özel ürünler.', productsLead: 'Rulman, rulman yatakları ve özel ürün kategorilerini inceleyin.', categoryLead: 'Bu kategorideki ürünler.', productLead: 'Ürün bilgileri.', aboutLead: 'Şirket, üretim ve kalite bilgileri.', aboutCompany: 'Şirket tanıtımı onaydan sonra yayınlanacaktır.', aboutManufacturing: 'Üretim kapasitesi onaydan sonra yayınlanacaktır.', aboutQuality: 'Kalite kontrol bilgileri onaydan sonra yayınlanacaktır.', footer: 'Şirketin açık iletişim bilgileri.', pending: 'Onay bekleniyor', category: 'Ürün kategorisi', series: 'Seri', models: 'Modeller', referenceImage: 'Referans ürün görseli', sourceNote: 'Görseller yalnızca ürün görünümünü gösterir; teknik parametre kaynağı değildir.', homeEyebrow: 'Endüstriyel ürün kataloğu', homeCategoriesHeading: 'Ürün kategorileri.', homeManufacturingEyebrow: 'Üretim', homeManufacturingHeading: 'Endüstriyel üretim ortamı.', aboutCompanyLabel: 'Şirket', aboutCompanyHeading: 'Şirket bilgileri.', aboutFactoryLabel: 'Fabrika', aboutFactoryHeading: 'Fabrika tanıtımı.', aboutManufacturingLabel: 'Üretim', aboutManufacturingHeading: 'Üretim kapasitesi.', aboutQualityLabel: 'Kalite', aboutQualityHeading: 'Kalite kontrolü.', aboutPublicInfoLabel: 'Kamuya açık bilgiler', aboutPublicInfoHeading: 'Şirket iletişim bilgileri.' },
  ru: { name: 'Русский', navHome: 'Главная', navProducts: 'Продукция', navAbout: 'О нас', homeTitle: 'Производитель подшипников и корпусов подшипников', homeLead: 'Информация о подшипниках, корпусах подшипников и изделиях на заказ.', homeIntro: 'Промышленный каталог с подтвержденной информацией о продукции.', factory: 'Информация о заводе и производстве будет опубликована после подтверждения.', productsHeading: 'Подшипники, корпуса подшипников и изделия на заказ.', productsLead: 'Просмотрите категории подшипников, корпусов подшипников и изделий на заказ.', categoryLead: 'Продукция этой категории.', productLead: 'Информация о продукте.', aboutLead: 'Информация о компании, производстве и качестве.', aboutCompany: 'Информация о компании будет опубликована после подтверждения.', aboutManufacturing: 'Производственные возможности будут опубликованы после подтверждения.', aboutQuality: 'Информация о контроле качества будет опубликована после подтверждения.', footer: 'Открытая контактная информация компании.', pending: 'Ожидает подтверждения', category: 'Категория продукции', series: 'Серия', models: 'Модели', referenceImage: 'Справочное изображение продукции', sourceNote: 'Изображения показывают только внешний вид продукции и не являются источником технических параметров.', homeEyebrow: 'Промышленный каталог продукции', homeCategoriesHeading: 'Категории продукции.', homeManufacturingEyebrow: 'Производство', homeManufacturingHeading: 'Промышленная производственная среда.', aboutCompanyLabel: 'Компания', aboutCompanyHeading: 'Информация о компании.', aboutFactoryLabel: 'Завод', aboutFactoryHeading: 'Представление завода.', aboutManufacturingLabel: 'Производство', aboutManufacturingHeading: 'Производственные возможности.', aboutQualityLabel: 'Качество', aboutQualityHeading: 'Контроль качества.', aboutPublicInfoLabel: 'Общедоступная информация', aboutPublicInfoHeading: 'Контактная информация компании.' },
  it: { name: 'Italiano', navHome: 'Home', navProducts: 'Prodotti', navAbout: 'Chi siamo', homeTitle: 'Produttore di cuscinetti e supporti per cuscinetti', homeLead: 'Informazioni sui prodotti per cuscinetti, supporti per cuscinetti e prodotti personalizzati.', homeIntro: 'Catalogo industriale basato su informazioni di prodotto verificate.', factory: 'Le informazioni su fabbrica e produzione saranno pubblicate dopo la conferma.', productsHeading: 'Cuscinetti, supporti per cuscinetti e prodotti personalizzati.', productsLead: 'Consulta le categorie di cuscinetti, supporti per cuscinetti e prodotti personalizzati.', categoryLead: 'Prodotti di questa categoria.', productLead: 'Informazioni sul prodotto.', aboutLead: 'Informazioni su azienda, produzione e qualità.', aboutCompany: 'La presentazione aziendale sarà pubblicata dopo la conferma.', aboutManufacturing: 'La capacità produttiva sarà pubblicata dopo la conferma.', aboutQuality: 'Le informazioni sul controllo qualità saranno pubblicate dopo la conferma.', footer: 'Informazioni di contatto pubbliche dell\'azienda.', pending: 'In attesa di conferma', category: 'Categoria di prodotto', series: 'Serie', models: 'Modelli', referenceImage: 'Immagine di riferimento del prodotto', sourceNote: 'Le immagini mostrano solo l\'aspetto del prodotto. Non sono una fonte di parametri tecnici.', homeEyebrow: 'Catalogo industriale', homeCategoriesHeading: 'Categorie di prodotti.', homeManufacturingEyebrow: 'Produzione', homeManufacturingHeading: 'Ambiente di produzione industriale.', aboutCompanyLabel: 'Azienda', aboutCompanyHeading: 'Informazioni sull\'azienda.', aboutFactoryLabel: 'Fabbrica', aboutFactoryHeading: 'Presentazione della fabbrica.', aboutManufacturingLabel: 'Produzione', aboutManufacturingHeading: 'Capacità produttiva.', aboutQualityLabel: 'Qualità', aboutQualityHeading: 'Controllo qualità.', aboutPublicInfoLabel: 'Informazioni pubbliche', aboutPublicInfoHeading: 'Informazioni di contatto dell\'azienda.' },
  vi: { name: 'Tiếng Việt', navHome: 'Trang chủ', navProducts: 'Sản phẩm', navAbout: 'Giới thiệu', homeTitle: 'Nhà sản xuất vòng bi và gối đỡ vòng bi', homeLead: 'Thông tin sản phẩm về vòng bi, gối đỡ vòng bi và sản phẩm tùy chỉnh.', homeIntro: 'Danh mục công nghiệp tập trung vào thông tin sản phẩm đã được xác minh.', factory: 'Thông tin nhà máy và sản xuất sẽ được công bố sau khi xác nhận.', productsHeading: 'Vòng bi, gối đỡ vòng bi và sản phẩm tùy chỉnh.', productsLead: 'Khám phá các danh mục vòng bi, gối đỡ vòng bi và sản phẩm tùy chỉnh.', categoryLead: 'Sản phẩm trong danh mục này.', productLead: 'Thông tin sản phẩm.', aboutLead: 'Thông tin doanh nghiệp, sản xuất và chất lượng.', aboutCompany: 'Giới thiệu doanh nghiệp sẽ được công bố sau khi xác nhận.', aboutManufacturing: 'Năng lực sản xuất sẽ được công bố sau khi xác nhận.', aboutQuality: 'Thông tin kiểm soát chất lượng sẽ được công bố sau khi xác nhận.', footer: 'Thông tin liên hệ công khai của doanh nghiệp.', pending: 'Chờ xác nhận', category: 'Danh mục sản phẩm', series: 'Dòng sản phẩm', models: 'Mẫu', referenceImage: 'Hình ảnh tham khảo sản phẩm', sourceNote: 'Hình ảnh chỉ thể hiện ngoại quan sản phẩm, không phải nguồn thông số kỹ thuật.', homeEyebrow: 'Danh mục sản phẩm công nghiệp', homeCategoriesHeading: 'Danh mục sản phẩm.', homeManufacturingEyebrow: 'Sản xuất', homeManufacturingHeading: 'Môi trường sản xuất công nghiệp.', aboutCompanyLabel: 'Doanh nghiệp', aboutCompanyHeading: 'Thông tin doanh nghiệp.', aboutFactoryLabel: 'Nhà máy', aboutFactoryHeading: 'Giới thiệu nhà máy.', aboutManufacturingLabel: 'Sản xuất', aboutManufacturingHeading: 'Năng lực sản xuất.', aboutQualityLabel: 'Chất lượng', aboutQualityHeading: 'Kiểm soát chất lượng.', aboutPublicInfoLabel: 'Thông tin công khai', aboutPublicInfoHeading: 'Thông tin liên hệ doanh nghiệp.' },
  id: { name: 'Bahasa Indonesia', navHome: 'Beranda', navProducts: 'Produk', navAbout: 'Tentang kami', homeTitle: 'Produsen bantalan dan rumah bantalan', homeLead: 'Informasi produk untuk bantalan, rumah bantalan, dan produk khusus.', homeIntro: 'Katalog industri yang berfokus pada informasi produk terverifikasi.', factory: 'Informasi pabrik dan manufaktur akan diterbitkan setelah konfirmasi.', productsHeading: 'Bantalan, rumah bantalan, dan produk khusus.', productsLead: 'Jelajahi kategori bantalan, rumah bantalan, dan produk khusus.', categoryLead: 'Produk dalam kategori ini.', productLead: 'Informasi produk.', aboutLead: 'Informasi perusahaan, manufaktur, dan mutu.', aboutCompany: 'Profil perusahaan akan diterbitkan setelah konfirmasi.', aboutManufacturing: 'Kemampuan manufaktur akan diterbitkan setelah konfirmasi.', aboutQuality: 'Informasi pengendalian mutu akan diterbitkan setelah konfirmasi.', footer: 'Informasi kontak publik perusahaan.', pending: 'Menunggu konfirmasi', category: 'Kategori produk', series: 'Seri', models: 'Model', referenceImage: 'Gambar referensi produk', sourceNote: 'Gambar hanya menunjukkan tampilan produk dan bukan sumber parameter teknis.', homeEyebrow: 'Katalog produk industri', homeCategoriesHeading: 'Kategori produk.', homeManufacturingEyebrow: 'Manufaktur', homeManufacturingHeading: 'Lingkungan manufaktur industri.', aboutCompanyLabel: 'Perusahaan', aboutCompanyHeading: 'Informasi perusahaan.', aboutFactoryLabel: 'Pabrik', aboutFactoryHeading: 'Presentasi pabrik.', aboutManufacturingLabel: 'Manufaktur', aboutManufacturingHeading: 'Kemampuan manufaktur.', aboutQualityLabel: 'Mutu', aboutQualityHeading: 'Pengendalian mutu.', aboutPublicInfoLabel: 'Informasi publik', aboutPublicInfoHeading: 'Informasi kontak perusahaan.' },
  ja: { name: '日本語', navHome: 'ホーム', navProducts: '製品', navAbout: '会社案内', homeTitle: '軸受及び軸受ハウジングメーカー', homeLead: '軸受、軸受ハウジング、カスタム製品の製品情報。', homeIntro: '確認済みの製品情報に基づく産業用カタログです。', factory: '工場及び製造情報は確認後に公開します。', productsHeading: '軸受、軸受ハウジング、カスタム製品。', productsLead: '軸受、軸受ハウジング、カスタム製品のカテゴリーをご覧ください。', categoryLead: 'このカテゴリーの製品。', productLead: '製品情報。', aboutLead: '会社、製造、品質に関する情報。', aboutCompany: '会社紹介は確認後に公開します。', aboutManufacturing: '製造能力は確認後に公開します。', aboutQuality: '品質管理情報は確認後に公開します。', footer: '会社の公開連絡先情報。', pending: '確認待ち', category: '製品分類', series: 'シリーズ', models: 'モデル', referenceImage: '製品参考画像', sourceNote: '画像は製品外観のみを示し、技術パラメータの根拠ではありません。', homeEyebrow: '産業製品カタログ', homeCategoriesHeading: '製品カテゴリー。', homeManufacturingEyebrow: '製造', homeManufacturingHeading: '産業製造環境。', aboutCompanyLabel: '会社', aboutCompanyHeading: '会社情報。', aboutFactoryLabel: '工場', aboutFactoryHeading: '工場紹介。', aboutManufacturingLabel: '製造', aboutManufacturingHeading: '製造能力。', aboutQualityLabel: '品質', aboutQualityHeading: '品質管理。', aboutPublicInfoLabel: '公開情報', aboutPublicInfoHeading: '会社連絡先情報。' },
  ko: { name: '한국어', navHome: '홈', navProducts: '제품', navAbout: '회사 소개', homeTitle: '베어링 및 베어링 하우징 제조업체', homeLead: '베어링, 베어링 하우징 및 맞춤형 제품 정보.', homeIntro: '검증된 제품 정보를 중심으로 한 산업용 카탈로그입니다.', factory: '공장 및 제조 정보는 확인 후 공개됩니다.', productsHeading: '베어링, 베어링 하우징 및 맞춤형 제품.', productsLead: '베어링, 베어링 하우징 및 맞춤형 제품 카테고리를 확인하십시오.', categoryLead: '이 카테고리의 제품.', productLead: '제품 정보.', aboutLead: '회사, 제조 및 품질 정보.', aboutCompany: '회사 소개는 확인 후 공개됩니다.', aboutManufacturing: '제조 역량은 확인 후 공개됩니다.', aboutQuality: '품질 관리 정보는 확인 후 공개됩니다.', footer: '회사의 공개 연락처 정보.', pending: '확인 대기', category: '제품 분류', series: '시리즈', models: '모델', referenceImage: '제품 참고 이미지', sourceNote: '이미지는 제품 외관만 보여 주며 기술 파라미터의 근거가 아닙니다.', homeEyebrow: '산업 제품 카탈로그', homeCategoriesHeading: '제품 카테고리.', homeManufacturingEyebrow: '제조', homeManufacturingHeading: '산업 제조 환경.', aboutCompanyLabel: '회사', aboutCompanyHeading: '회사 정보.', aboutFactoryLabel: '공장', aboutFactoryHeading: '공장 소개.', aboutManufacturingLabel: '제조', aboutManufacturingHeading: '제조 역량.', aboutQualityLabel: '품질', aboutQualityHeading: '품질 관리.', aboutPublicInfoLabel: '공개 정보', aboutPublicInfoHeading: '회사 연락처 정보.' }
};

const contactLabels = Object.freeze({
  en: 'Contact Us',
  es: 'Contacto',
  de: 'Kontakt',
  fr: 'Contact',
  pt: 'Contactos',
  ar: 'اتصل بنا',
  tr: 'İletişim',
  ru: 'Контакты',
  it: 'Contatti',
  vi: 'Liên hệ',
  id: 'Hubungi Kami',
  ja: 'お問い合わせ',
  ko: '문의하기'
});

const contactLeads = Object.freeze({
  en: 'Public contact details for business communication and manufacturing coordination.',
  es: 'Datos de contacto públicos para comunicación comercial y coordinación de fabricación.',
  de: 'Öffentliche Kontaktdaten für Geschäftskommunikation und Fertigungskoordination.',
  fr: 'Coordonnées publiques pour les échanges professionnels et la coordination de fabrication.',
  pt: 'Dados de contacto públicos para comunicação comercial e coordenação de fabrico.',
  ar: 'بيانات اتصال عامة للتواصل التجاري وتنسيق التصنيع.',
  tr: 'İş iletişimi ve üretim koordinasyonu için kamuya açık iletişim bilgileri.',
  ru: 'Открытые контактные данные для делового общения и координации производства.',
  it: 'Contatti pubblici per comunicazioni commerciali e coordinamento della produzione.',
  vi: 'Thông tin liên hệ công khai cho trao đổi kinh doanh và phối hợp sản xuất.',
  id: 'Kontak publik untuk komunikasi bisnis dan koordinasi manufaktur.',
  ja: '商談および製造調整のための公開連絡先情報。',
  ko: '비즈니스 연락 및 제조 조정을 위한 공개 연락처 정보.'
});

const categoryNames = Object.freeze({
  'pillow-block-bearing-units': {
    en: 'Pillow Block Bearing Units',
    es: 'Unidades de rodamientos de pie',
    de: 'Stehlagereinheiten',
    fr: 'Unités de paliers à semelle',
    pt: 'Unidades de mancais de pé',
    ar: 'وحدات المحامل ذات القاعدة',
    tr: 'Ayaklı rulman yatakları',
    ru: 'Опорные подшипниковые узлы',
    it: 'Unità di supporti a piedistallo',
    vi: 'Bộ gối đỡ vòng bi',
    id: 'Unit bantalan duduk',
    ja: 'ピローブロックベアリングユニット',
    ko: '필로우 블록 베어링 유닛'
  },
  'bearing-housing-series': {
    en: 'Bearing Housing Series',
    es: 'Series de soportes de rodamientos',
    de: 'Lagergehäuse-Serien',
    fr: 'Séries de paliers',
    pt: 'Séries de mancais',
    ar: 'سلسلات بيوت المحامل',
    tr: 'Rulman yatağı serileri',
    ru: 'Серии корпусов подшипников',
    it: 'Serie di supporti per cuscinetti',
    vi: 'Dòng gối đỡ vòng bi',
    id: 'Seri rumah bantalan',
    ja: 'ベアリングハウジングシリーズ',
    ko: '베어링 하우징 시리즈'
  },
  custom: {
    en: 'Custom',
    es: 'Personalizado',
    de: 'Sonderanfertigungen',
    fr: 'Sur mesure',
    pt: 'Personalizado',
    ar: 'مخصص',
    tr: 'Özel',
    ru: 'Индивидуальные',
    it: 'Personalizzato',
    vi: 'Tùy chỉnh',
    id: 'Khusus',
    ja: 'カスタム',
    ko: '맞춤형'
  }
});

const customStatement = Object.freeze({
  en: 'Custom non-standard size products.',
  es: 'Productos personalizados de tamaños no estándar.',
  de: 'Kundenspezifische Produkte in Sondergrößen.',
  fr: 'Produits sur mesure de tailles non standard.',
  pt: 'Produtos personalizados de tamanhos não padronizados.',
  ar: 'منتجات مخصصة بمقاسات غير قياسية.',
  tr: 'Standart dışı boyutlarda özel ürünler.',
  ru: 'Изделия на заказ нестандартных размеров.',
  it: 'Prodotti personalizzati con dimensioni non standard.',
  vi: 'Sản phẩm tùy chỉnh kích thước phi tiêu chuẩn.',
  id: 'Produk khusus dengan ukuran non-standar.',
  ja: '非標準サイズのカスタム製品。',
  ko: '비표준 크기의 맞춤형 제품.'
});

const customSolutionsText = Object.freeze({
  heading: {
    en: 'Custom Solutions',
    es: 'Soluciones a medida',
    de: 'Kundenspezifische Lösungen',
    fr: 'Solutions sur mesure',
    pt: 'Soluções personalizadas',
    ar: 'حلول مخصصة',
    tr: 'Özel çözümler',
    ru: 'Индивидуальные решения',
    it: 'Soluzioni personalizzate',
    vi: 'Giải pháp tùy chỉnh',
    id: 'Solusi khusus',
    ja: 'カスタムソリューション',
    ko: '맞춤형 솔루션'
  },
  lead: {
    en: 'We provide customized bearing housings to meet your specific requirements.',
    es: 'Proporcionamos soportes de rodamientos personalizados para satisfacer sus requisitos específicos.',
    de: 'Wir liefern kundenspezifische Lagergehäuse für Ihre spezifischen Anforderungen.',
    fr: 'Nous fournissons des paliers personnalisés pour répondre à vos exigences spécifiques.',
    pt: 'Fornecemos mancais personalizados para atender aos seus requisitos específicos.',
    ar: 'نوفر بيوت محامل مخصصة لتلبية متطلباتكم الخاصة.',
    tr: 'Özel gereksinimlerinizi karşılamak için özelleştirilmiş rulman yatakları sağlıyoruz.',
    ru: 'Мы поставляем корпуса подшипников на заказ в соответствии с вашими требованиями.',
    it: 'Forniamo supporti per cuscinetti personalizzati per soddisfare le vostre esigenze specifiche.',
    vi: 'Chúng tôi cung cấp gối đỡ vòng bi tùy chỉnh đáp ứng yêu cầu cụ thể của bạn.',
    id: 'Kami menyediakan rumah bantalan khusus untuk memenuhi kebutuhan spesifik Anda.',
    ja: 'お客様のご要望に合わせたカスタムベアリングハウジングを提供します。',
    ko: '고객의 특정 요구 사항을 충족하는 맞춤형 베어링 하우징을 제공합니다.'
  },
  features: {
    en: ['Custom Design', 'Various Materials', 'Reliable Quality'],
    es: ['Diseño personalizado', 'Varios materiales', 'Calidad fiable'],
    de: ['Individuelles Design', 'Verschiedene Materialien', 'Zuverlässige Qualität'],
    fr: ['Conception personnalisée', 'Divers matériaux', 'Qualité fiable'],
    pt: ['Design personalizado', 'Vários materiais', 'Qualidade confiável'],
    ar: ['تصميم مخصص', 'مواد متنوعة', 'جودة موثوقة'],
    tr: ['Özel tasarım', 'Çeşitli malzemeler', 'Güvenilir kalite'],
    ru: ['Индивидуальная конструкция', 'Различные материалы', 'Надежное качество'],
    it: ['Design personalizzato', 'Vari materiali', 'Qualità affidabile'],
    vi: ['Thiết kế tùy chỉnh', 'Nhiều vật liệu', 'Chất lượng đáng tin cậy'],
    id: ['Desain khusus', 'Berbagai material', 'Kualitas andal'],
    ja: ['カスタム設計', '多様な材質', '信頼の品質'],
    ko: ['맞춤 설계', '다양한 재질', '신뢰할 수 있는 품질']
  }
});

const skipLinkText = Object.freeze({
  en: 'Skip to content',
  es: 'Saltar al contenido',
  de: 'Zum Inhalt springen',
  fr: 'Aller au contenu',
  pt: 'Ir para o conteúdo',
  ar: 'تخطى إلى المحتوى',
  tr: 'İçeriğe geç',
  ru: 'Перейти к содержимому',
  it: 'Vai al contenuto',
  vi: 'Chuyển đến nội dung',
  id: 'Langsung ke konten',
  ja: 'コンテンツへスキップ',
  ko: '콘텐츠로 건너뛰기'
});

const imageAlts = Object.freeze({
  heroProduct: { en: 'Bearing housing reference image', es: 'Imagen de referencia de un soporte de rodamiento', de: 'Referenzbild eines Lagergehäuses', fr: 'Image de référence d\'un palier', pt: 'Imagem de referência de um mancal', ar: 'صورة مرجعية لبيت محمل', tr: 'Rulman yatağı referans görseli', ru: 'Справочное изображение корпуса подшипника', it: 'Immagine di riferimento di un supporto per cuscinetti', vi: 'Hình ảnh tham khảo gối đỡ vòng bi', id: 'Gambar referensi rumah bantalan', ja: 'ベアリングハウジング参考画像', ko: '베어링 하우징 참고 이미지' },
  heroFactory: { en: 'Industrial machining reference image', es: 'Imagen de referencia de mecanizado industrial', de: 'Referenzbild der industriellen Bearbeitung', fr: 'Image de référence d\'usinage industriel', pt: 'Imagem de referência de usinagem industrial', ar: 'صورة مرجعية للتصنيع الآلي الصناعي', tr: 'Endüstriyel işleme referans görseli', ru: 'Справочное изображение промышленной обработки', it: 'Immagine di riferimento di lavorazione industriale', vi: 'Hình ảnh tham khảo gia công công nghiệp', id: 'Gambar referensi pemesinan industri', ja: '産業機械加工参考画像', ko: '산업 가공 참고 이미지' },
  factoryFloor: { en: 'Factory floor reference image', es: 'Imagen de referencia de la planta de producción', de: 'Referenzbild der Werkshalle', fr: 'Image de référence de l\'usine', pt: 'Imagem de referência do chão de fábrica', ar: 'صورة مرجعية لأرضية المصنع', tr: 'Fabrika katı referans görseli', ru: 'Справочное изображение производственного цеха', it: 'Immagine di riferimento dello stabilimento', vi: 'Hình ảnh tham khảo nhà máy', id: 'Gambar referensi lantai pabrik', ja: '工場フロア参考画像', ko: '공장 바닥 참고 이미지' },
  cncTurning: { en: 'Industrial machining reference image', es: 'Imagen de referencia de mecanizado industrial', de: 'Referenzbild der industriellen Bearbeitung', fr: 'Image de référence d\'usinage industriel', pt: 'Imagem de referência de usinagem industrial', ar: 'صورة مرجعية للتصنيع الآلي الصناعي', tr: 'Endüstriyel işleme referans görseli', ru: 'Справочное изображение промышленной обработки', it: 'Immagine di riferimento di lavorazione industriale', vi: 'Hình ảnh tham khảo gia công công nghiệp', id: 'Gambar referensi pemesinan industri', ja: '産業機械加工参考画像', ko: '산업 가공 참고 이미지' },
  customSolutions: { en: 'Custom bearing solutions', es: 'Soluciones personalizadas de rodamientos', de: 'Kundenspezifische Lagerlösungen', fr: 'Solutions de roulements sur mesure', pt: 'Soluções personalizadas de rolamentos', ar: 'حلول محامل مخصصة', tr: 'Özel rulman çözümleri', ru: 'Индивидуальные подшипниковые решения', it: 'Soluzioni personalizzate per cuscinetti', vi: 'Giải pháp vòng bi tùy chỉnh', id: 'Solusi bantalan khusus', ja: 'カスタムベアリングソリューション', ko: '맞춤형 베어링 솔루션' }
});

const companyIntro = Object.freeze({
  eyebrow: { en: 'Company', es: 'Empresa', de: 'Unternehmen', fr: 'Entreprise', pt: 'Empresa', ar: 'الشركة', tr: 'Şirket', ru: 'Компания', it: 'Azienda', vi: 'Công ty', id: 'Perusahaan', ja: '会社', ko: '회사' },
  heading: {
    en: 'Company Introduction',
    es: 'Presentación de la empresa',
    de: 'Unternehmensvorstellung',
    fr: 'Présentation de l\'entreprise',
    pt: 'Apresentação da empresa',
    ar: 'مقدمة عن الشركة',
    tr: 'Şirket tanıtımı',
    ru: 'О компании',
    it: 'Presentazione aziendale',
    vi: 'Giới thiệu công ty',
    id: 'Perkenalan perusahaan',
    ja: '会社紹介',
    ko: '회사 소개'
  },
  body: {
    en: 'Established more than 20 years ago, we operate our own bearing housing machining workshop with full in-house machining and assembly capability. Our storefront is located in Yandian Town, Linqing City — China\'s largest bearing distribution hub — giving us direct access to a mature local market and a complete supply chain. This strategic location, combined with two decades of manufacturing experience, delivers a strong cost advantage without compromising quality. We provide cost-effective bearing housings, mounted bearing units and customized solutions to customers worldwide.',
    es: 'Llevamos más de 20 años fabricando soportes de rodamientos, con taller de mecanizado propio y capacidad completa de mecanizado y montaje. Nuestra tienda se encuentra en Yandian, Linqing — el mayor centro de distribución de rodamientos de China — con acceso directo a un mercado local maduro y una cadena de suministro completa. Esta ubicación estratégica nos permite ofrecer una fuerte ventaja de coste sin renunciar a la calidad. Suministramos soportes de rodamientos, unidades con soporte y soluciones personalizadas a clientes de todo el mundo.',
    de: 'Seit mehr als 20 Jahren fertigen wir Lagergehäuse in unserer eigenen Bearbeitungswerkstatt mit vollständiger Bearbeitungs- und Montagekapazität. Unser Geschäft befindet sich in Yandian, Linqing — dem größten Lagervertriebszentrum Chinas — mit direktem Zugang zu einem ausgereiften Markt und einer vollständigen Lieferkette. Diese strategische Lage bietet einen deutlichen Kostenvorteil ohne Qualitätseinbußen. Wir liefern kostengünstige Lagergehäuse, Lagergehäuseeinheiten und Sonderlösungen an Kunden weltweit.',
    fr: 'Depuis plus de 20 ans, nous fabriquons des paliers dans notre propre atelier d\'usinage, avec une capacité complète d\'usinage et d\'assemblage. Notre magasin est situé à Yandian, Linqing — le plus grand centre de distribution de roulements de Chine — avec un accès direct à un marché local mature et à une chaîne d\'approvisionnement complète. Cet emplacement stratégique offre un avantage de coût important sans compromis sur la qualité. Nous fournissons des paliers, des unités à palier et des solutions sur mesure à des clients du monde entier.',
    pt: 'Há mais de 20 anos fabricamos mancais, com oficina própria de usinagem e capacidade completa de usinagem e montagem. Nossa loja está localizada em Yandian, Linqing — o maior centro de distribuição de rolamentos da China — com acesso direto a um mercado local maduro e a uma cadeia de suprimentos completa. Essa localização estratégica proporciona uma forte vantagem de custo sem comprometer a qualidade. Fornecemos mancais, unidades com mancal e soluções personalizadas a clientes no mundo todo.',
    ar: 'منذ أكثر من 20 عامًا ونحن نصنع بيوت المحامل، مع ورشة تصنيع خاصة وقدرة كاملة على التصنيع والتجميع. يقع متجرنا في بلدة يانديان، مدينة لينغتشينغ — أكبر مركز لتوزيع المحامل في الصين — مع وصول مباشر إلى سوق محلي ناضج وسلسلة توريد كاملة. يمنحنا هذا الموقع الاستراتيجي ميزة تكلفة قوية دون المساس بالجودة. نوفر بيوت المحامل ووحدات المحامل والحلول المخصصة لعملاء حول العالم.',
    tr: '20 yılı aşkın süredir kendi işleme atölyemizde rulman yatakları üretiyor ve tam işleme ve montaj kapasitesi sunuyoruz. Mağazamız, Çin\'in en büyük rulman dağıtım merkezi olan Lingqing şehrindeki Yandian kasabasında yer alıyor ve olgun bir yerel pazara ve eksiksiz bir tedarik zincirine doğrudan erişim sağlıyor. Bu stratejik konum, kaliteden ödün vermeden güçlü bir maliyet avantajı sağlar. Dünya çapındaki müşterilere rulman yatakları, yatak birimleri ve özel çözümler sunuyoruz.',
    ru: 'Более 20 лет мы производим корпуса подшипников, имея собственный механический цех и полный цикл механической обработки и сборки. Наш магазин расположен в поселке Яньдянь города Линьцин — крупнейшем центре распределения подшипников в Китае — с прямым доступом к зрелому местному рынку и полной цепочке поставок. Это стратегическое расположение дает значительное ценовое преимущество без ущерба для качества. Мы поставляем корпуса подшипников, корпусные узлы и индивидуальные решения клиентам по всему миру.',
    it: 'Da oltre 20 anni produciamo supporti per cuscinetti, con officina di lavorazione propria e piena capacità di lavorazione e assemblaggio. Il nostro negozio si trova a Yandian, Linqing — il più grande centro di distribuzione di cuscinetti in Cina — con accesso diretto a un mercato locale maturo e a una filiera completa. Questa posizione strategica offre un forte vantaggio di costo senza compromettere la qualità. Forniamo supporti per cuscinetti, unità con supporto e soluzioni personalizzate a clienti in tutto il mondo.',
    vi: 'Hơn 20 năm qua, chúng tôi sản xuất gối đỡ vòng bi với xưởng gia công riêng và năng lực gia công, lắp ráp hoàn chỉnh. Cửa hàng của chúng tôi nằm tại thị trấn Yandian, thành phố Linqing — trung tâm phân phối vòng bi lớn nhất Trung Quốc — với khả năng tiếp cận trực tiếp thị trường địa phương trưởng thành và chuỗi cung ứng hoàn chỉnh. Vị trí chiến lược này mang lại lợi thế chi phí lớn mà không ảnh hưởng đến chất lượng. Chúng tôi cung cấp gối đỡ vòng bi, bộ gối đỡ và giải pháp tùy chỉnh cho khách hàng toàn cầu.',
    id: 'Selama lebih dari 20 tahun, kami memproduksi rumah bantalan dengan bengkel pemesinan sendiri serta kapasitas pemesinan dan perakitan yang lengkap. Toko kami terletak di Kota Yandian, Linqing — pusat distribusi bantalan terbesar di Tiongkok — dengan akses langsung ke pasar lokal yang matang dan rantai pasokan yang lengkap. Lokasi strategis ini memberikan keunggulan biaya yang kuat tanpa mengorbankan kualitas. Kami menyediakan rumah bantalan, unit bantalan, dan solusi khusus kepada pelanggan di seluruh dunia.',
    ja: '当社は20年以上にわたり、自社の加工工場でベアリングハウジングを製造し、機械加工から組立までの一貫した生産能力を有しています。店舗は中国最大のベアリング流通拠点である山東省臨清市煙店鎮に位置し、成熟した地域市場と完全なサプライチェーンに直接アクセスできます。この戦略的な立地により、品質を損なうことなく大きなコスト優位性を実現しています。世界中のお客様にベアリングハウジング、ユニット製品、カスタムソリューションを提供しています。',
    ko: '저희는 20년 이상 자체 가공 공장에서 베어링 하우징을 제조하며 기계 가공부터 조립까지 일관된 생산 능력을 갖추고 있습니다. 매장은 중국 최대 베어링 유통 중심지인 산둥성 린칭시 옌뎬진에 위치하여 성숙한 지역 시장과 완전한 공급망에 직접 접근할 수 있습니다. 이러한 전략적 입지는 품질 저하 없이 강력한 비용 우위를 제공합니다. 전 세계 고객에게 베어링 하우징, 유닛 제품, 맞춤형 솔루션을 공급합니다.'
  }
});

const factorySection = Object.freeze({
  eyebrow: { en: 'Manufacturing', es: 'Fabricación', de: 'Fertigung', fr: 'Fabrication', pt: 'Fabricação', ar: 'التصنيع', tr: 'Üretim', ru: 'Производство', it: 'Produzione', vi: 'Sản xuất', id: 'Manufaktur', ja: '製造', ko: '제조' },
  heading: {
    en: 'Our Factory',
    es: 'Nuestra fábrica',
    de: 'Unser Werk',
    fr: 'Notre usine',
    pt: 'Nossa fábrica',
    ar: 'مصنعنا',
    tr: 'Fabrikamız',
    ru: 'Наш завод',
    it: 'La nostra fabbrica',
    vi: 'Nhà máy của chúng tôi',
    id: 'Pabrik kami',
    ja: '当社の工場',
    ko: '우리 공장'
  },
  lead: {
    en: 'Our Own Manufacturing Facility. Quality bearings & bearing housings, flexible MOQ & custom solutions.',
    es: 'Nuestras propias instalaciones de fabricación. Rodamientos y soportes de rodamientos de calidad, MOQ flexible y soluciones personalizadas.',
    de: 'Unsere eigene Fertigungsstätte. Qualitätslager und -gehäuse, flexible Mindestbestellmengen und kundenspezifische Lösungen.',
    fr: 'Notre propre installation de fabrication. Roulements et paliers de qualité, MOQ flexible et solutions sur mesure.',
    pt: 'Nossas próprias instalações de fabricação. Rolamentos e mancais de qualidade, MOQ flexível e soluções personalizadas.',
    ar: 'منشأة التصنيع الخاصة بنا. محامل وبيوت محامل عالية الجودة، حد أدنى مرن للطلب وحلول مخصصة.',
    tr: 'Kendi üretim tesisimiz. Kaliteli rulmanlar ve rulman yatakları, esnek minimum sipariş ve özel çözümler.',
    ru: 'Собственное производственное предприятие. Качественные подшипники и корпуса, гибкий минимальный заказ и индивидуальные решения.',
    it: 'Il nostro stabilimento di produzione. Cuscinetti e supporti di qualità, MOQ flessibile e soluzioni personalizzate.',
    vi: 'Cơ sở sản xuất của riêng chúng tôi. Vòng bi và gối đỡ chất lượng, MOQ linh hoạt và giải pháp tùy chỉnh.',
    id: 'Fasilitas manufaktur kami sendiri. Bantalan dan rumah bantalan berkualitas, MOQ fleksibel, dan solusi khusus.',
    ja: '自社工場。高品質なベアリングとベアリングハウジング、柔軟な最小注文数、カスタムソリューション。',
    ko: '자체 제조 시설. 고품질 베어링 및 베어링 하우징, 유연한 최소 주문 수량, 맞춤형 솔루션.'
  },
  features: {
    en: [
      { title: 'In-house Production', text: 'All products made in-house, no outsourcing.' },
      { title: 'Custom OEM & ODM', text: 'Custom parts from your drawings or samples.' },
      { title: 'Flexible MOQ', text: 'Small-batch trial orders accepted.' },
      { title: 'Strict Quality Control', text: 'Raw material & finished-product dual inspection.' }
    ],
    es: [
      { title: 'Producción propia', text: 'Todos los productos se fabrican internamente, sin subcontratación.' },
      { title: 'OEM y ODM personalizados', text: 'Piezas personalizadas según sus planos o muestras.' },
      { title: 'MOQ flexible', text: 'Se aceptan pedidos de prueba en pequeños lotes.' },
      { title: 'Control de calidad estricto', text: 'Inspección dual de materias primas y productos terminados.' }
    ],
    de: [
      { title: 'Eigene Produktion', text: 'Alle Produkte werden intern gefertigt, keine Fremdvergabe.' },
      { title: 'Kundenspezifisches OEM & ODM', text: 'Kundenteile nach Ihren Zeichnungen oder Mustern.' },
      { title: 'Flexible Mindestbestellmenge', text: 'Kleinserien-Testbestellungen möglich.' },
      { title: 'Strenge Qualitätskontrolle', text: 'Doppelte Prüfung von Rohstoffen und Fertigprodukten.' }
    ],
    fr: [
      { title: 'Production interne', text: 'Tous les produits sont fabriqués en interne, sans sous-traitance.' },
      { title: 'OEM & ODM sur mesure', text: 'Pièces personnalisées selon vos dessins ou échantillons.' },
      { title: 'MOQ flexible', text: 'Commandes d\'essai en petites quantités acceptées.' },
      { title: 'Contrôle qualité strict', text: 'Double inspection des matières premières et des produits finis.' }
    ],
    pt: [
      { title: 'Produção própria', text: 'Todos os produtos são fabricados internamente, sem terceirização.' },
      { title: 'OEM e ODM personalizados', text: 'Peças personalizadas a partir dos seus desenhos ou amostras.' },
      { title: 'MOQ flexível', text: 'Pedidos de teste em pequenos lotes aceitos.' },
      { title: 'Controle de qualidade rigoroso', text: 'Inspeção dupla de matérias-primas e produtos acabados.' }
    ],
    ar: [
      { title: 'إنتاج داخلي', text: 'جميع المنتجات مصنوعة داخليًا دون الاستعانة بمصادر خارجية.' },
      { title: 'تصنيع مخصص OEM وODM', text: 'أجزاء مخصصة حسب رسوماتكم أو عيناتكم.' },
      { title: 'حد أدنى مرن للطلب', text: 'نقبل طلبات تجريبية بكميات صغيرة.' },
      { title: 'مراقبة جودة صارمة', text: 'فحص مزدوج للمواد الخام والمنتجات النهائية.' }
    ],
    tr: [
      { title: 'Kendi üretimimiz', text: 'Tüm ürünler dış kaynak kullanılmadan kendi tesisimizde üretilir.' },
      { title: 'Özel OEM ve ODM', text: 'Çizimlerinize veya numunelerinize göre özel parçalar.' },
      { title: 'Esnek minimum sipariş', text: 'Küçük partili deneme siparişleri kabul edilir.' },
      { title: 'Sıkı kalite kontrol', text: 'Hammadde ve bitmiş ürün çift denetimi.' }
    ],
    ru: [
      { title: 'Собственное производство', text: 'Вся продукция производится нами, без аутсорсинга.' },
      { title: 'Индивидуальный OEM и ODM', text: 'Изделия по вашим чертежам или образцам.' },
      { title: 'Гибкий минимальный заказ', text: 'Пробные заказы малыми партиями принимаются.' },
      { title: 'Строгий контроль качества', text: 'Двойная проверка сырья и готовой продукции.' }
    ],
    it: [
      { title: 'Produzione interna', text: 'Tutti i prodotti sono realizzati internamente, senza esternalizzazioni.' },
      { title: 'OEM e ODM personalizzati', text: 'Componenti personalizzati dai vostri disegni o campioni.' },
      { title: 'MOQ flessibile', text: 'Ordini di prova in piccoli lotti accettati.' },
      { title: 'Controllo qualità rigoroso', text: 'Doppia ispezione di materie prime e prodotti finiti.' }
    ],
    vi: [
      { title: 'Sản xuất nội bộ', text: 'Tất cả sản phẩm được sản xuất trong nhà, không gia công bên ngoài.' },
      { title: 'OEM & ODM tùy chỉnh', text: 'Linh kiện tùy chỉnh theo bản vẽ hoặc mẫu của bạn.' },
      { title: 'MOQ linh hoạt', text: 'Chấp nhận đơn hàng thử nghiệm số lượng nhỏ.' },
      { title: 'Kiểm soát chất lượng nghiêm ngặt', text: 'Kiểm tra kép nguyên liệu thô và thành phẩm.' }
    ],
    id: [
      { title: 'Produksi sendiri', text: 'Semua produk diproduksi sendiri, tanpa outsourcing.' },
      { title: 'OEM & ODM khusus', text: 'Suku cadang khusus sesuai gambar atau sampel Anda.' },
      { title: 'MOQ fleksibel', text: 'Pesanan uji coba dalam jumlah kecil diterima.' },
      { title: 'Kontrol kualitas ketat', text: 'Inspeksi ganda bahan baku dan produk jadi.' }
    ],
    ja: [
      { title: '自社生産', text: '全製品を自社工場で生産し、外部委託はありません。' },
      { title: 'カスタムOEM＆ODM', text: '図面やサンプルに基づくカスタム部品。' },
      { title: '柔軟な最小注文数', text: '少量の試験注文に対応。' },
      { title: '厳格な品質管理', text: '原材料と完成品の二重検査。' }
    ],
    ko: [
      { title: '자체 생산', text: '모든 제품을 외주 없이 자체 생산합니다.' },
      { title: '맞춤형 OEM & ODM', text: '도면이나 샘플에 따른 맞춤 부품.' },
      { title: '유연한 최소 주문량', text: '소량 시험 주문 가능.' },
      { title: '엄격한 품질 관리', text: '원자재 및 완제품 이중 검사.' }
    ]
  }
});

const homePresentation = Object.freeze({
  en: { eyebrow: 'Industrial Product Catalogue', title: 'Industrial Bearings & Bearing Housings', lead: 'Product information for industrial bearings, bearing housings, and custom products.', productsHeading: 'Bearings, bearing housings and custom products.', partnerHeading: 'Manufacturing Partner', partnerLead: 'Supported by a long-term manufacturing partner with industrial production capabilities.' },
  es: { eyebrow: 'Catálogo de productos industriales', title: 'Rodamientos industriales y soportes de rodamientos', lead: 'Información de productos sobre rodamientos industriales, soportes de rodamientos y productos personalizados.', productsHeading: 'Rodamientos, soportes de rodamientos y productos personalizados.', partnerHeading: 'Socio de fabricación', partnerLead: 'Con el respaldo de un socio de fabricación a largo plazo con capacidades de producción industrial.' },
  de: { eyebrow: 'Industrieller Produktkatalog', title: 'Industrielager und Lagergehäuse', lead: 'Produktinformationen zu Industrielagern, Lagergehäusen und kundenspezifischen Produkten.', productsHeading: 'Lager, Lagergehäuse und kundenspezifische Produkte.', partnerHeading: 'Fertigungspartner', partnerLead: 'Unterstützt durch einen langfristigen Fertigungspartner mit industriellen Produktionskapazitäten.' },
  fr: { eyebrow: 'Catalogue de produits industriels', title: 'Roulements industriels et paliers', lead: 'Informations produits sur les roulements industriels, les paliers et les produits sur mesure.', productsHeading: 'Roulements, paliers et produits sur mesure.', partnerHeading: 'Partenaire de fabrication', partnerLead: 'Soutenu par un partenaire de fabrication de longue date disposant de capacités de production industrielle.' },
  pt: { eyebrow: 'Catálogo de produtos industriais', title: 'Rolamentos industriais e mancais', lead: 'Informações sobre produtos de rolamentos industriais, mancais e produtos personalizados.', productsHeading: 'Rolamentos, mancais e produtos personalizados.', partnerHeading: 'Parceiro de fabricação', partnerLead: 'Com o apoio de um parceiro de fabricação de longo prazo com capacidades de produção industrial.' },
  ar: { eyebrow: 'كتالوج المنتجات الصناعية', title: 'محامل صناعية وبيوت محامل', lead: 'معلومات المنتجات عن المحامل الصناعية وبيوت المحامل والمنتجات المخصصة.', productsHeading: 'المحامل وبيوت المحامل والمنتجات المخصصة.', partnerHeading: 'شريك التصنيع', partnerLead: 'مدعوم بشريك تصنيع طويل الأجل يتمتع بقدرات إنتاج صناعي.' },
  tr: { eyebrow: 'Endüstriyel ürün kataloğu', title: 'Endüstriyel rulmanlar ve rulman yatakları', lead: 'Endüstriyel rulmanlar, rulman yatakları ve özel ürünler hakkında ürün bilgileri.', productsHeading: 'Rulmanlar, rulman yatakları ve özel ürünler.', partnerHeading: 'Üretim ortağı', partnerLead: 'Endüstriyel üretim kapasitesine sahip uzun vadeli bir üretim ortağı tarafından desteklenmektedir.' },
  ru: { eyebrow: 'Каталог промышленной продукции', title: 'Промышленные подшипники и корпуса подшипников', lead: 'Информация о промышленных подшипниках, корпусах подшипников и изделиях на заказ.', productsHeading: 'Подшипники, корпуса подшипников и изделия на заказ.', partnerHeading: 'Производственный партнер', partnerLead: 'При поддержке долгосрочного производственного партнера с возможностями промышленного производства.' },
  it: { eyebrow: 'Catalogo di prodotti industriali', title: 'Cuscinetti industriali e supporti per cuscinetti', lead: 'Informazioni sui prodotti per cuscinetti industriali, supporti per cuscinetti e prodotti personalizzati.', productsHeading: 'Cuscinetti, supporti per cuscinetti e prodotti personalizzati.', partnerHeading: 'Partner produttivo', partnerLead: 'Supportato da un partner produttivo di lunga data con capacità di produzione industriale.' },
  vi: { eyebrow: 'Danh mục sản phẩm công nghiệp', title: 'Vòng bi công nghiệp và gối đỡ vòng bi', lead: 'Thông tin sản phẩm về vòng bi công nghiệp, gối đỡ vòng bi và sản phẩm tùy chỉnh.', productsHeading: 'Vòng bi, gối đỡ vòng bi và sản phẩm tùy chỉnh.', partnerHeading: 'Đối tác sản xuất', partnerLead: 'Được hỗ trợ bởi đối tác sản xuất lâu dài có năng lực sản xuất công nghiệp.' },
  id: { eyebrow: 'Katalog produk industri', title: 'Bantalan industri dan rumah bantalan', lead: 'Informasi produk untuk bantalan industri, rumah bantalan, dan produk khusus.', productsHeading: 'Bantalan, rumah bantalan, dan produk khusus.', partnerHeading: 'Mitra manufaktur', partnerLead: 'Didukung oleh mitra manufaktur jangka panjang dengan kemampuan produksi industri.' },
  ja: { eyebrow: '産業用製品カタログ', title: '産業用ベアリングとベアリングハウジング', lead: '産業用ベアリング、ベアリングハウジング、カスタム製品に関する製品情報。', productsHeading: 'ベアリング、ベアリングハウジング、カスタム製品。', partnerHeading: '製造パートナー', partnerLead: '産業生産能力を持つ長期的な製造パートナーの支援を受けています。' },
  ko: { eyebrow: '산업 제품 카탈로그', title: '산업용 베어링 및 베어링 하우징', lead: '산업용 베어링, 베어링 하우징 및 맞춤형 제품에 대한 제품 정보.', productsHeading: '베어링, 베어링 하우징 및 맞춤형 제품.', partnerHeading: '제조 파트너', partnerLead: '산업 생산 역량을 갖춘 장기 제조 파트너의 지원을 받고 있습니다.' }
});

for (const locale of localeCodes) locales[locale].navAbout = contactLabels[locale];

const displayItemAlts = {
  en: { UCT: 'UCT wide inner ring insert bearing, set-screw locking', UEL: 'UEL wide inner ring insert bearing, eccentric locking collar', UK: 'UK insert bearing, tapered bore for adapter sleeve', UCPA: 'UCPA tapped-base pillow block unit with insert bearing', UCF: 'UCF four-bolt flanged unit with insert bearing', UCFC: 'UCFC piloted round flanged unit with insert bearing', UCFL: 'UCFL two-bolt flanged unit with insert bearing', UCP: 'UCP pillow block unit with insert bearing', UCPH: 'UCPH pillow block unit with long shaft and insert bearing', UCFA: 'UCFA flanged unit with insert bearing', UCFB: 'UCFB flanged unit with insert bearing', PBU: 'PBU pillow block bearing unit with insert bearing', MBU: 'MBU mounted bearing unit with insert bearing', P: 'P pillow block housing', PA: 'PA tapped-base pillow block housing', F: 'F four-bolt flanged housing', FL: 'FL two-bolt flanged housing', FC: 'FC piloted round flanged housing', FS: 'FS square flange with spigot housing', T: 'T take-up housing' },
  es: { UCT: 'UCT rodamiento insertable de aro interior ancho con fijación por tornillos prisioneros', UEL: 'UEL rodamiento insertable de aro interior ancho con collarín excéntrico de fijación', UK: 'UK rodamiento insertable con agujero cónico para manguito de fijación', P: 'P soporte de pie', PA: 'PA soporte de pie con base roscada', F: 'F soporte con brida de cuatro pernos', FL: 'FL soporte con brida de dos pernos', FC: 'FC soporte con brida circular centradora', FS: 'FS soporte con brida cuadrada y resalte de centrado', T: 'T soporte tensor' },
  de: { UCT: 'UCT Pendellager mit breitem Innenring und Gewindestiftbefestigung', UEL: 'UEL Pendellager mit breitem Innenring und Exzenterringbefestigung', UK: 'UK Pendellager mit Kegelbohrung für Spannhülse', P: 'P Stehlagergehäuse', PA: 'PA Stehlagergehäuse mit Gewindesockel', F: 'F Vierloch-Flanschlagergehäuse', FL: 'FL Zweiloch-Flanschlagergehäuse', FC: 'FC rundes Flanschlagergehäuse mit Zentrierbund', FS: 'FS quadratisches Flanschlagergehäuse mit Zentrierbund', T: 'T Spannlagergehäuse' },
  fr: { UCT: 'UCT roulement insert à bague intérieure large avec blocage par vis de pression', UEL: 'UEL roulement insert à bague intérieure large avec collier de blocage excentrique', UK: 'UK roulement insert à alésage conique pour manchon de serrage', P: 'P palier semelle', PA: 'PA palier semelle à base taraudée', F: 'F palier à bride à quatre boulons', FL: 'FL palier à bride à deux boulons', FC: 'FC palier à bride ronde avec centrage', FS: 'FS palier à bride carrée avec épaulement de centrage', T: 'T palier tendeur' },
  pt: { UCT: 'UCT rolamento inserto de anel interno largo com fixação por parafusos de pressão', UEL: 'UEL rolamento inserto de anel interno largo com colar de travamento excêntrico', UK: 'UK rolamento inserto com furo cônico para bucha de fixação', P: 'P mancal de base', PA: 'PA mancal de base roscada', F: 'F mancal flangeado de quatro parafusos', FL: 'FL mancal flangeado de dois parafusos', FC: 'FC mancal flangeado redondo com centragem', FS: 'FS mancal flangeado quadrado com ressalto de centragem', T: 'T mancal tensor' },
  ar: { UCT: 'UCT محمل إدخالي بحلقة داخلية عريضة وتثبيت بمسامير ضبط', UEL: 'UEL محمل إدخالي بحلقة داخلية عريضة وطوق تثبيت لامركزي', UK: 'UK محمل إدخالي بثقب مخروطي لجلبة تثبيت', P: 'P هيكل محمل قائم', PA: 'PA هيكل محمل قائم بقاعدة ملولبة', F: 'F هيكل محمل بشفة بأربعة مسامير', FL: 'FL هيكل محمل بشفة بمسمارين', FC: 'FC هيكل محمل دائري بشفة مع تمركز', FS: 'FS هيكل محمل بشفة مربعة مع بروز تمركز', T: 'T هيكل محمل شداد' },
  tr: { UCT: 'UCT geniş iç bilezikli, setskur kilitlemeli yataklı rulman', UEL: 'UEL geniş iç bilezikli, eksantrik kilitleme bilezikli yataklı rulman', UK: 'UK adaptör manşonu için konik delikli yataklı rulman', P: 'P yastık blok gövdesi', PA: 'PA dişli tabanlı yastık blok gövdesi', F: 'F dört cıvatalı flanşlı gövde', FL: 'FL iki cıvatalı flanşlı gövde', FC: 'FC merkezlemeli yuvarlak flanşlı gövde', FS: 'FS merkezleme çıkıntılı kare flanşlı gövde', T: 'T gerdirme gövdesi' },
  ru: { UCT: 'UCT вставной подшипник с широким внутренним кольцом и фиксацией установочными винтами', UEL: 'UEL вставной подшипник с широким внутренним кольцом и эксцентриковым стопорным кольцом', UK: 'UK вставной подшипник с коническим отверстием для закрепительной втулки', P: 'P корпус подшипника на лапах', PA: 'PA корпус подшипника на лапах с резьбовым основанием', F: 'F четырехболтовой фланцевый корпус', FL: 'FL двухболтовой фланцевый корпус', FC: 'FC круглый фланцевый корпус с центрирующим пояском', FS: 'FS квадратный фланцевый корпус с центрирующим выступом', T: 'T натяжной корпус' },
  it: { UCT: 'UCT cuscinetto inserto con anello interno largo e bloccaggio con grani', UEL: 'UEL cuscinetto inserto con anello interno largo e collare di bloccaggio eccentrico', UK: 'UK cuscinetto inserto con foro conico per bussola di fissaggio', P: 'P supporto a piede', PA: 'PA supporto a piede con base filettata', F: 'F supporto flangiato a quattro bulloni', FL: 'FL supporto flangiato a due bulloni', FC: 'FC supporto flangiato rotondo con centraggio', FS: 'FS supporto flangiato quadrato con risalto di centraggio', T: 'T supporto tenditore' },
  vi: { UCT: 'UCT vòng bi lắp có vòng trong rộng, khóa bằng vít chặn', UEL: 'UEL vòng bi lắp có vòng trong rộng, khóa bằng vòng lệch tâm', UK: 'UK vòng bi lắp có lỗ côn cho ống lót chặn', P: 'P gối đỡ chân đế', PA: 'PA gối đỡ chân đế có đế ren', F: 'F gối đỡ mặt bích bốn bu lông', FL: 'FL gối đỡ mặt bích hai bu lông', FC: 'FC gối đỡ mặt bích tròn có gờ định tâm', FS: 'FS gối đỡ mặt bích vuông có gờ định tâm', T: 'T gối đỡ tăng đơ' },
  id: { UCT: 'UCT bantalan sisip cincin dalam lebar dengan penguncian baut penyetel', UEL: 'UEL bantalan sisip cincin dalam lebar dengan cincin pengunci eksentrik', UK: 'UK bantalan sisip berlubang tirus untuk selongsong adaptor', P: 'P rumah bantalan duduk', PA: 'PA rumah bantalan duduk dengan alas berulir', F: 'F rumah bantalan flens empat baut', FL: 'FL rumah bantalan flens dua baut', FC: 'FC rumah bantalan flens bundar dengan pemandu', FS: 'FS rumah bantalan flens persegi dengan tonjolan pemandu', T: 'T rumah bantalan penegang' },
  ja: { UCT: 'UCT 広幅内輪付き止めねじ固定インサート軸受', UEL: 'UEL 広幅内輪付き偏心ロックカラー固定インサート軸受', UK: 'UK アダプタスリーブ用テーパ穴付きインサート軸受', P: 'P ピローブロックハウジング', PA: 'PA ねじ込みベース付きピローブロックハウジング', F: 'F 4ボルトフランジハウジング', FL: 'FL 2ボルトフランジハウジング', FC: 'FC センタリング付き丸形フランジハウジング', FS: 'FS センタリング突起付き角形フランジハウジング', T: 'T テークアップハウジング' },
  ko: { UCT: 'UCT 넓은 내륜 세트스크루 잠금 인서트 베어링', UEL: 'UEL 넓은 내륜 편심 잠금 칼라 인서트 베어링', UK: 'UK 어댑터 슬리브용 테이퍼 보어 인서트 베어링', P: 'P 필로우 블록 하우징', PA: 'PA 나사식 베이스 필로우 블록 하우징', F: 'F 4볼트 플랜지 하우징', FL: 'FL 2볼트 플랜지 하우징', FC: 'FC 센터링 원형 플랜지 하우징', FS: 'FS 센터링 돌출부가 있는 사각 플랜지 하우징', T: 'T 테이크업 하우징' }
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

function localizedCategoryTitle(locale, category) {
  return categoryNames[category.code]?.[locale] ?? category.title;
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

function seriesPath(locale, category, series) {
  return publicPath(locale, `products/${category.code}/${series.seriesCode.toLowerCase()}`);
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
    description: homePresentation[locale].lead
  };
}

function head({ locale, path, title, description, schema = organizationSchema(locale), noindex = true }) {
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
  return `<header class="site-header"><div class="site-shell header-inner"><a class="brand" href="${publicPath(locale)}" aria-label="${site.brand} home"><span class="brand-mark" aria-hidden="true"></span><span>${site.brand}<small>BEARING &amp; BEARING HOUSING</small></span></a><nav class="site-nav" aria-label="Primary navigation"><a href="${publicPath(locale)}"${active === 'home' ? ' aria-current="page"' : ''}>${escapeHtml(text.navHome)}</a><a href="${publicPath(locale, 'products')}"${active === 'products' ? ' aria-current="page"' : ''}>${escapeHtml(text.navProducts)}</a><a href="${publicPath(locale, 'contact-us')}"${active === 'contact' ? ' aria-current="page"' : ''}>${escapeHtml(contactLabels[locale])}</a></nav>${languageSwitcher(locale, path)}</div></header>`;
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
  return `<footer class="site-footer"><div class="site-shell footer-inner"><div><a class="brand brand--footer" href="${publicPath(locale)}"><span class="brand-mark" aria-hidden="true"></span><span>${site.brand}<small>BEARING &amp; BEARING HOUSING</small></span></a></div><dl class="footer-contact"><div><dt>E-mail</dt><dd>${contactValue(site.email, locale, 'email')}</dd></div><div><dt>WhatsApp</dt><dd>${contactValue(site.whatsapp, locale, 'whatsapp')}</dd></div><div><dt>Facebook</dt><dd>${contactValue(site.facebook, locale)}</dd></div><div><dt>Manufacturing Partner</dt><dd>${contactValue(site.manufacturingPartner, locale)}</dd></div><div><dt>Manufacturing Facility</dt><dd>${contactValue(site.manufacturingFacility, locale)}</dd></div></dl></div><div class="site-shell footer-bottom">© 2026 ${site.brand}. All rights reserved.</div></footer>`;
}

function page({ locale, path = '', active, title, description, content, schema }) {
  return `${head({ locale, path, title, description, schema })}
<body data-page="${active}">
  <a class="skip-link" href="#main-content">${escapeHtml(skipLinkText[locale])}</a>
  ${nav(locale, path, active)}
  <main id="main-content">${content}</main>
  ${footer(locale)}
</body>
</html>`;
}

function lazyImage(image, className = '') {
  return `<img${className ? ` class="${className}"` : ''} src="${image.src}" alt="${escapeHtml(image.alt)}" width="${image.width}" height="${image.height}" loading="lazy">`;
}

function displayItemImage(locale, item) {
  if (!item.image) return '';
  return lazyImage({ ...item.image, alt: displayItemAlts[locale][item.code] ?? item.professionalName ?? item.image.alt });
}

function seriesImage(locale, series) {
  const image = series.image;
  if (!image) return '';
  return lazyImage({ ...image, alt: displayItemAlts[locale][series.seriesCode] ?? series.alt });
}

const categoryCardPresentation = Object.freeze({
  'pillow-block-bearing-units': { title: 'Pillow Block Bearing Units', visual: 'PILLOW BLOCK' },
  'bearing-housing-series': { title: 'Bearing Housing Series', visual: 'HOUSING SERIES' },
  custom: { title: 'Custom', visual: 'CUSTOM' }
});

function categoryCardCopy(locale, category) {
  return { title: localizedCategoryTitle(locale, category), visual: categoryCardPresentation[category.code]?.visual ?? category.title.toUpperCase() };
}

function categoryCardImage(locale, category) {
  const representative = category.series?.find(series => series.status === 'active' && series.image);
  if (representative) return { ...representative.image, alt: displayItemAlts[locale][representative.seriesCode] ?? representative.alt };
  if (category.code === 'custom') return { src: '/assets/custom-solutions.webp', alt: imageAlts.customSolutions[locale], width: 1536, height: 1024 };
  return null;
}

function categoryCardMedia(locale, category, className) {
  const image = categoryCardImage(locale, category);
  return image ? lazyImage(image) : '';
}

function heroImage(locale) {
  return `<img class="hero-product" src="/assets/bearing-housing.webp" alt="${escapeHtml(imageAlts.heroProduct[locale])}" width="1280" height="956" loading="eager" fetchpriority="high">`;
}

function homeContent(locale) {
  const text = locales[locale];
  const home = homePresentation[locale];
  const productCards = categories.map(category => `<a class="category-card${category.code === 'custom' ? ' category-card--custom' : ''}" href="${categoryPath(locale, category)}">${categoryCardMedia(locale, category, 'category-card')}<h2>${escapeHtml(categoryCardCopy(locale, category).title)}</h2></a>`).join('');
  return `<section class="home-hero"><div class="site-shell home-hero__grid"><div class="home-hero__copy"><h1>${escapeHtml(home.title)}</h1><p>${escapeHtml(home.lead)}</p></div><div class="home-hero__media">${heroImage(locale)}<img class="hero-factory" src="/assets/cnc-milling.webp" alt="${escapeHtml(imageAlts.heroFactory[locale])}" width="1280" height="853" loading="lazy"></div></div></section><section class="section section--soft"><div class="site-shell"><div class="section-heading"><p class="eyebrow">${escapeHtml(text.navProducts)}</p><h2>${escapeHtml(text.homeCategoriesHeading)}</h2></div><div class="category-grid">${productCards}</div></div></section><section class="section"><div class="site-shell company-intro"><div class="section-heading"><p class="eyebrow">${escapeHtml(companyIntro.eyebrow[locale])}</p><h2>${escapeHtml(companyIntro.heading[locale])}</h2></div><p class="company-intro__body">${escapeHtml(companyIntro.body[locale])}</p></div></section><section class="section"><div class="site-shell factory-banner"><div class="factory-banner__copy"><p class="eyebrow">${escapeHtml(factorySection.eyebrow[locale])}</p><h2>${escapeHtml(factorySection.heading[locale])}</h2><p class="factory-banner__lead">${escapeHtml(factorySection.lead[locale])}</p></div><div class="factory-strip"><img src="/assets/factory-floor.webp" alt="${escapeHtml(imageAlts.factoryFloor[locale])}" width="1280" height="508" loading="lazy"><img src="/assets/cnc-turning.webp" alt="${escapeHtml(imageAlts.cncTurning[locale])}" width="1280" height="960" loading="lazy"></div></div><div class="site-shell factory-features">${factorySection.features[locale].map(feature => `<article class="factory-feature"><span class="factory-feature__mark" aria-hidden="true"></span><h3>${escapeHtml(feature.title)}</h3><p>${escapeHtml(feature.text)}</p></article>`).join('')}</div></section>`;
}

function productIndex(locale) {
  return `<nav class="product-index" aria-label="Product categories"><div class="site-shell">${categories.map(category => `<a href="${categoryPath(locale, category)}">${escapeHtml(localizedCategoryTitle(locale, category))}</a>`).join('')}</div></nav>`;
}

function categoryCard(locale, category) {
  return `<a class="catalogue-card${category.code === 'custom' ? ' catalogue-card--custom' : ''}" href="${categoryPath(locale, category)}">${categoryCardMedia(locale, category, 'catalogue-card')}<div><h2>${escapeHtml(categoryCardCopy(locale, category).title)}</h2></div></a>`;
}

function productsContent(locale) {
  const text = locales[locale];
  const categoryTitle = categories.map(category => localizedCategoryTitle(locale, category)).join(' / ');
  return `<section class="page-intro"><div class="site-shell"><p class="eyebrow">${escapeHtml(text.navProducts)}</p><h1>${escapeHtml(text.navProducts)}</h1></div></section>${productIndex(locale)}<section class="section"><div class="site-shell"><div class="section-heading"><p class="eyebrow">${escapeHtml(text.category)}</p><h2>${escapeHtml(categoryTitle)}</h2></div><div class="catalogue-grid">${categories.map(category => categoryCard(locale, category)).join('')}</div></div></section>`;
}

function categorySeoDescription(locale, category) {
  return `${localizedCategoryTitle(locale, category)}. ${locales[locale].categoryLead}`;
}

function categoryContent(locale, category) {
  const text = locales[locale];
  const seriesCards = (category.series ?? []).filter(series => series.status === 'active').map(series => `<a class="product-display-card" href="${seriesPath(locale, category, series)}" dir="ltr"><div class="product-display-card__image">${seriesImage(locale, series)}</div><h2 dir="ltr">${escapeHtml(series.displayName ?? series.seriesCode)}</h2></a>`).join('');
  const content = seriesCards ? `<section class="section"><div class="site-shell"><div class="catalogue-grid">${seriesCards}</div></div></section>` : '';
  const solutions = category.code === 'custom' ? `<section class="section section--soft"><div class="site-shell custom-solutions"><div class="section-heading section-heading--center"><h2>${escapeHtml(customSolutionsText.heading[locale])}</h2></div><div class="custom-solutions__pattern" aria-hidden="true"></div><p class="custom-solutions__lead">${escapeHtml(customSolutionsText.lead[locale])}</p><div class="custom-solutions__grid">${customSolutionsText.features[locale].map(feature => `<div class="custom-solutions__item"><span class="custom-solutions__icon" aria-hidden="true"></span><h3>${escapeHtml(feature)}</h3></div>`).join('')}</div><p class="custom-solutions__note">${escapeHtml(customStatement[locale])}</p></div></section>` : '';
  return `<section class="page-intro page-intro--compact"><div class="site-shell"><p class="eyebrow">${escapeHtml(text.category)}</p><h1>${escapeHtml(localizedCategoryTitle(locale, category))}</h1></div></section>${productIndex(locale)}${solutions}${content}`;
}

function seriesContent(locale, category, series) {
  const text = locales[locale];
  const image = seriesImage(locale, series);
  const content = image ? `<section class="section"><div class="site-shell"><div class="product-display-grid"><article class="product-display-card" dir="ltr"><div class="product-display-card__image">${image}</div><h2 dir="ltr">${escapeHtml(series.displayName ?? series.seriesCode)}</h2></article></div></div></section>` : '';
  return `<section class="page-intro page-intro--compact"><div class="site-shell"><h1 dir="ltr">${escapeHtml(series.displayName ?? series.seriesCode)}</h1></div></section>${productIndex(locale)}${content}`;
}

function productBreadcrumb(locale, category, product) {
  const text = locales[locale];
  return `<nav class="product-breadcrumb" aria-label="Product breadcrumb"><a href="${publicPath(locale, 'products')}">${escapeHtml(text.navProducts)}</a><span aria-hidden="true">/</span><a href="${categoryPath(locale, category)}">${escapeHtml(localizedCategoryTitle(locale, category))}</a><span aria-hidden="true">/</span><span aria-current="page" dir="ltr">${escapeHtml(product.code)}</span></nav>`;
}

function productSchema(locale, category, product) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.code,
    sku: product.code,
    model: product.code,
    category: localizedCategoryTitle(locale, category),
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
  return `<section class="page-intro page-intro--compact"><div class="site-shell">${productBreadcrumb(locale, category, product)}<p class="eyebrow">${escapeHtml(localizedCategoryTitle(locale, category))}</p><h1 dir="ltr">${escapeHtml(product.code)}</h1><p>${escapeHtml(description)}</p></div></section>${productIndex(locale)}<section class="section"><div class="site-shell series-layout">${gallery}<div><p class="eyebrow">${escapeHtml(text.models)}</p><h2 dir="ltr">${escapeHtml(product.code)}</h2><p>${escapeHtml(description)}</p><table class="parameter-table" dir="ltr"><tbody>${technicalRows}</tbody></table></div></div></section>`;
}

function contactContent(locale) {
  const label = contactLabels[locale];
  return `<section class="page-intro"><div class="site-shell"><p class="eyebrow">${escapeHtml(label)}</p><h1>${escapeHtml(label)}</h1><p>${escapeHtml(contactLeads[locale])}</p></div></section><section class="section section--soft"><div class="site-shell public-info"><p class="eyebrow">${escapeHtml(label)}</p><h2>${escapeHtml(label)}</h2><dl><div><dt>E-mail</dt><dd>${contactValue(site.email, locale, 'email')}</dd></div><div><dt>WhatsApp</dt><dd>${contactValue(site.whatsapp, locale, 'whatsapp')}</dd></div><div><dt>Facebook</dt><dd>${contactValue(site.facebook, locale)}</dd></div><div><dt>Manufacturing Partner</dt><dd>${contactValue(site.manufacturingPartner, locale)}</dd></div><div><dt>Manufacturing Facility</dt><dd>${contactValue(site.manufacturingFacility, locale)}</dd></div></dl></div></section>`;
}

async function writePage(locale, path, html, routes) {
  const route = publicPath(locale, path);
  const target = join(root, locale, ...path.split('/').filter(Boolean), 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, 'utf8');
  routes.push(route);
}

async function buildLocale(locale, routes) {
  const home = homePresentation[locale];
  await writePage(locale, '', page({ locale, active: 'home', title: `${home.title} | ${site.brand}`, description: home.lead, content: homeContent(locale) }), routes);
  await buildProductsLocale(locale, routes);
  await writePage(locale, 'contact-us', page({ locale, path: 'contact-us', active: 'contact', title: `${contactLabels[locale]} | ${site.brand}`, description: contactLeads[locale], content: contactContent(locale) }), routes);
}

async function buildProductsLocale(locale, routes) {
  const text = locales[locale];
  await writePage(locale, 'products', page({ locale, path: 'products', active: 'products', title: `${text.navProducts} | ${site.brand}`, description: text.productLead, content: productsContent(locale), schema: { ...organizationSchema(locale), description: text.productLead } }), routes);
  for (const category of categories) {
    const categoryPath = `products/${category.code}`;
    const description = categorySeoDescription(locale, category);
    await writePage(locale, categoryPath, page({ locale, path: categoryPath, active: 'products', title: `${localizedCategoryTitle(locale, category)} | ${site.brand}`, description, content: categoryContent(locale, category), schema: { ...organizationSchema(locale), description } }), routes);
    for (const series of (category.series ?? []).filter(item => item.status === 'active')) {
      const seriesRoute = `${categoryPath}/${series.seriesCode.toLowerCase()}`;
      const seriesTitle = `${series.displayName ?? series.seriesCode} | ${localizedCategoryTitle(locale, category)} | ${site.brand}`;
      const seriesDescription = `${series.displayName ?? series.seriesCode}.`;
      await writePage(locale, seriesRoute, page({ locale, path: seriesRoute, active: 'products', title: seriesTitle, description: seriesDescription, content: seriesContent(locale, category, series), schema: { ...organizationSchema(locale), description: seriesDescription } }), routes);
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
  console.log(`Generated PRODUCTS-only V4.0 pages: ${routes.length} pages across ${localeCodes.length} languages.`);
} else {
  await rm(join(root, 'contact.html'), { force: true });
  for (const locale of localeCodes) {
    await rm(join(root, locale), { recursive: true, force: true });
    await buildLocale(locale, routes);
  }

  await writeFile(join(root, 'index.html'), rootRedirect(), 'utf8');
  await rm(join(root, 'products.html'), { force: true });
  await writeFile(join(root, 'robots.txt'), 'User-agent: *\nAllow: /\n', 'utf8');
  const sitemapUrls = routes.map(route => `  <url><loc>${absoluteUrl(route)}</loc></url>`).join('\n');
  await writeFile(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`, 'utf8');

  const output = join(root, 'dist');
  await rm(output, { recursive: true, force: true });
  await mkdir(join(output, 'assets'), { recursive: true });
  await mkdir(join(output, 'assets', 'product-images'), { recursive: true });
  const publicAssets = ['bearing-housing.webp', 'cnc-milling.webp', 'cnc-turning.webp', 'factory-floor.webp', 'custom-solutions.webp', 'favicon.svg', 'styles.css'];
  const publicProductImages = productCatalog.categories.flatMap(category => category.series.filter(series => series.status === 'active' && series.image).map(series => series.image.src.slice(1)));
  await Promise.all([
    ...publicProductImages.map(file => copyFile(join(root, file), join(output, file))),
    ...publicAssets.map(file => copyFile(join(root, 'assets', file), join(output, 'assets', file))),
    ...localeCodes.map(locale => cp(join(root, locale), join(output, locale), { recursive: true })),
    ...['index.html', 'robots.txt', 'sitemap.xml'].map(file => copyFile(join(root, file), join(output, file)))
  ]);

  console.log(`Generated V4.0 static site: ${routes.length} localized pages across ${localeCodes.length} languages.`);
}
