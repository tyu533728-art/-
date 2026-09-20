// Cross-reference page wording, all 13 locales.
//
// The model tables themselves are language-neutral codes and stay in cross-reference.mjs; the
// Chinese prose of the series/insert tables is translated here, keyed by series/insert code and
// column position [fullName, mount, bolts, use] for series and [locking, feature, scene] for
// inserts. build-pages.mjs calls validateXrefI18n() and fails the build on any gap.

export const XREF_I18N = Object.freeze({
  en: {
    title: 'Model Cross-Reference',
    intro: 'Find the NATER equivalent of SKF, FYH, NSK, NTN and KOYO part numbers.',
    filter: 'Filter by model, e.g. UCP205',
    download: 'Download the full table (.xlsx)',
    skfNone: '— (SKF has no 3xx heavy series)',
    lightHeading: 'Light 2xx series',
    heavyHeading: 'Heavy 3xx series',
    seriesHeading: 'Series comparison',
    insertHeading: 'Insert bearings',
    sizeHeading: 'Bore size codes',
    cols: ['Our model', 'Bore d (mm)', 'SKF (housing + insert)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Series', 'Full name', 'Mounting', 'Bolt holes', 'ISO housing code', 'Typical use'],
    insertCols: ['Insert', 'Locking', 'Feature', 'SKF equivalent', 'Typical use'],
    sizeCols: ['Size code (last two digits)', 'Bore d (mm)'],
    footer: 'Cross Reference',
    categoryLink: 'Need the SKF / FYH / NSK equivalent? See the model cross-reference',
    // {light} and {heavy} are replaced with the series codes actually present in each table,
    // derived from the data at build time, so this line cannot drift from the workbook.
    covered: 'Series covered: {light} (2xx) and {heavy} (3xx)',
    series: {
      UCP: ['UC + P pillow block housing', 'Horizontal floor mount', '2 bolt holes', 'Conveyors, fans, agricultural machinery (most common)'],
      UCPA: ['UC + PA narrow-base pillow block', 'Horizontal floor mount', '2 bolt holes (tapped)', 'Tight machine frames, small European/US equipment'],
      UELP: ['UEL + P eccentric-collar pillow block', 'Horizontal floor mount', '2 bolt holes', 'Agricultural machinery, vibration-proof locking'],
      UKP: ['UK + P adapter-sleeve pillow block', 'Horizontal floor mount', '2 bolt holes', 'High speed, heavy loads, unkeyed shafts'],
      UCF: ['UC + F square flange housing', 'Vertical face mount', '4 bolt holes', 'Machine side plates, high loads'],
      UCFL: ['UC + FL diamond flange housing', 'Vertical face mount', '2 bolt holes', 'Tight spaces'],
      UCFC: ['UC + FC round flange housing', 'End-face locating mount', '4 bolt holes', 'Machine end covers, centring'],
      UCFS: ['UC + FS heavy spigot square flange', 'Vertical face mount with spigot', '4 bolt holes', 'Mixers, crushers, heavy-duty equipment'],
      UCT: ['UC + T slide housing', 'Horizontal slide rail', '2 bolt holes', 'Belt pulleys, chain tensioning']
    },
    inserts: {
      UC: ['Set screws ×2', 'Simple, cost-effective', 'General use, light/medium loads, reversible'],
      UEL: ['Eccentric collar', 'Resists axial drift, anti-loosening', 'Agricultural machinery, vibrating equipment'],
      UK: ['Taper bore + H adapter sleeve', 'High speed, heavy loads, keyless shafts, easy mounting', 'High speed, heavy load, shock']
    }
  },
  es: {
    title: 'Tabla de equivalencias',
    intro: 'Encuentre el equivalente NATER de las referencias SKF, FYH, NSK, NTN y KOYO.',
    filter: 'Filtrar por modelo, p. ej. UCP205',
    download: 'Descargar la tabla completa (.xlsx)',
    skfNone: '— (SKF no tiene serie pesada 3xx)',
    lightHeading: 'Serie ligera 2xx',
    heavyHeading: 'Serie pesada 3xx',
    seriesHeading: 'Comparativa de series',
    insertHeading: 'Rodamientos insertos',
    sizeHeading: 'Códigos de diámetro',
    cols: ['Nuestro modelo', 'Diámetro d (mm)', 'SKF (soporte + inserto)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Serie', 'Nombre completo', 'Montaje', 'Taladros', 'Código ISO de soporte', 'Uso típico'],
    insertCols: ['Inserto', 'Fijación', 'Característica', 'Equivalente SKF', 'Uso típico'],
    sizeCols: ['Código de tamaño (dos últimas cifras)', 'Diámetro d (mm)'],
    footer: 'Equivalencias',
    categoryLink: '¿Busca el equivalente SKF / FYH / NSK? Consulte la tabla de equivalencias',
    covered: 'Series incluidas: {light} (2xx) y {heavy} (3xx)',
    series: {
      UCP: ['Soporte de pie UC + P', 'Montaje horizontal en base', '2 taladros', 'Transportadores, ventiladores, maquinaria agrícola (el más común)'],
      UCPA: ['Soporte de pie de base estrecha UC + PA', 'Montaje horizontal en base', '2 taladros (roscados)', 'Bastidores estrechos, equipos pequeños europeos/americanos'],
      UELP: ['Soporte de pie UC + P con collar excéntrico', 'Montaje horizontal en base', '2 taladros', 'Maquinaria agrícola, fijación antivibración'],
      UKP: ['Soporte de pie UC + P con manguito cónico', 'Montaje horizontal en base', '2 taladros', 'Alta velocidad, cargas pesadas, ejes sin chavetero'],
      UCF: ['Soporte de brida cuadrada UC + F', 'Montaje en cara vertical', '4 taladros', 'Placas laterales de máquina, cargas altas'],
      UCFL: ['Soporte de brida romboidal UC + FL', 'Montaje en cara vertical', '2 taladros', 'Espacios reducidos'],
      UCFC: ['Soporte de brida redonda UC + FC', 'Montaje con centrado en extremo', '4 taladros', 'Tapas de máquina, centrado'],
      UCFS: ['Brida cuadrada pesada con resalte UC + FS', 'Cara vertical con resalte de centrado', '4 taladros', 'Mezcladoras, trituradoras, equipos pesados'],
      UCT: ['Soporte deslizante UC + T', 'Carril deslizante horizontal', '2 taladros', 'Poleas de correa, tensado de cadenas']
    },
    inserts: {
      UC: ['2 tornillos prisioneros', 'Sencillo y económico', 'Uso general, cargas ligeras/medias, reversible'],
      UEL: ['Collar excéntrico', 'Resiste el desplazamiento axial, antivibración', 'Maquinaria agrícola, equipos con vibración'],
      UK: ['Agujero cónico + manguito H', 'Alta velocidad, cargas pesadas, ejes sin chavetero, montaje fácil', 'Alta velocidad, cargas pesadas, impactos']
    }
  },
  de: {
    title: 'Modell-Vergleichstabelle',
    intro: 'Finden Sie die NATER-Entsprechung zu SKF-, FYH-, NSK-, NTN- und KOYO-Teilenummern.',
    filter: 'Nach Modell filtern, z. B. UCP205',
    download: 'Vollständige Tabelle herunterladen (.xlsx)',
    skfNone: '— (SKF hat keine schwere 3xx-Serie)',
    lightHeading: 'Leichte 2xx-Serie',
    heavyHeading: 'Schwere 3xx-Serie',
    seriesHeading: 'Serienvergleich',
    insertHeading: 'Innenlager',
    sizeHeading: 'Bohrungsgrößen',
    cols: ['Unser Modell', 'Bohrung d (mm)', 'SKF (Gehäuse + Innenlager)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Serie', 'Vollständiger Name', 'Montage', 'Bohrungen', 'ISO-Gehäusecode', 'Typische Anwendung'],
    insertCols: ['Innenlager', 'Befestigung', 'Merkmal', 'SKF-Entsprechung', 'Typische Anwendung'],
    sizeCols: ['Größencode (letzte zwei Ziffern)', 'Bohrung d (mm)'],
    footer: 'Vergleichstabelle',
    categoryLink: 'SKF-/FYH-/NSK-Entsprechung gesucht? Modell-Vergleichstabelle ansehen',
    covered: 'Abgedeckte Baureihen: {light} (2xx) und {heavy} (3xx)',
    series: {
      UCP: ['Stehlagergehäuse UC + P', 'Horizontale Bodenmontage', '2 Bohrungen', 'Förderer, Lüfter, Landmaschinen (am gebräuchlichsten)'],
      UCPA: ['Stehlagergehäuse UC + PA, schmale Basis', 'Horizontale Bodenmontage', '2 Bohrungen (Gewinde)', 'Enge Gestelle, kleine europäische/amerikanische Maschinen'],
      UELP: ['Stehlagergehäuse UC + P mit Exzenterring', 'Horizontale Bodenmontage', '2 Bohrungen', 'Landmaschinen, vibrationssichere Verriegelung'],
      UKP: ['Stehlagergehäuse UC + P mit Spannhülse', 'Horizontale Bodenmontage', '2 Bohrungen', 'Hohe Drehzahlen, hohe Lasten, Wellen ohne Nut'],
      UCF: ['Vierloch-Flanschgehäuse UC + F', 'Vertikale Anbaumontage', '4 Bohrungen', 'Maschinenseitenwände, hohe Belastung'],
      UCFL: ['Zweiloch-Flanschgehäuse UC + FL', 'Vertikale Anbaumontage', '2 Bohrungen', 'Enge Bauräume'],
      UCFC: ['Rundes Flanschgehäuse UC + FC', 'Stirnseitige Zentriermontage', '4 Bohrungen', 'Maschinenabdeckungen, Zentrierung'],
      UCFS: ['Schweres Vierloch-Flanschgehäuse mit Zentrierbund UC + FS', 'Vertikale Montage mit Zentrierbund', '4 Bohrungen', 'Mischer, Brecher, Schwermaschinen'],
      UCT: ['Spannlagergehäuse UC + T', 'Horizontale Gleitschiene', '2 Bohrungen', 'Riemenscheiben, Kettenspannung']
    },
    inserts: {
      UC: ['2 Gewindestifte', 'Einfach und wirtschaftlich', 'Universal, leichte/mittlere Lasten, reversierbar'],
      UEL: ['Exzenterring', 'Schutz gegen Axialwandern, sichert gegen Lösen', 'Landmaschinen, vibrationsbelastete Anlagen'],
      UK: ['Kegelbohrung + Spannhülse H', 'Hohe Drehzahlen, hohe Lasten, Wellen ohne Nut, einfache Montage', 'Hohe Drehzahlen, schwere Lasten, Stöße']
    }
  },
  fr: {
    title: 'Tableau de correspondance',
    intro: 'Trouvez l’équivalent NATER des références SKF, FYH, NSK, NTN et KOYO.',
    filter: 'Filtrer par modèle, ex. UCP205',
    download: 'Télécharger le tableau complet (.xlsx)',
    skfNone: '— (SKF n’a pas de série lourde 3xx)',
    lightHeading: 'Série légère 2xx',
    heavyHeading: 'Série lourde 3xx',
    seriesHeading: 'Comparatif des séries',
    insertHeading: 'Roulements insérés',
    sizeHeading: 'Codes de diamètre',
    cols: ['Notre modèle', 'Alésage d (mm)', 'SKF (boîtier + insert)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Série', 'Nom complet', 'Montage', 'Trous de fixation', 'Code boîtier ISO', 'Usage typique'],
    insertCols: ['Insert', 'Blocage', 'Caractéristique', 'Équivalent SKF', 'Usage typique'],
    sizeCols: ['Code de taille (deux derniers chiffres)', 'Alésage d (mm)'],
    footer: 'Correspondances',
    categoryLink: 'Besoin de l’équivalent SKF / FYH / NSK ? Voir le tableau de correspondance',
    covered: 'Séries couvertes : {light} (2xx) et {heavy} (3xx)',
    series: {
      UCP: ['Palier à semelle UC + P', 'Montage horizontal au sol', '2 trous', 'Convoyeurs, ventilateurs, machines agricoles (le plus courant)'],
      UCPA: ['Palier à semelle étroite UC + PA', 'Montage horizontal au sol', '2 trous (taraudés)', 'Châssis étroits, petits équipements européens/américains'],
      UELP: ['Palier à semelle UC + P avec bague excentrique', 'Montage horizontal au sol', '2 trous', 'Machines agricoles, blocage antivibratoire'],
      UKP: ['Palier à semelle UC + P avec manchon conique', 'Montage horizontal au sol', '2 trous', 'Vitesse élevée, charges lourdes, arbres sans rainure'],
      UCF: ['Palier à bride carrée UC + F', 'Montage sur face verticale', '4 trous', 'Flancs de machines, charges élevées'],
      UCFL: ['Palier à bride losange UC + FL', 'Montage sur face verticale', '2 trous', 'Espaces réduits'],
      UCFC: ['Palier à bride ronde UC + FC', 'Montage avec centrage en bout', '4 trous', 'Couvercles de machines, centrage'],
      UCFS: ['Bride carrée lourde à épaulement UC + FS', 'Face verticale avec épaulement', '4 trous', 'Mélangeurs, concasseurs, équipements lourds'],
      UCT: ['Palier coulissant UC + T', 'Glissière horizontale', '2 trous', 'Poulies de courroie, tension de chaînes']
    },
    inserts: {
      UC: ['2 vis de pression', 'Simple et économique', 'Usage général, charges légères/moyennes, réversible'],
      UEL: ['Bague excentrique', 'Résiste au déplacement axial, anti-desserrage', 'Machines agricoles, équipements vibrants'],
      UK: ['Alésage conique + manchon H', 'Vitesse élevée, charges lourdes, arbres sans rainure, montage facile', 'Vitesse élevée, charges lourdes, chocs']
    }
  },
  pt: {
    title: 'Tabela de equivalência',
    intro: 'Encontre o equivalente NATER das referências SKF, FYH, NSK, NTN e KOYO.',
    filter: 'Filtrar por modelo, ex. UCP205',
    download: 'Baixar a tabela completa (.xlsx)',
    skfNone: '— (a SKF não tem série pesada 3xx)',
    lightHeading: 'Série leve 2xx',
    heavyHeading: 'Série pesada 3xx',
    seriesHeading: 'Comparativo de séries',
    insertHeading: 'Rolamentos insertos',
    sizeHeading: 'Códigos de diâmetro',
    cols: ['Nosso modelo', 'Diâmetro d (mm)', 'SKF (mancal + inserto)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Série', 'Nome completo', 'Montagem', 'Furos', 'Código ISO do mancal', 'Uso típico'],
    insertCols: ['Inserto', 'Travamento', 'Característica', 'Equivalente SKF', 'Uso típico'],
    sizeCols: ['Código de tamanho (dois últimos dígitos)', 'Diâmetro d (mm)'],
    footer: 'Equivalências',
    categoryLink: 'Precisa do equivalente SKF / FYH / NSK? Veja a tabela de equivalência',
    covered: 'Séries abrangidas: {light} (2xx) e {heavy} (3xx)',
    series: {
      UCP: ['Mancal de pé UC + P', 'Montagem horizontal sobre base', '2 furos', 'Transportadores, ventiladores, máquinas agrícolas (o mais comum)'],
      UCPA: ['Mancal de pé de base estreita UC + PA', 'Montagem horizontal sobre base', '2 furos (roscados)', 'Estruturas estreitas, pequenos equipamentos europeus/americanos'],
      UELP: ['Mancal de pé UC + P com colar excêntrico', 'Montagem horizontal sobre base', '2 furos', 'Máquinas agrícolas, travamento antivibração'],
      UKP: ['Mancal de pé UC + P com bucha cônica', 'Montagem horizontal sobre base', '2 furos', 'Alta rotação, cargas pesadas, eixos sem rasgo'],
      UCF: ['Mancal flangeado quadrado UC + F', 'Montagem em face vertical', '4 furos', 'Painéis laterais de máquinas, cargas altas'],
      UCFL: ['Mancal flangeado losango UC + FL', 'Montagem em face vertical', '2 furos', 'Espaços reduzidos'],
      UCFC: ['Mancal flangeado redondo UC + FC', 'Montagem com centralização na extremidade', '4 furos', 'Tampas de máquinas, centralização'],
      UCFS: ['Flange quadrada pesada com ressalto UC + FS', 'Face vertical com ressalto', '4 furos', 'Misturadores, britadores, equipamentos pesados'],
      UCT: ['Mancal deslizante UC + T', 'Trilho deslizante horizontal', '2 furos', 'Polias de correia, tensionamento de correntes']
    },
    inserts: {
      UC: ['2 parafusos de pressão', 'Simples e econômico', 'Uso geral, cargas leves/médias, reversível'],
      UEL: ['Colar excêntrico', 'Resiste ao deslocamento axial, anti-afrouxamento', 'Máquinas agrícolas, equipamentos com vibração'],
      UK: ['Furo cônico + bucha H', 'Alta rotação, cargas pesadas, eixos sem rasgo, montagem fácil', 'Alta rotação, cargas pesadas, impactos']
    }
  },
  ar: {
    title: 'جدول مقابلة الطرازات',
    intro: 'اعثر على طراز NATER المقابل لطرازات SKF وFYH وNSK وNTN وKOYO.',
    filter: 'تصفية حسب الطراز، مثل UCP205',
    download: 'تنزيل الجدول الكامل (.xlsx)',
    skfNone: '— (لا توجد سلسلة ثقيلة 3xx لدى SKF)',
    lightHeading: 'السلسلة الخفيفة 2xx',
    heavyHeading: 'السلسلة الثقيلة 3xx',
    seriesHeading: 'مقارنة السلاسل',
    insertHeading: 'المحامل الإدخالية',
    sizeHeading: 'رموز أقطار التجويف',
    cols: ['طرازنا', 'قطر التجويف d (مم)', 'SKF (بيت المحمل + المحمل)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['السلسلة', 'الاسم الكامل', 'التركيب', 'فتحات التثبيت', 'رمز بيت المحمل ISO', 'الاستخدام النموذجي'],
    insertCols: ['المحمل', 'القفل', 'الميزة', 'المقابل لدى SKF', 'الاستخدام النموذجي'],
    sizeCols: ['رمز الحجم (آخر رقمين)', 'قطر التجويف d (مم)'],
    footer: 'مقابلة الطرازات',
    categoryLink: 'تبحث عن المقابل لدى SKF / FYH / NSK؟ راجع جدول المقابلة',
    covered: 'السلاسل المشمولة: {light} (2xx) و{heavy} (3xx)',
    series: {
      UCP: ['بيت محمل بوسادة UC + P', 'تركيب أفقي على القاعدة', 'فتحتا تثبيت', 'السيور الناقلة، المراوح، الآلات الزراعية (الأكثر شيوعًا)'],
      UCPA: ['بيت محمل بوسادة ضيقة القاعدة UC + PA', 'تركيب أفقي على القاعدة', 'فتحتا تثبيت (ملولبتان)', 'الهياكل الضيقة، المعدات الأوروبية والأمريكية الصغيرة'],
      UELP: ['بيت محمل بوسادة UC + P مع طوق لامركزي', 'تركيب أفقي على القاعدة', 'فتحتا تثبيت', 'الآلات الزراعية، قفل مضاد للاهتزاز'],
      UKP: ['بيت محمل بوسادة UC + P مع جلبة مخروطية', 'تركيب أفقي على القاعدة', 'فتحتا تثبيت', 'سرعات عالية، أحمال ثقيلة، أعمدة بدون خدد'],
      UCF: ['بيت محمل بشفة مربعة UC + F', 'تركيب على وجه رأسي', '4 فتحات تثبيت', 'جوانب الآلات، أحمال عالية'],
      UCFL: ['بيت محمل بشفة معينية UC + FL', 'تركيب على وجه رأسي', 'فتحتا تثبيت', 'المساحات الضيقة'],
      UCFC: ['بيت محمل بشفة دائرية UC + FC', 'تركيب بتمركز على الطرف', '4 فتحات تثبيت', 'أغطية الآلات، التمركز'],
      UCFS: ['شفة مربعة ثقيلة بحافة تمركز UC + FS', 'وجه رأسي مع حافة تمركز', '4 فتحات تثبيت', 'الخلاطات، الكسارات، المعدات الثقيلة'],
      UCT: ['بيت محمل منزلق UC + T', 'سكة انزلاق أفقية', 'فتحتا تثبيت', 'بكرات السيور، شد السلاسل']
    },
    inserts: {
      UC: ['برغيا ضبط ×2', 'بسيط واقتصادي', 'استخدام عام، أحمال خفيفة/متوسطة، قابل للعكس'],
      UEL: ['طوق لامركزي', 'يقاوم الإزاحة المحورية، ضد الارتخاء', 'الآلات الزراعية، المعدات الاهتزازية'],
      UK: ['تجويف مخروطي + جلبة H', 'سرعة عالية، أحمال ثقيلة، أعمدة بدون خدد، تركيب سهل', 'سرعة عالية، أحمال ثقيلة، صدمات']
    }
  },
  tr: {
    title: 'Model karşılaştırma tablosu',
    intro: 'SKF, FYH, NSK, NTN ve KOYO parça numaralarının NATER karşılığını bulun.',
    filter: 'Modele göre filtrele, örn. UCP205',
    download: 'Tüm tabloyu indir (.xlsx)',
    skfNone: '— (SKF’nin 3xx ağır serisi yoktur)',
    lightHeading: 'Hafif 2xx serisi',
    heavyHeading: 'Ağır 3xx serisi',
    seriesHeading: 'Seri karşılaştırması',
    insertHeading: 'İç rulmanlar',
    sizeHeading: 'Delik çapı kodları',
    cols: ['Modelimiz', 'Delik çapı d (mm)', 'SKF (gövde + iç rulman)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Seri', 'Tam ad', 'Montaj', 'Delikler', 'ISO gövde kodu', 'Tipik kullanım'],
    insertCols: ['İç rulman', 'Kilitleme', 'Özellik', 'SKF karşılığı', 'Tipik kullanım'],
    sizeCols: ['Boyut kodu (son iki hane)', 'Delik çapı d (mm)'],
    footer: 'Model Karşılaştırma',
    categoryLink: 'SKF / FYH / NSK karşılığı mı arıyorsunuz? Model karşılaştırma tablosuna bakın',
    covered: 'Kapsanan seriler: {light} (2xx) ve {heavy} (3xx)',
    series: {
      UCP: ['UC + P yastık blok gövde', 'Yatay tabana montaj', '2 delik', 'Konveyörler, fanlar, tarım makineleri (en yaygın)'],
      UCPA: ['UC + PA dar tabanlı yastık blok', 'Yatay tabana montaj', '2 delik (dişli)', 'Dar şasiler, küçük Avrupa/ABD ekipmanları'],
      UELP: ['UC + P eksantrik bilezikli yastık blok', 'Yatay tabana montaj', '2 delik', 'Tarım makineleri, titreşime dayanıklı kilitleme'],
      UKP: ['UC + P konik kovanlı yastık blok', 'Yatay tabana montaj', '2 delik', 'Yüksek hız, ağır yük, kamasız miller'],
      UCF: ['UC + F kare flanşlı gövde', 'Dikey yüze montaj', '4 delik', 'Makine yan plakaları, yüksek yük'],
      UCFL: ['UC + FL baklava flanşlı gövde', 'Dikey yüze montaj', '2 delik', 'Dar alanlar'],
      UCFC: ['UC + FC yuvarlak flanşlı gövde', 'Uç yüzden merkezlemeli montaj', '4 delik', 'Makine kapakları, merkezleme'],
      UCFS: ['UC + FS ağır bilezikli kare flanş', 'Bilezikli dikey montaj', '4 delik', 'Mikserler, kırıcılar, ağır ekipmanlar'],
      UCT: ['UC + T kızaklı gövde', 'Yatay kızak rayı', '2 delik', 'Kasnaklar, zincir germe']
    },
    inserts: {
      UC: ['2 setuskur', 'Basit ve ekonomik', 'Genel kullanım, hafif/orta yük, çift yönlü'],
      UEL: ['Eksantrik bilezik', 'Eksenel kaymaya dayanır, gevşemeye karşı', 'Tarım makineleri, titreşimli ekipmanlar'],
      UK: ['Konik delik + H kovanı', 'Yüksek hız, ağır yük, kamasız miller, kolay montaj', 'Yüksek hız, ağır yük, darbe']
    }
  },
  ru: {
    title: 'Таблица соответствия моделей',
    intro: 'Найдите аналог NATER для номеров SKF, FYH, NSK, NTN и KOYO.',
    filter: 'Фильтр по модели, напр. UCP205',
    download: 'Скачать полную таблицу (.xlsx)',
    skfNone: '— (у SKF нет тяжёлой серии 3xx)',
    lightHeading: 'Лёгкая серия 2xx',
    heavyHeading: 'Тяжёлая серия 3xx',
    seriesHeading: 'Сравнение серий',
    insertHeading: 'Вставные подшипники',
    sizeHeading: 'Коды посадочных диаметров',
    cols: ['Наша модель', 'Посадочный диаметр d (мм)', 'SKF (корпус + подшипник)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Серия', 'Полное название', 'Монтаж', 'Отверстия', 'Код корпуса ISO', 'Типовое применение'],
    insertCols: ['Подшипник', 'Фиксация', 'Особенность', 'Аналог SKF', 'Типовое применение'],
    sizeCols: ['Код размера (последние две цифры)', 'Посадочный диаметр d (мм)'],
    footer: 'Соответствие моделей',
    categoryLink: 'Нужен аналог SKF / FYH / NSK? Смотрите таблицу соответствия',
    covered: 'Охваченные серии: {light} (2xx) и {heavy} (3xx)',
    series: {
      UCP: ['Корпус на лапах UC + P', 'Горизонтальный монтаж на основание', '2 отверстия', 'Конвейеры, вентиляторы, сельхозтехника (самый распространённый)'],
      UCPA: ['Корпус на лапах с узким основанием UC + PA', 'Горизонтальный монтаж на основание', '2 отверстия (резьбовые)', 'Узкие рамы, малые европейские/американские машины'],
      UELP: ['Корпус на лапах UC + P с эксцентриковым кольцом', 'Горизонтальный монтаж на основание', '2 отверстия', 'Сельхозтехника, вибростойкая фиксация'],
      UKP: ['Корпус на лапах UC + P с закрепительной втулкой', 'Горизонтальный монтаж на основание', '2 отверстия', 'Высокие скорости, тяжёлые нагрузки, валы без шпоночного паза'],
      UCF: ['Квадратный фланцевый корпус UC + F', 'Монтаж на вертикальную поверхность', '4 отверстия', 'Боковины машин, высокие нагрузки'],
      UCFL: ['Ромбический фланцевый корпус UC + FL', 'Монтаж на вертикальную поверхность', '2 отверстия', 'Ограниченное пространство'],
      UCFC: ['Круглый фланцевый корпус UC + FC', 'Торцевой монтаж с центрированием', '4 отверстия', 'Крышки машин, центрирование'],
      UCFS: ['Тяжёлый квадратный фланец с буртиком UC + FS', 'Вертикальная поверхность с буртиком', '4 отверстия', 'Смесители, дробилки, тяжёлое оборудование'],
      UCT: ['Натяжной корпус UC + T', 'Горизонтальная направляющая', '2 отверстия', 'Шкивы, натяжение цепей']
    },
    inserts: {
      UC: ['2 установочных винта', 'Просто и экономично', 'Общее применение, лёгкие/средние нагрузки, реверсивное вращение'],
      UEL: ['Эксцентриковое кольцо', 'Устойчивость к осевому смещению, защита от отворачивания', 'Сельхозтехника, вибрационное оборудование'],
      UK: ['Конусное отверстие + втулка H', 'Высокая скорость, тяжёлые нагрузки, валы без шпоночного паза, лёгкий монтаж', 'Высокая скорость, тяжёлые нагрузки, удары']
    }
  },
  it: {
    title: 'Tabella di corrispondenza',
    intro: 'Trova l’equivalente NATER dei codici SKF, FYH, NSK, NTN e KOYO.',
    filter: 'Filtra per modello, es. UCP205',
    download: 'Scarica la tabella completa (.xlsx)',
    skfNone: '— (SKF non ha la serie pesante 3xx)',
    lightHeading: 'Serie leggera 2xx',
    heavyHeading: 'Serie pesante 3xx',
    seriesHeading: 'Confronto tra serie',
    insertHeading: 'Cuscinetti inserti',
    sizeHeading: 'Codici di alesaggio',
    cols: ['Nostro modello', 'Alesaggio d (mm)', 'SKF (scatola + inserto)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Serie', 'Nome completo', 'Montaggio', 'Fori', 'Codice scatola ISO', 'Uso tipico'],
    insertCols: ['Inserto', 'Bloccaggio', 'Caratteristica', 'Equivalente SKF', 'Uso tipico'],
    sizeCols: ['Codice di misura (ultime due cifre)', 'Alesaggio d (mm)'],
    footer: 'Corrispondenze',
    categoryLink: 'Cerchi l’equivalente SKF / FYH / NSK? Vedi la tabella di corrispondenza',
    covered: 'Serie coperte: {light} (2xx) e {heavy} (3xx)',
    series: {
      UCP: ['Supporto a piedini UC + P', 'Montaggio orizzontale su base', '2 fori', 'Trasportatori, ventilatori, macchine agricole (il più comune)'],
      UCPA: ['Supporto a piedini a base stretta UC + PA', 'Montaggio orizzontale su base', '2 fori (filettati)', 'Telai stretti, piccole macchine europee/americane'],
      UELP: ['Supporto a piedini UC + P con anello eccentrico', 'Montaggio orizzontale su base', '2 fori', 'Macchine agricole, bloccaggio antivibrazione'],
      UKP: ['Supporto a piedini UC + P con bussola conica', 'Montaggio orizzontale su base', '2 fori', 'Alta velocità, carichi pesanti, alberi senza linguetta'],
      UCF: ['Supporto a flangia quadrata UC + F', 'Montaggio su faccia verticale', '4 fori', 'Fianchi macchina, carichi elevati'],
      UCFL: ['Supporto a flangia a losanga UC + FL', 'Montaggio su faccia verticale', '2 fori', 'Spazi ridotti'],
      UCFC: ['Supporto a flangia tonda UC + FC', 'Montaggio con centraggio di testa', '4 fori', 'Coperchi macchina, centraggio'],
      UCFS: ['Flangia quadrata pesante con battuta UC + FS', 'Faccia verticale con battuta', '4 fori', 'Miscelatori, frantoi, macchinari pesanti'],
      UCT: ['Supporto a slitta UC + T', 'Guida di scorrimento orizzontale', '2 fori', 'Pulegge, tensionamento catene']
    },
    inserts: {
      UC: ['2 grani', 'Semplice ed economico', 'Uso generale, carichi leggeri/medi, reversibile'],
      UEL: ['Anello eccentrico', 'Resiste allo spostamento assiale, anti-allentamento', 'Macchine agricole, apparecchiature vibranti'],
      UK: ['Foro conico + bussola H', 'Alta velocità, carichi pesanti, alberi senza linguetta, montaggio facile', 'Alta velocità, carichi pesanti, urti']
    }
  },
  vi: {
    title: 'Bảng đối chiếu mã hiệu',
    intro: 'Tìm mã NATER tương ứng với mã SKF, FYH, NSK, NTN và KOYO.',
    filter: 'Lọc theo mã, ví dụ UCP205',
    download: 'Tải bảng đầy đủ (.xlsx)',
    skfNone: '— (SKF không có dòng tải nặng 3xx)',
    lightHeading: 'Dòng tải nhẹ 2xx',
    heavyHeading: 'Dòng tải nặng 3xx',
    seriesHeading: 'So sánh các dòng',
    insertHeading: 'Vòng bi lắp ghép',
    sizeHeading: 'Mã đường kính lỗ',
    cols: ['Mã của chúng tôi', 'Đường kính lỗ d (mm)', 'SKF (vỏ + vòng bi)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Dòng', 'Tên đầy đủ', 'Lắp đặt', 'Lỗ bu lông', 'Mã vỏ ISO', 'Ứng dụng điển hình'],
    insertCols: ['Vòng bi', 'Khóa', 'Đặc điểm', 'Mã SKF tương ứng', 'Ứng dụng điển hình'],
    sizeCols: ['Mã kích thước (hai chữ số cuối)', 'Đường kính lỗ d (mm)'],
    footer: 'Bảng đối chiếu',
    categoryLink: 'Cần mã tương ứng SKF / FYH / NSK? Xem bảng đối chiếu',
    covered: 'Các dòng được bao gồm: {light} (2xx) và {heavy} (3xx)',
    series: {
      UCP: ['Gối đỡ UC + P', 'Lắp ngang trên nền', '2 lỗ', 'Băng tải, quạt, máy nông nghiệp (phổ biến nhất)'],
      UCPA: ['Gối đỡ đế hẹp UC + PA', 'Lắp ngang trên nền', '2 lỗ (ren)', 'Khung máy hẹp, thiết bị nhỏ châu Âu/Mỹ'],
      UELP: ['Gối đỡ UC + P có vòng lệch tâm', 'Lắp ngang trên nền', '2 lỗ', 'Máy nông nghiệp, khóa chống rung'],
      UKP: ['Gối đỡ UC + P có bạc côn', 'Lắp ngang trên nền', '2 lỗ', 'Tốc độ cao, tải nặng, trục không rãnh then'],
      UCF: ['Gối đỡ mặt bích vuông UC + F', 'Lắp trên mặt đứng', '4 lỗ', 'Vách máy, tải lớn'],
      UCFL: ['Gối đỡ mặt bích hình thoi UC + FL', 'Lắp trên mặt đứng', '2 lỗ', 'Không gian hẹp'],
      UCFC: ['Gối đỡ mặt bích tròn UC + FC', 'Lắp định tâm ở đầu trục', '4 lỗ', 'Nắp máy, định tâm'],
      UCFS: ['Mặt bích vuông nặng có gờ định vị UC + FS', 'Mặt đứng có gờ định vị', '4 lỗ', 'Máy trộn, máy nghiền, thiết bị nặng'],
      UCT: ['Gối đỡ trượt UC + T', 'Rãnh trượt ngang', '2 lỗ', 'Puli đai, căng xích']
    },
    inserts: {
      UC: ['2 vít chặn', 'Đơn giản, tiết kiệm chi phí', 'Dùng chung, tải nhẹ/trung bình, đảo chiều được'],
      UEL: ['Vòng lệch tâm', 'Chống dịch dọc trục, chống lỏng', 'Máy nông nghiệp, thiết bị rung'],
      UK: ['Lỗ côn + bạc siết H', 'Tốc độ cao, tải nặng, trục không rãnh then, lắp dễ', 'Tốc độ cao, tải nặng, va đập']
    }
  },
  id: {
    title: 'Tabel referensi silang model',
    intro: 'Temukan padanan NATER untuk nomor SKF, FYH, NSK, NTN, dan KOYO.',
    filter: 'Saring berdasarkan model, mis. UCP205',
    download: 'Unduh tabel lengkap (.xlsx)',
    skfNone: '— (SKF tidak memiliki seri berat 3xx)',
    lightHeading: 'Seri ringan 2xx',
    heavyHeading: 'Seri berat 3xx',
    seriesHeading: 'Perbandingan seri',
    insertHeading: 'Bantalan sisipan',
    sizeHeading: 'Kode diameter lubang',
    cols: ['Model kami', 'Diameter lubang d (mm)', 'SKF (rumah + bantalan)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['Seri', 'Nama lengkap', 'Pemasangan', 'Lubang baut', 'Kode rumah ISO', 'Penggunaan umum'],
    insertCols: ['Bantalan', 'Penguncian', 'Fitur', 'Padanan SKF', 'Penggunaan umum'],
    sizeCols: ['Kode ukuran (dua digit terakhir)', 'Diameter lubang d (mm)'],
    footer: 'Referensi Silang',
    categoryLink: 'Butuh padanan SKF / FYH / NSK? Lihat tabel referensi silang',
    covered: 'Seri yang tercakup: {light} (2xx) dan {heavy} (3xx)',
    series: {
      UCP: ['Rumah bantalan blok UC + P', 'Pemasangan horizontal di dasar', '2 lubang', 'Konveyor, kipas, mesin pertanian (paling umum)'],
      UCPA: ['Rumah bantalan blok dasar sempit UC + PA', 'Pemasangan horizontal di dasar', '2 lubang (berulir)', 'Rangka sempit, peralatan kecil Eropa/AS'],
      UELP: ['Rumah bantalan blok UC + P dengan ring eksentrik', 'Pemasangan horizontal di dasar', '2 lubang', 'Mesin pertanian, penguncian anti-getar'],
      UKP: ['Rumah bantalan blok UC + P dengan selongsong tirus', 'Pemasangan horizontal di dasar', '2 lubang', 'Kecepatan tinggi, beban berat, poros tanpa alur pasak'],
      UCF: ['Rumah flensa persegi UC + F', 'Pemasangan pada muka vertikal', '4 lubang', 'Panel samping mesin, beban tinggi'],
      UCFL: ['Rumah flensa belah ketupat UC + FL', 'Pemasangan pada muka vertikal', '2 lubang', 'Ruang sempit'],
      UCFC: ['Rumah flensa bundar UC + FC', 'Pemasangan dengan pemusatan di ujung', '4 lubang', 'Penutup mesin, pemusatan'],
      UCFS: ['Flensa persegi berat dengan bos penepat UC + FS', 'Muka vertikal dengan bos penepat', '4 lubang', 'Pengaduk, penghancur, peralatan berat'],
      UCT: ['Rumah geser UC + T', 'Rel geser horizontal', '2 lubang', 'Puli sabuk, pengencangan rantai']
    },
    inserts: {
      UC: ['2 baut penyetel', 'Sederhana dan hemat biaya', 'Penggunaan umum, beban ringan/sedang, dua arah'],
      UEL: ['Ring eksentrik', 'Tahan geser aksial, anti kendur', 'Mesin pertanian, peralatan bergetar'],
      UK: ['Lubang tirus + selongsong H', 'Kecepatan tinggi, beban berat, poros tanpa alur pasak, mudah dipasang', 'Kecepatan tinggi, beban berat, benturan']
    }
  },
  ja: {
    title: '型式対照表',
    intro: 'SKF・FYH・NSK・NTN・KOYOの型番に対応するNATERの型式を検索できます。',
    filter: '型式で絞り込み（例：UCP205）',
    download: '全対照表をダウンロード (.xlsx)',
    skfNone: '—（SKFに3xx重荷重シリーズはありません）',
    lightHeading: '軽荷重 2xxシリーズ',
    heavyHeading: '重荷重 3xxシリーズ',
    seriesHeading: 'シリーズ比較',
    insertHeading: 'インサートベアリング',
    sizeHeading: '内径サイズコード',
    cols: ['当社型式', '内径 d (mm)', 'SKF（ハウジング＋ベアリング）', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['シリーズ', '正式名称', '取付方式', 'ボルト穴', 'ISOハウジングコード', '代表用途'],
    insertCols: ['ベアリング', '固定方式', '特長', 'SKF対応', '代表用途'],
    sizeCols: ['サイズコード（下2桁）', '内径 d (mm)'],
    footer: '型式対照表',
    categoryLink: 'SKF / FYH / NSKの対応型式をお探しですか？型式対照表をご覧ください',
    covered: '収録シリーズ：{light}（2xx）／{heavy}（3xx）',
    series: {
      UCP: ['ピローブロック UC + P', '水平ベース取付', '2穴', 'コンベヤ、ファン、農業機械（最も一般的）'],
      UCPA: ['細幅ベースピローブロック UC + PA', '水平ベース取付', '2穴（ねじ穴）', '狭いフレーム、欧米の小型機器'],
      UELP: ['偏心カラー付きピローブロック UC + P', '水平ベース取付', '2穴', '農業機械、防振ロック'],
      UKP: ['アダプタスリーブ付きピローブロック UC + P', '水平ベース取付', '2穴', '高速・重荷重、キー溝なしシャフト'],
      UCF: ['角形フランジハウジング UC + F', '垂直面取付', '4穴', '機械側板、高荷重'],
      UCFL: ['ひし形フランジハウジング UC + FL', '垂直面取付', '2穴', '狭いスペース'],
      UCFC: ['丸形フランジハウジング UC + FC', '端面位置決め取付', '4穴', '機械カバー、センタリング'],
      UCFS: ['位置決めインロー付き重量角形フランジ UC + FS', 'インロー付き垂直取付', '4穴', '撹拌機、破砕機、重荷重機器'],
      UCT: ['スライドハウジング UC + T', '水平スライドレール', '2穴', 'ベルトプーリ、チェーン張り']
    },
    inserts: {
      UC: ['止めねじ×2', '構造がシンプルで経済的', '汎用、軽〜中荷重、正逆転'],
      UEL: ['偏心カラー', '軸方向のずれに強い、緩み防止', '農業機械、振動機器'],
      UK: ['テーパ穴＋アダプタスリーブH', '高速・重荷重、キー溝なしシャフト、取付容易', '高速・重荷重・衝撃']
    }
  },
  ko: {
    title: '모델 대조표',
    intro: 'SKF, FYH, NSK, NTN, KOYO 부품 번호에 해당하는 NATER 모델을 찾아보세요.',
    filter: '모델로 필터링, 예: UCP205',
    download: '전체 표 다운로드 (.xlsx)',
    skfNone: '— (SKF에는 3xx 중하중 시리즈가 없음)',
    lightHeading: '경하중 2xx 시리즈',
    heavyHeading: '중하중 3xx 시리즈',
    seriesHeading: '시리즈 비교',
    insertHeading: '인서트 베어링',
    sizeHeading: '내경 사이즈 코드',
    cols: ['당사 모델', '내경 d (mm)', 'SKF (하우징 + 베어링)', 'FYH', 'NSK', 'NTN', 'KOYO'],
    seriesCols: ['시리즈', '전체 명칭', '장착 방식', '볼트 홀', 'ISO 하우징 코드', '대표 용도'],
    insertCols: ['베어링', '잠금 방식', '특징', 'SKF 대응', '대표 용도'],
    sizeCols: ['사이즈 코드 (끝 두 자리)', '내경 d (mm)'],
    footer: '모델 대조표',
    categoryLink: 'SKF / FYH / NSK 대응 모델이 필요하세요? 모델 대조표 보기',
    covered: '수록 시리즈: {light}(2xx) 및 {heavy}(3xx)',
    series: {
      UCP: ['필로우 블록 하우징 UC + P', '수평 베이스 장착', '2홀', '컨베이어, 팬, 농기계(가장 일반적)'],
      UCPA: ['협소 베이스 필로우 블록 UC + PA', '수평 베이스 장착', '2홀(나사홀)', '좁은 프레임, 소형 유럽/미국 장비'],
      UELP: ['편심 칼라 필로우 블록 UC + P', '수평 베이스 장착', '2홀', '농기계, 방진 잠금'],
      UKP: ['어댑터 슬리브 필로우 블록 UC + P', '수평 베이스 장착', '2홀', '고속·중하중, 키홈 없는 축'],
      UCF: ['사각 플랜지 하우징 UC + F', '수직면 장착', '4홀', '기계 측판, 높은 하중'],
      UCFL: ['마름모 플랜지 하우징 UC + FL', '수직면 장착', '2홀', '좁은 공간'],
      UCFC: ['원형 플랜지 하우징 UC + FC', '단면 센터링 장착', '4홀', '기계 커버, 센터링'],
      UCFS: ['스피곳 있는 중하중 사각 플랜지 UC + FS', '스피곳 수직 장착', '4홀', '믹서, 파쇄기, 중장비'],
      UCT: ['슬라이드 하우징 UC + T', '수평 슬라이드 레일', '2홀', '벨트 풀리, 체인 텐션']
    },
    inserts: {
      UC: ['고정 나사 2개', '구조가 단순하고 경제적', '범용, 경·중하중, 정역회전'],
      UEL: ['편심 칼라', '축 방향 이동 방지, 풀림 방지', '농기계, 진동 장비'],
      UK: ['테이퍼 보어 + 어댑터 슬리브 H', '고속·중하중, 키홈 없는 축, 장착 용이', '고속·중하중·충격']
    }
  }
});

const LOCALES = ['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko'];
const SERIES_KEYS = ['UCP', 'UCPA', 'UELP', 'UKP', 'UCF', 'UCFL', 'UCFC', 'UCFS', 'UCT'];
const INSERT_KEYS = ['UC', 'UEL', 'UK'];
const SCALAR_KEYS = ['title', 'intro', 'covered', 'filter', 'download', 'skfNone', 'lightHeading', 'heavyHeading', 'seriesHeading', 'insertHeading', 'sizeHeading', 'footer', 'categoryLink'];

/** Localized cross-reference text. */
export function xrefText(locale) {
  return XREF_I18N[locale] ?? XREF_I18N.en;
}

/** Returns a list of problems, or an empty array when every locale is complete. */
export function validateXrefI18n() {
  const issues = [];
  for (const locale of LOCALES) {
    const text = XREF_I18N[locale];
    if (!text) { issues.push(`${locale}: missing`); continue; }
    for (const key of SCALAR_KEYS) {
      if (typeof text[key] !== 'string' || !text[key].trim()) issues.push(`${locale}.${key}: missing`);
    }
    for (const key of ['cols', 'seriesCols', 'insertCols', 'sizeCols']) {
      if (!Array.isArray(text[key]) || text[key].length !== XREF_I18N.en[key].length) issues.push(`${locale}.${key}: wrong length`);
    }
    for (const code of SERIES_KEYS) {
      const row = text.series?.[code];
      if (!Array.isArray(row) || row.length !== 4 || row.some(value => typeof value !== 'string' || !value.trim())) {
        issues.push(`${locale}.series.${code}: missing or incomplete`);
      }
    }
    for (const code of INSERT_KEYS) {
      const row = text.inserts?.[code];
      if (!Array.isArray(row) || row.length !== 3 || row.some(value => typeof value !== 'string' || !value.trim())) {
        issues.push(`${locale}.inserts.${code}: missing or incomplete`);
      }
    }
  }
  return issues;
}
