// builder.js — the engine.
// Takes simple structured input and assembles a clean, ordered Seedance-style prompt.

import { shots, movements, lenses } from "./modules/camera.js";
import { lighting, moods } from "./modules/lighting.js";
import { styles, aspectRatios } from "./modules/style.js";
import { motions, pacing } from "./modules/motion.js";

const REGISTRY = {
  shot: shots,
  movement: movements,
  lens: lenses,
  lighting,
  mood: moods,
  style: styles,
  aspect: aspectRatios,
  motion: motions,
  pacing
};

// Resolve a friendly key to its descriptive phrase.
// If the value isn't a known key, it's passed through as free text.
function resolve(category, value) {
  if (!value) return null;
  const table = REGISTRY[category];
  if (table && table[value]) return table[value];
  return value; // free-text fallback
}

/**
 * buildPrompt — assemble a structured video prompt.
 * @param {Object} input
 * @param {string} input.subject   - REQUIRED. Who/what is in the shot.
 * @param {string} [input.action]  - what the subject is doing (free text or motion key)
 * @param {string} [input.setting] - location / environment (free text)
 * @param {string} [input.shot]    - camera shot key or free text
 * @param {string} [input.movement]- camera movement key or free text
 * @param {string} [input.lens]    - lens key or free text
 * @param {string} [input.lighting]- lighting key or free text
 * @param {string} [input.mood]    - mood key or free text
 * @param {string} [input.style]   - visual style key or free text
 * @param {string} [input.pacing]  - pacing key or free text
 * @param {string} [input.aspect]  - aspect ratio key
 * @param {string} [input.extra]   - any extra free-text detail appended at the end
 * @returns {string} assembled prompt
 */
export function buildPrompt(input = {}) {
  if (!input.subject || !String(input.subject).trim()) {
    throw new Error("`subject` is required. What is in the shot?");
  }

  // Ordered so the most important info leads — models weight early tokens more.
  const segments = [];

  // 1. Core: subject + action + setting
  let core = String(input.subject).trim();
  const action = resolve("motion", input.action);
  if (action) core += `, ${lowerFirst(action)}`;
  if (input.setting) core += `, in ${String(input.setting).trim()}`;
  segments.push(capitalize(core));

  // 2. Visual style
  push(segments, resolve("style", input.style));

  // 3. Camera language
  push(segments, resolve("shot", input.shot));
  push(segments, resolve("movement", input.movement));
  push(segments, resolve("lens", input.lens));

  // 4. Lighting + mood
  push(segments, resolve("lighting", input.lighting));
  push(segments, resolve("mood", input.mood));

  // 5. Pacing
  push(segments, resolve("pacing", input.pacing));

  // 6. Extra free text
  if (input.extra) push(segments, String(input.extra).trim());

  // 7. Aspect ratio (technical, goes last)
  push(segments, resolve("aspect", input.aspect));

  return segments.join(". ").replace(/\.\.+/g, ".") + ".";
}

function push(arr, val) {
  if (val) arr.push(capitalize(val));
}
function capitalize(s) {
  s = String(s).trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function lowerFirst(s) {
  s = String(s).trim();
  return s.charAt(0).toLowerCase() + s.slice(1);
}

// Expose available options for CLI help / discovery.
export function listOptions() {
  const out = {};
  for (const [cat, table] of Object.entries(REGISTRY)) {
    out[cat] = Object.keys(table);
  }
  return out;
}
