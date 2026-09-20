// Mounted ball bearing unit specifications.
//
// Sources:
//  1. "Mounted Ball Bearing Units - Full English Product Specification.docx" — 11 model records
//     (bore, weight, feature, application) supplied by the site owner on 2026-09-17.
//  2. Series model ranges confirmed by the site owner on 2026-09-17: UCT, UCF, UCFC, UCFL, UCPA,
//     UCPH, UCFA, and UCFK (UCFK is stored but not published until the series page exists).
//
// Only confirmed data is published. Series without a confirmed range show their single confirmed
// model record instead, so nothing is invented.

export const MOUNTED_UNIT_STANDARD = Object.freeze({
  housingMaterial: 'HT200 grey cast iron',
  bearingMaterial: 'GCr15 chrome steel',
  locking: 'Set-screw locking',
  sealing: 'Double rubber seal',
  selfAligning: '±2° self-aligning',
  relubrication: 'Grease nipple for relubrication',
  weightNote: 'Weights are ISO/JIS reference data with ±5% tolerance.'
});

export const MOUNTED_UNIT_MODELS = Object.freeze([
  { model: 'UCT218', series: 'UCT', bore: '90 mm', weight: '12.2 kg', feature: 'Slidable tension adjustment', application: 'Conveyors, bucket elevators, transmission machinery' },
  { model: 'UCP206', series: 'UCP', bore: '30 mm', weight: '1.26 kg', feature: 'Universal type, stable loading', application: 'Fans, agricultural machinery, general conveyors' },
  { model: 'UCF208', series: 'UCF', bore: '40 mm', weight: '1.80 kg', feature: 'Four-bolt square fixing, torsion resistant', application: 'Packaging machines, side-mounted conveyor equipment' },
  { model: 'UCFC208', series: 'UCFC', bore: '40 mm', weight: '2.04 kg', feature: 'Precision locating boss, uniform force', application: 'Pumps, reducers, precision machinery shells' },
  { model: 'UCFL205', series: 'UCFL', bore: '25 mm', weight: '0.63 kg', feature: 'Compact structure, space-saving', application: 'Textile machinery, light conveyors, small farm equipment' },
  { model: 'UCPA212', series: 'UCPA', bore: '60 mm', weight: '4.12 kg', feature: 'Blind tapped holes, flat surface', application: 'Machine frames, precision conveying equipment' },
  { model: 'UCPA207', series: 'UCPA', bore: '35 mm', weight: '1.76 kg', feature: 'Blind tapped holes, flat mounting surface', application: 'Automation equipment, machine tool bases' },
  { model: 'UCPH206', series: 'UCPH', bore: '30 mm', weight: '1.58 kg', feature: 'High base design, raised shaft centre', application: 'Agricultural machinery, special-height conveyor frames' },
  { model: 'UCFA206', series: 'UCFA', bore: '30 mm', weight: '0.82 kg', feature: 'Adjustable slotted holes, compact two-lug design', application: 'Textile machines, light packaging equipment' },
  { model: 'UCFB208', series: 'UCFB', bore: '40 mm', weight: '1.65 kg', feature: 'Two-bolt round flange, stable mounting', application: 'Food machinery, packaging equipment, side transmission' },
  // Published as UCHA206; keyed to the catalogue series code PBU so the series page finds it.
  { model: 'UCHA206', series: 'PBU', bore: '30 mm', weight: '1.42 kg', feature: 'Overhead hanging installation', application: 'Overhead conveyors, hanging production lines' }
]);

export function mountedUnitsForSeries(seriesCode) {
  return MOUNTED_UNIT_MODELS.filter(item => item.series === seriesCode);
}

function range(prefix, from, to) {
  const models = [];
  for (let suffix = from; suffix <= to; suffix++) models.push(`${prefix}${suffix}`);
  return models;
}

// Group headings carry a stable titleKey/noteKey so every locale can render its own wording.
// The English title/note stay in place as the source text and as a fallback.
function seriesGroups(prefix, lightFrom, lightTo, heavyFrom, heavyTo, imperial = null) {
  const groups = [
    // "stock range" claimed availability the owner has not confirmed; the neutral wording is used.
    { titleKey: 'light200Stock', title: '200 series — light duty, standard range', models: range(prefix, lightFrom, lightTo) },
    { titleKey: 'heavy300', title: '300 series — heavy duty, thicker section for higher loads', models: range(prefix, heavyFrom, heavyTo) }
  ];
  if (imperial) {
    groups.push({
      titleKey: 'specialVariants',
      title: 'Special variants',
      subgroups: [
        {
          titleKey: 'imperialBore',
          title: 'Imperial bore models',
          // The owner removed the "Inch bore versions for export markets." note; the heading and
          // the model list stay.
          models: imperial.map(suffix => `${prefix}${suffix}`)
        }
      ]
    });
  }
  return groups;
}

