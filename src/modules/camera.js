// Camera knowledge module.
// Maps friendly keys -> descriptive phrasing that text-to-video models respond well to.
//
// ADFORGE vocabulary: production-grade camera language. To customize, just edit the
// phrase strings below (or add new `"key": "phrase"` lines) — no logic to touch.

export const shots = {
  // --- framing by distance ---
  "extreme-wide": "extreme wide establishing shot, subject small in frame",
  "wide": "wide shot, full subject visible with surrounding environment",
  "full": "full shot, the subject's entire body visible head to toe",
  "cowboy": "cowboy shot, framed from mid-thigh up",
  "medium": "medium shot, subject from the waist up",
  "close-up": "close-up shot, tight on the subject's face",
  "extreme-close-up": "extreme close-up, intense detail on eyes and expression",
  "insert": "tight insert shot isolating a small significant detail",
  // --- framing by angle / perspective ---
  "low-angle": "low angle shot looking up at the subject, heroic and imposing",
  "high-angle": "high angle shot looking down at the subject",
  "birds-eye": "top-down bird's-eye view directly above the subject",
  "worms-eye": "extreme low worm's-eye view from ground level looking up",
  "dutch": "dutch tilt angle, tilted horizon for unease",
  "over-the-shoulder": "over-the-shoulder shot framing the subject from behind another figure",
  "two-shot": "two-shot framing two subjects together in balanced composition",
  "profile": "profile shot capturing the subject from the side",
  "pov": "first-person POV shot, handheld immediacy",
  "aerial": "sweeping aerial drone shot high above the landscape"
};

export const movements = {
  "static": "static locked-off camera, no movement",
  "slow-push": "slow dolly push-in toward the subject",
  "slow-pull": "slow dolly pull-out away from the subject",
  "zoom-in": "smooth optical zoom in toward the subject",
  "zoom-out": "smooth optical zoom out revealing the wider scene",
  "pan-left": "smooth camera pan to the left",
  "pan-right": "smooth camera pan to the right",
  "whip-pan": "fast whip pan with motion blur between subjects",
  "tilt-up": "camera tilts up",
  "tilt-down": "camera tilts down",
  "orbit": "camera orbits a full circle around the subject",
  "arc": "camera arcs in a smooth semicircle around the subject",
  "tracking": "tracking shot following the subject's movement",
  "steadicam": "smooth gliding steadicam move through the scene",
  "crane": "crane shot rising above the scene",
  "boom-down": "camera booms down from above toward the subject",
  "dolly-zoom": "vertigo dolly zoom, background warping while the subject stays fixed",
  "handheld": "handheld camera with subtle organic shake"
};

export const lenses = {
  "wide-lens": "shot on a wide-angle lens, slight distortion at edges",
  "wide-35": "shot on a 35mm lens, mild wide field of view",
  "standard": "shot on a 50mm lens, natural perspective",
  "portrait-85": "shot on an 85mm portrait lens, flattering compression, creamy bokeh",
  "telephoto": "shot on a telephoto lens, compressed background",
  "macro": "macro lens, shallow depth of field, fine detail",
  "fisheye": "fisheye lens, extreme curved distortion",
  "tilt-shift": "tilt-shift lens, selective focus plane, miniature effect",
  "anamorphic": "anamorphic lens, cinematic horizontal flares and wide aspect"
};
