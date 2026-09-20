// Cross-reference annotations: the footnote lines that belong under each table, and the wording
// used inside table cells where the source workbook carries Chinese notes.
//
// Source cells look like "P 204 + YAR 204-2F（单元 SY 20 TF）" or "P 2xx（配 UEL 内圈）"; the
// renderer splits them and rebuilds the parenthetical in the page's own language.

export const XREF_NOTES = Object.freeze({
  en: {
    unitTemplate: '(unit {code})',
    isoWithUelSuffix: ' (with UEL insert)',
    isoWithUkSuffix: ' (with UK insert + H adapter sleeve)',
    skfNoneInsert: '— (no SKF equivalent)',
    noteLight: 'Note: mounted bearing units follow ISO 9628, so the model numbers match ours and the dimensions are interchangeable. FYH / NSK / NTN / KOYO UKP series need an H adapter sleeve (e.g. UKP205+H2305). SKF has no tapered-bore adapter-sleeve equivalent.',
    noteHeavy: 'Note: the 3xx series is the heavy-duty range — same bore, larger outside diameter and higher load rating. UCFS is available in the 3xx heavy range only.',
    noteSize: 'The 3xx heavy series uses the same bores with a larger outside diameter.'
  },
  es: {
    unitTemplate: '(unidad {code})',
    isoWithUelSuffix: ' (con inserto UEL)',
    isoWithUkSuffix: ' (con inserto UK + manguito H)',
    skfNoneInsert: '— (sin equivalente SKF)',
    noteLight: 'Nota: las unidades de rodamientos siguen la norma ISO 9628, por lo que los modelos coinciden con los nuestros y las dimensiones son intercambiables. Las series UKP de FYH / NSK / NTN / KOYO requieren un manguito H (p. ej. UKP205+H2305). SKF no tiene equivalente de agujero cónico con manguito.',
    noteHeavy: 'Nota: la serie 3xx es la gama pesada: mismo diámetro de eje, pero mayor diámetro exterior y mayor capacidad de carga. UCFS solo existe en la serie pesada 3xx.',
    noteSize: 'La serie pesada 3xx comparte estos diámetros con un diámetro exterior mayor.'
  },
  de: {
    unitTemplate: '(Einheit {code})',
    isoWithUelSuffix: ' (mit UEL-Innenlager)',
    isoWithUkSuffix: ' (mit UK-Innenlager + H-Spannhülse)',
    skfNoneInsert: '— (keine SKF-Entsprechung)',
    noteLight: 'Hinweis: Stehlager-Einheiten folgen der ISO 9628, daher stimmen die Modellbezeichnungen mit unseren überein und die Abmessungen sind austauschbar. Die UKP-Serien von FYH / NSK / NTN / KOYO benötigen eine H-Spannhülse (z. B. UKP205+H2305). SKF hat keine Entsprechung für Kegelbohrung mit Spannhülse.',
    noteHeavy: 'Hinweis: Die 3xx-Serie ist die Schwerlastreihe – gleiche Bohrung, aber größerer Außendurchmesser und höhere Tragfähigkeit. UCFS gibt es nur in der schweren 3xx-Reihe.',
    noteSize: 'Die schwere 3xx-Serie verwendet dieselben Bohrungen bei größerem Außendurchmesser.'
  },
  fr: {
    unitTemplate: '(ensemble {code})',
    isoWithUelSuffix: ' (avec insert UEL)',
    isoWithUkSuffix: ' (avec insert UK + manchon H)',
    skfNoneInsert: '— (pas d’équivalent SKF)',
    noteLight: 'Remarque : les paliers montés suivent la norme ISO 9628 ; les modèles correspondent donc aux nôtres et les dimensions sont interchangeables. Les séries UKP de FYH / NSK / NTN / KOYO nécessitent un manchon H (ex. UKP205+H2305). SKF n’a pas d’équivalent à alésage conique avec manchon.',
    noteHeavy: 'Remarque : la série 3xx est la gamme lourde — même alésage, diamètre extérieur et capacité de charge supérieurs. UCFS n’existe qu’en série lourde 3xx.',
    noteSize: 'La série lourde 3xx reprend ces alésages avec un diamètre extérieur plus grand.'
  },
  pt: {
    unitTemplate: '(unidade {code})',
    isoWithUelSuffix: ' (com inserto UEL)',
    isoWithUkSuffix: ' (com inserto UK + bucha H)',
    skfNoneInsert: '— (sem equivalente SKF)',
    noteLight: 'Nota: os mancais montados seguem a ISO 9628, portanto os modelos coincidem com os nossos e as dimensões são intercambiáveis. As séries UKP da FYH / NSK / NTN / KOYO exigem uma bucha H (ex. UKP205+H2305). A SKF não tem equivalente de furo cônico com bucha.',
    noteHeavy: 'Nota: a série 3xx é a linha pesada — mesmo furo, diâmetro externo maior e maior capacidade de carga. A UCFS existe apenas na série pesada 3xx.',
    noteSize: 'A série pesada 3xx usa estes furos com diâmetro externo maior.'
  },
  ar: {
    unitTemplate: '(وحدة {code})',
    isoWithUelSuffix: ' (مع محمل UEL)',
    isoWithUkSuffix: ' (مع محمل UK + جلبة H)',
    skfNoneInsert: '— (لا يوجد مقابل لدى SKF)',
    noteLight: 'ملاحظة: تتبع وحدات المحامل المعيار ISO 9628، لذا تتطابق الطرازات مع طرازاتنا والأبعاد قابلة للتبادل. تحتاج سلاسل UKP من FYH وNSK وNTN وKOYO إلى جلبة H (مثل UKP205+H2305). ولا يوجد لدى SKF مقابل للتجويف المخروطي مع الجلبة.',
    noteHeavy: 'ملاحظة: السلسلة 3xx هي الفئة الثقيلة — نفس قطر العمود مع قطر خارجي أكبر وقدرة تحميل أعلى. تتوفر UCFS في السلسلة الثقيلة 3xx فقط.',
    noteSize: 'تستخدم السلسلة الثقيلة 3xx نفس أقطار التجويف مع قطر خارجي أكبر.'
  },
  tr: {
    unitTemplate: '(ünite {code})',
    isoWithUelSuffix: ' (UEL iç rulmanlı)',
    isoWithUkSuffix: ' (UK iç rulman + H kovanlı)',
    skfNoneInsert: '— (SKF karşılığı yok)',
    noteLight: 'Not: Yataklı rulman üniteleri ISO 9628 standardına uygundur; bu nedenle modeller bizimkilerle aynıdır ve ölçüler birbiriyle değiştirilebilir. FYH / NSK / NTN / KOYO UKP serileri H kovan gerektirir (örn. UKP205+H2305). SKF’nin konik delik + kovan karşılığı yoktur.',
    noteHeavy: 'Not: 3xx serisi ağır hizmet serisidir — aynı delik çapı, daha büyük dış çap ve daha yüksek yük kapasitesi. UCFS yalnızca 3xx ağır seride üretilir.',
    noteSize: '3xx ağır seri bu delik çaplarını daha büyük dış çapla kullanır.'
  },
  ru: {
    unitTemplate: '(узел {code})',
    isoWithUelSuffix: ' (с подшипником UEL)',
    isoWithUkSuffix: ' (с подшипником UK + втулка H)',
    skfNoneInsert: '— (аналога SKF нет)',
    noteLight: 'Примечание: подшипниковые узлы соответствуют ISO 9628, поэтому обозначения совпадают с нашими, а размеры взаимозаменяемы. Серии UKP от FYH / NSK / NTN / KOYO требуют втулку H (например, UKP205+H2305). У SKF нет аналога с конусным отверстием и закрепительной втулкой.',
    noteHeavy: 'Примечание: серия 3xx — тяжёлая: тот же посадочный диаметр, но больше наружный диаметр и выше нагрузочная способность. UCFS выпускается только в тяжёлой серии 3xx.',
    noteSize: 'Тяжёлая серия 3xx использует те же посадочные диаметры при увеличенном наружном диаметре.'
  },
  it: {
    unitTemplate: '(unità {code})',
    isoWithUelSuffix: ' (con inserto UEL)',
    isoWithUkSuffix: ' (con inserto UK + bussola H)',
    skfNoneInsert: '— (nessun equivalente SKF)',
    noteLight: 'Nota: i supporti montati seguono la norma ISO 9628, quindi i modelli coincidono con i nostri e le dimensioni sono intercambiabili. Le serie UKP di FYH / NSK / NTN / KOYO richiedono una bussola H (es. UKP205+H2305). SKF non ha un equivalente a foro conico con bussola.',
    noteHeavy: 'Nota: la serie 3xx è la gamma pesante — stesso alesaggio, diametro esterno maggiore e portata più alta. UCFS esiste solo nella serie pesante 3xx.',
    noteSize: 'La serie pesante 3xx usa questi alesaggi con un diametro esterno maggiore.'
  },
  vi: {
    unitTemplate: '(bộ {code})',
    isoWithUelSuffix: ' (kèm vòng bi UEL)',
    isoWithUkSuffix: ' (kèm vòng bi UK + bạc H)',
    skfNoneInsert: '— (SKF không có loại tương ứng)',
    noteLight: 'Lưu ý: gối đỡ vòng bi theo tiêu chuẩn ISO 9628 nên mã hiệu trùng với mã của chúng tôi và kích thước có thể thay thế cho nhau. Dòng UKP của FYH / NSK / NTN / KOYO cần bạc H (ví dụ UKP205+H2305). SKF không có sản phẩm tương ứng cho lỗ côn dùng bạc siết.',
    noteHeavy: 'Lưu ý: dòng 3xx là dòng tải nặng — cùng đường kính lỗ nhưng đường kính ngoài và tải trọng lớn hơn. UCFS chỉ có ở dòng tải nặng 3xx.',
    noteSize: 'Dòng tải nặng 3xx dùng cùng đường kính lỗ với đường kính ngoài lớn hơn.'
  },
  id: {
    unitTemplate: '(unit {code})',
    isoWithUelSuffix: ' (dengan bantalan UEL)',
    isoWithUkSuffix: ' (dengan bantalan UK + selongsong H)',
    skfNoneInsert: '— (tidak ada padanan SKF)',
    noteLight: 'Catatan: unit bantalan mengikuti ISO 9628, sehingga modelnya sama dengan milik kami dan dimensinya dapat dipertukarkan. Seri UKP dari FYH / NSK / NTN / KOYO memerlukan selongsong H (mis. UKP205+H2305). SKF tidak memiliki padanan untuk lubang tirus dengan selongsong.',
    noteHeavy: 'Catatan: seri 3xx adalah lini beban berat — diameter lubang sama, diameter luar lebih besar dan kapasitas beban lebih tinggi. UCFS hanya tersedia pada seri berat 3xx.',
    noteSize: 'Seri berat 3xx memakai diameter lubang yang sama dengan diameter luar lebih besar.'
  },
  ja: {
    unitTemplate: '（ユニット {code}）',
    isoWithUelSuffix: '（UEL内輪付き）',
    isoWithUkSuffix: '（UK内輪＋Hアダプタスリーブ付き）',
    skfNoneInsert: '—（SKFに対応品なし）',
    noteLight: '注：軸受ユニットはISO 9628に準拠しているため、型式は当社と一致し、寸法は互換性があります。FYH / NSK / NTN / KOYOのUKPシリーズはHアダプタスリーブが必要です（例：UKP205+H2305）。SKFにはテーパ穴＋スリーブの対応品がありません。',
    noteHeavy: '注：3xxは重荷重シリーズです（同軸径で外径・荷重が大きい）。UCFSは3xx重荷重シリーズのみです。',
    noteSize: '3xx重荷重シリーズは同じ内径で外径が大きくなります。'
  },
  ko: {
    unitTemplate: '(유닛 {code})',
    isoWithUelSuffix: ' (UEL 인서트 포함)',
    isoWithUkSuffix: ' (UK 인서트 + H 어댑터 슬리브 포함)',
    skfNoneInsert: '— (SKF 대응 없음)',
    noteLight: '참고: 베어링 유닛은 ISO 9628을 따르므로 모델명이 당사와 동일하고 치수가 호환됩니다. FYH / NSK / NTN / KOYO의 UKP 시리즈는 H 어댑터 슬리브가 필요합니다(예: UKP205+H2305). SKF에는 테이퍼 보어 + 슬리브 대응 제품이 없습니다.',
    noteHeavy: '참고: 3xx는 중하중 시리즈입니다(동일 내경, 더 큰 외경과 높은 하중). UCFS는 3xx 중하중 시리즈에만 있습니다.',
    noteSize: '3xx 중하중 시리즈는 동일한 내경에 외경이 더 큽니다.'
  }
});

const LOCALES = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];
const KEYS = ['unitTemplate', 'isoWithUelSuffix', 'isoWithUkSuffix', 'skfNoneInsert', 'noteLight', 'noteHeavy', 'noteSize'];

/** Localized cross-reference annotations. */
export function xrefNotes(locale) {
  return XREF_NOTES[locale] ?? XREF_NOTES.en;
}

/** Returns a list of problems, or an empty array when every locale is complete. */
export function validateXrefNotes() {
  const issues = [];
  for (const locale of LOCALES) {
    const text = XREF_NOTES[locale];
    if (!text) { issues.push(`${locale}: missing`); continue; }
    for (const key of KEYS) {
      if (typeof text[key] !== 'string' || !text[key].trim()) issues.push(`${locale}.${key}: missing`);
    }
    if (typeof text.unitTemplate === 'string' && !text.unitTemplate.includes('{code}')) {
      issues.push(`${locale}.unitTemplate: missing the {code} placeholder`);
    }
  }
  return issues;
}
