// Bearing housing series specifications.
//
// Source: values supplied by the site owner on 2026-09-17 for F, T, P, FC, FL, PA, PH, FU, FK and
// HA. Series codes follow the catalogue (FK is stored as FB, HA as PAS); the published text uses
// the confirmed series names. Only series listed here render a specification block.

export const HOUSING_SERIES_SPECS = Object.freeze({
  F: {
    housingModel: 'F Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: '4-bolt square flange mount, self-aligning spherical bore',
    application: 'Conveyors, agricultural machinery, fans, textile machinery',
    standardNote: 'Standard construction across all models: HT200 grey cast iron housing, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings.'
  },
  T: {
    housingModel: 'T Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: 'Take-up slide design, movable on guide rails, self-aligning spherical bore',
    application: 'Conveyor belt tensioning, chain take-up, agricultural machinery, material handling equipment',
    standardNote: 'Standard construction across all models: HT200 grey cast iron housing with slide grooves for axial adjustment, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Ideal for applications requiring belt or chain tensioning and flexible shaft positioning.'
  },
  P: {
    housingModel: 'P Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: '2-bolt pillow block base mount, self-aligning spherical bore',
    application: 'Conveyors, fans, agricultural machinery, general transmission equipment',
    standardNote: 'Standard construction across all models: HT200 grey cast iron housing with two mounting bolt holes, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Simple and stable horizontal mounting for general industrial rotating shaft support.'
  },
  FC: {
    housingModel: 'FC Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: 'Round flange design, multiple bolt holes, self-aligning spherical bore',
    application: 'Conveyors, food machinery, packaging equipment, fans, general transmission',
    standardNote: 'Standard construction across all models: HT200 grey cast iron round flange housing with evenly spaced mounting holes, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Compact circular flange structure for space-saving surface mounting on equipment frames and machine walls.'
  },
  FL: {
    housingModel: 'FL Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: 'Oval flange design, 2 bolt holes, self-aligning spherical bore',
    application: 'Conveyors, agricultural machinery, textile machinery, general transmission',
    standardNote: 'Standard construction across all models: HT200 grey cast iron oval flange housing with two mounting holes, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Compact oval flange for limited-space installation scenarios.'
  },
  PA: {
    housingModel: 'PA Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: 'Short pillow block, compact base mount, self-aligning spherical bore',
    application: 'Conveyors, textile machinery, small transmission equipment',
    standardNote: 'Standard construction across all models: HT200 grey cast iron short pillow block housing, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Short base design saves installation space for compact machinery layouts.'
  },
  PH: {
    housingModel: 'PH Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: 'High base pillow block, elevated shaft height, self-aligning spherical bore',
    application: 'Conveyors, agricultural machinery, processing equipment',
    standardNote: 'Standard construction across all models: HT200 grey cast iron high base pillow block housing, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Raised base creates clearance below the shaft for guarding and space requirements.'
  },
  FU: {
    housingModel: 'FU Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: '4-bolt square flange, extended base, self-aligning spherical bore',
    application: 'Heavy-duty conveyors, mining auxiliary equipment, agricultural machinery',
    standardNote: 'Standard construction across all models: HT200 grey cast iron square flange housing with reinforced extended base, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Reinforced structure delivers higher load capacity for heavy working conditions.'
  },
  FB: {
    housingModel: 'FB Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: 'Tapped base pillow block, threaded mounting holes, self-aligning spherical bore',
    application: 'Machine tools, automation equipment, compact transmission systems',
    standardNote: 'Standard construction across all models: HT200 grey cast iron pillow block housing with tapped mounting holes, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Tapped holes eliminate through bolts, ideal for installation on thin machine panels.'
  },
  // PAS is displayed as HA on the site.
  PAS: {
    housingModel: 'HA Series',
    matchingBearing: 'UC Series',
    boreRange: '12 – 100 mm',
    housingMaterial: 'HT200 grey cast iron',
    feature: 'Hanger type bearing housing, suspended mounting, self-aligning spherical bore',
    application: 'Overhead conveyors, bucket elevators, suspended transmission lines',
    standardNote: 'Standard construction across all models: HT200 grey cast iron hanger housing for suspended installation, spherical inner cavity offering ±2° self-aligning capability to compensate shaft misalignment, anti-rust painted finish, designed to fit UC series insert bearings. Suspended structure for overhead conveyor and elevator systems.'
  }
});

export function housingSeriesSpec(seriesCode) {
  return HOUSING_SERIES_SPECS[seriesCode] ?? null;
}
