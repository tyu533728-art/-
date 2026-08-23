import { readFileSync } from 'node:fs';
const raw = process.argv[2];
const W = Number(process.argv[3]), H = Number(process.argv[4]);
const buf = readFileSync(raw);
const lum = new Float64Array(W * H);
let sumL = 0, sumL2 = 0;
const hist = [0, 0, 0];
let satSum = 0;
let whiteAll = 0, whiteCenter = 0, skin = 0;
const topL = [0, 0], botL = [0, 0];
const hueCount = [0, 0, 0]; // red-dominant, green-dominant, blue-dominant
const cx0 = Math.floor(W * 0.25), cx1 = Math.floor(W * 0.75), cy0 = Math.floor(H * 0.25), cy1 = Math.floor(H * 0.75);
const half = Math.floor(H / 2);
for (let p = 0; p < W * H; p++) {
  const i = p * 3;
  const r = buf[i], g = buf[i + 1], b = buf[i + 2];
  const L = 0.299 * r + 0.587 * g + 0.114 * b;
  lum[p] = L;
  sumL += L; sumL2 += L * L;
  if (L < 80) hist[0]++; else if (L > 180) hist[2]++; else hist[1]++;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  satSum += mx - mn;
  const x = p % W, y = (p / W) | 0;
  if (mn >= 235) whiteAll++;
  if (x >= cx0 && x <= cx1 && y >= cy0 && y <= cy1 && mn >= 235) whiteCenter++;
  if (r > g && r > b && r - b > 35 && r > 110 && g > 60) skin++;
  if (y < half) topL[0] += L, topL[1]++; else botL[0] += L, botL[1]++;
  if (r >= g && r >= b) hueCount[0]++;
  else if (g >= r && g >= b) hueCount[1]++;
  else hueCount[2]++;
}
let lapSum = 0, lapSum2 = 0;
for (let y = 1; y < H - 1; y++) {
  for (let x = 1; x < W - 1; x++) {
    const p = y * W + x;
    const lap = 4 * lum[p] - lum[p - 1] - lum[p + 1] - lum[p - W] - lum[p + W];
    lapSum += lap; lapSum2 += lap * lap;
  }
}
const n = W * H;
const lapVar = lapSum2 / n - (lapSum / n) * (lapSum / n);
const meanL = sumL / n;
const sat = satSum / n;
const topMean = topL[0] / topL[1], botMean = botL[0] / botL[1];
console.log(`SHARP=${lapVar.toFixed(1)} LUM=${meanL.toFixed(1)} SAT=${sat.toFixed(1)} DARK=${(100 * hist[0] / n).toFixed(1)} MID=${(100 * hist[1] / n).toFixed(1)} BRIGHT=${(100 * hist[2] / n).toFixed(1)} WHITE=${(100 * whiteAll / n).toFixed(1)} WHTCTR=${(100 * whiteCenter / n).toFixed(1)} SKIN=${(100 * skin / n).toFixed(1)} TOP=${topMean.toFixed(0)} BOT=${botMean.toFixed(0)} HUE=${hueCount[0] > hueCount[1] ? (hueCount[0] > hueCount[2] ? 'R' : 'B') : (hueCount[1] > hueCount[2] ? 'G' : 'B')}`);
