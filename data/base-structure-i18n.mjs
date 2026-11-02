/**
 * Base construction note, shown on every series page in the pillow-block category.
 *
 * Source of the claim: the catalogue already states that these housings are HT200 grey cast iron
 * (data/product-catalog.mjs, mounted-units-spec.mjs, bearing-housing-spec.mjs), and a cast housing
 * is a single solid casting - it is not a welded or pressed assembly. The paragraph explains what
 * that means for the buyer; it does not add a specification, a test result or a performance figure,
 * because none of those is confirmed.
 *
 * Wording avoids claiming a wall-thickness or a load rating. Every locale says the same three
 * things: one-piece casting, solid section, why it matters under bolt preload and vibration.
 */
export const BASE_STRUCTURE = Object.freeze({
  en: {
    heading: 'Base construction',
    body: 'The housing is cast in one piece from HT200 grey cast iron, so the base is a solid section rather than a welded or pressed assembly. A solid cast base holds bolt preload under vibration and does not distort when the mounting bolts are tightened, which keeps the bearing seat round and the shaft centre stable. Thin-wall or welded bases can flex under the same load, and that flex is what later shows up as a loose housing or a cracked foot.'
  },
  es: {
    heading: 'Construcción de la base',
    body: 'La carcasa se funde en una sola pieza de fundición gris HT200, por lo que la base es una sección maciza y no un conjunto soldado o estampado. Una base fundida maciza mantiene la precarga de los tornillos bajo vibración y no se deforma al apretarlos, lo que conserva el asiento del rodamiento redondo y el centro del eje estable. Las bases de pared delgada o soldadas pueden flexionarse con la misma carga, y esa flexión es la que después aparece como una carcasa floja o un pie agrietado.'
  },
  de: {
    heading: 'Aufbau des Sockels',
    body: 'Das Gehäuse wird in einem Stück aus Grauguss HT200 gegossen, der Sockel ist also ein massiver Querschnitt und keine geschweißte oder gepresste Baugruppe. Ein massiv gegossener Sockel hält die Schraubenvorspannung unter Vibration und verformt sich beim Anziehen der Befestigungsschrauben nicht, wodurch der Lagersitz rund und die Wellenmitte stabil bleibt. Dünnwandige oder geschweißte Sockel können unter derselben Last nachgeben, und dieses Nachgeben zeigt sich später als lockeres Gehäuse oder gerissener Fuß.'
  },
  fr: {
    heading: 'Construction du socle',
    body: 'Le boîtier est coulé d\'une seule pièce en fonte grise HT200 : le socle est donc une section pleine, et non un assemblage soudé ou embouti. Un socle coulé plein conserve la précharge des boulons sous vibration et ne se déforme pas au serrage, ce qui garde la portée du roulement circulaire et le centre de l\'arbre stable. Les socles à paroi mince ou soudés peuvent fléchir sous la même charge, et cette flexion se traduit ensuite par un boîtier desserré ou un pied fissuré.'
  },
  pt: {
    heading: 'Construção da base',
    body: 'A caixa é fundida numa só peça em ferro fundido cinzento HT200, pelo que a base é uma secção maciça e não um conjunto soldado ou estampado. Uma base fundida maciça mantém a pré-carga dos parafusos sob vibração e não se deforma ao apertá-los, o que conserva o assento do rolamento circular e o centro do eixo estável. Bases de parede fina ou soldadas podem fletir com a mesma carga, e essa flexão é o que mais tarde aparece como caixa solta ou pé rachado.'
  },
  ar: {
    heading: 'بنية القاعدة',
    body: 'يُصب الهيكل قطعة واحدة من حديد الزهر الرمادي HT200، فالقاعدة مقطع مصمت وليست تجميعًا ملحومًا أو مضغوطًا. القاعدة المصبوبة المصمتة تحافظ على إجهاد الشد المسبق للمسامير تحت الاهتزاز ولا تتشوه عند ربطها، فيبقى مقعد المحمل دائريًا ومركز العمود ثابتًا. القواعد رقيقة الجدار أو الملحومة قد تنحني تحت الحمل نفسه، وهذا الانحناء هو ما يظهر لاحقًا كهيكل مرتخٍ أو قدم متشققة.'
  },
  tr: {
    heading: 'Taban yapısı',
    body: 'Gövde HT200 gri dökme demirden tek parça halinde dökülür; yani taban, kaynaklı veya preslenmiş bir montaj değil masif bir kesittir. Masif döküm taban, titreşim altında cıvata ön yüklemesini korur ve montaj cıvataları sıkılırken şekil değiştirmez; böylece rulman yatağı yuvarlak ve mil merkezi sabit kalır. İnce cidarlı veya kaynaklı tabanlar aynı yük altında esneyebilir ve bu esneme daha sonra gevşek gövde veya çatlamış ayak olarak ortaya çıkar.'
  },
  ru: {
    heading: 'Конструкция основания',
    body: 'Корпус отливается целиком из серого чугуна HT200, поэтому основание представляет собой сплошное сечение, а не сварной или штампованный узел. Сплошное литое основание сохраняет предварительную затяжку болтов при вибрации и не деформируется при затяжке, благодаря чему посадочное место подшипника остаётся круглым, а центр вала — стабильным. Тонкостенные или сварные основания могут прогибаться под той же нагрузкой, и этот прогиб позже проявляется как ослабший корпус или треснувшая лапа.'
  },
  it: {
    heading: 'Costruzione della base',
    body: 'La scatola è fusa in un pezzo unico in ghisa grigia HT200, quindi la base è una sezione piena e non un assieme saldato o stampato. Una base fusa piena mantiene il precarico dei bulloni sotto vibrazione e non si deforma al serraggio, conservando la sede del cuscinetto circolare e il centro dell\'albero stabile. Le basi a parete sottile o saldate possono flettere sotto lo stesso carico, e quella flessione è ciò che in seguito si manifesta come scatola allentata o piede incrinato.'
  },
  vi: {
    heading: 'Kết cấu đế',
    body: 'Vỏ được đúc nguyên khối bằng gang xám HT200, nên đế là một tiết diện đặc chứ không phải cụm hàn hoặc dập. Đế đúc đặc giữ được lực siết trước của bu lông khi rung động và không biến dạng khi siết chặt, nhờ đó ổ đặt vòng bi vẫn tròn và tâm trục ổn định. Đế thành mỏng hoặc hàn có thể bị uốn dưới cùng tải trọng, và độ uốn đó về sau biểu hiện thành vỏ lỏng hoặc chân bị nứt.'
  },
  id: {
    heading: 'Konstruksi alas',
    body: 'Rumah dicor utuh satu bagian dari besi cor kelabu HT200, sehingga alasnya berupa penampang pejal, bukan rakitan las atau tekan. Alas cor pejal mempertahankan pratarik baut saat bergetar dan tidak berubah bentuk ketika baut pemasangan dikencangkan, sehingga dudukan bantalan tetap bulat dan pusat poros stabil. Alas berdinding tipis atau las dapat melentur di bawah beban yang sama, dan lenturan itu kemudian muncul sebagai rumah longgar atau kaki retak.'
  },
  ja: {
    heading: 'ベースの構造',
    body: 'ハウジングはねずみ鋳鉄 HT200 で一体鋳造されているため、ベースは溶接やプレスによる組み立てではなく中実の断面です。中実の鋳造ベースは振動下でもボルトの予張力を保ち、取付ボルトを締めても変形しないため、軸受座は真円を保ち、軸心も安定します。薄肉や溶接のベースは同じ荷重でたわむことがあり、そのたわみは後にハウジングの緩みや脚部の割れとして現れます。'
  },
  ko: {
    heading: '베이스 구조',
    body: '하우징은 회주철 HT200으로 일체 주조되므로 베이스는 용접이나 프레스 조립이 아닌 중실 단면입니다. 중실 주조 베이스는 진동 속에서도 볼트 예압을 유지하고 장착 볼트를 조여도 변형되지 않아 베어링 시트가 원형을 유지하고 축 중심이 안정됩니다. 얇은 벽이나 용접 베이스는 같은 하중에서 휘어질 수 있으며, 그 휨은 나중에 하우징 풀림이나 다리 균열로 나타납니다.'
  }
});

export function baseStructureFor(locale) {
  return BASE_STRUCTURE[locale] ?? BASE_STRUCTURE.en;
}