const IMPERIAL_204_208 = ['204-12', '205-16', '206-18', '207-20', '208-24'];

// Model ranges confirmed by the site owner. Series not listed here have no confirmed range yet.
export const SERIES_MODEL_GROUPS = Object.freeze({
  UCT: [
    { titleKey: 'light200', title: '200 series — light duty, most widely used range', models: range('UCT', 201, 218) },
    { titleKey: 'heavy300', title: '300 series — heavy duty, thicker section for higher loads', models: range('UCT', 305, 320) },
    {
      titleKey: 'specialVariants',
      title: 'Special variants',
      subgroups: [
        {
          titleKey: 'suct',
          title: 'SUCT stainless steel series',
          noteKey: 'suctNote',
          note: 'Corrosion resistant — for humid environments and food-grade equipment.',
          models: ['SUCT204', 'SUCT205', 'SUCT206', 'SUCT207', 'SUCT208']
        },
        {
          titleKey: 'imperialBore',
          title: 'Imperial bore models',
          // Note removed by the owner; the heading and the model list stay.
          models: ['UCT205-16', 'UCT206-18', 'UCT207-20', 'UCT208-24']
        }
      ]
    }
  ],
  UCF: seriesGroups('UCF', 201, 216, 305, 316, IMPERIAL_204_208),
  UCFC: seriesGroups('UCFC', 201, 216, 305, 316, IMPERIAL_204_208),
  UCFL: seriesGroups('UCFL', 201, 216, 305, 316, IMPERIAL_204_208),
  UCP: seriesGroups('UCP', 201, 218, 305, 320, IMPERIAL_204_208),
  UCPA: seriesGroups('UCPA', 201, 216, 305, 316, IMPERIAL_204_208),
  UCPH: seriesGroups('UCPH', 201, 216, 305, 316, IMPERIAL_204_208),
  UCFA: seriesGroups('UCFA', 201, 212, 305, 312, IMPERIAL_204_208),
  UCFB: seriesGroups('UCFB', 201, 212, 305, 312, IMPERIAL_204_208),
  // PBU is displayed as UCHA on the site; its published model list uses UCHA-prefixed codes.
  PBU: seriesGroups('UCHA', 201, 212, 305, 312, IMPERIAL_204_208),
  // Staged from the owner's cross-reference workbook: only the models that workbook lists
  // (UELP 204–213 in the light sheet, UCFS 305–312 in the heavy sheet). Both series are pending
  // until a confirmed product image exists, so nothing renders from these lists yet.
  UELP: [{ titleKey: 'light200Stock', title: '200 series — light duty, standard range', models: range('UELP', 204, 213) }],
  UCFS: [{ titleKey: 'heavy300', title: '300 series — heavy duty, thicker section for higher loads', models: range('UCFS', 305, 312) }],
  // Stored for the future UCFK series page (narrow square four-bolt flange).
  UCFK: seriesGroups('UCFK', 204, 212, 305, 312)
});

export function unitModelGroups(seriesCode) {
  return SERIES_MODEL_GROUPS[seriesCode] ?? null;
}

// Bore span covered by each confirmed range (metric bores only).
export const SERIES_BORE_RANGE = Object.freeze({
  UCT: '12 – 100 mm',
  UCP: '12 – 100 mm',
  UCF: '12 – 80 mm',
  UCFC: '12 – 80 mm',
  UCFL: '12 – 80 mm',
  UCPA: '12 – 80 mm',
  UCPH: '12 – 80 mm',
  UCFA: '12 – 60 mm',
  UCFB: '12 – 60 mm',
  PBU: '12 – 60 mm',
  UELP: '20 – 65 mm',
  UCFS: '25 – 60 mm',
  UCFK: '20 – 60 mm'
});

export function seriesBoreRange(seriesCode) {
  return SERIES_BORE_RANGE[seriesCode] ?? null;
}

// Type differences, phrased per series so similar-looking units are not confused.
export const FLANGE_TYPES = Object.freeze({
  UCF: 'Square four-bolt flange, no locating spigot',
  UCFC: 'Round flange with locating spigot',
  UCFL: 'Oval two-bolt flange — slim and compact',
  UCFA: 'Oval flange with slotted holes — adjustable mounting position',
  UCFB: 'Round two-bolt flange — no spigot, lightweight'
});

const FLANGE_NOTES_BY_SERIES = Object.freeze({
  UCF: ['UCF', 'UCFC', 'UCFL', 'UCFA', 'UCFB'],
  UCFC: ['UCFC', 'UCF', 'UCFB'],
  UCFL: ['UCFL', 'UCF', 'UCFA', 'UCFB']
});

export function flangeTypeNotes(seriesCode) {
  const codes = FLANGE_NOTES_BY_SERIES[seriesCode];
  if (!codes) return null;
  return codes.map(code => ({ code, text: FLANGE_TYPES[code] }));
}
