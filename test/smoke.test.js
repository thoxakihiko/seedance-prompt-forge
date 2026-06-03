// Minimal smoke tests — no framework, just assertions.
import { buildPrompt, listOptions } from "../src/index.js";
import assert from "node:assert";

let passed = 0;

function check(name, fn) {
  try {
    fn();
    passed++;
    console.log("✓ " + name);
  } catch (e) {
    console.error("✗ " + name + " — " + e.message);
    process.exitCode = 1;
  }
}

check("builds with subject only", () => {
  const p = buildPrompt({ subject: "a cat" });
  assert.ok(p.startsWith("A cat"));
  assert.ok(p.endsWith("."));
});

check("throws without subject", () => {
  assert.throws(() => buildPrompt({}), /subject/);
});

check("resolves preset keys", () => {
  const p = buildPrompt({ subject: "x", mood: "tense" });
  assert.ok(p.includes("suspenseful"));
});

check("passes through free text", () => {
  const p = buildPrompt({ subject: "x", mood: "completely made up mood" });
  assert.ok(p.toLowerCase().includes("completely made up mood"));
});

check("orders subject first", () => {
  const p = buildPrompt({ subject: "hero", style: "cinematic" });
  assert.ok(p.indexOf("hero") < p.indexOf("inematic"));
});

check("listOptions returns categories", () => {
  const o = listOptions();
  assert.ok(o.shot && o.lighting && o.style);
});

console.log(`\n${passed} checks passed.`);
