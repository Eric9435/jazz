export const tritoneSubstitution = {
  id: "tritone-substitution",
  domain: "harmony",
  subcategory: "Reharmonization",
  title: "Tritone Substitution",

  shortDefinition:
    "Tritone substitution replaces a dominant chord with another dominant chord a tritone away.",

  longExplanation:
    `Tritone substitution is one of the central sounds of jazz harmony. A dominant seventh chord contains a tritone between its 3rd and 7th. For example, G7 contains B and F. Db7 also contains the same tritone enharmonically: F and Cb, which sounds like B. Because the guide tones are shared, Db7 can replace G7 while preserving the dominant function.

The result is both logical and colorful. Instead of Dm7 → G7 → Cmaj7, a player can use Dm7 → Db7 → Cmaj7. The bass now moves chromatically downward, which sounds smooth, sophisticated, and very jazz-like. The function is still dominant resolution, but the color is more chromatic.

Tritone substitution is important because it teaches that function matters more than chord name. G7 and Db7 look different, but they can do the same job. This opens the door to reharmonization, altered sounds, chromatic basslines, and modern dominant language.`,

  formula:
    "V7 ↔ SubV7",

  sound:
    "Sophisticated, chromatic, urban, smooth, modern dominant tension.",

  function:
    "To replace a dominant chord while preserving its resolution pull.",

  examples: [
    "Dm7 → G7 → Cmaj7",
    "Dm7 → Db7 → Cmaj7",
    "Am7 → D7 → Gmaj7",
    "Am7 → Ab7 → Gmaj7"
  ],

  scaleOptions: [
    "Lydian dominant over the substitute",
    "Altered scale",
    "Whole tone scale"
  ],

  targetTones: [
    "3rd and 7th of the substitute dominant",
    "Resolution tones of the tonic"
  ],

  guideTones: [
    "F and Cb/B in Db7 resolving to E and C in Cmaj7"
  ],

  voiceLeading:
    "The substitute dominant preserves guide-tone gravity while creating chromatic bass motion.",

  commonMovements: [
    "ii → bII7 → I",
    "V7 → I replaced by bII7 → I"
  ],

  reharmPossibilities: [
    "Use on dominant chords resolving by fifth.",
    "Combine with altered tensions.",
    "Use for chromatic passing harmony."
  ],

  improvisationVocabulary: [
    "Lydian dominant lines",
    "Altered dominant language",
    "Chromatic enclosures"
  ],

  practiceIdeas: [
    "Play ii-V-I and replace every V7 with bII7.",
    "Practice guide-tone resolution only.",
    "Improvise using Lydian dominant on the substitute chord."
  ],

  relatedTopics: [
    "dominant-function",
    "altered-dominant",
    "chromatic-harmony"
  ]
};
