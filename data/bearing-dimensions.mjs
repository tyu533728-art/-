// Bearing and housing engineering dimensions (mounted ball bearing units).
//
// Sources:
//  1. Timken "UC-Series Ball Bearing Housed Units" catalogue — Cr/Cor, L, J, H, A, N, bolt
//     size and unit mass (Pillow block, four-bolt flange, piloted round flange).
//  2. ISO/JIS standard mounted unit dimensions (the Timken catalogue states its bolt-hole
//     spacing and shaft centre are interchangeable with competing units).
//  3. The owner's cross-reference workbook for model ranges and bore codes.
//
// IMPORTANT: These are standard reference dimensions. The published page carries the note that
// actual product dimensions are subject to the workshop drawing; masses carry ±5% tolerance.

export const DIMENSION_NOTE = 'Standard reference dimensions (ISO/JIS). Actual product dimensions are subject to the workshop drawing; weights carry ±5% tolerance.';

// Insert bearing data keyed by bore code. UC / UEL / UK inserts of the same bore code share the
// same rolling-element set, so they share the same basic dynamic (Cr) and static (Cor) ratings.
//   d   = bore, D = outer diameter, B = overall inner-ring width,
//   Cr/Cor = basic load rating (kN), iw = insert weight (kg).
export const INSERT_LOADS = Object.freeze({
  // 200 light-duty series
  201: { d: 12, D: 47,  B: 31.0, Cr: 12.8, Cor: 6.65, iw: 0.20 },
  202: { d: 15, D: 47,  B: 31.0, Cr: 12.8, Cor: 6.65, iw: 0.20 },
  203: { d: 17, D: 47,  B: 31.0, Cr: 12.8, Cor: 6.65, iw: 0.20 },
  204: { d: 20, D: 47,  B: 31.0, Cr: 12.8, Cor: 6.65, iw: 0.20 },
  205: { d: 25, D: 52,  B: 34.1, Cr: 14.0, Cor: 7.85, iw: 0.25 },
  206: { d: 30, D: 62,  B: 38.1, Cr: 19.5, Cor: 11.3, iw: 0.35 },
  207: { d: 35, D: 72,  B: 42.9, Cr: 25.7, Cor: 15.4, iw: 0.48 },
  208: { d: 40, D: 80,  B: 49.2, Cr: 29.1, Cor: 17.8, iw: 0.65 },
  209: { d: 45, D: 85,  B: 49.2, Cr: 34.1, Cor: 21.3, iw: 0.75 },
  210: { d: 50, D: 90,  B: 51.6, Cr: 35.1, Cor: 23.3, iw: 0.85 },
  211: { d: 55, D: 100, B: 55.6, Cr: 43.4, Cor: 29.4, iw: 1.10 },
  212: { d: 60, D: 110, B: 65.1, Cr: 52.5, Cor: 36.2, iw: 1.35 },
  213: { d: 65, D: 120, B: 65.1, Cr: 57.2, Cor: 40.1, iw: 1.55 },
  214: { d: 70, D: 125, B: 74.6, Cr: 62.2, Cor: 44.1, iw: 1.90 },
  215: { d: 75, D: 130, B: 77.8, Cr: 67.4, Cor: 48.3, iw: 2.15 },
  216: { d: 80, D: 140, B: 82.6, Cr: 72.7, Cor: 53.0, iw: 2.55 },
  217: { d: 85, D: 150, B: 85.7, Cr: 84.0, Cor: 61.9, iw: 2.95 },
  218: { d: 90, D: 160, B: 96.0, Cr: 96.1, Cor: 71.5, iw: 3.65 },
  // 300 heavy-duty series (Timken official)
  305: { d: 25, D: 62,  B: 38, Cr: 21.2, Cor: 10.9, iw: 0.35 },
  306: { d: 30, D: 72,  B: 43, Cr: 26.7, Cor: 15.0, iw: 0.55 },
  307: { d: 35, D: 80,  B: 48, Cr: 33.4, Cor: 19.3, iw: 0.72 },
  308: { d: 40, D: 90,  B: 52, Cr: 40.7, Cor: 24.0, iw: 0.95 },
  309: { d: 45, D: 100, B: 57, Cr: 48.9, Cor: 29.5, iw: 1.25 },
  310: { d: 50, D: 110, B: 61, Cr: 62.0, Cor: 38.3, iw: 1.55 },
  311: { d: 55, D: 120, B: 66, Cr: 71.6, Cor: 45.0, iw: 1.95 },
  312: { d: 60, D: 130, B: 71, Cr: 81.9, Cor: 52.2, iw: 2.35 },
  313: { d: 65, D: 140, B: 75, Cr: 92.7, Cor: 59.9, iw: 2.75 },
  314: { d: 70, D: 150, B: 78, Cr: 104, Cor: 68.2, iw: 3.15 },
  315: { d: 75, D: 160, B: 82, Cr: 113, Cor: 77.2, iw: 3.70 },
  316: { d: 80, D: 170, B: 86, Cr: 123, Cor: 86.7, iw: 4.20 },
  317: { d: 85, D: 180, B: 96, Cr: 133, Cor: 96.8, iw: 4.85 },
  318: { d: 90, D: 190, B: 106, Cr: 143, Cor: 107, iw: 5.70 },
  319: { d: 95, D: 200, B: 113, Cr: 153, Cor: 119, iw: 6.55 }
});

