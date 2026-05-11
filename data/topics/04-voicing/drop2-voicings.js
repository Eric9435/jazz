export const drop2Voicings = {
  id: "drop2-voicings",
  domain: "voicing",
  subcategory: "Jazz Voicings",
  title: "Drop-2 Voicings",

  shortDefinition:
    "Drop-2 voicings lower the second-highest note by one octave.",

  longExplanation:
    `Drop-2 voicings are among the most important jazz arranging and comping structures. Starting from a close-position chord, the second-highest note is dropped down an octave. This creates a wider, more open sound while preserving harmonic clarity.

For example, a close-position Cmaj7 chord may contain C E G B. If the second-highest note G is dropped down an octave, the voicing becomes G C E B. This spacing sounds fuller and more playable on piano and guitar.

Drop-2 voicings are essential in big band arranging, guitar comping, jazz piano, and ensemble writing. They balance clarity with openness and allow smooth voice leading between chords.`,

  formula:
    "Close position → lower 2nd-highest note by octave",

  sound:
    "Open, balanced, classic jazz texture.",

  function:
    "To create wider, smoother voicing structures.",

  examples: [
    "Cmaj7: G C E B",
    "Dm7: C D F A",
    "G7: F G B D"
  ],

  scaleOptions: [
    "Compatible with all jazz harmony systems"
  ],

  targetTones: [
    "3rd",
    "7th",
    "extensions"
  ],

  guideTones: [
    "3rd and 7th inside voicing"
  ],

  voiceLeading:
    "Drop-2 systems allow smooth inner-voice movement.",

  commonMovements: [
    "ii-V-I drop-2 movement",
    "parallel drop-2 movement"
  ],

  reharmPossibilities: [
    "Drop-2 upper structures",
    "chromatic drop-2 planing"
  ],

  improvisationVocabulary: [
    "Chordal comping",
    "block harmony"
  ],

  practiceIdeas: [
    "Practice drop-2 major7 chords in all inversions.",
    "Connect ii-V-I using drop-2 only.",
    "Apply drop-2 to standards."
  ],

  relatedTopics: [
    "shell-voicings",
    "rootless-voicings",
    "block-chords"
  ]
};
