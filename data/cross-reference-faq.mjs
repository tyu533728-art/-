// Frequently asked questions for the cross-reference page, all 13 locales.
//
// Only questions whose answers add something the page does not already say belong here. The notes
// under the two tables already explain the ISO interchangeability, the FYH UKP adapter sleeve and the
// missing SKF 3xx range, so repeating them as Q&A would pad the page without informing anyone.
//
// Shape: XREF_FAQ[locale] = { heading, items: [[question, answer], …] }
// The answers are the same facts in every language; only the wording is translated.

export const XREF_FAQ = Object.freeze({
  en: {
    heading: 'Common questions',
    items: [
      ['What does the number in a model such as UCP205 mean?', 'The last two digits are the bore size code: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm, and so on up to 213 = 65 mm. The code is shared across the series, so UCF205, UCT205 and UCPA205 all take a 25 mm shaft even though the housings differ.'],
      ['What if your model is not listed in the table?', 'This table only covers items for which we have confirmed equivalent models. Please send us the model number and quantity, and we will check availability and match an equivalent from our factory catalogue.']
    ]
  },
  es: {
    heading: 'Preguntas frecuentes',
    items: [
      ['¿Qué significa el número de un modelo como UCP205?', 'Las dos últimas cifras son el código de diámetro: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm, y así hasta 213 = 65 mm. El código es común a toda la serie, por lo que UCF205, UCT205 y UCPA205 admiten un eje de 25 mm aunque el soporte sea distinto.'],
      ['¿Y si su modelo no aparece en la tabla?', 'Esta tabla solo incluye referencias para las que tenemos modelos equivalentes confirmados. Envíenos el modelo y la cantidad y comprobaremos la disponibilidad y buscaremos un equivalente en nuestro catálogo de fábrica.']
    ]
  },
  de: {
    heading: 'Häufige Fragen',
    items: [
      ['Was bedeutet die Zahl in einer Bezeichnung wie UCP205?', 'Die letzten beiden Ziffern sind der Bohrungscode: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm und so weiter bis 213 = 65 mm. Der Code gilt für die ganze Baureihe, deshalb nehmen UCF205, UCT205 und UCPA205 alle eine 25-mm-Welle auf, obwohl sich die Gehäuse unterscheiden.'],
      ['Was, wenn Ihr Modell nicht in der Tabelle steht?', 'Diese Tabelle enthält nur Positionen, für die wir bestätigte Äquivalente haben. Senden Sie uns Modell und Menge, dann prüfen wir die Verfügbarkeit und suchen ein Äquivalent in unserem Werkkatalog.']
    ]
  },
  fr: {
    heading: 'Questions fréquentes',
    items: [
      ['Que signifie le nombre dans une référence comme UCP205 ?', 'Les deux derniers chiffres donnent le code d\'alésage : 204 = 20 mm, 205 = 25 mm, 206 = 30 mm, et ainsi de suite jusqu\'à 213 = 65 mm. Le code est commun à toute la série : UCF205, UCT205 et UCPA205 acceptent donc tous un arbre de 25 mm, même si les boîtiers diffèrent.'],
      ['Et si votre modèle ne figure pas dans le tableau ?', 'Ce tableau ne couvre que les références pour lesquelles nous avons des équivalents confirmés. Envoyez-nous la référence et la quantité : nous vérifierons la disponibilité et chercherons un équivalent dans notre catalogue d\'usine.']
    ]
  },
  pt: {
    heading: 'Perguntas frequentes',
    items: [
      ['O que significa o número num modelo como UCP205?', 'Os dois últimos dígitos são o código do furo: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm, e assim por diante até 213 = 65 mm. O código é comum a toda a série, por isso UCF205, UCT205 e UCPA205 aceitam um veio de 25 mm, ainda que os mancais sejam diferentes.'],
      ['E se o seu modelo não estiver na tabela?', 'Esta tabela apenas cobre referências para as quais temos equivalentes confirmados. Envie-nos o modelo e a quantidade e verificaremos a disponibilidade e procuraremos um equivalente no nosso catálogo de fábrica.']
    ]
  },
  ar: {
    heading: 'الأسئلة الشائعة',
    items: [
      ['ماذا يعني الرقم في طراز مثل UCP205؟', 'الرقمان الأخيران هما رمز قطر التجويف: 204 = 20 mm، و205 = 25 mm، و206 = 30 mm، وهكذا حتى 213 = 65 mm. والرمز مشترك في السلسلة كلها، لذا فإن UCF205 وUCT205 وUCPA205 تستقبل جميعها عمودًا بقطر 25 mm وإن اختلف شكل البيت.'],
      ['وماذا لو لم يكن طرازك مدرجًا في الجدول؟', 'لا يغطي هذا الجدول إلا الطرازات التي لدينا مقابل مؤكد لها. أرسل لنا رقم الطراز والكمية وسنتحقق من التوفر ونطابق مقابلًا في كتالوج مصنعنا.']
    ]
  },
  tr: {
    heading: 'Sık sorulan sorular',
    items: [
      ['UCP205 gibi bir modeldeki sayı ne anlama gelir?', 'Son iki hane delik ölçüsü kodudur: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm ve 213 = 65 mm\'ye kadar böyle devam eder. Kod tüm seride ortaktır; bu nedenle UCF205, UCT205 ve UCPA205 gövdeleri farklı olsa da 25 mm millere uyar.'],
      ['Peki modeliniz tabloda yoksa?', 'Bu tablo yalnızca karşılığını teyit ettiğimiz ürünleri kapsar. Model numarasını ve miktarı bize gönderin; stoğu kontrol edip fabrika kataloğumuzdan bir eşdeğer eşleştirelim.']
    ]
  },
  ru: {
    heading: 'Частые вопросы',
    items: [
      ['Что означает число в обозначении, например UCP205?', 'Последние две цифры — код посадочного диаметра: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm и так далее до 213 = 65 mm. Код общий для всей серии, поэтому UCF205, UCT205 и UCPA205 рассчитаны на вал 25 mm, хотя корпуса у них разные.'],
      ['А если вашего типоразмера нет в таблице?', 'В таблице только позиции, для которых у нас подтверждены аналоги. Пришлите обозначение и количество — мы проверим наличие и подберём аналог по нашему заводскому каталогу.']
    ]
  },
  it: {
    heading: 'Domande frequenti',
    items: [
      ['Che cosa significa il numero in un modello come UCP205?', 'Le ultime due cifre sono il codice dell\'alesaggio: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm e così via fino a 213 = 65 mm. Il codice è comune a tutta la serie, quindi UCF205, UCT205 e UCPA205 accettano tutti un albero da 25 mm anche se i supporti sono diversi.'],
      ['E se il vostro modello non è in tabella?', 'Questa tabella copre solo le referenze per cui abbiamo equivalenti confermati. Inviateci modello e quantità: verificheremo la disponibilità e abbineremo un equivalente dal nostro catalogo di fabbrica.']
    ]
  },
  vi: {
    heading: 'Câu hỏi thường gặp',
    items: [
      ['Con số trong mã như UCP205 có ý nghĩa gì?', 'Hai chữ số cuối là mã đường kính lỗ: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm, và tiếp tục đến 213 = 65 mm. Mã này dùng chung cho cả dòng, nên UCF205, UCT205 và UCPA205 đều lắp trục 25 mm dù gối đỡ khác nhau.'],
      ['Nếu mã của bạn không có trong bảng thì sao?', 'Bảng này chỉ gồm những mã mà chúng tôi đã xác nhận có tương ứng. Hãy gửi mã và số lượng, chúng tôi sẽ kiểm tra tình trạng hàng và ghép một mã tương ứng từ catalogue nhà máy của chúng tôi.']
    ]
  },
  id: {
    heading: 'Pertanyaan umum',
    items: [
      ['Apa arti angka pada model seperti UCP205?', 'Dua digit terakhir adalah kode diameter lubang: 204 = 20 mm, 205 = 25 mm, 206 = 30 mm, dan seterusnya hingga 213 = 65 mm. Kode ini berlaku untuk seluruh seri, sehingga UCF205, UCT205, dan UCPA205 semuanya menerima poros 25 mm meski rumahnya berbeda.'],
      ['Bagaimana jika model Anda tidak tercantum di tabel?', 'Tabel ini hanya memuat item yang padanannya sudah kami konfirmasi. Kirimkan nomor model dan jumlahnya, kami akan memeriksa ketersediaan dan mencocokkan padanannya dari katalog pabrik kami.']
    ]
  },
  ja: {
    heading: 'よくあるご質問',
    items: [
      ['UCP205 のような型番の数字は何を表しますか？', '末尾2桁が内径のサイズコードです。204 = 20 mm、205 = 25 mm、206 = 30 mm、213 = 65 mm まで同じ規則です。コードはシリーズ共通なので、ハウジング形状が違っても UCF205・UCT205・UCPA205 はいずれも 25 mm の軸に適合します。'],
      ['お使いの型番が表にない場合は？', 'この表は、相当品を確認できている品番のみを掲載しています。型番と数量をお知らせいただければ、在庫を確認し、当社工場カタログから相当品をご提案します。']
    ]
  },
  ko: {
    heading: '자주 묻는 질문',
    items: [
      ['UCP205 같은 모델의 숫자는 무엇을 뜻합니까?', '끝 두 자리가 내경 사이즈 코드입니다. 204 = 20 mm, 205 = 25 mm, 206 = 30 mm, 213 = 65 mm까지 같은 규칙입니다. 코드는 시리즈 공통이므로 하우징 모양이 달라도 UCF205, UCT205, UCPA205 모두 25 mm 축에 맞습니다.'],
      ['모델이 표에 없다면 어떻게 합니까?', '이 표는 대응품을 확인한 품목만 담고 있습니다. 모델 번호와 수량을 보내주시면 재고를 확인하고 당사 공장 카탈로그에서 대응품을 찾아 드립니다.']
    ]
  }
});

const LOCALES = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];
const EXPECTED_ITEMS = 2;

/** Returns a list of problems, or an empty array when every locale is complete. */
export function validateXrefFaq() {
  const issues = [];
  for (const locale of LOCALES) {
    const entry = XREF_FAQ[locale];
    if (!entry) { issues.push(`${locale}: missing`); continue; }
    if (typeof entry.heading !== 'string' || !entry.heading.trim()) issues.push(`${locale}.heading: missing`);
    if (!Array.isArray(entry.items) || entry.items.length !== EXPECTED_ITEMS) {
      issues.push(`${locale}.items: expected ${EXPECTED_ITEMS} questions`);
      continue;
    }
    entry.items.forEach((item, index) => {
      if (!Array.isArray(item) || item.length !== 2
        || typeof item[0] !== 'string' || !item[0].trim()
        || typeof item[1] !== 'string' || !item[1].trim()) {
        issues.push(`${locale}.items[${index}]: malformed`);
      }
    });
  }
  return issues;
}
