// Fastener product catalog data, sourced from 永年紧固件产品目录 (Yongnian Fastener Catalog).
// Each sub-series maps to a curated product list with spec, material, grade, finish and standard.

export const fastenerProducts = Object.freeze({
  BNSW: [
    { group: 'Bolts', name: 'Hex Head Bolt (Part Thread)', spec: 'M6–M64, L=16–300 mm', material: 'Carbon steel / medium carbon', grade: '4.8 / 8.8 / 10.9', finish: 'Zinc / black / HDG', standard: 'GB/T 5782, DIN 931, ISO 4014' },
    { group: 'Bolts', name: 'Hex Head Bolt (Full Thread)', spec: 'M6–M64, L=16–300 mm', material: 'Carbon steel / medium carbon', grade: '4.8 / 8.8', finish: 'Zinc / black', standard: 'GB/T 5783, DIN 933, ISO 4017' },
    { group: 'Bolts', name: 'Socket Head Cap Screw', spec: 'M3–M24, L=6–150 mm', material: 'Alloy steel', grade: '8.8 / 12.9', finish: 'Zinc / black', standard: 'GB/T 70.1, DIN 912, ISO 4762' },
    { group: 'Bolts', name: 'Carriage Bolt', spec: 'M6–M20, L=20–200 mm', material: 'Carbon steel', grade: '4.8', finish: 'Zinc', standard: 'GB/T 12, DIN 603' },
    { group: 'Bolts', name: 'U-Bolt', spec: 'M6–M24, inner R10–R100', material: 'Carbon / stainless steel', grade: '4.8', finish: 'Zinc / Dacromet', standard: 'GB/T 5787' },
    { group: 'Nuts', name: 'Hex Nut', spec: 'M6–M64', material: 'Carbon steel', grade: '4 / 8 / 10', finish: 'Zinc / black', standard: 'GB/T 6170, DIN 934, ISO 4032' },
    { group: 'Nuts', name: 'Nyloc Lock Nut', spec: 'M6–M36', material: 'Carbon steel', grade: '8', finish: 'Zinc', standard: 'GB/T 889, DIN 985' },
    { group: 'Nuts', name: 'Flange Nut', spec: 'M6–M20', material: 'Carbon steel', grade: '8', finish: 'Zinc', standard: 'GB/T 6177, DIN 6923' },
    { group: 'Screws', name: 'Socket Set Screw (Grub Screw)', spec: 'M3–M20', material: 'Alloy steel', grade: '45H', finish: 'Black', standard: 'GB/T 73, DIN 916, ISO 4026' },
    { group: 'Screws', name: 'Self-tapping Screw', spec: 'M3–M8, L=13–50 mm', material: 'Carbon steel', grade: '—', finish: 'Zinc / blue-white zinc', standard: 'GB/T 845, DIN 7981' },
    { group: 'Washers', name: 'Flat Washer', spec: 'M3–M64 (Ø6–Ø78)', material: 'Carbon steel', grade: '—', finish: 'Zinc / black', standard: 'GB/T 97, DIN 125' },
    { group: 'Washers', name: 'Spring Lock Washer', spec: 'M3–M48', material: '65Mn spring steel', grade: '—', finish: 'Zinc / black', standard: 'GB/T 93, DIN 127' }
  ],
  TRS: [
    { group: 'Threaded Rods', name: 'Threaded Rod / Stud (Full Thread)', spec: 'M6–M48, L=1 m / 2 m / 3 m', material: 'Carbon steel', grade: '4.8 / 8.8', finish: 'Zinc / black', standard: 'GB/T 15389, DIN 975' },
    { group: 'Threaded Rods', name: 'Zinc Plated Threaded Rod', spec: 'M6–M24, L=1 m / 2 m', material: 'Carbon steel', grade: '4.8', finish: 'Blue-white / color zinc', standard: 'DIN 975' },
    { group: 'Studs', name: 'Equal Double End Stud', spec: 'M6–M42', material: 'Carbon steel', grade: '8.8', finish: 'Black / zinc', standard: 'GB/T 901, DIN 939' },
    { group: 'Studs', name: 'Unequal Double End Stud', spec: 'M6–M42', material: 'Carbon steel', grade: '8.8', finish: 'Black', standard: 'GB/T 953' }
  ],
  CONS: [
    { group: 'Anchors', name: 'Sleeve Anchor / Expansion Bolt', spec: 'M6–M20, L=50–200 mm', material: 'Carbon steel', grade: '4.8', finish: 'Zinc', standard: 'GB/T 22795' },
    { group: 'Anchors', name: 'Chemical Anchor Bolt', spec: 'M8–M30', material: 'Carbon / stainless steel', grade: '5.8 / 8.8', finish: 'Zinc', standard: 'GB/T 2280' },
    { group: 'Formwork', name: 'Tie Rod / Formwork Threaded Rod', spec: 'M12–M16, L=200–1800 mm', material: 'Q235 / Q235B', grade: '4.8', finish: 'Zinc / natural', standard: 'GB / national standard' },
    { group: 'Scaffolding', name: 'Scaffold Clamp (Swivel / Right / Sleeve)', spec: '48.3 mm tube', material: 'Cast iron / stamped steel', grade: '—', finish: 'Zinc', standard: 'GB 15831' },
    { group: 'Scaffolding', name: 'Adjustable Scaffold Prop', spec: 'M34–M38, L=400–700 mm', material: 'Q235', grade: '—', finish: 'Zinc', standard: 'GB / national standard' },
    { group: 'Scaffolding', name: 'Scaffold Base Jack', spec: 'M34–M38', material: 'Q235', grade: '—', finish: 'Zinc', standard: 'GB / national standard' },
    { group: 'Embedded', name: 'Embedded Plate', spec: 'Custom non-standard', material: 'Q235', grade: '—', finish: 'Zinc', standard: 'Non-standard custom' },
    { group: 'Stainless', name: 'Stainless Expansion Bolt', spec: 'M6–M16', material: '304 / 316 stainless', grade: 'A2-70', finish: 'Natural', standard: 'GB / national standard' },
    { group: 'Plastic', name: 'Plastic Wall Plug', spec: 'Ø6–Ø14', material: 'Nylon / PE', grade: '—', finish: 'Natural', standard: 'GB / national standard' }
  ],
  HTR: [
    { group: 'Structural Bolts', name: 'High Tensile Hex Bolt', spec: 'M12–M36, L=40–200 mm', material: 'Alloy structural steel', grade: '8.8 / 10.9 / 12.9', finish: 'Zinc / black', standard: 'GB/T 5782, DIN 931' },
    { group: 'Structural Bolts', name: 'Structural Hex Bolt', spec: 'M12–M30, L=50–260 mm', material: '20MnTiB', grade: '10.9', finish: 'Zinc / black-grey', standard: 'GB/T 1228' },
    { group: 'Structural Bolts', name: 'Tension Control Bolt (TC Bolt)', spec: 'M16–M24', material: '20MnTiB', grade: '10.9', finish: 'Black-grey', standard: 'GB/T 3632' },
    { group: 'Nuts & Washers', name: 'High Tensile Hex Nut', spec: 'M12–M30', material: 'Carbon steel', grade: '8 / 10', finish: 'Zinc / black', standard: 'GB/T 6170' },
    { group: 'Nuts & Washers', name: 'Hardened Flat Washer', spec: 'M12–M30', material: '65Mn', grade: '—', finish: 'Oxide', standard: 'GB/T 1230' }
  ],
  PRO: [
    { group: 'Pins', name: 'Cylindrical Pin / Dowel Pin', spec: 'Ø2–Ø20, L=10–100 mm', material: 'Carbon / stainless steel', grade: '—', finish: 'Quenched / zinc', standard: 'GB/T 119, DIN 7' },
    { group: 'Pins', name: 'Taper Pin', spec: 'Ø1–Ø20', material: 'Carbon steel', grade: '—', finish: 'Zinc', standard: 'GB/T 117, DIN 1' },
    { group: 'Pins', name: 'Cotter Pin / Split Pin', spec: 'Ø1–Ø10, L=6–200 mm', material: 'Low carbon steel', grade: '—', finish: 'Zinc', standard: 'GB/T 91, DIN 94' },
    { group: 'Pins', name: 'Spring Pin / Roll Pin', spec: 'Ø1.5–Ø12', material: '65Mn', grade: '—', finish: 'Zinc', standard: 'GB/T 879, DIN 1481' },
    { group: 'Rivets', name: 'Round Head Rivet', spec: 'Ø1.6–Ø16', material: 'Carbon / aluminum / brass', grade: '—', finish: 'Zinc / natural', standard: 'GB/T 863, DIN 660' },
    { group: 'Rivets', name: 'Open Blind Rivet', spec: 'Ø2.4–Ø6.4, L=6–30 mm', material: 'Al / steel / stainless', grade: '—', finish: 'Natural / zinc', standard: 'GB/T 12618, DIN 7337' },
    { group: 'Rings', name: 'External Circlip (Shaft)', spec: 'Ø6–Ø200', material: '65Mn', grade: '—', finish: 'Oxide / zinc', standard: 'GB/T 894, DIN 471' },
    { group: 'Rings', name: 'Internal Circlip (Bore)', spec: 'Ø6–Ø200', material: '65Mn', grade: '—', finish: 'Oxide / zinc', standard: 'GB/T 893, DIN 472' },
    { group: 'Rings', name: 'E-Clip', spec: 'Ø1.5–Ø20', material: '65Mn', grade: '—', finish: 'Oxide', standard: 'GB/T 896, DIN 471' },
    { group: 'Hardware', name: 'Hose Clamp', spec: 'Ø8–Ø200', material: 'Carbon / stainless steel', grade: '—', finish: 'Zinc', standard: 'GB/T 13306' },
    { group: 'Hardware', name: 'Wire Rope Clip', spec: 'M6–M20', material: 'Malleable iron', grade: '—', finish: 'Zinc', standard: 'GB/T 5976' },
    { group: 'Hardware', name: 'Turnbuckle', spec: 'M6–M24', material: 'Carbon steel', grade: '—', finish: 'Zinc', standard: 'GB/T 3818' },
    { group: 'Hardware', name: 'Shackle', spec: '0.33 T – 8.5 T', material: 'Carbon / alloy steel', grade: '—', finish: 'Zinc', standard: 'GB/T 25854' },
    { group: 'Hardware', name: 'Grease Nipple', spec: 'M6×1 – M10×1', material: 'Brass / carbon steel', grade: '—', finish: 'Nickel / brass', standard: 'GB/T 1154' }
  ],
  CST: [
    { group: 'Standard Custom', name: 'Welded Plate Anchor Bolt', spec: 'M16–M42, custom length', material: 'Q235 carbon steel', grade: '4.8', finish: 'Hot-dip galvanized', standard: 'Non-standard custom' },
    { group: 'Standard Custom', name: 'Internal Expansion Bolt', spec: 'M6–M16', material: 'Carbon steel', grade: '4.8', finish: 'Zinc', standard: 'Non-standard custom' },
    { group: 'Standard Custom', name: 'Weld Stud', spec: 'M6–M16', material: 'Carbon steel', grade: '4.8', finish: 'Zinc', standard: 'Non-standard custom' },
    { group: 'Standard Custom', name: 'Embedded Plate', spec: 'Custom dimensions', material: 'Q235 steel plate', grade: '—', finish: 'Zinc / raw', standard: 'Non-standard custom' },
    { group: 'Standard Custom', name: 'Special Anchor Bolt (L / J Type)', spec: 'M12–M48, L=300–2000 mm', material: 'Q235 / 45# steel', grade: '4.8', finish: 'HDG / black', standard: 'GB/T 799, custom' },
    { group: 'Bespoke', name: 'Custom Non-standard Fastener', spec: 'Per drawing / sample', material: 'Carbon / alloy / stainless 304/316', grade: '4.8 – 12.9', finish: 'Zinc / HDG / Dacromet / black', standard: 'Customer drawing' }
  ]
});

