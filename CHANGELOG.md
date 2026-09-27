# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/).

## [0.2.0] - 2026-09-27

### Added
- Seedance 2.5 support, now the default model. Seedance 2.0 remains available
  via `--model seedance-2.0` (aliases: `2.0`, `2.5`).
- `--duration` flag / `duration` option, validated against the model's
  single-pass limit (30s on 2.5, 15s on 2.0) and appended to the technical tail
  of the prompt.
- `forge models` command.
- `src/models.js` with `getModel`, `validateDuration`, `validateReferences`
  (2.5: max 30 images, 10 videos, 10 audio per prompt) and `listModels`.
- Tests for the new limits.

### Notes
- Prompts built without `duration` are unchanged from 0.1.x.
- Seedance 2.5 API parameters and resolutions are intentionally not encoded
  (API not public yet; resolutions not officially confirmed) — see TODOs in
  `src/models.js`.

## [0.1.1] - 2026-06-03

### Added
- Package metadata: `repository`, `homepage`, `bugs`, and `author` fields so the
  npm page links back to the source.
- `CHANGELOG.md` and `CONTRIBUTING.md`.
- `veo` and `sora` keywords.

## [0.1.0] - 2026-06-03

### Added
- Initial release: `forge` CLI and `buildPrompt` / `listOptions` library API.
- Structured prompt assembly ordered the way text-to-video models weight tokens
  (subject → style → camera → lighting/mood → pacing → extra → aspect ratio).
- Preset vocabulary across four modules — camera, lighting, style, motion —
  with ~129 keys spanning shots, movements, lenses, lighting, mood, style,
  subject motion, pacing, and aspect ratios.
- Every flag accepts a preset key **or** free text (unknown values pass through).
- Smoke test suite and usage examples.
