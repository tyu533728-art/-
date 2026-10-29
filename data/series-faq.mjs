/**
 * Series-page FAQ, rendered as a visible accordion and marked up as FAQPage.
 *
 * Iron rules, same as data/guides.mjs: only general engineering facts that hold for every series in
 * this catalogue. No model-to-model cross-reference, no price, no stock figure, no certification
 * claim. The answers below restate facts already published elsewhere on the site (HT200 housing,
 * H7 bearing seat, matched unit shipping) rather than introducing anything new.
 *
 * Placeholders: {series} is replaced with the series display name, {category} with the localised
 * category title.
 */
export const SERIES_FAQ = Object.freeze({
  en: {
    heading: 'Common questions',
    items: [
      {
        q: 'What bore sizes does the {series} series cover?',
        a: 'The series follows the standard metric size steps: the last two digits of the model number give the shaft diameter, so {series}208 fits a 28.6 mm shaft (1-1/8 in) and the sizes step up from there. Send us the shaft diameter and we will confirm the exact model.'
      },
      {
        q: 'What material is the {series} housing made of?',
        a: 'Grey cast iron to HT200, the standard for this product family. The bearing seat is machined to an H7 tolerance band so the outer ring is held firmly without losing internal clearance.'
      },
      {
        q: 'Can the housing and bearing be supplied as a matched set?',
        a: 'Yes. {series} is supplied as a complete unit with the insert bearing already fitted and the locking method set at the factory, so the housing and bearing cannot be mismatched on assembly.'
      },
      {
        q: 'How do I confirm {series} is the right series for my machine?',
        a: 'Send the shaft diameter, the mounting surface (flat base, vertical plate or take-up frame) and a photo of the current part. We confirm the series, the bore and the locking type, then quote the matched set.'
      }
    ]
  },
  es: {
    heading: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Qué diámetros de eje cubre la serie {series}?',
        a: 'La serie sigue los escalones métricos estándar: los dos últimos dígitos del modelo indican el diámetro del eje, así que {series}208 corresponde a un eje de 28,6 mm (1-1/8 in) y los tamaños suben desde ahí. Envíenos el diámetro y le confirmamos el modelo exacto.'
      },
      {
        q: '¿De qué material es la carcasa de {series}?',
        a: 'Fundición gris HT200, el estándar de esta familia de productos. El asiento del rodamiento se mecaniza con tolerancia H7 para que el aro exterior quede firme sin perder el juego interno.'
      },
      {
        q: '¿Se pueden suministrar carcasa y rodamiento como conjunto?',
        a: 'Sí. {series} se suministra como unidad completa con el rodamiento inserto ya montado y el sistema de fijación ajustado en fábrica, de modo que no pueden aparearse piezas de series distintas.'
      },
      {
        q: '¿Cómo confirmo que {series} es la serie adecuada para mi máquina?',
        a: 'Envíenos el diámetro del eje, la superficie de montaje (base plana, placa vertical o bastidor tensores) y una foto de la pieza actual. Confirmamos serie, diámetro y fijación, y cotizamos el conjunto.'
      }
    ]
  },
  de: {
    heading: 'Häufige Fragen',
    items: [
      {
        q: 'Welche Wellendurchmesser deckt die Baureihe {series} ab?',
        a: 'Die Baureihe folgt den metrischen Normstufen: die letzten beiden Ziffern der Typenbezeichnung geben den Wellendurchmesser an, {series}208 entspricht also einer 28,6-mm-Welle (1-1/8 in), und die Größen steigen von dort. Nennen Sie uns den Wellendurchmesser, wir bestätigen den genauen Typ.'
      },
      {
        q: 'Aus welchem Werkstoff besteht das Gehäuse von {series}?',
        a: 'Grauguss HT200, der Standard dieser Produktfamilie. Der Lagersitz wird auf H7 bearbeitet, damit der Außenring fest sitzt, ohne dass das innere Spiel verloren geht.'
      },
      {
        q: 'Sind Gehäuse und Lager als abgestimmter Satz lieferbar?',
        a: 'Ja. {series} wird als komplette Einheit mit bereits montiertem Stecklager und werkseitig eingestellter Befestigung geliefert, sodass Gehäuse und Lager bei der Montage nicht verwechselt werden können.'
      },
      {
        q: 'Wie prüfe ich, ob {series} die richtige Baureihe für meine Maschine ist?',
        a: 'Senden Sie Wellendurchmesser, Montagefläche (ebene Basis, senkrechte Platte oder Spannrahmen) und ein Foto des aktuellen Teils. Wir bestätigen Baureihe, Bohrung und Befestigungsart und bieten den abgestimmten Satz an.'
      }
    ]
  },
  fr: {
    heading: 'Questions fréquentes',
    items: [
      {
        q: 'Quels diamètres d\'arbre la série {series} couvre-t-elle ?',
        a: 'La série suit les échelons métriques normalisés : les deux derniers chiffres du modèle donnent le diamètre d\'arbre, donc {series}208 correspond à un arbre de 28,6 mm (1-1/8 in) et les tailles augmentent à partir de là. Indiquez-nous le diamètre et nous confirmerons le modèle exact.'
      },
      {
        q: 'En quel matériau est le boîtier de la série {series} ?',
        a: 'Fonte grise HT200, la norme de cette famille de produits. La portée du roulement est usinée en H7 afin que la bague extérieure reste fermement en place sans perdre le jeu interne.'
      },
      {
        q: 'Le boîtier et le roulement peuvent-ils être fournis en ensemble apparié ?',
        a: 'Oui. {series} est livré en unité complète, roulement inséré déjà monté et fixation réglée en usine, ce qui exclut tout appariement erroné au montage.'
      },
      {
        q: 'Comment vérifier que {series} est la bonne série pour ma machine ?',
        a: 'Envoyez le diamètre d\'arbre, la surface de montage (base plane, plaque verticale ou cadre tendeur) et une photo de la pièce actuelle. Nous confirmons la série, l\'alésage et le type de fixation, puis chiffrons l\'ensemble.'
      }
    ]
  },
  pt: {
    heading: 'Perguntas frequentes',
    items: [
      {
        q: 'Que diâmetros de eixo a série {series} cobre?',
        a: 'A série segue os passos métricos padrão: os dois últimos dígitos do modelo indicam o diâmetro do eixo, então {series}208 corresponde a um eixo de 28,6 mm (1-1/8 in) e os tamanhos sobem a partir daí. Envie o diâmetro e confirmamos o modelo exato.'
      },
      {
        q: 'De que material é a caixa da série {series}?',
        a: 'Ferro fundido cinzento HT200, o padrão desta família de produtos. O assento do rolamento é usinado com tolerância H7 para que o anel externo fique firme sem perder a folga interna.'
      },
      {
        q: 'Caixa e rolamento podem ser fornecidos como conjunto?',
        a: 'Sim. {series} é fornecido como unidade completa, com o rolamento inserto já montado e o sistema de fixação ajustado em fábrica, o que impede o pareamento errado na montagem.'
      },
      {
        q: 'Como confirmo que {series} é a série certa para a minha máquina?',
        a: 'Envie o diâmetro do eixo, a superfície de montagem (base plana, placa vertical ou quadro tensor) e uma foto da peça atual. Confirmamos série, furo e tipo de fixação, e orçamos o conjunto.'
      }
    ]
  },
  ar: {
    heading: 'أسئلة شائعة',
    items: [
      {
        q: 'ما أقطار الأعمدة التي تغطيها سلسلة {series}؟',
        a: 'تتبع السلسلة درجات القياس المترية القياسية: الرقمان الأخيران في رقم الطراز يدلان على قطر العمود، لذا {series}208 يناسب عمودًا بقطر 28.6 مم (1-1/8 بوصة)، وترتفع المقاسات من هناك. أرسل لنا قطر العمود لنؤكد الطراز بدقة.'
      },
      {
        q: 'من أي مادة يُصنع هيكل {series}؟',
        a: 'حديد زهر رمادي HT200، وهو المعيار في هذه العائلة من المنتجات. يُشغَّل مقعد المحمل بتفاوت H7 ليثبت الحلقة الخارجية بإحكام دون فقدان الخلوص الداخلي.'
      },
      {
        q: 'هل يمكن توريد الهيكل والمحمل كمجموعة متطابقة؟',
        a: 'نعم. يُورَّد {series} كوحدة كاملة والمحمل المُدخل مركَّب مسبقًا وطريقة التثبيت مضبوطة في المصنع، فلا يمكن أن يحدث خلط بين الهيكل والمحمل أثناء التركيب.'
      },
      {
        q: 'كيف أتأكد أن {series} هي السلسلة المناسبة لآلتي؟',
        a: 'أرسل قطر العمود وسطح التركيب (قاعدة أفقية أو لوح رأسي أو إطار شدّ) وصورة للقطعة الحالية. نؤكد السلسلة والقطر ونوع التثبيت ثم نقدّم عرض سعر للمجموعة.'
      }
    ]
  },
  tr: {
    heading: 'Sık sorulan sorular',
    items: [
      {
        q: '{series} serisi hangi mil çaplarını kapsar?',
        a: 'Seri standart metrik kademeleri izler: model numarasının son iki hanesi mil çapını verir, yani {series}208 28,6 mm (1-1/8 inç) mile karşılık gelir ve boyutlar oradan yukarı çıkar. Mili çapını gönderin, tam modeli teyit edelim.'
      },
      {
        q: '{series} gövdesi hangi malzemeden yapılır?',
        a: 'Bu ürün ailesinin standardı olan HT200 gri dökme demir. Rulman yatağı H7 toleransında işlenir; böylece dış halka, iç boşluk kaybolmadan sağlam oturur.'
      },
      {
        q: 'Gövde ve rulman eşleştirilmiş set olarak verilebilir mi?',
        a: 'Evet. {series}, takılı insert rulman ve fabrikada ayarlanmış kilitleme yöntemiyle komple ünite olarak verilir; montaj sırasında gövde ile rulmanın karışması mümkün olmaz.'
      },
      {
        q: '{series} makinem için doğru seri mi, nasıl teyit ederim?',
        a: 'Mil çapını, montaj yüzeyini (düz taban, dikey plaka veya gergi çerçevesi) ve mevcut parçanın fotoğrafını gönderin. Seriyi, çapı ve kilitleme tipini teyit edip setin fiyatını verelim.'
      }
    ]
  },
  ru: {
    heading: 'Частые вопросы',
    items: [
      {
        q: 'Какие диаметры вала охватывает серия {series}?',
        a: 'Серия следует стандартным метрическим ступеням: две последние цифры номера модели обозначают диаметр вала, поэтому {series}208 соответствует валу 28,6 мм (1-1/8 дюйма), и далее размеры растут. Пришлите диаметр вала — подтвердим точную модель.'
      },
      {
        q: 'Из какого материала изготовлен корпус {series}?',
        a: 'Серый чугун HT200 — стандарт для этого семейства изделий. Посадочное место подшипника обрабатывается по допуску H7, чтобы наружное кольцо сидело плотно без потери внутреннего зазора.'
      },
      {
        q: 'Можно ли поставить корпус и подшипник в виде подобранного комплекта?',
        a: 'Да. {series} поставляется как готовый узел: вставной подшипник уже установлен, способ фиксации отрегулирован на заводе, поэтому перепутать корпус и подшипник при сборке невозможно.'
      },
      {
        q: 'Как убедиться, что {series} подходит для моего оборудования?',
        a: 'Пришлите диаметр вала, поверхность крепления (плоское основание, вертикальная плита или натяжная рама) и фото текущей детали. Подтвердим серию, диаметр и тип фиксации и рассчитаем стоимость комплекта.'
      }
    ]
  },
  it: {
    heading: 'Domande frequenti',
    items: [
      {
        q: 'Quali diametri d\'albero copre la serie {series}?',
        a: 'La serie segue i passi metrici standard: le ultime due cifre del modello indicano il diametro d\'albero, quindi {series}208 corrisponde a un albero da 28,6 mm (1-1/8 in) e le misure salgono da lì. Ci invii il diametro e confermiamo il modello esatto.'
      },
      {
        q: 'In che materiale è la scatola della serie {series}?',
        a: 'Ghisa grigia HT200, lo standard di questa famiglia di prodotti. La sede del cuscinetto è lavorata con tolleranza H7, così l\'anello esterno resta saldo senza perdere il gioco interno.'
      },
      {
        q: 'Scatola e cuscinetto possono essere forniti come gruppo abbinato?',
        a: 'Sì. {series} viene fornito come unità completa, con il cuscinetto inserito già montato e il sistema di fissaggio regolato in fabbrica, così non è possibile abbinare pezzi di serie diverse.'
      },
      {
        q: 'Come verifico che {series} sia la serie giusta per la mia macchina?',
        a: 'Ci invii diametro d\'albero, superficie di montaggio (base piana, piastra verticale o telaio tenditore) e una foto del pezzo attuale. Confermiamo serie, alesaggio e tipo di fissaggio, poi quotiamo il gruppo.'
      }
    ]
  },
  vi: {
    heading: 'Câu hỏi thường gặp',
    items: [
      {
        q: 'Dòng {series} dùng cho những đường kính trục nào?',
        a: 'Dòng sản phẩm theo các bậc kích thước mét tiêu chuẩn: hai chữ số cuối của mã model cho biết đường kính trục, nên {series}208 tương ứng trục 28,6 mm (1-1/8 in) và các cỡ lớn hơn tăng dần từ đó. Gửi đường kính trục, chúng tôi xác nhận model chính xác.'
      },
      {
        q: 'Vỏ của {series} làm bằng vật liệu gì?',
        a: 'Gang xám HT200, tiêu chuẩn của dòng sản phẩm này. Ổ đặt vòng bi được gia công theo dung sai H7 để vòng ngoài giữ chắc mà không mất khe hở bên trong.'
      },
      {
        q: 'Có thể cung cấp vỏ và vòng bi thành bộ đồng bộ không?',
        a: 'Có. {series} được cung cấp như một cụm hoàn chỉnh, vòng bi chèn đã lắp sẵn và cách khóa đã chỉnh tại nhà máy, nên không thể lắp nhầm vỏ với vòng bi khi lắp ráp.'
      },
      {
        q: 'Làm sao xác nhận {series} là dòng phù hợp cho máy của tôi?',
        a: 'Gửi đường kính trục, bề mặt lắp (đế phẳng, tấm đứng hoặc khung căng) và ảnh chi tiết hiện tại. Chúng tôi xác nhận dòng, đường kính và kiểu khóa rồi báo giá bộ đồng bộ.'
      }
    ]
  },
  id: {
    heading: 'Pertanyaan umum',
    items: [
      {
        q: 'Berapa diameter poros yang dicakup seri {series}?',
        a: 'Seri ini mengikuti tingkatan metrik standar: dua digit terakhir nomor model menunjukkan diameter poros, jadi {series}208 sesuai untuk poros 28,6 mm (1-1/8 in) dan ukuran naik dari sana. Kirimkan diameter poros, kami konfirmasi model persisnya.'
      },
      {
        q: 'Dari bahan apa rumah {series} dibuat?',
        a: 'Besi cor kelabu HT200, standar untuk keluarga produk ini. Dudukan bantalan dikerjakan dengan toleransi H7 agar cincin luar duduk kuat tanpa kehilangan kelonggaran internal.'
      },
      {
        q: 'Bisakah rumah dan bantalan dipasok sebagai set yang cocok?',
        a: 'Ya. {series} dipasok sebagai unit lengkap, bantalan sisip sudah terpasang dan metode penguncian disetel di pabrik, sehingga rumah dan bantalan tidak mungkin tertukar saat perakitan.'
      },
      {
        q: 'Bagaimana memastikan {series} adalah seri yang tepat untuk mesin saya?',
        a: 'Kirimkan diameter poros, permukaan pemasangan (dasar datar, pelat vertikal, atau rangka penegang) dan foto komponen saat ini. Kami konfirmasi seri, bore, dan jenis penguncian, lalu menawarkan set yang cocok.'
      }
    ]
  },
  ja: {
    heading: 'よくあるご質問',
    items: [
      {
        q: '{series} シリーズはどの軸径に対応しますか？',
        a: '本シリーズは標準的なメートル寸法の段階に従います。型番の下2桁が軸径を示すため、{series}208 は軸径 28.6 mm（1-1/8 インチ）に対応し、以降サイズが大きくなります。軸径をお知らせいただければ、正確な型番を確定いたします。'
      },
      {
        q: '{series} のハウジング材質は何ですか？',
        a: 'この製品ファミリーの標準であるねずみ鋳鉄 HT200 です。軸受座は H7 公差で加工され、内部すきまを損なわずに外輪をしっかり保持します。'
      },
      {
        q: 'ハウジングと軸受を組で供給できますか？',
        a: 'はい。{series} はインサート軸受を組み込み、締結方式を工場で調整した完成ユニットとして供給されるため、組立時に異なるシリーズを組み合わせる恐れがありません。'
      },
      {
        q: '{series} が自社設備に適したシリーズか確認する方法は？',
        a: '軸径、取付面（平底・垂直板・テークアップフレーム）、現行品の写真をお送りください。シリーズ、穴径、締結方式を確認し、適合する組の見積りをご提示します。'
      }
    ]
  },
  ko: {
    heading: '자주 묻는 질문',
    items: [
      {
        q: '{series} 시리즈는 어떤 축경을 지원합니까?',
        a: '이 시리즈는 표준 미터법 단계를 따릅니다. 모델 번호의 끝 두 자리가 축경을 나타내므로 {series}208 은 28.6 mm(1-1/8인치) 축에 해당하며 이후 크기가 커집니다. 축경을 알려주시면 정확한 모델을 확인해 드립니다.'
      },
      {
        q: '{series} 하우징은 어떤 재질입니까?',
        a: '이 제품군의 표준인 회주철 HT200입니다. 베어링 시트는 H7 공차로 가공되어 내부 틈새를 잃지 않으면서 외륜을 견고하게 고정합니다.'
      },
      {
        q: '하우징과 베어링을 세트로 공급할 수 있습니까?',
        a: '가능합니다. {series} 는 인서트 베어링이 장착되고 고정 방식이 공장에서 조정된 완제품 유닛으로 공급되므로 조립 시 다른 시리즈가 섞일 수 없습니다.'
      },
      {
        q: '{series} 가 제 설비에 맞는 시리즈인지 어떻게 확인합니까?',
        a: '축경, 장착면(평평한 베이스, 수직 판, 테이크업 프레임), 현재 부품 사진을 보내주십시오. 시리즈와 보어, 고정 방식을 확인한 뒤 세트 견적을 제시합니다.'
      }
    ]
  }
});

/**
 * Fill {series} / {category} into the localised strings. Returns the four question-answer pairs for
 * a series, or an empty array when the locale has no FAQ block.
 */
export function seriesFaqFor(locale, seriesName, categoryTitle) {
  const block = SERIES_FAQ[locale] ?? SERIES_FAQ.en;
  if (!block) return { heading: '', items: [] };
  const fill = value => value.replaceAll('{series}', seriesName).replaceAll('{category}', categoryTitle);
  return { heading: block.heading, items: block.items.map(item => ({ q: fill(item.q), a: fill(item.a) })) };
}
