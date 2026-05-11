export const secondaryDominants = {
  id: "secondary-dominants",
  domain: "harmony",
  subcategory: "Functional Harmony",
  title: "Secondary Dominants",

  shortDefinition:
    "A secondary dominant is a dominant chord that temporarily points to a chord other than the main tonic.",

  longExplanation:
    `Secondary dominants are one of the most powerful ways to create harmonic direction. In a key, the main dominant points to the tonic. But jazz often creates temporary dominant motion toward other chords. For example, in C major, E7 can point to Am7 because E7 is the V of Am. This is written as V/vi.

Secondary dominants make harmony feel more alive because they create temporary tension and resolution inside the progression. Instead of moving diatonically from Cmaj7 to Am7, the progression can use Cmaj7 → E7 → Am7. The E7 adds G#, a chromatic tone outside C major, creating stronger pull into A minor.

In jazz, secondary dominants are everywhere. They are used in turnarounds, rhythm changes, blues, standards, and reharmonization. They also create excellent improvisation opportunities because each secondary dominant can be treated as its own temporary dominant world.`,

  formula:
    "V/x → x",

  sound:
    "Directional, colorful, chromatic, forward-moving.",

  function:
    "To tonicize or temporarily emphasize a target chord.",

  examples: [
    "E7 → Am7",
    "A7 → Dm7",
    "D7 → G7",
    "B7 → Em"
  ],

  scaleOptions: [
    "Mixolydian",
    "Altered scale",
    "Half-whole diminished",
    "Harmonic minor dominant"
  ],

  targetTones: [
    "3rd of the dominant",
    "7th of the dominant",
    "resolution note in the target chord"
  ],

  guideTones: [
    "G# and D in E7 resolving to A and C in Am7"
  ],

  voiceLeading:
    "Secondary dominants often introduce a chromatic leading tone that resolves into the target chord.",

  commonMovements: [
    "V/ii → ii",
    "V/V → V",
    "V/vi → vi"
  ],

  reharmPossibilities: [
    "Use before almost any diatonic chord.",
    "Replace with tritone substitute.",
    "Chain several secondary dominants."
  ],

  improvisationVocabulary: [
    "Dominant bebop scale",
    "Altered tension lines",
    "Chromatic approach into target chord"
  ],

  practiceIdeas: [
    "In C major, find V of every diatonic chord.",
    "Insert secondary dominants into simple progressions.",
    "Practice resolving 3rd and 7th into target chord tones."
  ],

  relatedTopics: [
    "functional-harmony",
    "tritone-substitution",
    "turnarounds"
  ]
};
