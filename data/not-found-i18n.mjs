// 404 page wording, all 13 locales.
//
// Shape: NOT_FOUND_I18N[locale] = { title, lead }
// The page itself is built by notFoundPage(locale) in build-pages.mjs, which adds the localized
// product category links, the series list and the enquiry line from the same data as every other
// page. Nothing here may promise anything the rest of the site does not: the lead only says the page
// is missing and offers the two ways out.

export const NOT_FOUND_I18N = Object.freeze({
  en: { title: 'Page not found', lead: 'The page you asked for does not exist or has moved. Start from the product categories below, or contact us and we will point you to the right series.' },
  es: { title: 'Página no encontrada', lead: 'La página que busca no existe o se ha movido. Empiece por las categorías de productos de abajo o contáctenos y le indicaremos la serie correcta.' },
  de: { title: 'Seite nicht gefunden', lead: 'Die gesuchte Seite existiert nicht oder wurde verschoben. Beginnen Sie mit den Produktkategorien unten oder kontaktieren Sie uns — wir nennen Ihnen die richtige Baureihe.' },
  fr: { title: 'Page introuvable', lead: 'La page demandée n\'existe pas ou a été déplacée. Partez des catégories de produits ci-dessous, ou contactez-nous et nous vous indiquerons la bonne série.' },
  pt: { title: 'Página não encontrada', lead: 'A página que procura não existe ou foi movida. Comece pelas categorias de produtos abaixo ou contacte-nos e indicaremos a série correta.' },
  ar: { title: 'الصفحة غير موجودة', lead: 'الصفحة التي طلبتها غير موجودة أو تم نقلها. ابدأ من فئات المنتجات أدناه، أو تواصل معنا وسنرشدك إلى السلسلة الصحيحة.' },
  tr: { title: 'Sayfa bulunamadı', lead: 'Aradığınız sayfa yok veya taşınmış. Aşağıdaki ürün kategorilerinden başlayın ya da bize ulaşın; doğru seriyi göstereyim.' },
  ru: { title: 'Страница не найдена', lead: 'Запрошенная страница не существует или была перемещена. Начните с категорий продукции ниже или свяжитесь с нами — мы подскажем нужную серию.' },
  it: { title: 'Pagina non trovata', lead: 'La pagina richiesta non esiste o è stata spostata. Parti dalle categorie di prodotti qui sotto, oppure contattaci e ti indicheremo la serie corretta.' },
  vi: { title: 'Không tìm thấy trang', lead: 'Trang bạn yêu cầu không tồn tại hoặc đã được di chuyển. Hãy bắt đầu từ các danh mục sản phẩm bên dưới, hoặc liên hệ với chúng tôi để được chỉ đúng dòng sản phẩm.' },
  id: { title: 'Halaman tidak ditemukan', lead: 'Halaman yang Anda minta tidak ada atau telah dipindahkan. Mulai dari kategori produk di bawah, atau hubungi kami dan kami akan mengarahkan ke seri yang tepat.' },
  ja: { title: 'ページが見つかりません', lead: 'お探しのページは存在しないか、移動しました。下の製品カテゴリーからお進みいただくか、お問い合わせいただければ該当シリーズをご案内します。' },
  ko: { title: '페이지를 찾을 수 없습니다', lead: '요청하신 페이지가 없거나 이동되었습니다. 아래 제품 카테고리에서 시작하시거나 문의해 주시면 해당 시리즈를 안내해 드립니다.' }
});

const LOCALES = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];

/** Returns a list of problems, or an empty array when every locale is complete. */
export function validateNotFoundI18n() {
  const issues = [];
  for (const locale of LOCALES) {
    const entry = NOT_FOUND_I18N[locale];
    if (!entry) { issues.push(`${locale}: missing`); continue; }
    if (typeof entry.title !== 'string' || !entry.title.trim()) issues.push(`${locale}.title: missing`);
    if (typeof entry.lead !== 'string' || !entry.lead.trim()) issues.push(`${locale}.lead: missing`);
  }
  return issues;
}
