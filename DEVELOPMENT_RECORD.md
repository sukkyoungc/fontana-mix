# Development record

Fontana Mix 2026 was developed by SK Choi in dialogue with an AI assistant (Anthropic's Claude), which wrote most of the code. This file records the design decisions that affect what the instrument produces: who made each one, why, and whether it was checked. "Author" means SK Choi; "AI" means the assistant. Errors and their corrections are in [ERRATA.md](ERRATA.md).

The development dialogue itself is research material for a later phase of the project and is not published here.

| When (version) | Decision | Decided by | Implemented by | Checked |
|---|---|---|---|---|
| 29 Mar 2026 (first build) | Cast with two eight-sided dice: 64 combinations, echoing the I Ching's 64 hexagrams. | Author | AI | |
| 29 Mar 2026 (first build) | The throw seeds the score deterministically, so that the same throw always gives the same score and a cast can be cited and reproduced. | Proposed by AI; approved by the author | AI | Yes, within each version. |
| Spring 2026 (to r35) | Hexagram number shown as the dice position (1 to 64), with provisional names. | Not recorded as an author decision | AI | Replaced at r36. |
| By June 2026 (r36) | Show the traditional King Wen number and name, so that a performer can consult a printed translation (Wilhelm/Baynes) alongside the instrument. The seed stays on the dice, so earlier records are unchanged. | Author | AI, writing the 64-cell table from recall | One cell only. Three cells were wrong until v1.0.1. |
| August 2026 (r92) | Documented test performance (log Casts 1 to 22). | Author | | The log reproduces exactly in r92 (tested 17 Nov 2026). |
| 21 Oct 2026 (r93) | The compositional diagram draws scale as written (box size; "bleed" clipped at the frame). New wording for "fragment": cut the image into a number of pieces, discard some, place the remainder. | Author | AI. The AI also made the code draw the two numbers from the main sequence and draw the pieces, and recorded that this did not affect reproducibility. | The claim was not tested against the log and was wrong for 9 of 64 throws. |
| 15 Nov 2026 (r94) | First public release, v1.0.0. | Author | AI drafted README and archive description | Not tested against the log before release. |
| 17 Nov 2026 | Audit: every logged cast re-entered and compared with the log; hexagram table compared with the standard King Wen sequence. | Author | AI | Tested. Findings in ERRATA. |
| 17 Nov 2026 (r95) | The code does not act on the meaning of any directive: "fragment" is a word like any other, a suggestion the performer interprets. Restore the score sequence used for the published log. | Author | AI | 64 of 64 throws identical to r92 in vocabulary and composition. |
| 17 Nov 2026 (r95) | Keep suggested numbers for "fragment", derived from the throw and independent of the score sequence (N 3 to 7, M 1 to N-1; ranges as set in r93), which the performer may ignore. | Author | AI | Same dice give the same numbers; score sequence unchanged (tested). |
| 17 Nov 2026 (r95) | Correct the three wrong cells of the hexagram table. The log is not edited; the two affected casts are listed in ERRATA. | Author | AI | 64 of 64 cells match a Wilhelm folding-chart key supplied by the author, and Wikipedia's list. |
| 17 Nov 2026 (r95) | A sheet switched off at the time of a cast is part of the cast: it changes what the other sheets draw, is reproducible, and is recorded with the cast. | Author | AI: sheets stored with each cast, "SHEETS:" log line, reload restores with the recorded sheets | Tested: a cast with Language off is logged and restored exactly; the published log is unaffected. |
