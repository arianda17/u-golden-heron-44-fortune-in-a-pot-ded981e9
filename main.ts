// Fortune in a Pot — entry for make.fun competition
// u-golden-heron-44-fortune-in-a-pot-ded981e9
//
// Writes the one-line fortune to /output/entry.txt and prints it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ENTRY =
  "You will grow toward this glass until you touch it, and your person will keep saying sorry when you do.";

const OUT = resolve(process.env.OUTPUT_DIR ?? "/output", "entry.txt");

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf-8");

console.log(ENTRY);
console.error(`wrote ${ENTRY.length} chars to ${OUT}`);