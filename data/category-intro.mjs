// Category page introductions for every locale.
//
// `en.mjs` is the source language and the structural contract; every other module under
// ./category-intro/ must expose exactly the same keys. The shape is asserted at import time so a
// half-translated locale fails the build instead of silently publishing English prose.

const LOCALES = Object.freeze(['en', 'es', 'de', 'fr', 'pt', 'ar', 'tr', 'ru', 'it', 'vi', 'id', 'ja', 'ko']);

const english = (await import('./category-intro/en.mjs')).default;
const modules = { en: english };
const missing = [];

for (const locale of LOCALES) {
  if (locale === 'en') continue;
  try {
    modules[locale] = (await import(`./category-intro/${locale}.mjs`)).default;
  } catch {
    missing.push(locale);
  }
}

const CATEGORY_KEYS = Object.keys(english.categories);
const COLUMN_KEYS = Object.keys(english.categories[CATEGORY_KEYS[0]].columns);

function shapeIssues(text, locale) {
  const issues = [];
  if (!text || typeof text !== 'object') return ['module has no default object'];
  if (text.locale !== locale) issues.push(`locale is ${JSON.stringify(text.locale)}, expected "${locale}"`);
  for (const category of CATEGORY_KEYS) {
    const entry = text.categories?.[category];
    if (!entry) {
      issues.push(`categories.${category}: missing`);
      continue;
    }
    if (typeof entry.heading !== 'string' || !entry.heading.trim()) issues.push(`${category}.heading: missing`);
    if (typeof entry.tableHeading !== 'string' || !entry.tableHeading.trim()) issues.push(`${category}.tableHeading: missing`);
    if (!Array.isArray(entry.paragraphs) || entry.paragraphs.length !== 3) {
      issues.push(`${category}.paragraphs: expected 3 paragraphs`);
    } else if (entry.paragraphs.some(value => typeof value !== 'string' || value.trim().length < 60)) {
      issues.push(`${category}.paragraphs: a paragraph is empty or too short`);
    }
    for (const column of COLUMN_KEYS) {
      const value = entry.columns?.[column];
      if (typeof value !== 'string' || !value.trim()) issues.push(`${category}.columns.${column}: missing`);
    }
    const englishTotal = english.categories[category].paragraphs.join(' ').length;
    const localTotal = Array.isArray(entry.paragraphs) ? entry.paragraphs.join(' ').length : 0;
    // Measured: a faithful Japanese or Korean translation of these paragraphs lands at 0.49–0.54 of
    // the English character count, because the scripts carry more meaning per character. Holding
    // CJK to the same ratio would only force padding, so they get 0.45 and the 60-character
    // paragraph floor above does the real work of catching a stub.
    const minimumRatio = locale === 'ja' || locale === 'ko' ? 0.45 : 0.55;
    if (locale !== 'en' && englishTotal && localTotal < englishTotal * minimumRatio) {
      issues.push(`${category}.paragraphs: much shorter than the English source (${localTotal} vs ${englishTotal} characters)`);
    }
  }
  return issues;
}

const failures = [];
for (const locale of LOCALES) {
  const text = modules[locale];
  if (!text) continue;
  const issues = shapeIssues(text, locale);
  if (issues.length) failures.push(`${locale}: ${issues.slice(0, 5).join('; ')}${issues.length > 5 ? ` (+${issues.length - 5} more)` : ''}`);
}

const allowFallback = process.env.DSH_ALLOW_CATEGORY_FALLBACK === '1';

if (missing.length && !allowFallback) {
  throw new Error(
    `Category introductions missing for: ${missing.join(', ')}. ` +
      `Add data/category-intro/<locale>.mjs (copy the shape of en.mjs), or set DSH_ALLOW_CATEGORY_FALLBACK=1 to build with English fallback.`
  );
}
if (missing.length) console.warn(`WARNING: category introductions fall back to English for: ${missing.join(', ')}`);
if (failures.length) throw new Error(`Category introductions are incomplete or malformed:\n  ${failures.join('\n  ')}`);

export const MISSING_CATEGORY_INTRO_LOCALES = Object.freeze(missing);

/** Localized category introduction text. */
export function categoryIntro(locale) {
  return modules[locale] ?? modules.en;
}
