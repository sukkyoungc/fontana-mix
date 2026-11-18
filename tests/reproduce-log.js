// Fontana Mix 2026: re-enter every cast in a performance log and compare with the log.
//
// Usage, from the repository folder:
//   npm install playwright && npx playwright install chromium
//   node tests/reproduce-log.js [instrument.html] [log.txt]
//
// Defaults: fontana-mix.html and data/performance-log-radio-picture-1.txt.
// Dice are recovered from the logged trigrams (☰1 ☱2 ☲3 ☳4 ☴5 ☵6 ☶7 ☷8; first symbol = first die).
// The instrument's own scoring function is called with those dice, and the hexagram number,
// Language, Image, Process and Composition lines are compared with the log.
// The prompt directive is a random draw by design and is not compared.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = path.resolve(process.argv[2] || path.join(root, 'fontana-mix.html'));
const logFile = path.resolve(process.argv[3] || path.join(root, 'data', 'performance-log-radio-picture-1.txt'));
const SYM = ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'];
const FIELDS = ['hexagram', 'LANGUAGE', 'IMAGE', 'PROCESS', 'COMPOSITION'];

const lines = fs.readFileSync(logFile, 'utf8').split('\n');
const casts = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^  CAST (\d+)\s+(\S)(\S) · no\.(\d+) · ([^\[]+)\[/);
  if (!m) continue;
  const c = { n: +m[1], d1: SYM.indexOf(m[2]) + 1, d2: SYM.indexOf(m[3]) + 1, hexagram: m[4] };
  for (let j = i + 1; j < i + 8 && j < lines.length; j++) {
    const k = lines[j].match(/^  (LANGUAGE|IMAGE|PROCESS|COMPOSITION): (.*)$/);
    if (k) c[k[1]] = k[2].trim();
  }
  casts.push(c);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + html);
  await page.waitForTimeout(800);
  const version = await page.evaluate(() => typeof FM_VERSION !== 'undefined' ? FM_VERSION : '?');
  console.log(`Instrument ${path.basename(html)} (${version}) against ${path.basename(logFile)}: ${casts.length} casts\n`);
  const tally = Object.fromEntries(FIELDS.map(f => [f, 0]));
  for (const c of casts) {
    // A sheet that was off at the time of the cast has no line in the log; reproduce with the same sheets.
    const sheets = { language: c.LANGUAGE !== undefined, image: c.IMAGE !== undefined, process: c.PROCESS !== undefined };
    const r = await page.evaluate(([d1, d2, sheets]) => {
      state.activeSheets = sheets;
      const s = resolveScore(d1, d2), k = s.composition;
      return {
        hexagram: String(s.hexNum),
        LANGUAGE: (s.language || []).join(' · '),
        IMAGE: (s.image || []).join(' · '),
        PROCESS: (s.process || []).join(' · '),
        COMPOSITION: k ? `${k.principle} · rot ${k.rotationLabel} · ${k.scale}` : ''
      };
    }, [c.d1, c.d2, sheets]);
    const diffs = FIELDS.filter(f => c[f] !== undefined && c[f] !== r[f]);
    FIELDS.forEach(f => { if (!diffs.includes(f)) tally[f]++; });
    console.log(`Cast ${String(c.n).padStart(2)}  dice ${c.d1}+${c.d2}  ` +
      (diffs.length ? diffs.map(f => `\n    ${f} differs\n      log:        ${c[f]}\n      instrument: ${r[f]}`).join('') : 'all fields match'));
  }
  console.log('\nFields matching the log:');
  FIELDS.forEach(f => console.log(`  ${f.padEnd(12)} ${tally[f]} of ${casts.length}`));
  console.log('\nKnown, documented differences are listed in ERRATA.md.');
  await browser.close();
})();
