// Privacy Policy and Terms of Use in all 13 locales.
//
// The English text is the source: it is what the owner published. Every translation must keep
// exactly the same substance — no promise, claim, obligation or legal position may be added or
// dropped. Each localized page also carries a "prevails" line naming the English version, so a
// wording difference can never change the meaning of the terms.
//
// Shape: LEGAL_I18N[locale] = {
//   prevails: string,
//   privacy: { title, lead, blocks: [[heading, [paragraph, …]], …] },
//   terms:   { title, lead, blocks: [[heading, [paragraph, …]], …] }
// }
// The eyebrow above the title stays "Legal" in the page markup, as it does in English.

export const LEGAL_I18N = Object.freeze({
  en: {
    prevails: 'The English version of this page prevails.',
    privacy: {
      title: 'Privacy Policy',
      lead: 'How this website handles your personal data.',
      blocks: [
        ['What we collect', [
          'This website does not use analytics, advertising cookies or tracking scripts. We do not collect personal data automatically.',
          'We only receive information you choose to send us — for example, when you write to our e-mail or WhatsApp to ask about products. We use that information solely to answer your enquiry and to communicate with you about the products and services you asked about.'
        ]],
        ['How we use and keep it', [
          'We do not sell, rent or share your contact details with third parties for marketing. Access is limited to the people handling your enquiry. We keep correspondence only as long as needed to complete the business purpose you contacted us for, unless the law requires longer.'
        ]],
        ['Links to other services', [
          'This site links to third-party services such as WhatsApp and Facebook. When you use those links, the third party processes data under its own privacy policy, which we do not control.'
        ]],
        ['Contact', [
          'Questions about this policy can be sent to the e-mail shown in the page footer.'
        ]]
      ]
    },
    terms: {
      title: 'Terms of Use',
      lead: 'The conditions for using this website.',
      blocks: [
        ['Informational content', [
          'This website is an informational product catalogue. It does not constitute an offer, a quotation or a warranty. Product images show appearance only and are not a source of technical parameters. Specifications, dimensions, prices and availability are confirmed in writing when you contact us.'
        ]],
        ['Business terms', [
          'Orders, delivery, payment and quality terms are agreed individually in writing between the parties. Nothing on this website modifies those agreements.'
        ]],
        ['Intellectual property', [
          'All text, images, design and trademarks on this site belong to their respective owners. Content may not be copied for commercial use without written permission.'
        ]],
        ['Liability', [
          'We keep the information on this site accurate to the best of our knowledge, but it is provided as is. To the extent permitted by law, we are not liable for decisions made based on this content without confirming the details with us in writing.'
        ]],
        ['Governing law', [
          'These terms are governed by the laws of the People\'s Republic of China. Any dispute will first be handled through friendly negotiation.'
        ]]
      ]
    }
  },
  es: {
    prevails: 'Prevalece la versión en inglés de esta página.',
    privacy: {
      title: 'Política de privacidad',
      lead: 'Cómo trata este sitio web sus datos personales.',
      blocks: [
        ['Qué recopilamos', [
          'Este sitio web no utiliza analíticas, cookies publicitarias ni scripts de seguimiento. No recopilamos datos personales de forma automática.',
          'Solo recibimos la información que usted decide enviarnos — por ejemplo, cuando escribe a nuestro correo electrónico o WhatsApp para preguntar por productos. Usamos esa información únicamente para responder a su consulta y comunicarnos con usted sobre los productos y servicios por los que preguntó.'
        ]],
        ['Cómo la usamos y cuánto tiempo la conservamos', [
          'No vendemos, alquilamos ni compartimos sus datos de contacto con terceros con fines de marketing. El acceso se limita a las personas que gestionan su consulta. Conservamos la correspondencia solo el tiempo necesario para completar el fin comercial por el que nos contactó, salvo que la ley exija un plazo mayor.'
        ]],
        ['Enlaces a otros servicios', [
          'Este sitio enlaza con servicios de terceros como WhatsApp y Facebook. Cuando utiliza esos enlaces, el tercero trata los datos conforme a su propia política de privacidad, que no controlamos.'
        ]],
        ['Contacto', [
          'Las preguntas sobre esta política pueden enviarse al correo electrónico que figura en el pie de página.'
        ]]
      ]
    },
    terms: {
      title: 'Términos de uso',
      lead: 'Las condiciones de uso de este sitio web.',
      blocks: [
        ['Contenido informativo', [
          'Este sitio web es un catálogo de productos informativo. No constituye una oferta, una cotización ni una garantía. Las imágenes de producto muestran únicamente el aspecto y no son fuente de parámetros técnicos. Las especificaciones, dimensiones, precios y disponibilidad se confirman por escrito cuando nos contacta.'
        ]],
        ['Condiciones comerciales', [
          'Las condiciones de pedido, entrega, pago y calidad se acuerdan individualmente por escrito entre las partes. Nada de este sitio web modifica esos acuerdos.'
        ]],
        ['Propiedad intelectual', [
          'Todos los textos, imágenes, diseños y marcas de este sitio pertenecen a sus respectivos titulares. El contenido no puede copiarse para uso comercial sin autorización por escrito.'
        ]],
        ['Responsabilidad', [
          'Mantenemos la información de este sitio con la mayor exactitud posible según nuestro conocimiento, pero se ofrece tal cual. En la medida permitida por la ley, no somos responsables de las decisiones tomadas a partir de este contenido sin confirmar antes los detalles con nosotros por escrito.'
        ]],
        ['Legislación aplicable', [
          'Estos términos se rigen por las leyes de la República Popular China. Cualquier disputa se tratará primero mediante negociación amistosa.'
        ]]
      ]
    }
  },
  de: {
    prevails: 'Es gilt die englische Fassung dieser Seite.',
    privacy: {
      title: 'Datenschutzerklärung',
      lead: 'Wie diese Website mit Ihren personenbezogenen Daten umgeht.',
      blocks: [
        ['Was wir erfassen', [
          'Diese Website verwendet keine Analyse-, Werbe-Cookies oder Tracking-Skripte. Wir erfassen keine personenbezogenen Daten automatisch.',
          'Wir erhalten nur Informationen, die Sie uns freiwillig senden — zum Beispiel, wenn Sie uns per E-Mail oder WhatsApp zu Produkten schreiben. Wir nutzen diese Informationen ausschließlich, um Ihre Anfrage zu beantworten und mit Ihnen über die angefragten Produkte und Leistungen zu kommunizieren.'
        ]],
        ['Wie wir sie nutzen und wie lange wir sie behalten', [
          'Wir verkaufen, vermieten oder teilen Ihre Kontaktdaten nicht zu Marketingzwecken mit Dritten. Der Zugriff ist auf die Personen beschränkt, die Ihre Anfrage bearbeiten. Wir bewahren Korrespondenz nur so lange auf, wie es für den Geschäftszweck erforderlich ist, für den Sie uns kontaktiert haben, sofern das Gesetz keine längere Frist vorschreibt.'
        ]],
        ['Links zu anderen Diensten', [
          'Diese Seite verlinkt auf Dienste Dritter wie WhatsApp und Facebook. Wenn Sie diese Links nutzen, verarbeitet der Dritte Daten nach seiner eigenen Datenschutzerklärung, auf die wir keinen Einfluss haben.'
        ]],
        ['Kontakt', [
          'Fragen zu dieser Erklärung können an die im Seitenfuß angegebene E-Mail-Adresse gerichtet werden.'
        ]]
      ]
    },
    terms: {
      title: 'Nutzungsbedingungen',
      lead: 'Die Bedingungen für die Nutzung dieser Website.',
      blocks: [
        ['Informationsgehalt', [
          'Diese Website ist ein informierender Produktkatalog. Sie stellt kein Angebot, keine Offerte und keine Gewährleistung dar. Produktbilder zeigen nur das Aussehen und sind keine Quelle technischer Parameter. Spezifikationen, Abmessungen, Preise und Verfügbarkeit werden bei Ihrer Kontaktaufnahme schriftlich bestätigt.'
        ]],
        ['Geschäftsbedingungen', [
          'Bedingungen zu Bestellung, Lieferung, Zahlung und Qualität werden individuell schriftlich zwischen den Parteien vereinbart. Nichts auf dieser Website ändert diese Vereinbarungen.'
        ]],
        ['Geistiges Eigentum', [
          'Alle Texte, Bilder, Designs und Marken auf dieser Seite gehören ihren jeweiligen Inhabern. Inhalte dürfen ohne schriftliche Genehmigung nicht für kommerzielle Zwecke kopiert werden.'
        ]],
        ['Haftung', [
          'Wir halten die Informationen auf dieser Seite nach bestem Wissen aktuell; sie werden jedoch ohne Gewähr bereitgestellt. Soweit gesetzlich zulässig, haften wir nicht für Entscheidungen, die auf Basis dieser Inhalte getroffen werden, ohne die Details vorher schriftlich mit uns abzustimmen.'
        ]],
        ['Anwendbares Recht', [
          'Diese Bedingungen unterliegen dem Recht der Volksrepublik China. Streitigkeiten werden zunächst durch gütliche Verhandlung geklärt.'
        ]]
      ]
    }
  },
  fr: {
    prevails: 'La version anglaise de cette page fait foi.',
    privacy: {
      title: 'Politique de confidentialité',
      lead: 'Comment ce site traite vos données personnelles.',
      blocks: [
        ['Ce que nous collectons', [
          'Ce site n\'utilise ni analytique, ni cookies publicitaires, ni scripts de suivi. Nous ne collectons pas de données personnelles automatiquement.',
          'Nous recevons uniquement les informations que vous choisissez de nous envoyer — par exemple lorsque vous écrivez à notre e-mail ou à notre WhatsApp pour poser une question sur nos produits. Nous utilisons ces informations uniquement pour répondre à votre demande et communiquer avec vous au sujet des produits et services concernés.'
        ]],
        ['Utilisation et conservation', [
          'Nous ne vendons, ne louons ni ne partageons vos coordonnées avec des tiers à des fins de marketing. L\'accès est limité aux personnes qui traitent votre demande. Nous conservons la correspondance uniquement le temps nécessaire à la finalité commerciale pour laquelle vous nous avez contactés, sauf obligation légale plus longue.'
        ]],
        ['Liens vers d\'autres services', [
          'Ce site renvoie à des services tiers tels que WhatsApp et Facebook. Lorsque vous utilisez ces liens, le tiers traite les données selon sa propre politique de confidentialité, que nous ne contrôlons pas.'
        ]],
        ['Contact', [
          'Les questions relatives à cette politique peuvent être adressées à l\'e-mail indiqué en pied de page.'
        ]]
      ]
    },
    terms: {
      title: 'Conditions d\'utilisation',
      lead: 'Les conditions d\'utilisation de ce site.',
      blocks: [
        ['Contenu informatif', [
          'Ce site est un catalogue de produits informatif. Il ne constitue ni une offre, ni un devis, ni une garantie. Les images de produits montrent uniquement l\'apparence et ne constituent pas une source de paramètres techniques. Les spécifications, dimensions, prix et disponibilités sont confirmés par écrit lorsque vous nous contactez.'
        ]],
        ['Conditions commerciales', [
          'Les conditions de commande, de livraison, de paiement et de qualité sont convenues individuellement par écrit entre les parties. Rien sur ce site ne modifie ces accords.'
        ]],
        ['Propriété intellectuelle', [
          'Tous les textes, images, designs et marques de ce site appartiennent à leurs propriétaires respectifs. Le contenu ne peut être copié à des fins commerciales sans autorisation écrite.'
        ]],
        ['Responsabilité', [
          'Nous maintenons les informations de ce site aussi exactes que possible selon nos connaissances, mais elles sont fournies en l\'état. Dans la mesure permise par la loi, nous ne sommes pas responsables des décisions prises sur la base de ce contenu sans confirmation écrite préalable des détails.'
        ]],
        ['Droit applicable', [
          'Ces conditions sont régies par les lois de la République populaire de Chine. Tout litige sera d\'abord traité par négociation amiable.'
        ]]
      ]
    }
  },
  pt: {
    prevails: 'Prevalece a versão em inglês desta página.',
    privacy: {
      title: 'Política de privacidade',
      lead: 'Como este site trata os seus dados pessoais.',
      blocks: [
        ['O que recolhemos', [
          'Este site não utiliza analítica, cookies publicitários nem scripts de rastreamento. Não recolhemos dados pessoais automaticamente.',
          'Recebemos apenas as informações que decide enviar-nos — por exemplo, quando escreve para o nosso e-mail ou WhatsApp a perguntar sobre produtos. Utilizamos essas informações apenas para responder ao seu pedido e comunicar consigo sobre os produtos e serviços em causa.'
        ]],
        ['Como as utilizamos e durante quanto tempo as guardamos', [
          'Não vendemos, alugamos nem partilhamos os seus dados de contacto com terceiros para fins de marketing. O acesso é limitado às pessoas que tratam do seu pedido. Guardamos a correspondência apenas durante o tempo necessário para cumprir a finalidade comercial do seu contacto, salvo se a lei exigir um prazo mais longo.'
        ]],
        ['Ligações para outros serviços', [
          'Este site contém ligações para serviços de terceiros como WhatsApp e Facebook. Ao utilizar essas ligações, o terceiro trata os dados segundo a sua própria política de privacidade, que não controlamos.'
        ]],
        ['Contacto', [
          'As questões sobre esta política podem ser enviadas para o e-mail indicado no rodapé da página.'
        ]]
      ]
    },
    terms: {
      title: 'Termos de utilização',
      lead: 'As condições de utilização deste site.',
      blocks: [
        ['Conteúdo informativo', [
          'Este site é um catálogo de produtos informativo. Não constitui uma oferta, uma cotação nem uma garantia. As imagens dos produtos mostram apenas o aspeto e não são fonte de parâmetros técnicos. Especificações, dimensões, preços e disponibilidade são confirmados por escrito quando nos contacta.'
        ]],
        ['Condições comerciais', [
          'As condições de encomenda, entrega, pagamento e qualidade são acordadas individualmente por escrito entre as partes. Nada neste site altera esses acordos.'
        ]],
        ['Propriedade intelectual', [
          'Todos os textos, imagens, design e marcas deste site pertencem aos respetivos titulares. O conteúdo não pode ser copiado para uso comercial sem autorização escrita.'
        ]],
        ['Responsabilidade', [
          'Mantemos as informações deste site tão exatas quanto possível segundo o nosso conhecimento, mas são fornecidas tal como estão. Na medida permitida por lei, não somos responsáveis por decisões tomadas com base neste conteúdo sem confirmação escrita prévia dos detalhes.'
        ]],
        ['Lei aplicável', [
          'Estes termos regem-se pelas leis da República Popular da China. Qualquer litígio será primeiro tratado através de negociação amigável.'
        ]]
      ]
    }
  },
  ar: {
    prevails: 'النسخة الإنجليزية من هذه الصفحة هي المعتمدة.',
    privacy: {
      title: 'سياسة الخصوصية',
      lead: 'كيف يتعامل هذا الموقع مع بياناتك الشخصية.',
      blocks: [
        ['ما نجمعه', [
          'لا يستخدم هذا الموقع أدوات تحليل أو ملفات تعريف إعلانية أو نصوص تتبّع. ولا نجمع البيانات الشخصية تلقائيًا.',
          'لا نتلقى إلا المعلومات التي تختار إرسالها إلينا — مثلًا عندما تراسلنا عبر البريد الإلكتروني أو واتساب للسؤال عن المنتجات. ونستخدم هذه المعلومات فقط للرد على استفسارك والتواصل معك بشأن المنتجات والخدمات التي سألت عنها.'
        ]],
        ['كيف نستخدمها ومدة الاحتفاظ بها', [
          'لا نبيع بيانات الاتصال الخاصة بك ولا نؤجرها ولا نشاركها مع أطراف ثالثة لأغراض تسويقية. ويقتصر الوصول على الأشخاص الذين يتعاملون مع استفسارك. نحتفظ بالمراسلات فقط للمدة اللازمة لإتمام الغرض التجاري الذي تواصلت من أجله، ما لم يقتضِ القانون مدة أطول.'
        ]],
        ['روابط لخدمات أخرى', [
          'يحتوي هذا الموقع على روابط لخدمات تابعة لأطراف ثالثة مثل واتساب وفيسبوك. وعند استخدامك هذه الروابط، يعالج الطرف الثالث البيانات وفقًا لسياسة الخصوصية الخاصة به، وهي خارج سيطرتنا.'
        ]],
        ['التواصل', [
          'يمكن إرسال الأسئلة حول هذه السياسة إلى البريد الإلكتروني المبين في تذييل الصفحة.'
        ]]
      ]
    },
    terms: {
      title: 'شروط الاستخدام',
      lead: 'شروط استخدام هذا الموقع.',
      blocks: [
        ['محتوى معلوماتي', [
          'هذا الموقع كتالوج منتجات معلوماتي. وهو لا يُعد عرضًا ولا تسعيرة ولا ضمانًا. وتعرض صور المنتجات المظهر فقط وليست مصدرًا للمعلمات الفنية. وتُؤكَّد المواصفات والأبعاد والأسعار والتوفر كتابيًا عند تواصلك معنا.'
        ]],
        ['الشروط التجارية', [
          'يُتفق على شروط الطلب والتسليم والدفع والجودة بشكل فردي وكتابي بين الطرفين. ولا شيء في هذا الموقع يعدّل تلك الاتفاقات.'
        ]],
        ['الملكية الفكرية', [
          'جميع النصوص والصور والتصميم والعلامات التجارية في هذا الموقع مملوكة لأصحابها. ولا يجوز نسخ المحتوى للاستخدام التجاري دون إذن كتابي.'
        ]],
        ['المسؤولية', [
          'نحرص على أن تكون المعلومات في هذا الموقع دقيقة قدر معرفتنا، لكنها تُقدَّم كما هي. وإلى الحد الذي يسمح به القانون، لا نتحمل المسؤولية عن قرارات تُتخذ بناءً على هذا المحتوى دون تأكيد التفاصيل معنا كتابيًا.'
        ]],
        ['القانون الواجب التطبيق', [
          'تخضع هذه الشروط لقوانين جمهورية الصين الشعبية. وتُسوَّى أي منازعة أولًا عبر التفاوض الودّي.'
        ]]
      ]
    }
  },
  tr: {
    prevails: 'Bu sayfanın İngilizce sürümü geçerlidir.',
    privacy: {
      title: 'Gizlilik Politikası',
      lead: 'Bu web sitesinin kişisel verilerinizi nasıl işlediği.',
      blocks: [
        ['Neleri topluyoruz', [
          'Bu web sitesi analitik, reklam çerezi veya izleme betiği kullanmaz. Kişisel verileri otomatik olarak toplamayız.',
          'Yalnızca bize göndermeyi seçtiğiniz bilgileri alırız — örneğin ürünler hakkında soru sormak için e-posta veya WhatsApp üzerinden yazdığınızda. Bu bilgileri yalnızca talebinizi yanıtlamak ve sorduğunuz ürün ve hizmetler hakkında sizinle iletişim kurmak için kullanırız.'
        ]],
        ['Nasıl kullanıyoruz ve ne kadar saklıyoruz', [
          'İletişim bilgilerinizi pazarlama amacıyla üçüncü taraflara satmaz, kiralamaz veya paylaşmayız. Erişim, talebinizle ilgilenen kişilerle sınırlıdır. Yazışmaları yalnızca bize başvurduğunuz ticari amacı tamamlamak için gereken süre boyunca saklarız; kanun daha uzun bir süre öngörüyorsa o süre geçerlidir.'
        ]],
        ['Diğer hizmetlere bağlantılar', [
          'Bu site WhatsApp ve Facebook gibi üçüncü taraf hizmetlere bağlantı verir. Bu bağlantıları kullandığınızda, üçüncü taraf verileri kendi gizlilik politikasına göre işler; bu politika bizim kontrolümüzde değildir.'
        ]],
        ['İletişim', [
          'Bu politikayla ilgili sorular, sayfa altbilgisinde gösterilen e-posta adresine gönderilebilir.'
        ]]
      ]
    },
    terms: {
      title: 'Kullanım Koşulları',
      lead: 'Bu web sitesinin kullanım koşulları.',
      blocks: [
        ['Bilgilendirme içeriği', [
          'Bu web sitesi bilgilendirici bir ürün kataloğudur. Teklif, fiyat teklifi veya garanti niteliği taşımaz. Ürün görselleri yalnızca görünümü gösterir ve teknik parametre kaynağı değildir. Özellikler, ölçüler, fiyatlar ve stok durumu bizimle iletişime geçtiğinizde yazılı olarak teyit edilir.'
        ]],
        ['Ticari koşullar', [
          'Sipariş, teslimat, ödeme ve kalite koşulları taraflar arasında ayrıca ve yazılı olarak kararlaştırılır. Bu web sitesindeki hiçbir ifade bu anlaşmaları değiştirmez.'
        ]],
        ['Fikri mülkiyet', [
          'Bu sitedeki tüm metin, görsel, tasarım ve markalar ilgili sahiplerine aittir. İçerik, yazılı izin olmadan ticari amaçla kopyalanamaz.'
        ]],
        ['Sorumluluk', [
          'Bu sitedeki bilgileri bilgimiz dahilinde doğru tutmaya çalışırız; ancak olduğu gibi sunulur. Kanunun izin verdiği ölçüde, ayrıntıları bizimle yazılı olarak teyit etmeden bu içeriğe dayanarak alınan kararlardan sorumlu değiliz.'
        ]],
        ['Uygulanacak hukuk', [
          'Bu koşullar Çin Halk Cumhuriyeti kanunlarına tabidir. Her türlü uyuşmazlık öncelikle dostane görüşme yoluyla çözülür.'
        ]]
      ]
    }
  },
  ru: {
    prevails: 'Приоритет имеет английская версия этой страницы.',
    privacy: {
      title: 'Политика конфиденциальности',
      lead: 'Как этот сайт обрабатывает ваши персональные данные.',
      blocks: [
        ['Какие данные мы собираем', [
          'Этот сайт не использует аналитику, рекламные cookie и скрипты отслеживания. Мы не собираем персональные данные автоматически.',
          'Мы получаем только те сведения, которые вы решите нам отправить, — например, когда пишете нам на e-mail или в WhatsApp с вопросом о продукции. Мы используем эти сведения исключительно для ответа на ваш запрос и связи с вами по интересующим вас товарам и услугам.'
        ]],
        ['Как мы их используем и сколько храним', [
          'Мы не продаём, не сдаём в аренду и не передаём ваши контактные данные третьим лицам в маркетинговых целях. Доступ ограничен сотрудниками, которые ведут ваш запрос. Переписку мы храним только столько, сколько нужно для деловой цели вашего обращения, если закон не требует более длительного срока.'
        ]],
        ['Ссылки на другие сервисы', [
          'Сайт содержит ссылки на сторонние сервисы, такие как WhatsApp и Facebook. При переходе по ним третья сторона обрабатывает данные по своей политике конфиденциальности, на которую мы не влияем.'
        ]],
        ['Контакты', [
          'Вопросы по этой политике можно направлять на e-mail, указанный в нижней части страницы.'
        ]]
      ]
    },
    terms: {
      title: 'Условия использования',
      lead: 'Условия использования этого сайта.',
      blocks: [
        ['Информационный характер', [
          'Этот сайт представляет собой информационный каталог продукции. Он не является офертой, коммерческим предложением или гарантией. Изображения продукции показывают только внешний вид и не являются источником технических параметров. Характеристики, размеры, цены и наличие подтверждаются письменно при обращении к нам.'
        ]],
        ['Коммерческие условия', [
          'Условия заказа, поставки, оплаты и качества согласуются сторонами индивидуально и в письменной форме. Ничто на этом сайте не изменяет такие договорённости.'
        ]],
        ['Интеллектуальная собственность', [
          'Все тексты, изображения, дизайн и товарные знаки на этом сайте принадлежат их правообладателям. Копирование содержимого в коммерческих целях без письменного разрешения не допускается.'
        ]],
        ['Ответственность', [
          'Мы поддерживаем информацию на сайте в актуальном состоянии в пределах наших знаний, однако она предоставляется «как есть». В пределах, допускаемых законом, мы не несём ответственности за решения, принятые на основе этого содержимого без письменного подтверждения деталей у нас.'
        ]],
        ['Применимое право', [
          'Эти условия регулируются законодательством Китайской Народной Республики. Любой спор сначала решается путём дружественных переговоров.'
        ]]
      ]
    }
  },
  it: {
    prevails: 'Fa fede la versione inglese di questa pagina.',
    privacy: {
      title: 'Informativa sulla privacy',
      lead: 'Come questo sito tratta i tuoi dati personali.',
      blocks: [
        ['Cosa raccogliamo', [
          'Questo sito non utilizza analisi, cookie pubblicitari o script di tracciamento. Non raccogliamo dati personali automaticamente.',
          'Riceviamo solo le informazioni che scegli di inviarci — per esempio quando scrivi alla nostra e-mail o al nostro WhatsApp per chiedere informazioni sui prodotti. Usiamo queste informazioni unicamente per rispondere alla tua richiesta e comunicare con te in merito ai prodotti e servizi richiesti.'
        ]],
        ['Come le usiamo e per quanto tempo le conserviamo', [
          'Non vendiamo, noleggiamo né condividiamo i tuoi dati di contatto con terzi per finalità di marketing. L\'accesso è limitato alle persone che gestiscono la tua richiesta. Conserviamo la corrispondenza solo per il tempo necessario a completare la finalità commerciale per cui ci hai contattati, salvo obblighi di legge più lunghi.'
        ]],
        ['Link ad altri servizi', [
          'Questo sito contiene link a servizi di terze parti come WhatsApp e Facebook. Quando usi questi link, la terza parte tratta i dati secondo la propria informativa sulla privacy, che non controlliamo.'
        ]],
        ['Contatti', [
          'Le domande su questa informativa possono essere inviate all\'e-mail indicata nel piè di pagina.'
        ]]
      ]
    },
    terms: {
      title: 'Condizioni d\'uso',
      lead: 'Le condizioni per l\'uso di questo sito.',
      blocks: [
        ['Contenuto informativo', [
          'Questo sito è un catalogo prodotti informativo. Non costituisce un\'offerta, un preventivo o una garanzia. Le immagini dei prodotti mostrano solo l\'aspetto e non sono fonte di parametri tecnici. Specifiche, dimensioni, prezzi e disponibilità sono confermati per iscritto quando ci contatti.'
        ]],
        ['Condizioni commerciali', [
          'Le condizioni di ordine, consegna, pagamento e qualità sono concordate individualmente e per iscritto tra le parti. Nulla su questo sito modifica tali accordi.'
        ]],
        ['Proprietà intellettuale', [
          'Tutti i testi, le immagini, il design e i marchi di questo sito appartengono ai rispettivi titolari. Il contenuto non può essere copiato per uso commerciale senza autorizzazione scritta.'
        ]],
        ['Responsabilità', [
          'Manteniamo le informazioni di questo sito accurate per quanto possibile secondo le nostre conoscenze, ma sono fornite così come sono. Nella misura consentita dalla legge, non siamo responsabili per decisioni prese sulla base di questi contenuti senza aver prima confermato per iscritto i dettagli con noi.'
        ]],
        ['Legge applicabile', [
          'Queste condizioni sono regolate dalle leggi della Repubblica Popolare Cinese. Qualsiasi controversia sarà gestita prima tramite trattativa amichevole.'
        ]]
      ]
    }
  },
  vi: {
    prevails: 'Bản tiếng Anh của trang này là bản có hiệu lực.',
    privacy: {
      title: 'Chính sách bảo mật',
      lead: 'Cách website này xử lý dữ liệu cá nhân của bạn.',
      blocks: [
        ['Chúng tôi thu thập những gì', [
          'Website này không dùng công cụ phân tích, cookie quảng cáo hay script theo dõi. Chúng tôi không thu thập dữ liệu cá nhân một cách tự động.',
          'Chúng tôi chỉ nhận thông tin mà bạn chọn gửi cho chúng tôi — ví dụ khi bạn viết email hoặc WhatsApp để hỏi về sản phẩm. Chúng tôi chỉ dùng thông tin đó để trả lời yêu cầu của bạn và liên lạc với bạn về sản phẩm, dịch vụ bạn đã hỏi.'
        ]],
        ['Cách chúng tôi sử dụng và lưu giữ', [
          'Chúng tôi không bán, cho thuê hay chia sẻ thông tin liên hệ của bạn cho bên thứ ba nhằm mục đích tiếp thị. Quyền truy cập chỉ giới hạn ở những người xử lý yêu cầu của bạn. Chúng tôi chỉ lưu thư từ trong thời gian cần thiết để hoàn thành mục đích kinh doanh mà bạn đã liên hệ, trừ khi pháp luật yêu cầu lâu hơn.'
        ]],
        ['Liên kết đến dịch vụ khác', [
          'Website này có liên kết đến các dịch vụ của bên thứ ba như WhatsApp và Facebook. Khi bạn dùng các liên kết đó, bên thứ ba xử lý dữ liệu theo chính sách bảo mật của họ, mà chúng tôi không kiểm soát.'
        ]],
        ['Liên hệ', [
          'Câu hỏi về chính sách này có thể gửi đến email hiển thị ở chân trang.'
        ]]
      ]
    },
    terms: {
      title: 'Điều khoản sử dụng',
      lead: 'Các điều kiện sử dụng website này.',
      blocks: [
        ['Nội dung mang tính thông tin', [
          'Website này là danh mục sản phẩm mang tính thông tin. Nội dung không cấu thành một đề nghị, báo giá hay bảo đảm. Hình ảnh sản phẩm chỉ thể hiện ngoại quan và không phải nguồn thông số kỹ thuật. Thông số, kích thước, giá và tình trạng hàng được xác nhận bằng văn bản khi bạn liên hệ với chúng tôi.'
        ]],
        ['Điều kiện thương mại', [
          'Các điều kiện về đơn hàng, giao hàng, thanh toán và chất lượng được hai bên thỏa thuận riêng bằng văn bản. Không nội dung nào trên website này thay đổi các thỏa thuận đó.'
        ]],
        ['Sở hữu trí tuệ', [
          'Mọi văn bản, hình ảnh, thiết kế và nhãn hiệu trên website này thuộc về chủ sở hữu tương ứng. Không được sao chép nội dung cho mục đích thương mại nếu không có sự cho phép bằng văn bản.'
        ]],
        ['Trách nhiệm', [
          'Chúng tôi giữ thông tin trên website này chính xác nhất có thể theo hiểu biết của mình, nhưng thông tin được cung cấp nguyên trạng. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm cho các quyết định dựa trên nội dung này mà chưa xác nhận chi tiết bằng văn bản với chúng tôi.'
        ]],
        ['Luật áp dụng', [
          'Các điều khoản này chịu sự điều chỉnh của pháp luật Cộng hòa Nhân dân Trung Hoa. Mọi tranh chấp trước tiên sẽ được giải quyết bằng thương lượng thiện chí.'
        ]]
      ]
    }
  },
  id: {
    prevails: 'Versi bahasa Inggris dari halaman ini yang berlaku.',
    privacy: {
      title: 'Kebijakan Privasi',
      lead: 'Bagaimana situs ini menangani data pribadi Anda.',
      blocks: [
        ['Apa yang kami kumpulkan', [
          'Situs ini tidak menggunakan analitik, cookie iklan, atau skrip pelacak. Kami tidak mengumpulkan data pribadi secara otomatis.',
          'Kami hanya menerima informasi yang Anda pilih untuk kirimkan kepada kami — misalnya saat Anda menulis ke e-mail atau WhatsApp kami untuk menanyakan produk. Kami menggunakan informasi itu hanya untuk menjawab pertanyaan Anda dan berkomunikasi dengan Anda tentang produk dan layanan yang Anda tanyakan.'
        ]],
        ['Cara kami menggunakannya dan berapa lama menyimpannya', [
          'Kami tidak menjual, menyewakan, atau membagikan data kontak Anda kepada pihak ketiga untuk pemasaran. Akses terbatas pada orang yang menangani pertanyaan Anda. Kami menyimpan korespondensi hanya selama diperlukan untuk menyelesaikan tujuan bisnis Anda menghubungi kami, kecuali hukum mensyaratkan lebih lama.'
        ]],
        ['Tautan ke layanan lain', [
          'Situs ini menautkan ke layanan pihak ketiga seperti WhatsApp dan Facebook. Saat Anda menggunakan tautan tersebut, pihak ketiga memproses data sesuai kebijakan privasinya sendiri, yang tidak kami kendalikan.'
        ]],
        ['Kontak', [
          'Pertanyaan tentang kebijakan ini dapat dikirim ke e-mail yang tercantum di kaki halaman.'
        ]]
      ]
    },
    terms: {
      title: 'Ketentuan Penggunaan',
      lead: 'Ketentuan penggunaan situs ini.',
      blocks: [
        ['Konten informasi', [
          'Situs ini adalah katalog produk yang bersifat informasi. Situs ini bukan penawaran, penawaran harga, atau jaminan. Gambar produk hanya menunjukkan tampilan dan bukan sumber parameter teknis. Spesifikasi, dimensi, harga, dan ketersediaan dikonfirmasi secara tertulis saat Anda menghubungi kami.'
        ]],
        ['Ketentuan bisnis', [
          'Ketentuan pesanan, pengiriman, pembayaran, dan mutu disepakati secara individual dan tertulis antara para pihak. Tidak ada apa pun di situs ini yang mengubah kesepakatan tersebut.'
        ]],
        ['Kekayaan intelektual', [
          'Semua teks, gambar, desain, dan merek di situs ini milik pemiliknya masing-masing. Konten tidak boleh disalin untuk penggunaan komersial tanpa izin tertulis.'
        ]],
        ['Tanggung jawab', [
          'Kami menjaga informasi di situs ini seakurat mungkin menurut pengetahuan kami, tetapi disediakan apa adanya. Sejauh diizinkan hukum, kami tidak bertanggung jawab atas keputusan yang diambil berdasarkan konten ini tanpa mengonfirmasi rinciannya secara tertulis kepada kami.'
        ]],
        ['Hukum yang berlaku', [
          'Ketentuan ini diatur oleh hukum Republik Rakyat Tiongkok. Setiap sengketa akan ditangani terlebih dahulu melalui perundingan secara musyawarah.'
        ]]
      ]
    }
  },
  ja: {
    prevails: '本ページは英語版が正文となります。',
    privacy: {
      title: 'プライバシーポリシー',
      lead: '本ウェブサイトにおける個人情報の取り扱いについて。',
      blocks: [
        ['収集する情報', [
          '本ウェブサイトは、アクセス解析、広告Cookie、トラッキングスクリプトを使用していません。個人情報を自動的に収集することはありません。',
          '当社が受け取るのは、お客様が自ら送信された情報のみです。たとえば、製品についてのお問い合わせをメールやWhatsAppでお送りいただいた場合です。これらの情報は、お問い合わせへの回答およびご質問いただいた製品・サービスに関するご連絡のためにのみ使用します。'
        ]],
        ['利用目的と保存期間', [
          'お客様の連絡先をマーケティング目的で第三者に販売、貸与、共有することはありません。アクセスはお問い合わせを担当する者に限られます。やり取りは、お問い合わせの業務上の目的を達成するために必要な期間のみ保存し、法令により長期間の保存が求められる場合を除きます。'
        ]],
        ['他のサービスへのリンク', [
          '本サイトはWhatsAppやFacebookなどの第三者サービスへリンクしています。これらのリンクを利用された場合、第三者は自らのプライバシーポリシーに従ってデータを処理し、当社はそれを管理できません。'
        ]],
        ['お問い合わせ', [
          '本ポリシーに関するご質問は、ページ下部に記載のメールアドレスまでお送りください。'
        ]]
      ]
    },
    terms: {
      title: '利用規約',
      lead: '本ウェブサイトのご利用条件。',
      blocks: [
        ['情報提供の内容', [
          '本ウェブサイトは情報提供を目的とした製品カタログです。申し出、見積り、保証を構成するものではありません。製品画像は外観のみを示すもので、技術パラメータの根拠ではありません。仕様、寸法、価格、在庫状況は、お問い合わせ時に書面で確認されます。'
        ]],
        ['取引条件', [
          '注文、納品、支払い、品質に関する条件は、当事者間で個別に書面で合意されます。本ウェブサイトのいかなる記載も、これらの合意を変更するものではありません。'
        ]],
        ['知的財産権', [
          '本サイトのすべての文章、画像、デザイン、商標は、それぞれの権利者に帰属します。書面による許可なく、商業目的で内容を複製することはできません。'
        ]],
        ['責任', [
          '当社は本サイトの情報を知り得る範囲で正確に保つよう努めていますが、現状のまま提供されます。法律で認められる範囲において、詳細を書面で確認することなく本内容に基づいて行われた判断について、当社は責任を負いません。'
        ]],
        ['準拠法', [
          '本規約は中華人民共和国の法律に準拠します。紛争が生じた場合は、まず友好的な協議によって解決を図ります。'
        ]]
      ]
    }
  },
  ko: {
    prevails: '이 페이지는 영어 버전이 정본입니다.',
    privacy: {
      title: '개인정보 처리방침',
      lead: '이 웹사이트가 개인정보를 처리하는 방식입니다.',
      blocks: [
        ['수집하는 정보', [
          '이 웹사이트는 분석 도구, 광고 쿠키, 추적 스크립트를 사용하지 않습니다. 개인정보를 자동으로 수집하지 않습니다.',
          '저희가 받는 정보는 이용자가 직접 보내주신 정보뿐입니다. 예를 들어 제품 문의를 위해 이메일이나 WhatsApp으로 연락하신 경우입니다. 이 정보는 문의에 답변하고 문의하신 제품과 서비스에 대해 연락드리는 목적으로만 사용합니다.'
        ]],
        ['이용 목적과 보관 기간', [
          '이용자의 연락처를 마케팅 목적으로 제3자에게 판매, 대여, 공유하지 않습니다. 접근 권한은 문의를 처리하는 담당자로 제한됩니다. 문의하신 사업 목적을 완수하는 데 필요한 기간 동안만 서신을 보관하며, 법률이 더 긴 기간을 요구하는 경우는 예외로 합니다.'
        ]],
        ['다른 서비스 링크', [
          '이 사이트는 WhatsApp, Facebook 등 제3자 서비스로 연결되는 링크를 포함합니다. 해당 링크를 이용하면 제3자가 자체 개인정보 처리방침에 따라 데이터를 처리하며, 저희는 이를 통제하지 않습니다.'
        ]],
        ['문의', [
          '이 방침에 대한 질문은 페이지 하단에 표시된 이메일로 보내주시기 바랍니다.'
        ]]
      ]
    },
    terms: {
      title: '이용약관',
      lead: '이 웹사이트 이용 조건입니다.',
      blocks: [
        ['정보 제공 내용', [
          '이 웹사이트는 정보 제공을 목적으로 하는 제품 카탈로그입니다. 청약, 견적 또는 보증을 구성하지 않습니다. 제품 이미지는 외관만 보여 주며 기술 파라미터의 근거가 아닙니다. 사양, 치수, 가격 및 재고는 문의하실 때 서면으로 확인됩니다.'
        ]],
        ['거래 조건', [
          '주문, 납품, 결제 및 품질 조건은 당사자 간에 개별적으로 서면 합의합니다. 이 웹사이트의 어떤 내용도 그러한 합의를 변경하지 않습니다.'
        ]],
        ['지적 재산권', [
          '이 사이트의 모든 텍스트, 이미지, 디자인 및 상표는 각 권리자에게 귀속됩니다. 서면 허가 없이 상업적 목적으로 내용을 복제할 수 없습니다.'
        ]],
        ['책임', [
          '저희는 이 사이트의 정보를 아는 범위에서 정확하게 유지하려고 노력하지만, 정보는 있는 그대로 제공됩니다. 법이 허용하는 범위에서, 세부 사항을 서면으로 확인하지 않고 이 내용에 근거하여 내린 결정에 대해 저희는 책임지지 않습니다.'
        ]],
        ['준거법', [
          '이 약관은 중화인민공화국 법률의 적용을 받습니다. 모든 분쟁은 우선 우호적 협의를 통해 해결합니다.'
        ]]
      ]
    }
  }
});

