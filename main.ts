// Two Robots in an Elevator entry: writes the chosen one line of awkward
// robot small talk to /output/entry.txt (single line, 68 characters, no
// trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have calculated 47 ways to say hello. I used the worst one. Hello.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
