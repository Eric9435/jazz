export const chordScaleMap = [
  {
    chord: "maj7",
    quality: "Major 7",
    scales: ["Ionian", "Lydian"],
    targetTones: ["3rd", "7th", "9th", "#11"],
    example: "Cmaj7 → C Ionian / C Lydian"
  },
  {
    chord: "m7",
    quality: "Minor 7",
    scales: ["Dorian", "Aeolian"],
    targetTones: ["b3", "b7", "9", "11"],
    example: "Dm7 → D Dorian"
  },
  {
    chord: "7",
    quality: "Dominant 7",
    scales: ["Mixolydian", "Bebop Dominant", "Altered", "Half-Whole Diminished"],
    targetTones: ["3rd", "b7", "b9", "#9", "13"],
    example: "G7 → G Mixolydian / G Altered"
  },
  {
    chord: "m7b5",
    quality: "Half-Diminished",
    scales: ["Locrian", "Locrian natural 2"],
    targetTones: ["b3", "b5", "b7", "11"],
    example: "F#m7b5 → F# Locrian natural 2"
  },
  {
    chord: "dim7",
    quality: "Diminished 7",
    scales: ["Whole-Half Diminished"],
    targetTones: ["minor 3rd cycle tones"],
    example: "Cdim7 → C Whole-Half Diminished"
  },
  {
    chord: "7alt",
    quality: "Altered Dominant",
    scales: ["Altered Scale", "Super Locrian"],
    targetTones: ["b9", "#9", "b5", "#5", "3rd", "b7"],
    example: "G7alt → Ab melodic minor"
  },
  {
    chord: "7sus",
    quality: "Suspended Dominant",
    scales: ["Mixolydian", "Dorian over V", "Minor pentatonic from 5th"],
    targetTones: ["4th", "b7", "9", "13"],
    example: "G7sus → Dm pentatonic / G Mixolydian"
  }
];