export function insertLoadForCode(code) {
  return INSERT_LOADS[Number(code)] ?? null;
}

// UEL eccentric-locking-collar inserts. Same O.D. and ratings as the matching UC code, but the
// eccentric collar extends the total width (B). Bore is cylindrical. 200 series 204–212;
// 300 series 305–314.
export const UEL_LOADS = Object.freeze({
  204: { d: 20, D: 47, B: 43.7, Cr: 12.8, Cor: 6.65, iw: 0.22 },
  205: { d: 25, D: 52, B: 44.4, Cr: 14.0, Cor: 7.85, iw: 0.27 },
  206: { d: 30, D: 62, B: 48.4, Cr: 19.5, Cor: 11.3, iw: 0.38 },
  207: { d: 35, D: 72, B: 51.5, Cr: 25.7, Cor: 15.4, iw: 0.54 },
  208: { d: 40, D: 80, B: 56.3, Cr: 29.1, Cor: 17.8, iw: 0.70 },
  209: { d: 45, D: 85, B: 56.3, Cr: 34.1, Cor: 21.3, iw: 0.80 },
  210: { d: 50, D: 90, B: 62.7, Cr: 35.1, Cor: 23.3, iw: 0.93 },
  211: { d: 55, D: 100, B: 71.4, Cr: 43.4, Cor: 29.4, iw: 1.18 },
  212: { d: 60, D: 110, B: 77.8, Cr: 52.0, Cor: 36.0, iw: 1.50 },
  305: { d: 25, D: 62, B: 46.8, Cr: 21.2, Cor: 10.9, iw: 0.43 },
  306: { d: 30, D: 72, B: 50.0, Cr: 26.7, Cor: 15.0, iw: 0.69 },
  307: { d: 35, D: 80, B: 51.6, Cr: 33.5, Cor: 19.1, iw: 0.80 },
  308: { d: 40, D: 90, B: 57.1, Cr: 40.5, Cor: 24.0, iw: 1.08 },
  309: { d: 45, D: 100, B: 58.7, Cr: 53.0, Cor: 32.0, iw: 1.45 },
  310: { d: 50, D: 110, B: 66.6, Cr: 62.0, Cor: 38.5, iw: 1.86 },
  311: { d: 55, D: 120, B: 73.0, Cr: 71.5, Cor: 45.0, iw: 2.34 },
  312: { d: 60, D: 130, B: 79.4, Cr: 82.0, Cor: 52.0, iw: 2.94 },
  313: { d: 65, D: 140, B: 85.7, Cr: 92.5, Cor: 60.0, iw: 3.67 },
  314: { d: 70, D: 150, B: 92.1, Cr: 104, Cor: 68.0, iw: 4.40 }
});

// UK tapered-bore inserts, supplied with an adapter sleeve (H2300 series). d is the shaft diameter
// after the sleeve is fitted; the bare insert is narrower than the UC (no set-screw wide ring).
// 200 series 205–213; 300 series 305–313.
export const UK_LOADS = Object.freeze({
  205: { d: 20, D: 52, B: 23, Cr: 14.0, Cor: 7.85, iw: 0.25 },
  206: { d: 25, D: 62, B: 26, Cr: 19.5, Cor: 11.3, iw: 0.37 },
  207: { d: 30, D: 72, B: 29, Cr: 25.7, Cor: 15.4, iw: 0.54 },
  208: { d: 35, D: 80, B: 31, Cr: 29.1, Cor: 17.8, iw: 0.70 },
  209: { d: 40, D: 85, B: 32, Cr: 34.1, Cor: 21.3, iw: 0.83 },
  210: { d: 45, D: 90, B: 34, Cr: 35.1, Cor: 23.3, iw: 0.98 },
  211: { d: 50, D: 100, B: 36, Cr: 43.4, Cor: 29.4, iw: 1.24 },
  212: { d: 55, D: 110, B: 40, Cr: 52.0, Cor: 36.0, iw: 1.58 },
  213: { d: 60, D: 120, B: 41.5, Cr: 57.2, Cor: 40.1, iw: 1.86 },
  305: { d: 20, D: 62, B: 27, Cr: 21.2, Cor: 10.9, iw: 0.30 },
  306: { d: 25, D: 72, B: 30, Cr: 26.7, Cor: 15.0, iw: 0.46 },
  307: { d: 30, D: 80, B: 34, Cr: 33.5, Cor: 19.1, iw: 0.54 },
  308: { d: 35, D: 90, B: 36, Cr: 40.5, Cor: 24.0, iw: 0.70 },
  309: { d: 40, D: 100, B: 39, Cr: 48.9, Cor: 29.5, iw: 0.95 },
  310: { d: 45, D: 110, B: 42, Cr: 62.0, Cor: 38.3, iw: 1.30 },
  311: { d: 50, D: 120, B: 44, Cr: 68.3, Cor: 45.0, iw: 1.65 },
  312: { d: 55, D: 130, B: 48, Cr: 81.9, Cor: 52.0, iw: 2.06 },
  313: { d: 60, D: 140, B: 49, Cr: 92.7, Cor: 60.0, iw: 2.48 }
});

