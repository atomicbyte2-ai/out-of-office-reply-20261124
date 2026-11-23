// make.fun bounty: The Funniest AI Out-of-Office Reply
// Writes one out-of-office line (1-160 chars) to /output/entry.txt, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I'm on vacation. Your email was auto-sorted into 'later', 'never', and 'bold of you to send this on a Friday.'";

const length = [...line].length;
if (length < 1 || length > 160 || line.trim() === "") {
  throw new Error(`entry must be 1-160 non-blank characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
