// Indonesian specification text. Shape and keys mirror data/spec-i18n/en.mjs.

export default Object.freeze({
  locale: 'id',
  ui: {
    productImage: 'Gambar produk',
    productData: 'Data produk',
    fullModelRange: 'Rentang model lengkap',
    housingModel: 'Model rumah bantalan',
    matchingBearing: 'Bantalan pasangan',
    boreRange: 'Rentang diameter lubang',
    housing: 'Rumah',
    bearing: 'Bantalan',
    feature: 'Fitur',
    application: 'Aplikasi',
    flangeTypes: 'Jenis flensa dalam keluarga ini',
    needSpecs: 'Butuh spesifikasi atau penawaran harga?',
    emailUs: 'Kirim e-mail kepada kami',
    // {code} diganti dengan kode seri, misalnya "Seri F".
    seriesPattern: 'Seri {code}'
  },
  modelGroups: {
    light200: 'Seri 200 — beban ringan, rentang yang paling banyak digunakan',
    light200Stock: 'Seri 200 — beban ringan, rentang standar',
    heavy300: 'Seri 300 — beban berat, penampang lebih tebal untuk beban lebih tinggi',
    specialVariants: 'Varian khusus',
    imperialBore: 'Model lubang inci',
    imperialNote: 'Versi lubang inci untuk pasar ekspor.',
    imperialNoteShort: 'Versi lubang inci.',
    suct: 'Seri SUCT baja tahan karat',
    suctNote: 'Tahan korosi — untuk lingkungan lembap dan peralatan kelas pangan.'
  },
  materials: {
    housingCastIron: 'Besi cor kelabu HT200',
    bearingChromeSteel: 'Baja krom GCr15'
  },
  unitStandardNote:
    'Konstruksi standar: penguncian baut setel, segel karet ganda, kemampuan self-aligning ±2° dan nipple gemuk untuk pelumasan ulang.',
  unitModels: {
    UCT218: {
      feature: 'Penyesuaian tegangan yang dapat digeser',
      application: 'Konveyor, elevator ember, mesin transmisi'
    },
    UCP206: {
      feature: 'Tipe universal, pembebanan stabil',
      application: 'Kipas, mesin pertanian, konveyor umum'
    },
    UCF208: {
      feature: 'Pengikat persegi empat baut, tahan puntir',
      application: 'Mesin pengemasan, peralatan konveyor yang dipasang di samping'
    },
    UCFC208: {
      feature: 'Bos penepat presisi, gaya merata',
      application: 'Pompa, peredam kecepatan, selubung mesin presisi'
    },
    UCFL205: {
      feature: 'Struktur ringkas, hemat ruang',
      application: 'Mesin tekstil, konveyor ringan, peralatan pertanian kecil'
    },
    UCPA212: {
      feature: 'Lubang berulir buntu, permukaan rata',
      application: 'Rangka mesin, peralatan pengangkutan presisi'
    },
    UCPA207: {
      feature: 'Lubang berulir buntu, permukaan pemasangan rata',
      application: 'Peralatan otomasi, alas mesin perkakas'
    },
    UCPH206: {
      feature: 'Desain alas tinggi, pusat poros ditinggikan',
      application: 'Mesin pertanian, rangka konveyor dengan ketinggian khusus'
    },
    UCFA206: {
      feature: 'Lubang slot yang dapat disetel, desain dua lug yang ringkas',
      application: 'Mesin tekstil, peralatan pengemasan ringan'
    },
    UCFB208: {
      feature: 'Flensa bulat dua baut, pemasangan stabil',
      application: 'Mesin makanan, peralatan pengemasan, transmisi samping'
    },
    UCHA206: {
      feature: 'Pemasangan gantung di atas',
      application: 'Konveyor gantung di atas, jalur produksi gantung'
    }
  },
  housingFeatures: {
    F: 'Pemasangan flensa persegi 4 baut, lubang bola self-aligning',
    T: 'Desain geser take-up, dapat bergerak pada rel pemandu, lubang bola self-aligning',
    P: 'Pemasangan alas rumah bantalan 2 baut, lubang bola self-aligning',
    FC: 'Desain flensa bulat, banyak lubang baut, lubang bola self-aligning',
    FL: 'Desain flensa oval, 2 lubang baut, lubang bola self-aligning',
    PA: 'Rumah bantalan pendek, pemasangan alas ringkas, lubang bola self-aligning',
    PH: 'Rumah bantalan alas tinggi, tinggi poros ditinggikan, lubang bola self-aligning',
    FU: 'Flensa persegi 4 baut, alas diperpanjang, lubang bola self-aligning',
    FB: 'Rumah bantalan alas berulir, lubang pemasangan berulir, lubang bola self-aligning',
    PAS: 'Rumah bantalan tipe gantung, pemasangan tersuspensi, lubang bola self-aligning'
  },
  housingApplications: {
    F: 'Konveyor, mesin pertanian, kipas, mesin tekstil',
    T: 'Penegangan sabuk konveyor, pengencangan rantai, mesin pertanian, peralatan penanganan material',
    P: 'Konveyor, kipas, mesin pertanian, peralatan transmisi umum',
    FC: 'Konveyor, mesin makanan, peralatan pengemasan, kipas, transmisi umum',
    FL: 'Konveyor, mesin pertanian, mesin tekstil, transmisi umum',
    PA: 'Konveyor, mesin tekstil, peralatan transmisi kecil',
    PH: 'Konveyor, mesin pertanian, peralatan pengolahan',
    FU: 'Konveyor beban berat, peralatan penunjang pertambangan, mesin pertanian',
    FB: 'Mesin perkakas, peralatan otomasi, sistem transmisi ringkas',
    PAS: 'Konveyor gantung di atas, elevator ember, jalur transmisi tersuspensi'
  },
  housingStandardNotes: {
    F: 'Konstruksi standar pada semua model: rumah besi cor kelabu HT200, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC.',
    T: 'Konstruksi standar pada semua model: rumah besi cor kelabu HT200 dengan alur geser untuk penyesuaian aksial, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Ideal untuk aplikasi yang memerlukan penegangan sabuk atau rantai serta penempatan poros yang fleksibel.',
    P: 'Konstruksi standar pada semua model: rumah besi cor kelabu HT200 dengan dua lubang baut pemasangan, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Pemasangan horizontal yang sederhana dan stabil untuk menopang poros berputar pada industri umum.',
    FC: 'Konstruksi standar pada semua model: rumah flensa bulat besi cor kelabu HT200 dengan lubang pemasangan berjarak merata, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Struktur flensa bulat yang ringkas untuk pemasangan permukaan yang hemat ruang pada rangka peralatan dan dinding mesin.',
    FL: 'Konstruksi standar pada semua model: rumah flensa oval besi cor kelabu HT200 dengan dua lubang pemasangan, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Flensa oval yang ringkas untuk skenario pemasangan dengan ruang terbatas.',
    PA: 'Konstruksi standar pada semua model: rumah bantalan pendek besi cor kelabu HT200, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Desain alas pendek menghemat ruang pemasangan untuk tata letak mesin yang ringkas.',
    PH: 'Konstruksi standar pada semua model: rumah bantalan alas tinggi besi cor kelabu HT200, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Alas yang ditinggikan menciptakan jarak bebas di bawah poros untuk kebutuhan pelindung dan ruang.',
    FU: 'Konstruksi standar pada semua model: rumah flensa persegi besi cor kelabu HT200 dengan alas diperpanjang yang diperkuat, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Struktur yang diperkuat memberikan kapasitas beban lebih tinggi untuk kondisi kerja berat.',
    FB: 'Konstruksi standar pada semua model: rumah bantalan besi cor kelabu HT200 dengan lubang pemasangan berulir, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Lubang berulir menghilangkan baut tembus, ideal untuk pemasangan pada panel mesin yang tipis.',
    PAS: 'Konstruksi standar pada semua model: rumah bantalan gantung besi cor kelabu HT200 untuk pemasangan tersuspensi, rongga dalam berbentuk bola yang memberikan kemampuan self-aligning ±2° untuk mengompensasi ketidaksejajaran poros, permukaan dicat anti karat, dirancang untuk dipasangi bantalan sisipan seri UC. Struktur tersuspensi untuk sistem konveyor gantung di atas dan elevator.'
  },
  flangeTypes: {
    UCF: 'Flensa persegi empat baut, tanpa bos penepat',
    UCFC: 'Flensa bulat dengan bos penepat',
    UCFL: 'Flensa oval dua baut — ramping dan ringkas',
    UCFA: 'Flensa oval dengan lubang slot — posisi pemasangan dapat disetel',
    UCFB: 'Flensa bulat dua baut — tanpa bos penepat, ringan'
  }
});