// Housing outer dimensions.
//   kind = 'vertical' (vertical blocks / take-up, centred by H) or 'flange' (face-mounted, centred by L).
//   fields = the dimension columns rendered for this housing type.
//   rows keyed by bore code. Each row carries the outer dimensions plus hw = bare housing weight (kg).
// Vertical fields: H (base to centre), L (total length), J (bolt spacing), A (housing width), N (bolt hole).
// Flange fields:   L (outer diameter), J (bolt spacing), A (overall thickness), N (bolt hole).
export const HOUSING_DIMS = Object.freeze({
  // P — two-bolt pillow block, horizontal floor mounting
  P: {
    kind: 'vertical',
    fields: ['H', 'L', 'J', 'A', 'N'],
    rows: {
      201: { H: 25.0, L: 100, J: 74, A: 28, N: 10, hw: 0.25 },
      202: { H: 28.0, L: 110, J: 83, A: 32, N: 10, hw: 0.30 },
      203: { H: 30.0, L: 118, J: 88, A: 34, N: 12, hw: 0.35 },
      204: { H: 33.3, L: 127, J: 95, A: 35, N: 13, hw: 0.45 },
      205: { H: 36.5, L: 140, J: 105, A: 38, N: 13, hw: 0.55 },
      206: { H: 42.9, L: 165, J: 121, A: 43, N: 17, hw: 0.80 },
      207: { H: 47.6, L: 167, J: 127, A: 48, N: 17, hw: 1.00 },
      208: { H: 49.2, L: 184, J: 137, A: 50, N: 17, hw: 1.15 },
      209: { H: 54.0, L: 190, J: 146, A: 52, N: 17, hw: 1.30 },
      210: { H: 57.2, L: 206, J: 159, A: 54, N: 20, hw: 1.55 },
      211: { H: 63.5, L: 217, J: 171, A: 58, N: 20, hw: 1.90 },
      212: { H: 69.8, L: 230, J: 184, A: 68, N: 20, hw: 2.30 },
      213: { H: 76.2, L: 265, J: 203, A: 70, N: 24, hw: 2.80 },
      214: { H: 79.4, L: 266, J: 210, A: 72, N: 24, hw: 3.20 },
      215: { H: 82.6, L: 275, J: 217, A: 74, N: 24, hw: 3.50 },
      216: { H: 88.9, L: 292, J: 232, A: 78, N: 28, hw: 4.20 },
      217: { H: 95.2, L: 310, J: 247, A: 83, N: 28, hw: 5.00 },
      218: { H: 101.6, L: 327, J: 262, A: 88, N: 30, hw: 6.00 },
      305: { H: 45, L: 175, J: 132, A: 45, N: 17, hw: 1.35 },
      306: { H: 50, L: 180, J: 140, A: 50, N: 17, hw: 1.65 },
      307: { H: 56, L: 210, J: 160, A: 56, N: 17, hw: 2.28 },
      308: { H: 60, L: 220, J: 170, A: 60, N: 17, hw: 2.85 },
      309: { H: 67, L: 245, J: 190, A: 67, N: 20, hw: 3.65 },
      310: { H: 75, L: 275, J: 212, A: 75, N: 20, hw: 5.05 },
      311: { H: 80, L: 310, J: 236, A: 80, N: 20, hw: 5.95 },
      312: { H: 85, L: 330, J: 250, A: 85, N: 25, hw: 7.15 },
      313: { H: 90, L: 340, J: 260, A: 90, N: 25, hw: 7.95 },
      314: { H: 95, L: 360, J: 280, A: 90, N: 27, hw: 9.25 },
      315: { H: 100, L: 380, J: 290, A: 100, N: 27, hw: 11.1 },
      316: { H: 106, L: 400, J: 300, A: 110, N: 27, hw: 14.3 },
      317: { H: 112, L: 420, J: 320, A: 110, N: 33, hw: 15.45 },
      318: { H: 118, L: 430, J: 330, A: 110, N: 33, hw: 17.1 },
      319: { H: 125, L: 470, J: 360, A: 120, N: 36, hw: 22.45 },
      320: { H: 130, L: 490, J: 380, A: 125, N: 38, hw: 25.0 }
    }
  },
  // T — take-up unit for sliding guide rails, with adjustable centre
  T: {
    kind: 'vertical',
    fields: ['H', 'L', 'J', 'A', 'N'],
    rows: {
      201: { H: 50, L: 95, J: 48, A: 24, N: 14, hw: 0.20 },
      202: { H: 55, L: 105, J: 54, A: 26, N: 14, hw: 0.25 },
      203: { H: 63, L: 115, J: 58, A: 28, N: 16, hw: 0.30 },
      204: { H: 70, L: 127, J: 64, A: 30, N: 16, hw: 0.45 },
      205: { H: 73, L: 130, J: 70, A: 32, N: 16, hw: 0.50 },
      206: { H: 89, L: 153, J: 83, A: 38, N: 16, hw: 0.75 },
      207: { H: 93, L: 160, J: 94, A: 40, N: 20, hw: 0.90 },
      208: { H: 108, L: 175, J: 102, A: 42, N: 20, hw: 1.10 },
      209: { H: 115, L: 185, J: 105, A: 45, N: 20, hw: 1.25 },
      210: { H: 123, L: 195, J: 111, A: 48, N: 20, hw: 1.40 },
      211: { H: 135, L: 220, J: 130, A: 52, N: 24, hw: 1.80 },
      212: { H: 150, L: 240, J: 143, A: 56, N: 24, hw: 2.20 },
      213: { H: 158, L: 255, J: 153, A: 58, N: 24, hw: 2.50 },
      214: { H: 165, L: 268, J: 162, A: 63, N: 28, hw: 2.90 },
      215: { H: 173, L: 280, J: 172, A: 65, N: 28, hw: 3.20 },
      216: { H: 185, L: 300, J: 184, A: 70, N: 28, hw: 3.80 },
      217: { H: 195, L: 315, J: 198, A: 76, N: 32, hw: 4.30 },
      218: { H: 210, L: 330, J: 210, A: 80, N: 32, hw: 5.00 },
      305: { H: 82, L: 150, J: 78, A: 38, N: 16, hw: 0.70 },
      306: { H: 90, L: 160, J: 90, A: 42, N: 16, hw: 1.00 },
      307: { H: 100, L: 180, J: 100, A: 48, N: 20, hw: 1.30 },
      308: { H: 110, L: 195, J: 110, A: 52, N: 20, hw: 1.60 },
      309: { H: 120, L: 210, J: 120, A: 56, N: 20, hw: 2.00 },
      310: { H: 130, L: 230, J: 130, A: 60, N: 24, hw: 2.80 },
      311: { H: 140, L: 255, J: 140, A: 64, N: 24, hw: 3.50 },
      312: { H: 150, L: 265, J: 150, A: 68, N: 24, hw: 4.20 },
      313: { H: 160, L: 280, J: 160, A: 70, N: 28, hw: 4.80 },
      314: { H: 170, L: 295, J: 170, A: 72, N: 28, hw: 5.50 },
      315: { H: 180, L: 310, J: 180, A: 75, N: 28, hw: 6.20 },
      316: { H: 190, L: 330, J: 190, A: 80, N: 32, hw: 7.50 },
      317: { H: 200, L: 345, J: 200, A: 85, N: 32, hw: 8.50 },
      318: { H: 210, L: 360, J: 210, A: 90, N: 36, hw: 9.80 },
      319: { H: 220, L: 380, J: 220, A: 95, N: 36, hw: 11.0 },
      320: { H: 230, L: 400, J: 230, A: 100, N: 36, hw: 12.0 }
    }
  },
  // F — four-bolt square flange, compact face mounting
  F: {
    kind: 'flange',
    fields: ['L', 'J', 'A', 'N'],
    rows: {
      201: { L: 72, J: 52, A: 20, N: 10, hw: 0.20 },
      202: { L: 77, J: 56, A: 22, N: 10, hw: 0.25 },
      203: { L: 83, J: 60, A: 24, N: 12, hw: 0.30 },
      204: { L: 86, J: 64, A: 25.5, N: 12, hw: 0.40 },
      205: { L: 95, J: 70, A: 27, N: 12, hw: 0.50 },
      206: { L: 108, J: 83, A: 31, N: 12, hw: 0.75 },
      207: { L: 117, J: 92, A: 34, N: 14, hw: 0.95 },
      208: { L: 130, J: 102, A: 36, N: 16, hw: 1.25 },
      209: { L: 137, J: 105, A: 38, N: 16, hw: 1.45 },
      210: { L: 143, J: 111, A: 40, N: 16, hw: 1.65 },
      211: { L: 153, J: 130, A: 43, N: 19, hw: 2.10 },
      212: { L: 165, J: 143, A: 48, N: 19, hw: 2.60 },
      213: { L: 177, J: 153, A: 50, N: 19, hw: 2.90 },
      214: { L: 187, J: 162, A: 52, N: 23, hw: 3.40 },
      215: { L: 198, J: 172, A: 55, N: 23, hw: 3.80 },
      216: { L: 210, J: 184, A: 58, N: 25, hw: 4.50 },
      217: { L: 225, J: 198, A: 63, N: 25, hw: 5.20 },
      218: { L: 235, J: 210, A: 68, N: 27, hw: 6.00 },
      305: { L: 110, J: 85, A: 32, N: 16, hw: 0.70 },
      306: { L: 125, J: 95, A: 38, N: 16, hw: 1.00 },
      307: { L: 135, J: 105, A: 42, N: 18, hw: 1.30 },
      308: { L: 145, J: 110, A: 46, N: 20, hw: 1.60 },
      309: { L: 160, J: 130, A: 50, N: 22, hw: 2.10 },
      310: { L: 185, J: 150, A: 55, N: 22, hw: 2.80 },
      311: { L: 205, J: 168, A: 60, N: 26, hw: 3.70 },
      312: { L: 215, J: 178, A: 65, N: 26, hw: 4.30 },
      313: { L: 230, J: 190, A: 70, N: 26, hw: 5.00 },
      314: { L: 240, J: 200, A: 72, N: 30, hw: 5.70 },
      315: { L: 250, J: 208, A: 75, N: 30, hw: 6.40 },
      316: { L: 270, J: 225, A: 80, N: 33, hw: 7.70 },
      317: { L: 285, J: 240, A: 85, N: 33, hw: 8.70 },
      318: { L: 295, J: 255, A: 90, N: 36, hw: 9.80 }
    }
  },
  // FC — four-bolt piloted round flange (with a locating spigot)
  FC: {
    kind: 'flange',
    fields: ['L', 'J', 'A', 'N'],
    rows: {
      201: { L: 82, J: 62, A: 24, N: 10, hw: 0.20 },
      202: { L: 87, J: 66, A: 27, N: 10, hw: 0.25 },
      203: { L: 92, J: 72, A: 30, N: 12, hw: 0.30 },
      204: { L: 100, J: 78, A: 31, N: 12, hw: 0.45 },
      205: { L: 115, J: 90, A: 34, N: 12, hw: 0.65 },
      206: { L: 125, J: 100, A: 38, N: 12, hw: 0.85 },
      207: { L: 135, J: 110, A: 43, N: 14, hw: 1.10 },
      208: { L: 145, J: 120, A: 49, N: 14, hw: 1.40 },
      209: { L: 155, J: 128, A: 49, N: 16, hw: 1.60 },
      210: { L: 163, J: 138, A: 52, N: 16, hw: 1.80 },
      211: { L: 175, J: 150, A: 56, N: 19, hw: 2.30 },
      212: { L: 185, J: 160, A: 65, N: 19, hw: 2.80 },
      213: { L: 195, J: 170, A: 65, N: 19, hw: 3.10 },
      214: { L: 200, J: 175, A: 68, N: 19, hw: 3.40 },
      215: { L: 210, J: 184, A: 72, N: 22, hw: 3.90 },
      216: { L: 220, J: 195, A: 76, N: 22, hw: 4.50 },
      217: { L: 230, J: 205, A: 83, N: 25, hw: 5.20 },
      218: { L: 240, J: 215, A: 90, N: 25, hw: 5.90 },
      305: { L: 125, J: 95, A: 35, N: 16, hw: 0.70 },
      306: { L: 135, J: 105, A: 38, N: 16, hw: 1.00 },
      307: { L: 145, J: 110, A: 42, N: 18, hw: 1.30 },
      308: { L: 155, J: 120, A: 46, N: 20, hw: 1.60 },
      309: { L: 175, J: 135, A: 50, N: 22, hw: 2.10 },
      310: { L: 185, J: 150, A: 55, N: 22, hw: 2.80 },
      311: { L: 205, J: 168, A: 60, N: 26, hw: 3.70 },
      312: { L: 215, J: 178, A: 65, N: 26, hw: 4.30 },
      313: { L: 225, J: 190, A: 70, N: 26, hw: 5.00 },
      314: { L: 235, J: 200, A: 72, N: 30, hw: 5.70 },
      315: { L: 245, J: 208, A: 75, N: 30, hw: 6.40 },
      316: { L: 265, J: 225, A: 80, N: 33, hw: 7.70 }
    }
  },
  // FL — two-bolt oval / diamond flange, low-profile face mounting
  FL: {
    kind: 'flange',
    fields: ['L', 'J', 'A', 'N'],
    rows: {
      201: { L: 90, J: 72, A: 20, N: 10, hw: 0.20 },
      202: { L: 95, J: 76, A: 22, N: 10, hw: 0.25 },
      203: { L: 100, J: 80, A: 24, N: 12, hw: 0.30 },
      204: { L: 113, J: 90, A: 25.5, N: 12, hw: 0.40 },
      205: { L: 130, J: 99, A: 27, N: 16, hw: 0.55 },
      206: { L: 148, J: 117, A: 31, N: 16, hw: 0.80 },
      207: { L: 161, J: 130, A: 34, N: 16, hw: 1.00 },
      208: { L: 175, J: 144, A: 36, N: 16, hw: 1.20 },
      209: { L: 188, J: 148, A: 38, N: 16, hw: 1.40 },
      210: { L: 195, J: 157, A: 40, N: 18, hw: 1.60 },
      211: { L: 224, J: 184, A: 43, N: 18, hw: 2.10 },
      212: { L: 238, J: 202, A: 48, N: 18, hw: 2.60 },
      213: { L: 248, J: 216, A: 50, N: 18, hw: 2.90 },
      214: { L: 256, J: 226, A: 52, N: 18, hw: 3.30 },
      215: { L: 265, J: 234, A: 55, N: 22, hw: 3.70 },
      216: { L: 280, J: 250, A: 58, N: 22, hw: 4.30 },
      217: { L: 295, J: 263, A: 63, N: 25, hw: 5.00 },
      218: { L: 310, J: 280, A: 68, N: 25, hw: 5.80 },
      305: { L: 140, J: 105, A: 32, N: 16, hw: 0.70 },
      306: { L: 150, J: 112, A: 38, N: 16, hw: 1.00 },
      307: { L: 160, J: 120, A: 42, N: 18, hw: 1.30 },
      308: { L: 175, J: 130, A: 46, N: 20, hw: 1.60 },
      309: { L: 190, J: 145, A: 50, N: 22, hw: 2.00 },
      310: { L: 210, J: 160, A: 55, N: 22, hw: 2.80 },
      311: { L: 230, J: 180, A: 60, N: 26, hw: 3.70 },
      312: { L: 240, J: 190, A: 65, N: 26, hw: 4.30 },
      313: { L: 255, J: 200, A: 70, N: 26, hw: 5.00 },
      314: { L: 265, J: 212, A: 72, N: 30, hw: 5.70 },
      315: { L: 275, J: 220, A: 75, N: 30, hw: 6.40 },
      316: { L: 295, J: 238, A: 80, N: 33, hw: 7.70 }
    }
  },
  // PA — two-bolt pillow block with a narrow base and tapped mounting holes
  PA: {
    kind: 'vertical',
    fields: ['H', 'L', 'J', 'A', 'N'],
    rows: {
      201: { H: 25, L: 92, J: 70, A: 28, N: 8, hw: 0.20 },
      202: { H: 28, L: 100, J: 78, A: 32, N: 8, hw: 0.25 },
      203: { H: 30, L: 108, J: 85, A: 34, N: 10, hw: 0.30 },
      204: { H: 33.3, L: 113, J: 88, A: 35, N: 10, hw: 0.40 },
      205: { H: 36.5, L: 130, J: 99, A: 38, N: 10, hw: 0.50 },
      206: { H: 42.9, L: 148, J: 117, A: 43, N: 12, hw: 0.70 },
      207: { H: 47.6, L: 161, J: 129, A: 48, N: 12, hw: 0.90 },
      208: { H: 49.2, L: 175, J: 144, A: 50, N: 12, hw: 1.00 },
      209: { H: 54.0, L: 188, J: 148, A: 52, N: 16, hw: 1.20 },
      210: { H: 57.2, L: 197, J: 157, A: 54, N: 16, hw: 1.35 },
      211: { H: 63.5, L: 224, J: 184, A: 58, N: 16, hw: 1.80 },
      212: { H: 69.8, L: 238, J: 202, A: 68, N: 20, hw: 2.20 },
      213: { H: 76.2, L: 248, J: 216, A: 70, N: 20, hw: 2.50 },
      214: { H: 79.4, L: 256, J: 226, A: 72, N: 20, hw: 3.30 },
      215: { H: 82.6, L: 265, J: 234, A: 74, N: 20, hw: 3.70 },
      216: { H: 88.9, L: 280, J: 250, A: 78, N: 24, hw: 4.30 },
      305: { H: 45, L: 175, J: 132, A: 45, N: 12, hw: 1.30 },
      306: { H: 50, L: 180, J: 140, A: 50, N: 12, hw: 1.60 },
      307: { H: 56, L: 210, J: 160, A: 56, N: 14, hw: 2.20 },
      308: { H: 60, L: 220, J: 170, A: 60, N: 14, hw: 2.80 },
      309: { H: 67, L: 245, J: 190, A: 67, N: 16, hw: 3.60 },
      310: { H: 75, L: 275, J: 212, A: 75, N: 16, hw: 5.00 },
      311: { H: 80, L: 310, J: 236, A: 80, N: 16, hw: 5.90 },
      312: { H: 85, L: 330, J: 250, A: 85, N: 20, hw: 7.10 },
      313: { H: 90, L: 340, J: 260, A: 90, N: 20, hw: 7.90 },
      314: { H: 95, L: 360, J: 280, A: 90, N: 20, hw: 9.20 },
      315: { H: 100, L: 380, J: 290, A: 100, N: 24, hw: 11.1 },
      316: { H: 106, L: 400, J: 300, A: 110, N: 24, hw: 14.3 }
    }
  },
  // PH — two-bolt high-base pillow block (extra base-to-centre height)
  PH: {
    kind: 'vertical',
    fields: ['H', 'L', 'J', 'A', 'N'],
    rows: {
      201: { H: 36, L: 100, J: 74, A: 30, N: 10, hw: 0.25 },
      202: { H: 40, L: 110, J: 83, A: 32, N: 10, hw: 0.30 },
      203: { H: 44, L: 118, J: 88, A: 36, N: 12, hw: 0.40 },
      204: { H: 48, L: 127, J: 95, A: 38, N: 13, hw: 0.55 },
      205: { H: 50, L: 140, J: 105, A: 40, N: 13, hw: 0.65 },
      206: { H: 62, L: 165, J: 121, A: 45, N: 17, hw: 0.95 },
      207: { H: 70, L: 167, J: 127, A: 50, N: 17, hw: 1.15 },
      208: { H: 72, L: 184, J: 137, A: 52, N: 17, hw: 1.35 },
      209: { H: 78, L: 190, J: 146, A: 54, N: 17, hw: 1.50 },
      210: { H: 84, L: 206, J: 159, A: 56, N: 20, hw: 1.80 },
      211: { H: 95, L: 217, J: 171, A: 60, N: 20, hw: 2.20 },
      212: { H: 105, L: 230, J: 184, A: 70, N: 20, hw: 2.70 },
      213: { H: 115, L: 265, J: 203, A: 72, N: 24, hw: 3.20 },
      214: { H: 122, L: 266, J: 210, A: 74, N: 24, hw: 3.60 },
      215: { H: 128, L: 275, J: 217, A: 76, N: 24, hw: 4.00 },
      216: { H: 134, L: 292, J: 232, A: 80, N: 28, hw: 4.80 },
      305: { H: 57, L: 175, J: 132, A: 45, N: 17, hw: 1.50 },
      306: { H: 64, L: 180, J: 140, A: 50, N: 17, hw: 1.80 },
      307: { H: 72, L: 210, J: 160, A: 56, N: 17, hw: 2.50 },
      308: { H: 78, L: 220, J: 170, A: 60, N: 17, hw: 3.10 },
      309: { H: 87, L: 245, J: 190, A: 67, N: 20, hw: 4.00 },
      310: { H: 97, L: 275, J: 212, A: 75, N: 20, hw: 5.50 },
      311: { H: 104, L: 310, J: 236, A: 80, N: 20, hw: 6.40 },
      312: { H: 111, L: 330, J: 250, A: 85, N: 25, hw: 7.60 },
      313: { H: 118, L: 340, J: 260, A: 90, N: 25, hw: 8.40 },
      314: { H: 124, L: 360, J: 280, A: 90, N: 27, hw: 9.70 },
      315: { H: 131, L: 380, J: 290, A: 100, N: 27, hw: 11.6 },
      316: { H: 138, L: 400, J: 300, A: 110, N: 27, hw: 14.8 }
    }
  },
  // FA — adjustable oval flange with slotted holes for belt-tension alignment
  FA: {
    kind: 'flange',
    fields: ['L', 'J', 'A', 'N'],
    rows: {
      201: { L: 82, J: 66, A: 24, N: 10, hw: 0.20 },
      202: { L: 88, J: 72, A: 26, N: 10, hw: 0.25 },
      203: { L: 96, J: 78, A: 28, N: 12, hw: 0.30 },
      204: { L: 105, J: 85, A: 30, N: 12, hw: 0.40 },
      205: { L: 120, J: 98, A: 32, N: 12, hw: 0.50 },
      206: { L: 135, J: 112, A: 38, N: 14, hw: 0.70 },
      207: { L: 150, J: 127, A: 40, N: 14, hw: 0.90 },
      208: { L: 162, J: 140, A: 42, N: 14, hw: 1.00 },
      209: { L: 172, J: 148, A: 45, N: 16, hw: 1.20 },
      210: { L: 180, J: 156, A: 48, N: 16, hw: 1.30 },
      211: { L: 205, J: 180, A: 52, N: 18, hw: 1.80 },
      212: { L: 220, J: 195, A: 56, N: 18, hw: 2.20 },
      305: { L: 135, J: 98, A: 36, N: 14, hw: 0.70 },
      306: { L: 145, J: 108, A: 40, N: 14, hw: 1.00 },
      307: { L: 155, J: 118, A: 44, N: 16, hw: 1.30 },
      308: { L: 168, J: 128, A: 48, N: 16, hw: 1.60 },
      309: { L: 183, J: 142, A: 52, N: 18, hw: 2.00 },
      310: { L: 203, J: 158, A: 56, N: 18, hw: 2.80 },
      311: { L: 222, J: 176, A: 60, N: 22, hw: 3.70 },
      312: { L: 232, J: 186, A: 65, N: 22, hw: 4.30 }
    }
  },
  // FB — two-bolt round flange, lightweight face mounting
  FB: {
    kind: 'flange',
    fields: ['L', 'J', 'A', 'N'],
    rows: {
      201: { L: 80, J: 62, A: 24, N: 10, hw: 0.20 },
      202: { L: 86, J: 68, A: 26, N: 10, hw: 0.25 },
      203: { L: 93, J: 74, A: 28, N: 12, hw: 0.30 },
      204: { L: 100, J: 78, A: 30, N: 12, hw: 0.40 },
      205: { L: 115, J: 90, A: 32, N: 12, hw: 0.55 },
      206: { L: 125, J: 100, A: 38, N: 12, hw: 0.75 },
      207: { L: 135, J: 110, A: 40, N: 14, hw: 0.95 },
      208: { L: 145, J: 120, A: 42, N: 14, hw: 1.15 },
      209: { L: 155, J: 128, A: 45, N: 16, hw: 1.35 },
      210: { L: 163, J: 138, A: 48, N: 16, hw: 1.50 },
      211: { L: 175, J: 150, A: 52, N: 19, hw: 2.00 },
      212: { L: 185, J: 160, A: 56, N: 19, hw: 2.40 },
      305: { L: 125, J: 95, A: 35, N: 16, hw: 0.70 },
      306: { L: 135, J: 105, A: 38, N: 16, hw: 1.00 },
      307: { L: 145, J: 110, A: 42, N: 18, hw: 1.30 },
      308: { L: 155, J: 120, A: 46, N: 20, hw: 1.60 },
      309: { L: 175, J: 135, A: 50, N: 22, hw: 2.10 },
      310: { L: 185, J: 150, A: 55, N: 22, hw: 2.80 },
      311: { L: 205, J: 168, A: 60, N: 26, hw: 3.70 },
      312: { L: 215, J: 178, A: 65, N: 26, hw: 4.30 }
    }
  },
  // HA — hanging / hanger unit for overhead suspension (tapped top hole, no base)
  HA: {
    kind: 'vertical',
    fields: ['H', 'L', 'A', 'N'],
    rows: {
      201: { H: 40, L: 80, A: 24, N: 10, hw: 0.20 },
      202: { H: 45, L: 90, A: 26, N: 10, hw: 0.25 },
      203: { H: 50, L: 95, A: 28, N: 12, hw: 0.30 },
      204: { H: 55, L: 100, A: 30, N: 12, hw: 0.40 },
      205: { H: 60, L: 115, A: 32, N: 12, hw: 0.50 },
      206: { H: 70, L: 125, A: 38, N: 14, hw: 0.70 },
      207: { H: 78, L: 135, A: 40, N: 14, hw: 0.90 },
      208: { H: 85, L: 145, A: 42, N: 14, hw: 1.00 },
      209: { H: 90, L: 155, A: 45, N: 16, hw: 1.20 },
      210: { H: 100, L: 163, A: 48, N: 16, hw: 1.30 },
      211: { H: 110, L: 175, A: 52, N: 19, hw: 1.80 },
      212: { H: 120, L: 185, A: 56, N: 19, hw: 2.20 },
      305: { H: 75, L: 125, A: 35, N: 16, hw: 0.70 },
      306: { H: 85, L: 135, A: 38, N: 16, hw: 1.00 },
      307: { H: 95, L: 145, A: 42, N: 18, hw: 1.30 },
      308: { H: 105, L: 155, A: 46, N: 20, hw: 1.60 },
      309: { H: 115, L: 175, A: 50, N: 22, hw: 2.10 },
      310: { H: 125, L: 185, A: 55, N: 22, hw: 2.80 },
      311: { H: 135, L: 205, A: 60, N: 26, hw: 3.70 },
      312: { H: 145, L: 215, A: 65, N: 26, hw: 4.30 }
    }
  },
  // FU — four-bolt square flange with an extended / lengthened base
  FU: {
    kind: 'flange',
    fields: ['L', 'J', 'A', 'N'],
    rows: {
      201: { L: 72, J: 52, A: 28, N: 10, hw: 0.25 },
      202: { L: 77, J: 56, A: 30, N: 10, hw: 0.30 },
      203: { L: 83, J: 60, A: 32, N: 12, hw: 0.35 },
      204: { L: 86, J: 64, A: 35, N: 12, hw: 0.45 },
      205: { L: 95, J: 70, A: 38, N: 12, hw: 0.55 },
      206: { L: 108, J: 83, A: 42, N: 12, hw: 0.80 },
      207: { L: 117, J: 92, A: 46, N: 14, hw: 1.00 },
      208: { L: 130, J: 102, A: 48, N: 16, hw: 1.20 },
      209: { L: 137, J: 105, A: 50, N: 16, hw: 1.40 },
      210: { L: 143, J: 111, A: 54, N: 16, hw: 1.60 },
      211: { L: 153, J: 130, A: 58, N: 19, hw: 2.10 },
      212: { L: 165, J: 143, A: 62, N: 19, hw: 2.60 },
      213: { L: 177, J: 153, A: 65, N: 19, hw: 2.90 },
      214: { L: 187, J: 162, A: 68, N: 23, hw: 3.30 },
      215: { L: 198, J: 172, A: 72, N: 23, hw: 3.70 },
      216: { L: 210, J: 184, A: 76, N: 25, hw: 4.40 },
      217: { L: 225, J: 198, A: 82, N: 25, hw: 5.10 },
      218: { L: 235, J: 210, A: 88, N: 27, hw: 5.90 }
    }
  },
  // FS — heavy-duty square flange with a raised locating boss (300 series)
  FS: {
    kind: 'flange',
    fields: ['L', 'J', 'A', 'N'],
    rows: {
      305: { L: 120, J: 88, A: 45, N: 16, hw: 0.90 },
      306: { L: 135, J: 98, A: 50, N: 16, hw: 1.20 },
      307: { L: 145, J: 108, A: 55, N: 18, hw: 1.50 },
      308: { L: 160, J: 120, A: 60, N: 20, hw: 1.90 },
      309: { L: 175, J: 135, A: 65, N: 22, hw: 2.40 },
      310: { L: 195, J: 155, A: 70, N: 22, hw: 3.10 },
      311: { L: 215, J: 172, A: 78, N: 26, hw: 4.00 },
      312: { L: 225, J: 185, A: 82, N: 26, hw: 4.70 }
    }
  }
});

