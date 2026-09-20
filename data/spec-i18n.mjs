// Specification text for every locale.
//
// The specification block (spec table, standard-construction note, full model range, enquiry line)
// is rendered on all 13 locales, so its wording lives in one module per locale under ./spec-i18n/.
// `en.mjs` is the source language and the structural contract: every other module must expose the
// exact same keys, which is asserted at import time below so a half-translated locale can never be
// published silently.

const LOCALES = Object.freeze(['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko']);

const english = (await import('./spec-i18n/en.mjs')).default;
const modules = { en: english };
const missing = [];

for (const locale of LOCALES) {
  if (locale === 'en') continue;
  try {
    modules[locale] = (await import(`./spec-i18n/${locale}.mjs`)).default;
  } catch {
    missing.push(locale);
  }
}

function describe(value) {
  return value === undefined ? 'missing' : JSON.stringify(value).slice(0, 40);
}

/** Flattened leaf strings, used to compare a locale module against the English contract. */
function leaves(text, prefix = '') {
  const out = {};
  for (const [key, value] of Object.entries(text ?? {})) {
    if (key === 'locale') continue;
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object') Object.assign(out, leaves(value, path));
    else out[path] = value;
  }
  return out;
}

const englishLeaves = leaves(english);

function shapeIssues(text, locale) {
  const issues = [];
  if (!text || typeof text !== 'object') return ['module has no default object'];
  if (text.locale !== locale) issues.push(`locale is ${describe(text.locale)}, expected "${locale}"`);
  const checkMap = (field, requiredKeys) => {
    const map = text[field];
    if (!map || typeof map !== 'object') return issues.push(`${field}: not an object`);
    for (const key of requiredKeys) {
      const value = map[key];
      if (typeof value !== 'string' || value.trim() === '') issues.push(`${field}.${key}: ${describe(value)}`);
      else if (typeof value === 'object') issues.push(`${field}.${key}: must be a string`);
    }
  };
  checkMap('ui', Object.keys(english.ui));
  checkMap('modelGroups', Object.keys(english.modelGroups));
  checkMap('materials', Object.keys(english.materials));
  checkMap('housingFeatures', Object.keys(english.housingFeatures));
  checkMap('housingApplications', Object.keys(english.housingApplications));
  checkMap('housingStandardNotes', Object.keys(english.housingStandardNotes));
  checkMap('flangeTypes', Object.keys(english.flangeTypes));
  if (typeof text.unitStandardNote !== 'string' || text.unitStandardNote.trim() === '') {
    issues.push('unitStandardNote: missing');
  }
  const modelKeys = Object.keys(english.unitModels);
  const models = text.unitModels;
  if (!models || typeof models !== 'object') {
    issues.push('unitModels: not an object');
  } else {
    for (const key of modelKeys) {
      const record = models[key];
      if (!record) issues.push(`unitModels.${key}: missing`);
      else if (typeof record.feature !== 'string' || typeof record.application !== 'string') {
        issues.push(`unitModels.${key}: feature/application must be strings`);
      }
    }
  }
  if (typeof text.ui?.seriesPattern !== 'string' || !text.ui.seriesPattern.includes('{code}')) {
    issues.push('ui.seriesPattern: must contain the {code} placeholder');
  }
  if (locale !== 'en') {
    // Guard against a locale module that is just a copy of the English source: identical technical
    // terms are fine, a wholesale English copy is not.
    const own = leaves(text);
    const keys = Object.keys(englishLeaves);
    const identical = keys.filter(key => own[key] === englishLeaves[key]).length;
    if (keys.length && identical / keys.length > 0.4) {
      issues.push(`${identical}/${keys.length} strings are still English — this locale looks untranslated`);
    }
  }
  return issues;
}

const shapeFailures = [];
for (const locale of LOCALES) {
  const text = modules[locale];
  if (!text) continue;
  const issues = shapeIssues(text, locale);
  if (issues.length) shapeFailures.push(`${locale}: ${issues.slice(0, 6).join('; ')}${issues.length > 6 ? ` (+${issues.length - 6} more)` : ''}`);
}

const allowFallback = process.env.DSH_ALLOW_SPEC_FALLBACK === '1';

if (missing.length && !allowFallback) {
  throw new Error(
    `Specification translations missing for: ${missing.join(', ')}. ` +
      `Add data/spec-i18n/<locale>.mjs (copy the shape of en.mjs), or set DSH_ALLOW_SPEC_FALLBACK=1 to build with English fallback.`
  );
}
if (missing.length) {
  console.warn(`WARNING: specification text falls back to English for: ${missing.join(', ')}`);
}
if (shapeFailures.length) {
  throw new Error(`Specification translations are incomplete or malformed:\n  ${shapeFailures.join('\n  ')}`);
}

export const MISSING_SPEC_LOCALES = Object.freeze(missing);

/** Localized specification text for a locale, falling back to English only when explicitly allowed. */
export function specText(locale) {
  return modules[locale] ?? modules.en;
}
