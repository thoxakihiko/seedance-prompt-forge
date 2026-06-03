# Contributing

Thanks for your interest in improving **seedance-prompt-forge**. Contributions of
all sizes are welcome — especially new preset vocabulary.

## Getting started

```bash
git clone https://github.com/thoxakihiko/seedance-prompt-forge.git
cd seedance-prompt-forge
npm test        # runs the smoke tests
node src/cli.js --subject "a test" --mood tense   # try the CLI locally
```

No build step and no dependencies — it's plain Node.js (18+) ES modules.

## Adding or editing presets

The vocabulary lives in small, readable modules under [`src/modules/`](src/modules/):

- `camera.js` — shots, movements, lenses
- `lighting.js` — lighting, moods
- `style.js` — styles, aspect ratios
- `motion.js` — subject motions, pacing

Each preset is one line: a short `"key"` mapped to a descriptive phrase that
text-to-video models respond well to. To add one, copy the style of the
neighbouring entries:

```js
"slow-push": "slow dolly push-in toward the subject",
```

Keep phrases concrete and visual, and keep keys short and kebab-case.

## Pull requests

1. Fork and create a branch.
2. Make your change and run `npm test` — all checks must pass.
3. If you changed output phrasing, update the affected examples in
   [`examples/EXAMPLES.md`](examples/EXAMPLES.md) and add a `CHANGELOG.md` entry.
4. Open a PR with a clear description of what and why.

Issues and suggestions are welcome too — open one any time.
