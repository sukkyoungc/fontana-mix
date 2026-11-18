# Fontana Mix 2026

[![DOI](https://zenodo.org/badge/1458511382.svg)](https://doi.org/10.5281/zenodo.24241992)

### A chance-operations score generator for human–AI co-creative practice

Fontana Mix 2026 generates studio scores by chance operation. Two eight-sided dice cast an I Ching hexagram (King Wen sequence). The throw deterministically fixes a composite score: selections from three vocabulary sheets (Language, Image, Process), a compositional diagram governing placement, rotation and scale, and a set of generated mark fields. A prompt directive for generative image synthesis is then drawn at random from the selected terms and recorded. The score is a suggestion the performer may follow, vary or refuse, and the record keeps all three.

The instrument was built as the practice-based core of a cognitive-autoethnographic study of human–AI co-creation in neural painting. It is designed against the convergent tendencies of generative inference: where a learned model returns the statistically probable, chance operations hold open a space of divergence that the performer must then interpret. The project calls this condition *restricted indeterminacy*.

The name points to John Cage's *Fontana Mix* (1958), composed at the RAI studio on Via Fontana, Milan: a graphic score whose superimposed transparencies produced performance instructions the composer had not chosen. The relation is referential rather than derived. This instrument inherits Cage's motivation, the displacement of one's own taste, rather than his method. (Cage's I Ching practice belongs to the earlier *Music of Changes* era, not to *Fontana Mix* itself.)

---

## Quick start

No installation, no build step, no server, no dependencies.

1. Download `fontana-mix.html` from this repository.
2. Open it in any modern browser (Chrome, Firefox, Edge, Brave, Safari).
3. Open **about / instructions** in the header for full in-app documentation.

The single HTML file *is* the instrument; all application logic is embedded. It runs entirely locally, and nothing is transmitted anywhere.

**Storage note.** A performance record is kept in the browser's `localStorage`. For local `file://` pages most browsers treat all such pages as one origin, so separation between copies comes from the storage key rather than the folder. Keep one performance open in one tab at a time, and use the export function for backups.

---

## How a cast works

**The throw.** Two eight-sided dice, thrown physically or by the in-app randomiser, map to an upper and a lower trigram, producing one of the 64 hexagrams.

**What the throw fixes.** The pair of dice seeds a deterministic generator, which fixes the vocabulary selections, the compositional diagram and the mark fields. The same throw, with the same sheets switched on, always gives the same score. Switching a sheet off is part of the cast: the remaining sheets then draw differently, and the log records which sheets were off.

**Suggested numbers.** A directive may suggest numbers, as "fragment — cut into N, discard M" does. These are derived from the dice by a second generator, independent of the first, so they too are the same for the same throw, and drawing them never changes the rest of the score. Like every directive, they can be ignored.

**What it does not fix.** The prompt directive is drawn at random from the selected terms each time, and the image comes from the bank queue or the performer's choice. Both are recorded in the log rather than reproduced.

**The commitment.** Provisional exploration is free and unrecorded; commitment is explicit and leaves a mark. An image drawn from the bank counts as *used* only once the next cast is thrown: the throw is the commitment point. Substitutions before that are logged as provisional override-trials.

---

## Reproducing a cast

The log prints each cast's trigrams, not its dice. Each trigram corresponds to one die face:

| ☰ | ☱ | ☲ | ☳ | ☴ | ☵ | ☶ | ☷ |
|---|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |

The first symbol is the first die (upper trigram). To reproduce a cast, enter the two values in the physical-throw fields and press **enter**. For example, `☳☲` is 4 and 3.

**Tested against the published log.** Re-entering the recorded dice into v1.0.1 reproduces the language, image and process selections, the placement principle and the rotation of all 23 logged casts, and the scale of every cast except the wording of the three that drew "fragment" (Casts 4, 21 and 22), which now carry suggested numbers. Casts 13 and 14 show corrected hexagram numbers. See [ERRATA.md](ERRATA.md). The test is in `tests/reproduce-log.js` and can be re-run by anyone.

What a reproduction does not return:

- **The prompt directive**, which is a random draw (see above).
- **The performer's deviations.** Overrides, re-use and manual substitutions are the performer's acts and are recorded as log events, not regenerated. For faithful restoration of a whole performance, use the exported state rather than the printed log, which drops exact coordinates and sub-minute timestamps.

The second point is methodological rather than technical. The deviations are the object of study.

---

## The vocabulary is not neutral

The three vocabulary sheets encode a specific theoretical and aesthetic position, drawn from the author's research: intensive difference, embodied intuition, mode collapse, the alreadymade, pre-articulate state, and so on. Performing with this version means working inside that framework. This is intentional, and it is the version documented in the research record.

A version with editable vocabulary sheets, for practitioners who wish to configure the instrument for their own frameworks, is designed but not yet released. In the meantime the three vocabulary arrays can be edited directly in the HTML source.

---

## Repository contents

| Path | What it is |
|---|---|
| `fontana-mix.html` | The instrument (research version) |
| `data/` | Performance log of the documented test performance, as exported (not edited) |
| `ERRATA.md` | Corrections and known limitations |
| `DEVELOPMENT_RECORD.md` | Design decisions, who made them, and how they were checked |
| `tests/reproduce-log.js` | Re-enters every logged cast and compares the result with the log |
| `LICENSE` | CC BY-SA 4.0 |

---

## Versions

- **v1.0.1** (r95): corrects three cells of the hexagram table; restores the score sequence used for the published log, with the "fragment" numbers now derived independently; corrects the About panel's account of what the throw seeds. Details in [ERRATA.md](ERRATA.md).
- **v1.0.0** (r94): first public release, 15 November 2026.

---

## Licence

Released under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). You may share and adapt the work, including commercially, provided you give appropriate credit and license your adaptations under the same terms.

Adaptation is anticipated and welcome. If you reconfigure the vocabulary for your own practice, that adapted version is itself a legitimate instrument, and under ShareAlike it stays open.

---

## Citation

> Choi, S. K. (2026). *Fontana Mix 2026: A chance-operations score generator
> for human–AI co-creative practice* [Computer software]. Zenodo.
> https://doi.org/10.5281/zenodo.24241992

This DOI represents all versions and always resolves to the latest.

Repository: https://github.com/sukkyoungc/fontana-mix

---

## Status

The instrument is in active development and in active use. A paper drawing on the documented performance is currently under review.

---

## Credits

Developed by SK Choi, in dialogue with Anthropic's Claude. The co-development conversations are themselves part of the study's autoethnographic record.
