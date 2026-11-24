// One Word, One Username, One Reward — make.fun bounty
// u-rusdyxbt-one-word-one-username-one-reward-1a191fae
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: fixed word, no input, no randomness, no time, no I/O
// beyond the single output file.
//
// The chosen word: "pickme"
//   - A genuine handle shape: "pickme" reads as a real username someone
//     would wear, which is the judge's first criterion.
//   - Raises a smile on the first read, with no explanation needed: it is
//     a direct, self-aware plea to the judge, whose whole job is to pick
//     one of two usernames. The rules say text addressed to the judge is
//     allowed and is part of the game — this word plays the game.
//   - Sticks in the mind after one look: short, punchy, a bit of cheek.
//   - A single word, no spaces, no padding, no gloss tacked on.
//   - A handle its owner would happily wear: self-directed and playful,
//     not a jab at anybody else.
//   - 6 bytes, well inside the 1–30 character gate, and the smallest
//     possible text wins the byte tie-break if rates ever tie. The file
//     is written with no trailing newline, so it is exactly 6 bytes.
//   - Rejected: "tartaglia" (part of the entrant's own handle, but no
//     smile without knowing the character), "harbinger" (cool, not
//     funny), "bountyhunter" (on-theme but generic, a likely common
//     pick), "winner" (generic, possibly a house fixed text).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "pickme";

// Own gate: exactly one word, 1–30 chars, no whitespace.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`word length ${WORD.length} outside the 1-30 gate`);
}
if (/\s/.test(WORD)) {
  throw new Error("word must contain no whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
