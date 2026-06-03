# seedance-prompt-forge

[![npm version](https://img.shields.io/npm/v/seedance-prompt-forge.svg)](https://www.npmjs.com/package/seedance-prompt-forge)
[![npm downloads](https://img.shields.io/npm/dm/seedance-prompt-forge.svg)](https://www.npmjs.com/package/seedance-prompt-forge)
[![license](https://img.shields.io/npm/l/seedance-prompt-forge.svg)](LICENSE)
[![node](https://img.shields.io/node/v/seedance-prompt-forge.svg)](https://nodejs.org)

> Build clean, structured, consistent video prompts for **Seedance** and other text-to-video models (Kling, Runway, Veo) from simple inputs — instead of hand-formatting every prompt by hand.

`forge` turns a few simple flags into a properly ordered, model-friendly prompt. You stop re-typing the same phrasing, stop forgetting the camera/lighting/style structure, and stop getting inconsistent results because every prompt was written slightly differently.

```bash
forge --subject "lone samurai" --setting "rain-soaked neon alley" \
      --shot low-angle --movement slow-push --lighting neon \
      --mood tense --style dark-anime --pacing slow-motion --aspect 21:9
```

→
> Lone samurai, in rain-soaked neon alley. Dark moody anime aesthetic, muted palette, dramatic shadows. Low angle shot looking up at the subject, heroic and imposing. Slow dolly push-in toward the subject. Saturated neon lighting, magenta and cyan glow. Tense, suspenseful atmosphere. Dramatic slow motion. 21:9 ultra-wide cinematic aspect ratio.

---

## Why this exists

Text-to-video models reward prompts that are **structured and ordered** — subject first, then style, camera, lighting, mood, pacing, technical specs. Writing that by hand every time is tedious and error-prone, and small wording differences produce inconsistent results across a project.

`forge` encodes that structure once. You provide the *intent* (samurai, tense, low angle); it handles the *phrasing and ordering* that models respond to. Same inputs always give the same clean output — which matters when you are generating dozens of shots for one project and need them to feel consistent.

## Install

```bash
npm install -g seedance-prompt-forge
```

Or use it as a library in your own project:

```bash
npm install seedance-prompt-forge
```

Requires Node.js 18+.

## Usage

### Command line

```bash
forge --subject "a wooden cabin" --setting "misty pine forest at dawn" \
      --shot extreme-wide --movement crane --lighting blue-hour \
      --mood serene --style cinematic --aspect 16:9
```

See every available preset key:

```bash
forge options
```

Full help:

```bash
forge --help
```

### As a library

```js
import { buildPrompt } from "seedance-prompt-forge";

const prompt = buildPrompt({
  subject: "a street vendor",
  setting: "a busy night market",
  shot: "medium",
  lighting: "neon",
  style: "documentary",
});
```

## Flags

| Flag | What it controls | Example values |
|------|------------------|----------------|
| `--subject` *(required)* | Who / what is in the shot | `"lone samurai"` |
| `--action` | What the subject is doing | `slow-walk`, `turn`, `fight` |
| `--setting` | Location / environment | `"neon alley"` |
| `--shot` | Camera shot / framing | `wide`, `close-up`, `low-angle` |
| `--movement` | Camera movement | `slow-push`, `orbit`, `tracking` |
| `--lens` | Lens character | `anamorphic`, `macro`, `telephoto` |
| `--lighting` | Lighting setup | `neon`, `golden-hour`, `low-key` |
| `--mood` | Emotional atmosphere | `tense`, `epic`, `eerie` |
| `--style` | Visual style | `cinematic`, `dark-anime`, `cyberpunk` |
| `--pacing` | Shot pacing | `slow`, `fast`, `slow-motion` |
| `--aspect` | Aspect ratio | `16:9`, `9:16`, `21:9` |
| `--extra` | Any extra free-text detail | `"volumetric fog"` |

**Every flag accepts a preset key OR free text.** Unknown values pass straight through, so you are never boxed in by the presets.

## How it works

The prompt is assembled in the order text-to-video models weight most heavily:

1. **Subject + action + setting** (leads, because early tokens carry the most weight)
2. **Visual style**
3. **Camera language** — shot, movement, lens
4. **Lighting + mood**
5. **Pacing**
6. **Extra detail**
7. **Aspect ratio** (technical, goes last)

The vocabulary lives in small, readable modules under [`src/modules/`](src/modules/) — camera, lighting, style, motion. Editing or extending the presets is just editing a plain object.

## More examples

See [`examples/EXAMPLES.md`](examples/EXAMPLES.md).

## Contributing

The preset vocabularies are intentionally simple to extend. Open a PR to add shot types, lighting setups, styles, or motion presets — each lives in its own module file. Issues and suggestions welcome.

## License

MIT — see [LICENSE](LICENSE).
