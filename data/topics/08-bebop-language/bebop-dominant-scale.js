export const bebopDominantScale = {
  id: "bebop-dominant-scale",
  domain: "bebop-language",
  subcategory: "Bebop Scales",
  title: "Bebop Dominant Scale",

  shortDefinition:
    "The bebop dominant scale is a Mixolydian scale with an added major 7th passing tone.",

  longExplanation:
    `The bebop dominant scale is one of the most important scale systems in bebop language. It is built from the Mixolydian scale with one added chromatic passing tone between the b7 and the root. For example, G bebop dominant is G A B C D E F F# G. The added F# allows chord tones to fall naturally on strong beats when playing continuous eighth-note lines.

The purpose of this scale is not simply to add one extra note. Its real function is rhythmic alignment. Bebop language depends on chord tones landing on strong beats and passing tones falling on weak beats. The bebop dominant scale helps create that alignment automatically when used correctly.

This scale is especially powerful over dominant seventh chords, ii-V-I progressions, turnarounds, rhythm changes, and blues. It gives lines a classic bebop sound because it connects diatonic dominant color with chromatic forward motion.`,

  formula:
    "1 2 3 4 5 6 b7 7",

  sound:
    "Classic bebop, swinging, chromatic, dominant, forward-moving.",

  function:
    "To create dominant lines where chord tones land on strong beats.",

  examples: [
    "G A B C D E F F# G",
    "G7 bebop line resolving to Cmaj7",
    "Dm7 → G bebop dominant → Cmaj7"
  ],

  scaleOptions: [
    "Mixolydian + major 7 passing tone"
  ],

  targetTones: [
    "3rd",
    "5th",
    "b7",
    "root"
  ],

  guideTones: [
    "3rd and b7"
  ],

  voiceLeading:
    "The added chromatic tone helps strong chord tones align rhythmically.",

  commonMovements: [
    "b7 → 7 → 1",
    "3 → 2 → 1",
    "chromatic approach into 3rd"
  ],

  reharmPossibilities: [
    "Works over secondary dominants",
    "Works over tritone-related dominant language"
  ],

  improvisationVocabulary: [
    "Bebop eighth-note lines",
    "Dominant enclosures",
    "Chromatic passing tone language"
  ],

  practiceIdeas: [
    "Play bebop dominant scales in all 12 keys.",
    "Start the scale on different chord tones.",
    "Use it over ii-V-I progressions."
  ],

  relatedTopics: [
    "bebop-major-scale",
    "enclosures",
    "target-tones"
  ]
};
