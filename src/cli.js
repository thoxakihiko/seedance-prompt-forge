#!/usr/bin/env node
// cli.js — command-line interface for seedance-prompt-forge.

import { buildPrompt, listOptions } from "./builder.js";
import { models, defaultModel } from "./models.js";

const args = process.argv.slice(2);

function parseFlags(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--")) {
        out[key] = true;
      } else {
        out[key] = next;
        i++;
      }
    }
  }
  return out;
}

function printHelp() {
  console.log(`
seedance-prompt-forge (forge)
Build clean, structured video prompts from simple inputs.

USAGE:
  forge --subject "samurai" --mood neon --shot low-angle --movement slow-push
  forge --subject "a skater" --duration 25          (Seedance 2.5: up to 30s)
  forge --subject "a skater" --duration 12 --model seedance-2.0
  forge options                 list all available preset keys
  forge models                  list supported Seedance models and limits
  forge --help                  show this help

FLAGS:
  --subject   (required) who/what is in the shot
  --action    what the subject does (preset key or free text)
  --setting   location / environment
  --shot      camera shot (e.g. low-angle, close-up, wide)
  --movement  camera movement (e.g. slow-push, orbit, tracking)
  --lens      lens (e.g. anamorphic, telephoto, macro)
  --lighting  lighting (e.g. neon, golden-hour, low-key)
  --mood      mood (e.g. tense, epic, eerie)
  --style     visual style (e.g. cinematic, dark-anime, cyberpunk)
  --pacing    pacing (e.g. slow, fast, slow-motion)
  --aspect    aspect ratio (16:9, 9:16, 1:1, 21:9, 4:3)
  --extra     any extra free-text detail
  --model     seedance-2.5 (default) or seedance-2.0 — also accepts 2.5 / 2.0
  --duration  clip length in seconds (max 30 on 2.5, 15 on 2.0)

Any flag accepts a preset key OR free text. Unknown values pass through as-is.
`);
}

function printOptions() {
  const opts = listOptions();
  for (const [cat, keys] of Object.entries(opts)) {
    console.log(`\n${cat}:`);
    console.log("  " + keys.join(", "));
  }
  console.log("");
}

function printModels() {
  for (const [id, m] of Object.entries(models)) {
    const tag = id === defaultModel ? " (default)" : "";
    const refs = m.maxReferences
      ? `refs ≤ ${m.maxReferences.images} images / ${m.maxReferences.videos} videos / ${m.maxReferences.audio} audio`
      : "refs: limits not encoded";
    console.log(`  ${id.padEnd(14)} max ${m.maxDurationSeconds}s per pass · ${refs}${tag}`);
  }
}

if (args[0] === "models") {
  console.log("");
  printModels();
  console.log("");
  process.exit(0);
}

if (args[0] === "options") {
  printOptions();
  process.exit(0);
}

const flags = parseFlags(args);

if (flags.help || args.length === 0) {
  printHelp();
  process.exit(0);
}

try {
  const prompt = buildPrompt(flags);
  console.log("\n" + prompt + "\n");
} catch (err) {
  console.error("Error: " + err.message);
  console.error("Run `forge --help` for usage.");
  process.exit(1);
}
