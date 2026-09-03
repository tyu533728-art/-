/**
 * Guides 技术文章（英文，公开 SEO 内容）
 * 铁律：只写通用工程常识，不编造具体型号对照、价格、库存、资质数据。
 */
export const guides = [
  {
    slug: 'ucp-vs-ucf-vs-ucfl-which-housing',
    title: 'UCP vs UCF vs UCFL: Which Pillow Block Housing Fits Your Shaft?',
    description: 'A plain-language guide to the three most common pillow block bearing housing types, what the letters mean, and how to choose the right one for your equipment.',
    date: '2026-09-02',
    intro: 'Pillow block housings look similar, but the base shape decides how they mount — and choosing the wrong type means rework on your machine frame. This guide explains the three most common series and where each one belongs.',
    sections: [
      {
        h: 'What the letters mean',
        p: [
          'Bearing housing codes are not random. The first letters describe the housing shape and mounting style:',
        ],
        list: [
          'UCP — U-series bearing in a P (pillow / pedestal) housing: a solid base with two bolt holes, the classic "plummer block" style.',
          'UCF — U-series bearing in an F (flanged) housing: a square four-bolt flange that mounts against a vertical face.',
          'UCFL — U-series bearing in an FL (flanged, two-bolt oval) housing: a compact two-hole flange with a rounded outline.',
        ],
      },
      {
        h: 'Where each type fits best',
        p: [
          'UCP is the workhorse for horizontal shafts supported from below — conveyors, line shafts, fans, mixers. The wide two-bolt base spreads the load and makes alignment forgiving.',
          'UCF bolts onto the end face of a machine or a bracket, which is why it appears on equipment where the bearing must hang or attach to a wall, such as the tension end of a small conveyor or an idler mount.',
          'UCFL saves space when only two bolts can be placed, or when the mounting surface is narrow. It is common on light-duty machinery where a full square flange would not fit.',
        ],
      },
      {
        h: 'How to decide',
        p: [
          'Ask three questions before ordering:',
        ],
        list: [
          'Which direction is the load? Supported from below usually means UCP; hanging or end-mounted usually means a flanged type.',
          'What surface are you mounting to? A flat horizontal rail takes UCP; a vertical plate or machine face takes UCF or UCFL.',
          'How much room is there? When the bolt pattern is tight, UCFL is often the only flange that fits.',
        ],
      },
      {
        h: 'After choosing the housing, check the shaft',
        p: [
          'The housing is only half the decision. The bearing inside must match your shaft diameter and the expected radial load, and the housing bore must be machined to a tolerance the bearing can live with — a topic covered in our guide on housing bore tolerance.',
        ],
      },
    ],
    cta: 'Not sure which series fits your machine? Send us your shaft size and mounting photos — we will tell you which housing matches.',
  },
  {
    slug: 'why-housing-bore-tolerance-matters',
    title: 'Why Housing Bore Tolerance Matters More Than You Think',
    description: 'The fit between the housing bore and the bearing outer ring decides how long the bearing lasts. Here is what to check, in plain language.',
    date: '2026-09-02',
    intro: 'A bearing rarely fails on its own. More often, the housing bore is too tight or too loose, and the bearing pays the price. This guide explains why the bore fit matters and what a good housing should offer.',
    sections: [
      {
        h: 'Too loose: the outer ring creeps',
        p: [
          'When the bore is oversized, the bearing outer ring is not held firmly. Under load the ring can slowly rotate inside the housing — called creep or fretting. The result is wear on the housing seat, heat, and a bearing that fails long before its rated life.',
        ],
      },
      {
        h: 'Too tight: the internal clearance disappears',
        p: [
          'When the bore is undersized, pressing the bearing in squeezes the outer ring. That squeeze reduces the bearing internal clearance. With too little clearance, the bearing runs hot and can seize, especially at speed.',
        ],
      },
      {
        h: 'The H7 standard',
        p: [
          'For most pillow block and flanged housings, the bearing seat is machined to an H7 tolerance. H7 defines a small, controlled clearance band so the outer ring fits firmly without being crushed. It is an ISO standard, so the same letter means the same band whether the housing was made in China, Europe or anywhere else.',
        ],
      },
      {
        h: 'What to ask your supplier',
        p: [
          'Do not settle for "good fit". Ask for the actual tolerance class of the bearing seat, and how it is measured. A supplier who states the class and shows the measurement record is one you can work with. A supplier who cannot answer either has not controlled the most important dimension in the product.',
        ],
      },
    ],
    cta: 'We machine bearing seats to a stated tolerance class and measure every part before it ships. Send us your sizes and we will show you the numbers.',
  },
  {
    slug: 'how-to-read-a-bearing-housing-model-number',
    title: 'How to Read a Bearing Housing Model Number',
    description: 'Those letters and numbers on a housing nameplate are a short technical sentence. Learn to decode them in two minutes.',
    date: '2026-09-02',
    intro: 'Names like UCP208 or F207 look cryptic until you know the pattern. Once you can read them, comparing quotes across suppliers becomes much easier.',
    sections: [
      {
        h: 'Part 1 — the housing series',
        p: [
          'The leading letters describe the housing type and shape: UCP (pillow block), UCF (square flange), UCFL (oval flange), and the P / F / FL / FC / T family for split and other housing styles. Different manufacturers share this letter system for interchangeability, which is why a UCP housing from one factory can often replace another.',
        ],
      },
      {
        h: 'Part 2 — the shaft size digits',
        p: [
          'The number group normally encodes the bore size. In the common metric system, the last two digits of a two-digit code (for example, the 08 in 208) refer to a standard shaft diameter in millimetres following the ISO size series. Larger two-digit groups follow the same logic: the digits describe a standard diameter step, not the millimetres written directly.',
        ],
      },
      {
        h: 'Part 3 — the bearing type inside',
        p: [
          'The first digit or letter block before the size digits tells you the bearing type inside the housing — for example, UC for the wide-inner-ring ball bearing used in most pillow blocks. When you ask for a matched set, the housing and bearing must share this code system, otherwise the set will not assemble correctly.',
        ],
      },
      {
        h: 'Why matched sets save time',
        p: [
          'Buying housings and bearings from different sources is where mistakes happen: a housing meant for one series assembled with a bearing from another. When the supplier ships housing and bearing as one matched set, that failure mode disappears before it starts.',
        ],
      },
    ],
    cta: 'Tell us the model number on your current housing — we will confirm the series and offer the matched set.',
  },
]
