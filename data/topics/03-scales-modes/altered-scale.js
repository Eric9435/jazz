export const alteredScale = {
  id: "altered-scale",
  domain: "scales-modes",
  subcategory: "Dominant Scales",
  title: "Altered Scale",

  shortDefinition:
    "The altered scale is used over altered dominant chords and contains maximum dominant tension.",

  longExplanation:
    `The altered scale is one of the most important dominant sounds in modern jazz. It is the seventh mode of melodic minor. For example, G altered comes from Ab melodic minor. It contains G, Ab, Bb, B, Db, Eb, and F. These notes give the dominant chord b9, #9, 3, b5, #5, and b7.

The altered scale is used when a dominant chord wants strong tension before resolving. On G7alt resolving to Cmaj7 or Cm, the altered tensions create a powerful pull into the tonic. The sound is unstable, colorful, and expressive. It is common in bebop, post-bop, modern jazz, and reharmonized standards.

The altered scale should not be learned as random outside notes. It is a dominant-resolution sound. The altered tensions must resolve meaningfully. For example, Ab can resolve to G or A, Bb can resolve to A or B, Db can resolve to C, and Eb can resolve to E or D.`,

  formula:
    "7th mode of melodic minor",

  sound:
    "Tense, modern, unstable, colorful, resolving.",

  function:
    "To create maximum dominant tension before resolution.",

  examples: [
    "G7alt → Cmaj7",
    "B7alt → Em",
    "E7alt → Am"
  ],

  scaleOptions: [
    "G altered = Ab melodic minor",
    "B altered = C melodic minor",
    "E altered = F melodic minor"
  ],

  targetTones: [
    "b9",
    "#9",
    "b5",
    "#5",
    "3rd",
    "b7"
  ],

  guideTones: [
    "3rd and b7"
  ],

  voiceLeading:
    "Altered tensions resolve by half-step into tonic chord tones.",

  commonMovements: [
    "V7alt → Imaj7",
    "V7alt → i minor"
  ],

  reharmPossibilities: [
    "Tritone substitution",
    "Melodic minor superimposition",
    "Altered dominant reharm"
  ],

  improvisationVocabulary: [
    "Altered scale lines",
    "Triad superimposition",
    "Chromatic enclosure into resolution"
  ],

  practiceIdeas: [
    "Play altered scale over every V7 resolving to I.",
    "Practice resolving each altered tension.",
    "Use altered scale in ii-V-I lines."
  ],

  relatedTopics: [
    "tritone-substitution",
    "secondary-dominants",
    "dominant-chords"
  ]
};
