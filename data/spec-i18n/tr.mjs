// Turkish specification text. Shape and keys mirror data/spec-i18n/en.mjs.

export default Object.freeze({
  locale: 'tr',
  ui: {
    productImage: 'Ürün görseli',
    productData: 'Ürün verileri',
    fullModelRange: 'Tam model aralığı',
    housingModel: 'Gövde modeli',
    matchingBearing: 'Eşleşen rulman',
    boreRange: 'Delik çapı aralığı',
    housing: 'Gövde',
    bearing: 'Rulman',
    feature: 'Özellik',
    application: 'Uygulama',
    flangeTypes: 'Bu ailedeki flanş tipleri',
    needSpecs: 'Teknik özellik veya teklif mi gerekiyor?',
    emailUs: 'E-posta gönderin',
    // {code} seri koduyla değiştirilir, örn. "F Serisi".
    seriesPattern: '{code} Serisi'
  },
  modelGroups: {
    light200: '200 serisi — hafif hizmet, en yaygın kullanılan aralık',
    light200Stock: '200 serisi — hafif hizmet, standart aralık',
    heavy300: '300 serisi — ağır hizmet, yüksek yükler için daha kalın kesit',
    specialVariants: 'Özel tipler',
    imperialBore: 'İnç delikli modeller',
    imperialNote: 'İhracat pazarları için inç delikli versiyonlar.',
    imperialNoteShort: 'İnç delikli versiyonlar.',
    suct: 'SUCT paslanmaz çelik serisi',
    suctNote: 'Korozyona dayanıklı — nemli ortamlar ve gıda sınıfı ekipmanlar için.'
  },
  materials: {
    housingCastIron: 'HT200 gri dökme demir',
    bearingChromeSteel: 'GCr15 krom çeliği'
  },
  unitStandardNote:
    'Standart yapı: setuskur ile kilitleme, çift kauçuk keçe, ±2° kendinden hizalama özelliği ve yeniden yağlama için gres nipeli.',
  unitModels: {
    UCT218: {
      feature: 'Kaydırılabilir gergi ayarı',
      application: 'Konveyörler, kovalı elevatörler, transmisyon makineleri'
    },
    UCP206: {
      feature: 'Üniversal tip, dengeli yükleme',
      application: 'Fanlar, tarım makineleri, genel konveyörler'
    },
    UCF208: {
      feature: 'Dört cıvatalı kare sabitleme, burulmaya dayanıklı',
      application: 'Paketleme makineleri, yandan monte konveyör ekipmanları'
    },
    UCFC208: {
      feature: 'Hassas merkezleme bileziği, eşit kuvvet dağılımı',
      application: 'Pompalar, redüktörler, hassas makine gövdeleri'
    },
    UCFL205: {
      feature: 'Kompakt yapı, yer tasarrufu',
      application: 'Tekstil makineleri, hafif konveyörler, küçük tarım ekipmanları'
    },
    UCPA212: {
      feature: 'Kör dişli delikler, düz yüzey',
      application: 'Makine şaseleri, hassas taşıma ekipmanları'
    },
    UCPA207: {
      feature: 'Kör dişli delikler, düz montaj yüzeyi',
      application: 'Otomasyon ekipmanları, takım tezgâhı tabanları'
    },
    UCPH206: {
      feature: 'Yüksek taban tasarımı, yükseltilmiş mil merkezi',
      application: 'Tarım makineleri, özel yükseklikteki konveyör şaseleri'
    },
    UCFA206: {
      feature: 'Ayarlanabilir kanal delikler, kompakt iki kulaklı tasarım',
      application: 'Tekstil makineleri, hafif paketleme ekipmanları'
    },
    UCFB208: {
      feature: 'İki cıvatalı yuvarlak flanş, dengeli montaj',
      application: 'Gıda makineleri, paketleme ekipmanları, yandan transmisyon'
    },
    UCHA206: {
      feature: 'Asma tip montaj',
      application: 'Asma konveyörler, asılı üretim hatları'
    }
  },
  housingFeatures: {
    F: '4 cıvatalı kare flanş montajı, kendinden hizalı küresel delik',
    T: 'Gergi kızağı tasarımı, kılavuz raylar üzerinde hareketli, kendinden hizalı küresel delik',
    P: '2 cıvatalı yastık blok taban montajı, kendinden hizalı küresel delik',
    FC: 'Yuvarlak flanş tasarımı, çok sayıda cıvata deliği, kendinden hizalı küresel delik',
    FL: 'Oval flanş tasarımı, 2 cıvata deliği, kendinden hizalı küresel delik',
    PA: 'Kısa yastık blok, kompakt taban montajı, kendinden hizalı küresel delik',
    PH: 'Yüksek tabanlı yastık blok, yükseltilmiş mil yüksekliği, kendinden hizalı küresel delik',
    FU: '4 cıvatalı kare flanş, uzatılmış taban, kendinden hizalı küresel delik',
    FB: 'Dişli tabanlı yastık blok, dişli montaj delikleri, kendinden hizalı küresel delik',
    PAS: 'Askı tipi rulman yatağı, asılı montaj, kendinden hizalı küresel delik'
  },
  housingApplications: {
    F: 'Konveyörler, tarım makineleri, fanlar, tekstil makineleri',
    T: 'Konveyör bant gergisi, zincir gergisi, tarım makineleri, malzeme taşıma ekipmanları',
    P: 'Konveyörler, fanlar, tarım makineleri, genel transmisyon ekipmanları',
    FC: 'Konveyörler, gıda makineleri, paketleme ekipmanları, fanlar, genel transmisyon',
    FL: 'Konveyörler, tarım makineleri, tekstil makineleri, genel transmisyon',
    PA: 'Konveyörler, tekstil makineleri, küçük transmisyon ekipmanları',
    PH: 'Konveyörler, tarım makineleri, işleme ekipmanları',
    FU: 'Ağır hizmet konveyörleri, madencilik yardımcı ekipmanları, tarım makineleri',
    FB: 'Takım tezgâhları, otomasyon ekipmanları, kompakt transmisyon sistemleri',
    PAS: 'Asma konveyörler, kovalı elevatörler, asılı transmisyon hatları'
  },
  housingStandardNotes: {
    F: 'Tüm modellerde standart yapı: HT200 gri dökme demir gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır.',
    T: 'Tüm modellerde standart yapı: eksenel ayar için kaydırma kanallarına sahip HT200 gri dökme demir gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Kayış veya zincir gergisi ve esnek mil konumlandırması gerektiren uygulamalar için idealdir.',
    P: 'Tüm modellerde standart yapı: iki montaj cıvata deliğine sahip HT200 gri dökme demir gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Genel endüstriyel dönen mil desteği için basit ve dengeli yatay montaj.',
    FC: 'Tüm modellerde standart yapı: eşit aralıklı montaj deliklerine sahip HT200 gri dökme demir yuvarlak flanşlı gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Ekipman şaseleri ve makine duvarları üzerinde yer tasarrufu sağlayan yüzey montajı için kompakt dairesel flanş yapısı.',
    FL: 'Tüm modellerde standart yapı: iki montaj deliğine sahip HT200 gri dökme demir oval flanşlı gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Sınırlı alanlı montaj senaryoları için kompakt oval flanş.',
    PA: 'Tüm modellerde standart yapı: HT200 gri dökme demir kısa yastık blok gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Kısa taban tasarımı, kompakt makine yerleşimleri için montaj alanından tasarruf sağlar.',
    PH: 'Tüm modellerde standart yapı: HT200 gri dökme demir yüksek tabanlı yastık blok gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Yükseltilmiş taban, koruma muhafazaları ve alan gereksinimleri için milin altında boşluk oluşturur.',
    FU: 'Tüm modellerde standart yapı: takviyeli uzatılmış tabanlı HT200 gri dökme demir kare flanşlı gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Takviyeli yapı, ağır çalışma koşulları için daha yüksek yük kapasitesi sağlar.',
    FB: 'Tüm modellerde standart yapı: dişli montaj deliklerine sahip HT200 gri dökme demir yastık blok gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Dişli delikler boydan boya cıvata ihtiyacını ortadan kaldırır; ince makine panellerine montaj için idealdir.',
    PAS: 'Tüm modellerde standart yapı: asılı montaj için HT200 gri dökme demir askı tipi gövde, mil kaçıklığını telafi etmek için ±2° kendinden hizalama özelliği sunan küresel iç boşluk, paslanma önleyici boyalı yüzey, UC serisi iç rulmanlara uyacak şekilde tasarlanmıştır. Asma konveyör ve elevatör sistemleri için asılı yapı.'
  },
  flangeTypes: {
    UCF: 'Kare dört cıvatalı flanş, merkezleme bileziği yok',
    UCFC: 'Merkezleme bilezikli yuvarlak flanş',
    UCFL: 'Oval iki cıvatalı flanş — ince ve kompakt',
    UCFA: 'Kanal delikli oval flanş — ayarlanabilir montaj konumu',
    UCFB: 'Yuvarlak iki cıvatalı flanş — bileziksiz, hafif'
  }
});
