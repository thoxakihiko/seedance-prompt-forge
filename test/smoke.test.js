// Minimal smoke tests — no framework, just assertions.
import { buildPrompt, listOptions, getModel, validateDuration, validateReferences, defaultModel } from "../src/index.js";
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

check("defaults to Seedance 2.5", () => {
  assert.equal(defaultModel, "seedance-2.5");
  assert.equal(getModel().maxDurationSeconds, 30);
});

check("model aliases resolve", () => {
  assert.equal(getModel("2.0").id, "seedance-2.0");
  assert.equal(getModel("Seedance 2.5").id, "seedance-2.5");
  assert.throws(() => getModel("seedance-9"), /Unknown model/);
});

check("2.5 allows up to 30s single pass", () => {
  assert.equal(validateDuration(30), 30);
  assert.throws(() => validateDuration(31), /at most 30s/);
});

check("2.0 keeps the 15s single-pass limit", () => {
  assert.equal(validateDuration(15, "seedance-2.0"), 15);
  assert.throws(() => validateDuration(16, "seedance-2.0"), /at most 15s/);
});

check("rejects non-positive durations", () => {
  assert.throws(() => validateDuration(0), /positive/);
  assert.throws(() => validateDuration("abc"), /positive/);
});

check("2.5 reference limits: 30 images, 10 videos, 10 audio", () => {
  assert.ok(validateReferences({ images: 30, videos: 10, audio: 10 }));
  assert.throws(() => validateReferences({ images: 31 }), /30 images/);
  assert.throws(() => validateReferences({ videos: 11 }), /10 videos/);
  assert.throws(() => validateReferences({ audio: 11 }), /10 audio/);
});

check("buildPrompt adds duration only when given", () => {
  assert.ok(!buildPrompt({ subject: "x" }).includes("second"));
  const p = buildPrompt({ subject: "x", duration: 25, aspect: "16:9" });
  assert.ok(p.includes("25-second duration"));
  assert.ok(p.indexOf("25-second") < p.indexOf("16:9"));
});

check("buildPrompt enforces the selected model's limit", () => {
  assert.throws(() => buildPrompt({ subject: "x", duration: 20, model: "seedance-2.0" }), /15s/);
  assert.ok(buildPrompt({ subject: "x", duration: 20 }).includes("20-second"));
});

check("output without model/duration is unchanged", () => {
  assert.equal(
    buildPrompt({ subject: "a cat", mood: "tense" }),
    "A cat. Tense, suspenseful atmosphere."
  );
});

console.log(`\n${passed} checks passed.`);
