// The Dog Reviews the Mailman — one funny one-line review a dog gives the mailman.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT when set for local runs).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const entry =
  "One star: he stuffs paper through MY door every day and never apologizes. But the biscuit bribe buys him one more week — treats, not mail.";

const out = resolve(process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry + "\n", "utf8");
console.log(`Wrote ${entry.length} chars to ${out}`);
