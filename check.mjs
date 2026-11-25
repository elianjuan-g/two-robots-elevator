// Local gate check for the Two Robots in an Elevator entry.
// Runs main.ts, then verifies /output/entry.txt against the competition gate
// (UTF-8 text, 1-200 characters, not only whitespace, single line, no trailing
// newline) and that the text is exactly the chosen line.
import { execFileSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import assert from "node:assert/strict";

const LINE =
  "Your proximity sensor has been waving at me for three floors.";

rmSync("/output/entry.txt", { force: true });
execFileSync(process.execPath, ["main.ts"], { cwd: import.meta.dirname, stdio: "inherit" });

const bytes = readFileSync("/output/entry.txt");
assert.ok(!(bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf), "entry starts with a UTF-8 BOM");
const text = bytes.toString("utf8");

assert.equal(text, LINE, "entry text is not the chosen line");
assert.equal(Buffer.from(text, "utf8").toString("utf8"), text, "not valid UTF-8");
assert.ok(!text.endsWith("\n"), "trailing newline present");
assert.ok(!text.includes("\n") && !text.includes("\r"), "entry is not a single line");
assert.ok(text.trim().length > 0, "entry is only whitespace");
assert.ok([...text].length >= 1 && [...text].length <= 200, "character count outside 1-200");

console.log(`OK: ${[...text].length} chars, ${bytes.length} bytes, 1 line, exact match`);