const LOCALES = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];
const DOCUMENTS = ['privacy', 'terms'];
// Section count parity with the English source: a translation that drops or adds a section has
// changed the legal substance, which is exactly what this module must prevent.
const REQUIRED_SECTIONS = { privacy: 4, terms: 5 };

/** Returns a list of problems, or an empty array when every locale is complete. */
export function validateLegalI18n() {
  const issues = [];
  for (const locale of LOCALES) {
    const entry = LEGAL_I18N[locale];
    if (!entry) { issues.push(`${locale}: missing`); continue; }
    if (typeof entry.prevails !== 'string' || !entry.prevails.trim()) issues.push(`${locale}.prevails: missing`);
    for (const document of DOCUMENTS) {
      const value = entry[document];
      if (!value) { issues.push(`${locale}.${document}: missing`); continue; }
      if (typeof value.title !== 'string' || !value.title.trim()) issues.push(`${locale}.${document}.title: missing`);
      if (typeof value.lead !== 'string' || !value.lead.trim()) issues.push(`${locale}.${document}.lead: missing`);
      if (!Array.isArray(value.blocks) || value.blocks.length !== REQUIRED_SECTIONS[document]) {
        issues.push(`${locale}.${document}.blocks: expected ${REQUIRED_SECTIONS[document]} sections`);
        continue;
      }
      value.blocks.forEach((block, index) => {
        if (!Array.isArray(block) || block.length !== 2 || typeof block[0] !== 'string' || !block[0].trim()
          || !Array.isArray(block[1]) || !block[1].length) {
          issues.push(`${locale}.${document}.blocks[${index}]: malformed`);
        } else if (block[1].some(paragraph => typeof paragraph !== 'string' || !paragraph.trim())) {
          issues.push(`${locale}.${document}.blocks[${index}]: empty paragraph`);
        }
      });
    }
  }
  return issues;
}
