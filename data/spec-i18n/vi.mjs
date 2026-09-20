// Vietnamese specification text. Shape and keys mirror data/spec-i18n/en.mjs.

export default Object.freeze({
  locale: 'vi',
  ui: {
    productImage: 'Hình ảnh sản phẩm',
    productData: 'Thông số sản phẩm',
    fullModelRange: 'Dải mã sản phẩm đầy đủ',
    housingModel: 'Mã vỏ gối đỡ',
    matchingBearing: 'Vòng bi lắp ghép',
    boreRange: 'Dải đường kính lỗ khoan',
    housing: 'Vỏ',
    bearing: 'Vòng bi',
    feature: 'Đặc điểm',
    application: 'Ứng dụng',
    flangeTypes: 'Các kiểu mặt bích trong dòng này',
    needSpecs: 'Cần thông số kỹ thuật hoặc báo giá?',
    emailUs: 'Gửi e-mail cho chúng tôi',
    // {code} được thay bằng mã dòng sản phẩm, ví dụ "Dòng F".
    seriesPattern: 'Dòng {code}'
  },
  modelGroups: {
    light200: 'Dòng 200 — tải nhẹ, dòng được sử dụng phổ biến nhất',
    light200Stock: 'Dòng 200 — tải nhẹ, dòng tiêu chuẩn',
    heavy300: 'Dòng 300 — tải nặng, thành dày hơn cho tải trọng lớn hơn',
    specialVariants: 'Biến thể đặc biệt',
    imperialBore: 'Mã lỗ khoan hệ inch',
    imperialNote: 'Phiên bản lỗ khoan hệ inch cho thị trường xuất khẩu.',
    imperialNoteShort: 'Phiên bản lỗ khoan hệ inch.',
    suct: 'Dòng SUCT thép không gỉ',
    suctNote: 'Chống ăn mòn — dùng cho môi trường ẩm ướt và thiết bị đạt tiêu chuẩn thực phẩm.'
  },
  materials: {
    housingCastIron: 'Gang xám HT200',
    bearingChromeSteel: 'Thép crôm GCr15'
  },
  unitStandardNote:
    'Kết cấu tiêu chuẩn: khóa bằng vít hãm, phớt cao su kép, khả năng tự cân bằng ±2° và núm tra mỡ để bôi trơn lại.',
  unitModels: {
    UCT218: {
      feature: 'Điều chỉnh độ căng bằng trượt',
      application: 'Băng tải, gầu tải, máy truyền động'
    },
    UCP206: {
      feature: 'Kiểu vạn năng, chịu tải ổn định',
      application: 'Quạt, máy nông nghiệp, băng tải thông dụng'
    },
    UCF208: {
      feature: 'Cố định bằng 4 bu lông vuông, chống xoắn',
      application: 'Máy đóng gói, thiết bị băng tải lắp bên hông'
    },
    UCFC208: {
      feature: 'Gờ định vị chính xác, lực phân bố đều',
      application: 'Bơm, hộp giảm tốc, vỏ máy chính xác'
    },
    UCFL205: {
      feature: 'Kết cấu nhỏ gọn, tiết kiệm không gian',
      application: 'Máy dệt, băng tải nhẹ, thiết bị nông trại nhỏ'
    },
    UCPA212: {
      feature: 'Lỗ ren kín, bề mặt phẳng',
      application: 'Khung máy, thiết bị vận chuyển chính xác'
    },
    UCPA207: {
      feature: 'Lỗ ren kín, bề mặt lắp phẳng',
      application: 'Thiết bị tự động hóa, đế máy công cụ'
    },
    UCPH206: {
      feature: 'Thiết kế đế cao, tâm trục nâng cao',
      application: 'Máy nông nghiệp, khung băng tải có chiều cao đặc biệt'
    },
    UCFA206: {
      feature: 'Lỗ rãnh điều chỉnh được, thiết kế hai tai nhỏ gọn',
      application: 'Máy dệt, thiết bị đóng gói nhẹ'
    },
    UCFB208: {
      feature: 'Mặt bích tròn hai bu lông, lắp đặt ổn định',
      application: 'Máy thực phẩm, thiết bị đóng gói, truyền động bên hông'
    },
    UCHA206: {
      feature: 'Lắp treo trên cao',
      application: 'Băng tải trên cao, dây chuyền sản xuất treo'
    }
  },
  housingFeatures: {
    F: 'Lắp mặt bích vuông 4 bu lông, lỗ khoan cầu tự cân bằng',
    T: 'Thiết kế trượt căng, di chuyển được trên ray dẫn hướng, lỗ khoan cầu tự cân bằng',
    P: 'Lắp đế gối đỡ 2 bu lông, lỗ khoan cầu tự cân bằng',
    FC: 'Thiết kế mặt bích tròn, nhiều lỗ bu lông, lỗ khoan cầu tự cân bằng',
    FL: 'Thiết kế mặt bích oval, 2 lỗ bu lông, lỗ khoan cầu tự cân bằng',
    PA: 'Gối đỡ ngắn, đế lắp nhỏ gọn, lỗ khoan cầu tự cân bằng',
    PH: 'Gối đỡ đế cao, chiều cao trục nâng lên, lỗ khoan cầu tự cân bằng',
    FU: 'Mặt bích vuông 4 bu lông, đế mở rộng, lỗ khoan cầu tự cân bằng',
    FB: 'Gối đỡ đế có ren, lỗ lắp ren, lỗ khoan cầu tự cân bằng',
    PAS: 'Vỏ gối đỡ kiểu treo, lắp treo, lỗ khoan cầu tự cân bằng'
  },
  housingApplications: {
    F: 'Băng tải, máy nông nghiệp, quạt, máy dệt',
    T: 'Căng băng tải, căng xích, máy nông nghiệp, thiết bị vận chuyển vật liệu',
    P: 'Băng tải, quạt, máy nông nghiệp, thiết bị truyền động thông dụng',
    FC: 'Băng tải, máy thực phẩm, thiết bị đóng gói, quạt, truyền động thông dụng',
    FL: 'Băng tải, máy nông nghiệp, máy dệt, truyền động thông dụng',
    PA: 'Băng tải, máy dệt, thiết bị truyền động nhỏ',
    PH: 'Băng tải, máy nông nghiệp, thiết bị chế biến',
    FU: 'Băng tải hạng nặng, thiết bị phụ trợ khai thác mỏ, máy nông nghiệp',
    FB: 'Máy công cụ, thiết bị tự động hóa, hệ truyền động nhỏ gọn',
    PAS: 'Băng tải trên cao, gầu tải, đường truyền động treo'
  },
  housingStandardNotes: {
    F: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ gối đỡ bằng gang xám HT200, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC.',
    T: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ gối đỡ bằng gang xám HT200 có rãnh trượt để điều chỉnh theo trục, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Lý tưởng cho các ứng dụng cần căng đai hoặc xích và định vị trục linh hoạt.',
    P: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ gối đỡ bằng gang xám HT200 có hai lỗ bu lông lắp đặt, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Lắp ngang đơn giản và ổn định để đỡ trục quay trong công nghiệp thông dụng.',
    FC: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ mặt bích tròn bằng gang xám HT200 với các lỗ lắp đặt cách đều nhau, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Kết cấu mặt bích tròn nhỏ gọn để lắp trên bề mặt khung thiết bị và thành máy, tiết kiệm không gian.',
    FL: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ mặt bích oval bằng gang xám HT200 với hai lỗ lắp đặt, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Mặt bích oval nhỏ gọn cho các phương án lắp đặt trong không gian hạn chế.',
    PA: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ gối đỡ ngắn bằng gang xám HT200, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Thiết kế đế ngắn tiết kiệm không gian lắp đặt cho các bố trí máy nhỏ gọn.',
    PH: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ gối đỡ đế cao bằng gang xám HT200, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Đế nâng cao tạo khoảng trống bên dưới trục cho các yêu cầu về che chắn và không gian.',
    FU: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ mặt bích vuông bằng gang xám HT200 với đế mở rộng được gia cường, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Kết cấu gia cường cho khả năng chịu tải cao hơn trong điều kiện làm việc nặng.',
    FB: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ gối đỡ bằng gang xám HT200 với các lỗ lắp có ren, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Lỗ có ren loại bỏ bu lông xuyên, lý tưởng để lắp trên tấm máy mỏng.',
    PAS: 'Kết cấu tiêu chuẩn cho tất cả các mã: vỏ gối đỡ kiểu treo bằng gang xám HT200 để lắp treo, khoang trong dạng cầu cho khả năng tự cân bằng ±2° để bù lệch trục, bề mặt sơn chống gỉ, thiết kế để lắp vòng bi lắp ghép dòng UC. Kết cấu treo cho hệ thống băng tải và gầu tải trên cao.'
  },
  flangeTypes: {
    UCF: 'Mặt bích vuông bốn bu lông, không có gờ định vị',
    UCFC: 'Mặt bích tròn có gờ định vị',
    UCFL: 'Mặt bích oval hai bu lông — mảnh và nhỏ gọn',
    UCFA: 'Mặt bích oval có lỗ rãnh — điều chỉnh được vị trí lắp',
    UCFB: 'Mặt bích tròn hai bu lông — không gờ định vị, trọng lượng nhẹ'
  }
});
