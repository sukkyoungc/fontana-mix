# Errata

Corrections to Fontana Mix 2026 are listed here. The performance log in `data/` is the record as exported and is not edited; where it carries an error, the error is noted below.

## Fixed in v1.0.1 (r95)

**1. Hexagram table.** In v1.0.0, three of the 64 table entries were wrong:

| Dice | Trigrams | v1.0.0 gave | Correct |
|---|---|---|---|
| 2 + 1 | Lake over Heaven | 19 | 43 Breakthrough |
| 5 + 1 | Wind over Heaven | 43 | 9 Small Taming |
| 8 + 2 | Earth over Lake | 45 | 19 Approach |

Hexagram 9 could not be cast, and 45 appeared twice. Scores were not affected, because selections are seeded from the dice, not from the hexagram number. **In the published log, Cast 13 (☴☰, dice 5+1) is labelled no.43 Breakthrough; it was no.9 Small Taming. Cast 14 (☷☱, dice 8+2) is labelled no.45 Gathering Together; it was no.19 Approach.**

**2. The "fragment" scale directive.** "Fragment" is a suggestion to the performer, a word like any other on the sheets. In r93 its wording became "cut into N, discard M", and the two numbers were drawn from the main sequence whenever "fragment" came up; the diagram also drew the pieces. The extra draws shifted the sequence, so for the 9 of 64 throws that draw "fragment" (dice 1+2, 2+2, 2+6, 4+2, 5+2, 5+6, 6+1, 6+8, 8+7) the Process selection changed. v1.0.0 therefore did not reproduce the Process line of Casts 4, 21 and 22, which were made before r93.

v1.0.1 separates the two. The scale directive is again one draw from the main sequence, so every throw gives the same vocabulary and composition (placement, rotation, scale, position) as r92, the version used for the published log. The suggested numbers are computed for every throw from a second generator seeded from the dice, independent of the main sequence (N from 3 to 7, M from 1 to N-1), and are written into the label only where the label asks for them. The code does not act on the meaning of any directive; the diagram shows the plain reference box for "fragment".

*Consequences:* the composition line of Casts 4, 21 and 22 now reads "fragment — cut into N, discard M" where the log has "fragment — show edge only" (Cast 4: 3 and 1; Cast 21: 7 and 1; Cast 22: 5 and 2). A "fragment" cast made with r93 or r94 shows a different Process selection, and possibly different numbers, when re-entered in v1.0.1; no such cast appears in the published log.

**3. Sheets switched off.** A sheet switched off at the time of a cast is part of that cast: the remaining sheets then draw differently from the same dice. Earlier versions recorded this only by the missing line in the log, and on reopening a saved performance they recomputed the last cast with all three sheets on, so the restored score could differ from the recorded one. v1.0.1 records the active sheets with each cast, adds a "SHEETS:" line to the log when any sheet was off, and restores with the recorded sheets. All 23 casts in the published log had all three sheets on.

**4. About panel.** It said that the hexagram number seeds the score. The seed is the pair of dice, together with the sheets that are switched on. Corrected.

## Known limitations (unchanged)

- The prompt directive is a random draw from the selected terms. It is recorded, not reproduced.
- The image is drawn from the bank queue or chosen by override, not by the throw.
- The log prints trigrams, not dice. Die values: ☰1 ☱2 ☲3 ☳4 ☴5 ☵6 ☶7 ☷8; the first symbol is the first die (upper trigram).
- Up to r92, the score card's "CAST NO." counted casts since the page was loaded, not the performance's cast number. A screen showing "CAST NO. 8" during Session 12 of the published performance shows the log's Cast 22. From r94 the counter is restored to the performance count on reload.
- Mark fields are not written to the log, so they cannot be checked for logged casts.
- The log's entry of 21 October 2026 records several test casts, made before a browser restart, that were not captured.

## How this was tested

`tests/reproduce-log.js` re-enters the dice of every cast in the published log, with the sheets that were on (a sheet without a line in the log was off), calls the instrument's own scoring function, and compares the result with the log. Against v1.0.1: the language, image and process selections match for all 23 casts; placement principle and rotation match for all 23; the scale matches for every cast except the wording of Casts 4, 21 and 22 (item 2); the hexagram number matches for every cast except Casts 13 and 14 (item 1). The hexagram table was checked cell by cell against the "Key for Identifying the Hexagrams" (after Wilhelm, folding chart; contemplatingiching.wordpress.com, 2019) and against Wikipedia, "List of hexagrams of the I Ching": 64 of 64 correct against both.