// Product photos in assets/product-images/fastener-products/, listed in the same order as the product
// entries above. The build checks that each series has exactly one photo per product, so a missing or
// extra file fails the build instead of rendering a mismatched picture.
export const FASTENER_IMAGES = Object.freeze({
  BNSW: [
    'fp01-hex-bolt-part-thread.webp', 'fp02-hex-bolt-full-thread.webp', 'fp03-socket-cap-screw.webp',
    'fp04-carriage-bolt.webp', 'fp05-u-bolt.webp', 'fp06-hex-nut.webp', 'fp07-nyloc-nut.webp',
    'fp08-flange-nut.webp', 'fp09-set-screw.webp', 'fp10-self-tapping-screw.webp',
    'fp11-flat-washer.webp', 'fp12-spring-lock-washer.webp'
  ],
  TRS: [
    'fp13-threaded-rod-black.webp', 'fp14-threaded-rod-zinc.webp', 'fp15-equal-stud.webp',
    'fp16-unequal-stud.webp'
  ],
  CONS: [
    'fp17-sleeve-anchor.webp', 'fp18-chemical-anchor.webp', 'fp19-formwork-tie-rod.webp',
    'fp20-scaffold-clamp.webp', 'fp21-scaffold-prop.webp', 'fp22-base-jack.webp',
    'fp23-embedded-plate.webp', 'fp24-stainless-expansion.webp', 'fp25-plastic-wall-plug.webp'
  ],
  HTR: [
    'fp26-hi-tensile-hex-bolt.webp', 'fp27-structural-hex-bolt.webp', 'fp28-tc-bolt.webp',
    'fp29-hi-tensile-nut.webp', 'fp30-hardened-washer.webp'
  ],
  PRO: [
    'fp31-dowel-pin.webp', 'fp32-taper-pin.webp', 'fp33-cotter-pin.webp', 'fp34-spring-pin.webp',
    'fp35-round-rivet.webp', 'fp36-blind-rivet.webp', 'fp37-external-circlip.webp',
    'fp38-internal-circlip.webp', 'fp39-e-clip.webp', 'fp40-hose-clamp.webp',
    'fp41-wire-rope-clip.webp', 'fp42-turnbuckle.webp', 'fp43-shackle.webp', 'fp44-grease-nipple.webp'
  ],
  CST: [
    'fp45-welded-plate-anchor.webp', 'fp46-internal-expansion.webp', 'fp47-weld-stud.webp',
    'fp48-custom-embedded-plate.webp', 'fp49-lj-anchor-bolt.webp', 'fp50-custom-fastener.webp'
  ]
});

export function fastenerImageFor(seriesCode, index) {
  return FASTENER_IMAGES[seriesCode]?.[index] ?? null;
}