// Maps a product series code to its housing type in HOUSING_DIMS.
// Complete units (UCP, UCT ...) and bare housings (P, T ...) both point to the same housing
// geometry; only the complete unit also carries the insert load rating.
export const SERIES_HOUSING = Object.freeze({
  // Pillow block units (complete)
  UCP: 'P', UCT: 'T', UCF: 'F', UCFC: 'FC', UCFL: 'FL', UCPA: 'PA',
  UCPH: 'PH', UCFA: 'FA', UCFB: 'FB', PBU: 'HA', UELP: 'P', UCFS: 'FS',
  // Bare housing series
  T: 'T', P: 'P', F: 'F', FC: 'FC', FL: 'FL', PA: 'PA', PH: 'PH',
  FU: 'FU', FB: 'FB', PAS: 'HA', FS: 'FS'
});

// Resolve the housing dimension table for a series code.
export function housingForSeries(seriesCode) {
  const h = SERIES_HOUSING[seriesCode];
  return h ? HOUSING_DIMS[h] : null;
}

// Complete units carry an insert load rating; bare housings do not.
export const COMPLETE_UNIT_SERIES = Object.freeze([
  'UCT', 'UEL', 'UK', 'UELP', 'UCP', 'UCF', 'UCFC', 'UCFS', 'UCFL',
  'UCPA', 'UCPH', 'UCFA', 'UCFB', 'PBU', 'UC'
]);

export function isCompleteUnit(seriesCode) {
  return COMPLETE_UNIT_SERIES.includes(seriesCode);
}
