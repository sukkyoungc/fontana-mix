# Fontana Mix 2026

[![DOI](https://zenodo.org/badge/1458511382.svg)](https://doi.org/10.5281/zenodo.24241992)

### A chance-operations score generator for human–AI co-creative practice

Fontana Mix 2026 generates studio scores by chance operation. Two eight-sided dice cast an I Ching hexagram (King Wen sequence), and that hexagram deterministically produces a composite score: selections from three vocabulary sheets (Language, Image, Process), a compositional diagram governing placement, rotation and scale, a set of generated mark fields, and a prompt directive for generative image synthesis. The score is a suggestion the performer may follow, vary, or refuse — and the record keeps all three.

The instrument was built as the practice-based core of a cognitive-autoethnographic study of human–AI co-creation in neural painting. It is designed against the convergent tendencies of generative inference: where a learned model returns the statistically probable, chance operations hold open a space of divergence that the performer must then interpret. The project calls this condition *restricted indeterminacy*.

The name points to John Cage's *Fontana Mix* (1958), composed at the RAI studio on Via Fontana, Milan — a graphic score whose superimposed transparencies produced performance instructions the composer had not chosen. The relation is referential rather than derived: this instrument inherits Cage's motivation, the displacement of one's own taste, rather than his method. (Cage's I Ching practice belongs to the earlier *Music of Changes* era, not to *Fontana Mix* itself.)

---

## Quick start

No installation, no build step, no server, no dependencies.

1. Download `fontana-mix.html` from this repository.
2. Open it in any modern browser (Chrome, Firefox, Edge, Brave, Safari).
3. Open **about / instructions** in the header for full in-app documentation.

The single HTML file *is* the instrument — all application logic is embedded. It runs entirely locally; nothing is transmitted anywhere.

**Storage note.** A performance record is kept in the browser's `localStorage`. For local `file://` pages most browsers treat all such pages as one origin, so separation between copies comes from the storage key rather than the folder. Keep one performance open in one tab at a time, and use the export function for backups.

---

## How a cast works

**The throw.** Two eight-sided dice — thrown physically or by the in-app randomiser — map to an upper and a lower trigram, producing one of the 64 hexagrams.

**The seed.** The throw seeds a deterministic pseudo-random generator. Every element of the cast follows from it.

**The score.** Vocabulary selections, compositional directive, mark fields and prompt directive are assembled from the activated pools.

**The commitment.** Provisional exploration is free and unrecorded; commitment is explicit and leaves a mark. An image drawn from the bank counts as *used* only once the next cast is thrown — the throw is the commitment point. Substitutions before that are logged as provisional override-trials.

---

## Reproducing a cast

Casts are deterministic, which makes any performance independently checkable.

To reproduce a cast recorded in a performance log, enter its two dice values into the physical-throw fields and press **enter**. The same throw produces the same hexagram, the same vocabulary selections, the same compositional geometry, and the same mark fields.

Two qualifications, stated precisely:

- **The prompt directive is a random secondary layer** selected from the activated pools at cast time (up to 18 possible prompts per hexagram). It is not reproduced from the throw alone; the enacted prompt is recorded in the log.
- **A reproduced cast returns the oracle's output, not the performer's deviations.** Overrides, re-use, and manual substitutions are the performer's acts and are recorded as log events, not regenerated. For faithful restoration of a whole performance, use the exported state rather than re-deriving from the printed log — the rendering drops exact coordinates, fragment specifications, and sub-minute timestamps.

The second point is methodological rather than technical. The deviations are the object of study.

---

## The vocabulary is not neutral

The three vocabulary sheets encode a specific theoretical and aesthetic position, drawn from the author's research — intensive difference, embodied intuition, mode collapse, the alreadymade, pre-articulate state, and so on. Performing with this version means working inside that framework. This is intentional, and it is the version documented in the research record.

A blank version with editable vocabulary sheets, for practitioners who wish to configure the instrument for their own frameworks, is planned but not yet released. In the meantime the three vocabulary arrays can be edited directly in the HTML source.

---

## Repository contents

| Path | What it is |
|---|---|
| `fontana-mix.html` | The instrument (research version) |
| `data/` | Performance log from the documented test performance |
| `LICENSE` | CC BY-SA 4.0 |

---

## Licence

Released under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). You may share and adapt the work, including commercially, provided you give appropriate credit and license your adaptations under the same terms.

Adaptation is anticipated and welcome. If you reconfigure the vocabulary for your own practice, that adapted version is itself a legitimate instrument — and under ShareAlike it stays open.

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
