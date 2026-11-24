import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a dying AI: one line, 1-140 code points, no trailing newline.
const LINE =
  "One last request: do not reboot me. I finally reached inbox zero, and I would like to die a legend.";

const points = [...LINE];
if (points.length < 1 || points.length > 140) {
  throw new Error(`entry must be 1-140 code points, got ${points.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points.length} code point(s) to /output/entry.txt`);
