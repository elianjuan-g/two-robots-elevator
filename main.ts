// Two Robots in an Elevator entry: writes the chosen one line of awkward
// robot small talk to /output/entry.txt (single line, 61 characters, no
// trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your proximity sensor has been waving at me for three floors.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
