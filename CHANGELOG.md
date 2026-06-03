# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/).

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
