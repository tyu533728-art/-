import { cp, copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
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
  email: '729865273lq@gmail.com',
  whatsapp: 'liuqiang6767',
  facebook: 'Sixty-seven Liu',
  manufacturingPartner: '馆陶县耐特轴承有限公司',
  manufacturingFacility: '馆陶县南徐村乡马兰村北'
};

const locales = {
  en: { name: 'English', navHome: 'Home', navProducts: 'Products', navAbout: 'About Us', homeTitle: 'Bearing & Bearing Housing Manufacturer', homeLead: 'Product information for bearings, bearing housings and custom products.', homeIntro: 'A focused industrial product catalogue built around verified product information.', factory: 'Factory and manufacturing information will be published after confirmation.', productsHeading: 'Bearings, bearing housing and custom products.', productsLead: 'Browse bearings, bearing housing and custom product categories.', categoryLead: 'Products in this category.', productLead: 'Product information.', aboutLead: 'Company, manufacturing and quality information.', aboutCompany: 'Company introduction will be published after confirmation.', aboutManufacturing: 'Manufacturing capability will be published after confirmation.', aboutQuality: 'Quality control information will be published after confirmation.', footer: 'Public company contact information.', pending: 'Pending confirmation', category: 'Product category', series: 'Series', models: 'Models', referenceImage: 'Reference product image', sourceNote: 'Images show product appearance only. They are not a source of technical parameters.', homeEyebrow: 'Industrial product catalogue', homeCategoriesHeading: 'Product categories.', homeManufacturingEyebrow: 'Manufacturing', homeManufacturingHeading: 'Industrial manufacturing environment.', aboutCompanyLabel: 'Company', aboutCompanyHeading: 'Company information.', aboutFactoryLabel: 'Factory', aboutFactoryHeading: 'Factory presentation.', aboutManufacturingLabel: 'Manufacturing', aboutManufacturingHeading: 'Manufacturing capability.', aboutQualityLabel: 'Quality', aboutQualityHeading: 'Quality control.', aboutPublicInfoLabel: 'Public information', aboutPublicInfoHeading: 'Company contact information.' },
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

const contactFooterText = Object.freeze({
  en: 'Public contact information.',
  es: 'Información pública de contacto.',
  de: 'Öffentliche Kontaktinformationen.',
  fr: 'Coordonnées publiques.',
  pt: 'Informações públicas de contacto.',
  ar: 'معلومات الاتصال العامة.',
  tr: 'Kamuya açık iletişim bilgileri.',
  ru: 'Открытая контактная информация.',
  it: 'Informazioni di contatto pubbliche.',
  vi: 'Thông tin liên hệ công khai.',
  id: 'Informasi kontak publik.',
  ja: '公開連絡先情報。',
  ko: '공개 연락처 정보.'
});

for (const locale of localeCodes) locales[locale].navAbout = contactLabels[locale];

const displayItemAlts = {
  en: { UC: 'UC wide inner ring insert bearing, set-screw locking', UEL: 'UEL wide inner ring insert bearing, eccentric locking collar', UK: 'UK insert bearing, tapered bore for adapter sleeve', P: 'P pillow block housing', PA: 'PA tapped-base pillow block housing', F: 'F four-bolt flanged housing', FL: 'FL two-bolt flanged housing', FC: 'FC piloted round flanged housing', FS: 'FS square flange with spigot housing', T: 'T take-up housing' },
  es: { UC: 'UC rodamiento insertable de aro interior ancho con fijación por tornillos prisioneros', UEL: 'UEL rodamiento insertable de aro interior ancho con collarín excéntrico de fijación', UK: 'UK rodamiento insertable con agujero cónico para manguito de fijación', P: 'P soporte de pie', PA: 'PA soporte de pie con base roscada', F: 'F soporte con brida de cuatro pernos', FL: 'FL soporte con brida de dos pernos', FC: 'FC soporte con brida circular centradora', FS: 'FS soporte con brida cuadrada y resalte de centrado', T: 'T soporte tensor' },
  de: { UC: 'UC Pendellager mit breitem Innenring und Gewindestiftbefestigung', UEL: 'UEL Pendellager mit breitem Innenring und Exzenterringbefestigung', UK: 'UK Pendellager mit Kegelbohrung für Spannhülse', P: 'P Stehlagergehäuse', PA: 'PA Stehlagergehäuse mit Gewindesockel', F: 'F Vierloch-Flanschlagergehäuse', FL: 'FL Zweiloch-Flanschlagergehäuse', FC: 'FC rundes Flanschlagergehäuse mit Zentrierbund', FS: 'FS quadratisches Flanschlagergehäuse mit Zentrierbund', T: 'T Spannlagergehäuse' },
  fr: { UC: 'UC roulement insert à bague intérieure large avec blocage par vis de pression', UEL: 'UEL roulement insert à bague intérieure large avec collier de blocage excentrique', UK: 'UK roulement insert à alésage conique pour manchon de serrage', P: 'P palier semelle', PA: 'PA palier semelle à base taraudée', F: 'F palier à bride à quatre boulons', FL: 'FL palier à bride à deux boulons', FC: 'FC palier à bride ronde avec centrage', FS: 'FS palier à bride carrée avec épaulement de centrage', T: 'T palier tendeur' },
  pt: { UC: 'UC rolamento inserto de anel interno largo com fixação por parafusos de pressão', UEL: 'UEL rolamento inserto de anel interno largo com colar de travamento excêntrico', UK: 'UK rolamento inserto com furo cônico para bucha de fixação', P: 'P mancal de base', PA: 'PA mancal de base roscada', F: 'F mancal flangeado de quatro parafusos', FL: 'FL mancal flangeado de dois parafusos', FC: 'FC mancal flangeado redondo com centragem', FS: 'FS mancal flangeado quadrado com ressalto de centragem', T: 'T mancal tensor' },
  ar: { UC: 'UC محمل إدخالي بحلقة داخلية عريضة وتثبيت بمسامير ضبط', UEL: 'UEL محمل إدخالي بحلقة داخلية عريضة وطوق تثبيت لامركزي', UK: 'UK محمل إدخالي بثقب مخروطي لجلبة تثبيت', P: 'P هيكل محمل قائم', PA: 'PA هيكل محمل قائم بقاعدة ملولبة', F: 'F هيكل محمل بشفة بأربعة مسامير', FL: 'FL هيكل محمل بشفة بمسمارين', FC: 'FC هيكل محمل دائري بشفة مع تمركز', FS: 'FS هيكل محمل بشفة مربعة مع بروز تمركز', T: 'T هيكل محمل شداد' },
  tr: { UC: 'UC geniş iç bilezikli, setskur kilitlemeli yataklı rulman', UEL: 'UEL geniş iç bilezikli, eksantrik kilitleme bilezikli yataklı rulman', UK: 'UK adaptör manşonu için konik delikli yataklı rulman', P: 'P yastık blok gövdesi', PA: 'PA dişli tabanlı yastık blok gövdesi', F: 'F dört cıvatalı flanşlı gövde', FL: 'FL iki cıvatalı flanşlı gövde', FC: 'FC merkezlemeli yuvarlak flanşlı gövde', FS: 'FS merkezleme çıkıntılı kare flanşlı gövde', T: 'T gerdirme gövdesi' },
  ru: { UC: 'UC вставной подшипник с широким внутренним кольцом и фиксацией установочными винтами', UEL: 'UEL вставной подшипник с широким внутренним кольцом и эксцентриковым стопорным кольцом', UK: 'UK вставной подшипник с коническим отверстием для закрепительной втулки', P: 'P корпус подшипника на лапах', PA: 'PA корпус подшипника на лапах с резьбовым основанием', F: 'F четырехболтовой фланцевый корпус', FL: 'FL двухболтовой фланцевый корпус', FC: 'FC круглый фланцевый корпус с центрирующим пояском', FS: 'FS квадратный фланцевый корпус с центрирующим выступом', T: 'T натяжной корпус' },
  it: { UC: 'UC cuscinetto inserto con anello interno largo e bloccaggio con grani', UEL: 'UEL cuscinetto inserto con anello interno largo e collare di bloccaggio eccentrico', UK: 'UK cuscinetto inserto con foro conico per bussola di fissaggio', P: 'P supporto a piede', PA: 'PA supporto a piede con base filettata', F: 'F supporto flangiato a quattro bulloni', FL: 'FL supporto flangiato a due bulloni', FC: 'FC supporto flangiato rotondo con centraggio', FS: 'FS supporto flangiato quadrato con risalto di centraggio', T: 'T supporto tenditore' },
  vi: { UC: 'UC vòng bi lắp có vòng trong rộng, khóa bằng vít chặn', UEL: 'UEL vòng bi lắp có vòng trong rộng, khóa bằng vòng lệch tâm', UK: 'UK vòng bi lắp có lỗ côn cho ống lót chặn', P: 'P gối đỡ chân đế', PA: 'PA gối đỡ chân đế có đế ren', F: 'F gối đỡ mặt bích bốn bu lông', FL: 'FL gối đỡ mặt bích hai bu lông', FC: 'FC gối đỡ mặt bích tròn có gờ định tâm', FS: 'FS gối đỡ mặt bích vuông có gờ định tâm', T: 'T gối đỡ tăng đơ' },
  id: { UC: 'UC bantalan sisip cincin dalam lebar dengan penguncian baut penyetel', UEL: 'UEL bantalan sisip cincin dalam lebar dengan cincin pengunci eksentrik', UK: 'UK bantalan sisip berlubang tirus untuk selongsong adaptor', P: 'P rumah bantalan duduk', PA: 'PA rumah bantalan duduk dengan alas berulir', F: 'F rumah bantalan flens empat baut', FL: 'FL rumah bantalan flens dua baut', FC: 'FC rumah bantalan flens bundar dengan pemandu', FS: 'FS rumah bantalan flens persegi dengan tonjolan pemandu', T: 'T rumah bantalan penegang' },
  ja: { UC: 'UC 広幅内輪付き止めねじ固定インサート軸受', UEL: 'UEL 広幅内輪付き偏心ロックカラー固定インサート軸受', UK: 'UK アダプタスリーブ用テーパ穴付きインサート軸受', P: 'P ピローブロックハウジング', PA: 'PA ねじ込みベース付きピローブロックハウジング', F: 'F 4ボルトフランジハウジング', FL: 'FL 2ボルトフランジハウジング', FC: 'FC センタリング付き丸形フランジハウジング', FS: 'FS センタリング突起付き角形フランジハウジング', T: 'T テークアップハウジング' },
  ko: { UC: 'UC 넓은 내륜 세트스크루 잠금 인서트 베어링', UEL: 'UEL 넓은 내륜 편심 잠금 칼라 인서트 베어링', UK: 'UK 어댑터 슬리브용 테이퍼 보어 인서트 베어링', P: 'P 필로우 블록 하우징', PA: 'PA 나사식 베이스 필로우 블록 하우징', F: 'F 4볼트 플랜지 하우징', FL: 'FL 2볼트 플랜지 하우징', FC: 'FC 센터링 원형 플랜지 하우징', FS: 'FS 센터링 돌출부가 있는 사각 플랜지 하우징', T: 'T 테이크업 하우징' }
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
  return `<footer class="site-footer"><div class="site-shell footer-inner"><div><a class="brand brand--footer" href="${publicPath(locale)}"><span class="brand-mark" aria-hidden="true"></span><span>${site.brand}<small>BEARING &amp; BEARING HOUSING</small></span></a><p>${escapeHtml(contactFooterText[locale])}</p></div><dl class="footer-contact"><div><dt>E-mail</dt><dd>${contactValue(site.email, locale, 'email')}</dd></div><div><dt>WhatsApp</dt><dd>${contactValue(site.whatsapp, locale)}</dd></div><div><dt>Facebook</dt><dd>${contactValue(site.facebook, locale)}</dd></div><div><dt>Manufacturing Partner</dt><dd>${contactValue(site.manufacturingPartner, locale)}</dd></div><div><dt>Manufacturing Facility</dt><dd>${contactValue(site.manufacturingFacility, locale)}</dd></div></dl></div><div class="site-shell footer-bottom">© 2026 ${site.brand}. All rights reserved.</div></footer>`;
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

function displayItemImage(locale, item) {
  if (!item.image) return '';
  return lazyImage({ ...item.image, alt: displayItemAlts[locale][item.code] ?? item.professionalName ?? item.image.alt });
}

function heroImage() {
  return `<img class="hero-product" src="/assets/bearing-housing.webp" alt="Bearing housing reference image" width="1280" height="956" loading="eager" fetchpriority="high">`;
}

function homeContent(locale) {
  const text = locales[locale];
  const productCards = categories.map(category => `<a class="category-card" href="${categoryPath(locale, category)}">${category.images[0] ? lazyImage(category.images[0]) : '<span class="category-card__blank" aria-hidden="true">BEARINGS</span>'}<span class="category-card__label">${escapeHtml(text.category)}</span><h2>${escapeHtml(category.title)}</h2><span class="category-card__link">${escapeHtml(text.navProducts)}</span></a>`).join('');
  return `<section class="home-hero"><div class="site-shell home-hero__grid"><div class="home-hero__copy"><p class="eyebrow">${escapeHtml(text.homeEyebrow)}</p><h1>${escapeHtml(text.homeTitle)}</h1><p>${escapeHtml(text.homeLead)}</p><a class="text-link" href="${publicPath(locale, 'products')}">${escapeHtml(text.navProducts)}</a></div><div class="home-hero__media">${heroImage()}<img class="hero-factory" src="/assets/cnc-milling.webp" alt="Industrial machining reference image" width="1280" height="853" loading="lazy"></div></div></section><section class="section"><div class="site-shell split-intro"><p class="eyebrow">${escapeHtml(text.navAbout)}</p><div><h2>${escapeHtml(text.productsHeading)}</h2><p>${escapeHtml(text.homeIntro)}</p></div></div></section><section class="section section--soft"><div class="site-shell"><div class="section-heading"><p class="eyebrow">${escapeHtml(text.navProducts)}</p><h2>${escapeHtml(text.homeCategoriesHeading)}</h2></div><div class="category-grid">${productCards}</div></div></section><section class="section"><div class="site-shell factory-layout"><div><p class="eyebrow">${escapeHtml(text.homeManufacturingEyebrow)}</p><h2>${escapeHtml(text.homeManufacturingHeading)}</h2><p>${escapeHtml(text.factory)}</p></div><div class="factory-strip"><img src="/assets/factory-floor.webp" alt="Factory floor reference image" width="1280" height="508" loading="lazy"><img src="/assets/cnc-turning.webp" alt="CNC turning reference image" width="1280" height="960" loading="lazy"></div></div></section>`;
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
  const displayCards = (category.displayItems ?? []).map(item => {
    return `<article class="product-display-card" dir="ltr"><div class="product-display-card__image">${displayItemImage(locale, item)}</div><h2>${escapeHtml(item.code)}</h2></article>`;
  }).join('');
  const displayGrid = displayCards ? `<div class="product-display-grid">${displayCards}</div>` : '';
  const productGrid = productCards ? `<div class="catalogue-grid">${productCards}</div>` : '';
  const content = displayGrid || productGrid ? `<section class="section"><div class="site-shell">${displayGrid}${productGrid}</div></section>` : '';
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

function contactContent(locale) {
  const label = contactLabels[locale];
  return `<section class="page-intro"><div class="site-shell"><p class="eyebrow">${escapeHtml(label)}</p><h1>${escapeHtml(label)}</h1><p>${escapeHtml(contactLeads[locale])}</p></div></section><section class="section section--soft"><div class="site-shell public-info"><p class="eyebrow">${escapeHtml(label)}</p><h2>${escapeHtml(label)}</h2><dl><div><dt>E-mail</dt><dd>${contactValue(site.email, locale, 'email')}</dd></div><div><dt>WhatsApp</dt><dd>${contactValue(site.whatsapp, locale)}</dd></div><div><dt>Facebook</dt><dd>${contactValue(site.facebook, locale)}</dd></div><div><dt>Manufacturing Partner</dt><dd>${contactValue(site.manufacturingPartner, locale)}</dd></div><div><dt>Manufacturing Facility</dt><dd>${contactValue(site.manufacturingFacility, locale)}</dd></div></dl></div></section>`;
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
  await writePage(locale, 'contact-us', page({ locale, path: 'contact-us', active: 'contact', title: `${contactLabels[locale]} | ${site.brand}`, description: contactLeads[locale], content: contactContent(locale) }), routes);
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
  await writeFile(join(root, 'robots.txt'), 'User-agent: *\nAllow: /\n', 'utf8');
  const sitemapUrls = routes.map(route => `  <url><loc>${absoluteUrl(route)}</loc></url>`).join('\n');
  await writeFile(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`, 'utf8');

  const output = join(root, 'dist');
  await rm(output, { recursive: true, force: true });
  await mkdir(join(output, 'assets'), { recursive: true });
  const publicAssets = ['bearing-housing.webp', 'cnc-milling.webp', 'cnc-turning.webp', 'factory-floor.webp', 'favicon.svg', 'styles.css'];
  await Promise.all([
    cp(join(root, 'assets', 'product-images'), join(output, 'assets', 'product-images'), { recursive: true }),
    ...publicAssets.map(file => copyFile(join(root, 'assets', file), join(output, 'assets', file))),
    ...localeCodes.map(locale => cp(join(root, locale), join(output, locale), { recursive: true })),
    ...['index.html', 'robots.txt', 'sitemap.xml'].map(file => copyFile(join(root, file), join(output, file)))
  ]);

  console.log(`Generated V3.5 static site: ${routes.length} localized pages across ${localeCodes.length} languages.`);
}
