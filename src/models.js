// models.js — Seedance model specs.
//
// Only officially published numbers live here. Anything not yet confirmed is
// `null` with a TODO, so validation skips it instead of enforcing a guess.
//
// Seedance 2.5 source:
// https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5

export const models = {
  "seedance-2.0": {
    label: "Seedance 2.0",
    maxDurationSeconds: 15,
    // TODO: per-prompt reference limits for 2.0 are not part of this spec set;
    // left unset so 2.0 reference counts are not validated.
    maxReferences: null,
    multiRoundExtension: null, // not tracked for 2.0
    // TODO: resolution intentionally not encoded here.
    resolutions: null
  },
  "seedance-2.5": {
    label: "Seedance 2.5",
    maxDurationSeconds: 30,
    maxReferences: { images: 30, videos: 10, audio: 10 },
    // Multi-round extension keeps characters/environment consistent across rounds.
    multiRoundExtension: true,
    // New reference types: clay render (pose, motion path, camera angle), motion, creative.
    referenceTypes: ["clay-render", "motion", "creative"],
    // TODO: new resolutions are not officially confirmed yet — do not add numbers.
    resolutions: null,
    // TODO: public API not released yet (coming soon via BytePlus ModelArk).
    // Do not add API parameter names until the API docs are published.
    apiAvailable: false
  }
};

export const defaultModel = "seedance-2.5";

// Accept "2.5", "seedance-2.5", "Seedance 2.5", etc.
export function getModel(id = defaultModel) {
  const key = String(id).trim().toLowerCase().replace(/\s+/g, "-");
  const spec = models[key] || models[`seedance-${key}`];
  if (!spec) {
    throw new Error(
      `Unknown model "${id}". Available: ${Object.keys(models).join(", ")}.`
    );
  }
  return { id: models[key] ? key : `seedance-${key}`, ...spec };
}

// Throws if `seconds` is not a positive number within the model's single-pass limit.
export function validateDuration(seconds, id = defaultModel) {
  const model = getModel(id);
  const n = Number(seconds);
  if (!Number.isFinite(n) || n <= 0) {
    throw new Error(`\`duration\` must be a positive number of seconds (got "${seconds}").`);
  }
  if (n > model.maxDurationSeconds) {
    throw new Error(
      `${model.label} generates at most ${model.maxDurationSeconds}s in a single pass (got ${n}s).`
    );
  }
  return n;
}

// Throws if reference counts exceed the model's per-prompt limits.
// `counts` is { images, videos, audio }; missing keys count as 0.
export function validateReferences(counts = {}, id = defaultModel) {
  const model = getModel(id);
  if (!model.maxReferences) return true; // limits not encoded for this model
  for (const [kind, max] of Object.entries(model.maxReferences)) {
    const n = Number(counts[kind] || 0);
    if (n > max) {
      throw new Error(`${model.label} accepts at most ${max} ${kind} references per prompt (got ${n}).`);
    }
  }
  return true;
}

export function listModels() {
  return Object.keys(models);
}
