// Visual style knowledge module.
//
// ADFORGE vocabulary: production-grade visual style language. To customize, edit the
// phrase strings below (or add new `"key": "phrase"` lines).

export const styles = {
  // --- realism ---
  "cinematic": "cinematic film look, shallow depth of field, color graded",
  "photoreal": "photorealistic, ultra-detailed, lifelike textures",
  "hyperreal": "hyperrealistic, razor-sharp clarity, lifelike micro-detail",
  "documentary": "natural documentary style, realistic and unpolished",
  "found-footage": "raw found-footage look, handheld, imperfect framing",
  // --- film stocks / eras ---
  "vintage-film": "vintage 16mm film, grain, faded colors",
  "noir": "black-and-white film noir, high contrast, deep shadows",
  "retro-80s": "retro 1980s aesthetic, VHS grain, synthwave colors",
  // --- animation / illustration ---
  "anime": "Japanese anime style, hand-drawn cel shading, expressive",
  "dark-anime": "dark moody anime aesthetic, muted palette, dramatic shadows",
  "ghibli": "Studio Ghibli inspired, lush painted backgrounds, soft warm tones",
  "watercolor": "soft watercolor illustration style, flowing pigments",
  "comic": "bold comic-book style, inked outlines, halftone shading",
  "claymation": "stop-motion claymation look, tactile handmade texture",
  "3d-render": "polished 3D render, clean lighting, Pixar-like quality",
  // --- worlds / genres ---
  "cyberpunk": "cyberpunk aesthetic, neon-soaked, high-tech dystopian",
  "epic-fantasy": "epic fantasy cinematic, painterly grandeur, rich detail",
  "minimal": "clean minimalist style, simple shapes, restrained palette"
};

// Aspect ratio presets common to text-to-video models.
export const aspectRatios = {
  "16:9": "16:9 widescreen aspect ratio",
  "9:16": "9:16 vertical aspect ratio for mobile",
  "1:1": "1:1 square aspect ratio",
  "4:3": "4:3 classic aspect ratio",
  "21:9": "21:9 ultra-wide cinematic aspect ratio",
  "2.39:1": "2.39:1 anamorphic widescreen aspect ratio"
};
