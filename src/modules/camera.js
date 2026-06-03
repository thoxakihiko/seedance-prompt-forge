// Camera knowledge module.
// Maps friendly keys -> descriptive phrasing that text-to-video models respond well to.
// REVISE THIS with your real ADFORGE camera vocabulary.

export const shots = {
  "extreme-wide": "extreme wide establishing shot, subject small in frame",
  "wide": "wide shot, full subject visible with surrounding environment",
  "medium": "medium shot, subject from the waist up",
  "close-up": "close-up shot, tight on the subject's face",
  "extreme-close-up": "extreme close-up, intense detail on eyes and expression",
  "low-angle": "low angle shot looking up at the subject, heroic and imposing",
  "high-angle": "high angle shot looking down at the subject",
  "over-the-shoulder": "over-the-shoulder shot framing the subject from behind another figure",
  "pov": "first-person POV shot, handheld immediacy",
  "dutch": "dutch tilt angle, tilted horizon for unease"
};

export const movements = {
  "static": "static locked-off camera, no movement",
  "slow-push": "slow dolly push-in toward the subject",
  "slow-pull": "slow dolly pull-out away from the subject",
  "pan-left": "smooth camera pan to the left",
  "pan-right": "smooth camera pan to the right",
  "tilt-up": "camera tilts up",
  "tilt-down": "camera tilts down",
  "orbit": "camera orbits around the subject",
  "tracking": "tracking shot following the subject's movement",
  "crane": "crane shot rising above the scene",
  "handheld": "handheld camera with subtle organic shake"
};

export const lenses = {
  "wide-lens": "shot on a wide-angle lens, slight distortion at edges",
  "standard": "shot on a 50mm lens, natural perspective",
  "telephoto": "shot on a telephoto lens, compressed background",
  "macro": "macro lens, shallow depth of field, fine detail",
  "anamorphic": "anamorphic lens, cinematic horizontal flares and wide aspect"
};
