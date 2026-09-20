// English specification text (source language).
//
// This module is the translation contract for the whole specification system: every other locale
// module in this directory has exactly the same shape. English reuses the owner-confirmed values
// from the data modules directly, so the published English pages cannot drift from that source.

import { FLANGE_TYPES, MOUNTED_UNIT_MODELS, MOUNTED_UNIT_STANDARD } from '../mounted-units-spec.mjs';
import { HOUSING_SERIES_SPECS } from '../bearing-housing-spec.mjs';

const pick = (source, field) => Object.fromEntries(
  Object.entries(source).map(([code, record]) => [code, record[field]])
);

export default Object.freeze({
  locale: 'en',
  ui: {
    productImage: 'Product image',
    productData: 'Product data',
    fullModelRange: 'Full model range',
    housingModel: 'Housing model',
    matchingBearing: 'Matching bearing',
    boreRange: 'Bore range',
    housing: 'Housing',
    bearing: 'Bearing',
    feature: 'Feature',
    application: 'Application',
    flangeTypes: 'Flange types in this family',
    needSpecs: 'Need specifications or a quotation?',
    emailUs: 'E-mail us',
    // {code} is replaced by the series code, e.g. "F Series" / "Serie F".
    seriesPattern: '{code} Series'
  },
  modelGroups: {
    light200: '200 series — light duty, most widely used range',
    light200Stock: '200 series — light duty, standard range',
    heavy300: '300 series — heavy duty, thicker section for higher loads',
    specialVariants: 'Special variants',
    imperialBore: 'Imperial bore models',
    imperialNote: 'Inch bore versions for export markets.',
    imperialNoteShort: 'Inch bore versions.',
    suct: 'SUCT stainless steel series',
    suctNote: 'Corrosion resistant — for humid environments and food-grade equipment.'
  },
  materials: {
    housingCastIron: MOUNTED_UNIT_STANDARD.housingMaterial,
    bearingChromeSteel: MOUNTED_UNIT_STANDARD.bearingMaterial
  },
  // The housing and bearing materials used to be repeated here as well as in the Housing and
  // Bearing rows of the data block, and the sentence claimed to cover "all models"; both were
  // removed on the owner's instruction, so this note now carries only the shared construction
  // details (locking, sealing, self-aligning, relubrication).
  unitStandardNote:
    'Standard construction: set-screw locking, double rubber seal, ±2° self-aligning capability and a grease nipple for relubrication.',
  unitModels: Object.fromEntries(
    MOUNTED_UNIT_MODELS.map(model => [model.model, { feature: model.feature, application: model.application }])
  ),
  housingFeatures: pick(HOUSING_SERIES_SPECS, 'feature'),
  housingApplications: pick(HOUSING_SERIES_SPECS, 'application'),
  housingStandardNotes: pick(HOUSING_SERIES_SPECS, 'standardNote'),
  flangeTypes: { ...FLANGE_TYPES }
});
