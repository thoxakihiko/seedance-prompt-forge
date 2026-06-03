# Examples

Real outputs from `seedance-prompt-forge`. Run any of these yourself.

---

### 1. Cinematic action — vertical for mobile

```bash
forge --subject "lone samurai" \
      --setting "rain-soaked neon alley" \
      --shot low-angle --movement slow-push \
      --lighting neon --mood tense \
      --style dark-anime --pacing slow-motion --aspect 21:9
```

**Output:**
> Lone samurai, in rain-soaked neon alley. Dark moody anime aesthetic, muted palette, dramatic shadows. Low angle shot looking up at the subject, heroic and imposing. Slow dolly push-in toward the subject. Saturated neon lighting, magenta and cyan glow. Tense, suspenseful atmosphere. Dramatic slow motion. 21:9 ultra-wide cinematic aspect ratio.

---

### 2. Calm nature establishing shot

```bash
forge --subject "a wooden cabin" \
      --setting "misty pine forest at dawn" \
      --shot extreme-wide --movement crane \
      --lighting blue-hour --mood serene \
      --style cinematic --aspect 16:9
```

**Output:**
> A wooden cabin, in misty pine forest at dawn. Cinematic film look, shallow depth of field, color graded. Extreme wide establishing shot, subject small in frame. Crane shot rising above the scene. Cool blue hour twilight, soft ambient light. Calm, serene, peaceful atmosphere. 16:9 widescreen aspect ratio.

---

### 3. Product / macro detail

```bash
forge --subject "a luxury wristwatch" \
      --action still \
      --shot extreme-close-up --lens macro \
      --lighting studio --style photoreal --aspect 1:1
```

**Output:**
> A luxury wristwatch, the subject remains still, only subtle ambient motion. Photorealistic, ultra-detailed, lifelike textures. Extreme close-up, intense detail on eyes and expression. Macro lens, shallow depth of field, fine detail. Controlled three-point studio lighting. 1:1 square aspect ratio.

---

### 4. Free text anywhere

Any flag accepts a preset key *or* free text. Mix them:

```bash
forge --subject "an astronaut" \
      --setting "the surface of Mars" \
      --mood "lonely and awe-struck, vast emptiness" \
      --style cinematic
```

Unknown values pass straight through — you are never locked into the presets.

---

### Using it as a library

```js
import { buildPrompt } from "seedance-prompt-forge";

const prompt = buildPrompt({
  subject: "a street vendor",
  setting: "a busy night market",
  shot: "medium",
  lighting: "neon",
  style: "documentary",
});

console.log(prompt);
```
