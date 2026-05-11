import { chordScaleMap } from "../data/tools/chord-scale-map.js";

const keys = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const major251 = {
  C: "Dm7 → G7 → Cmaj7",
  Db: "Ebm7 → Ab7 → Dbmaj7",
  D: "Em7 → A7 → Dmaj7",
  Eb: "Fm7 → Bb7 → Ebmaj7",
  E: "F#m7 → B7 → Emaj7",
  F: "Gm7 → C7 → Fmaj7",
  Gb: "Abm7 → Db7 → Gbmaj7",
  G: "Am7 → D7 → Gmaj7",
  Ab: "Bbm7 → Eb7 → Abmaj7",
  A: "Bm7 → E7 → Amaj7",
  Bb: "Cm7 → F7 → Bbmaj7",
  B: "C#m7 → F#7 → Bmaj7"
};

const targetTones = [
  "3rd",
  "7th",
  "9th",
  "13th",
  "b9",
  "#9",
  "#11",
  "b13"
];

let score = Number(localStorage.getItem("quizScore") || 0);
let total = Number(localStorage.getItem("quizTotal") || 0);
let currentQuiz = null;

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function updateScore() {
  document.getElementById("quizScore").textContent = `Score: ${score}/${total}`;
}

document.getElementById("randomKeyBtn").addEventListener("click", () => {
  document.getElementById("randomKeyOutput").textContent = randomItem(keys);
});

document.getElementById("twoFiveBtn").addEventListener("click", () => {
  const key = randomItem(keys);
  document.getElementById("twoFiveOutput").textContent = `${key}: ${major251[key]}`;
});

document.getElementById("targetToneBtn").addEventListener("click", () => {
  document.getElementById("targetToneOutput").textContent = randomItem(targetTones);
});

document.getElementById("findChordBtn").addEventListener("click", () => {
  const q = document.getElementById("chordInput").value.trim().toLowerCase();
  const result = chordScaleMap.find(item => item.chord.toLowerCase() === q);

  const box = document.getElementById("chordResult");

  if (!result) {
    box.innerHTML = `
      <article class="card">
        <h2>No exact match</h2>
        <p>Try: maj7, m7, 7, m7b5, dim7, 7alt, 7sus</p>
      </article>
    `;
    return;
  }

  box.innerHTML = `
    <article class="card">
      <span class="tag">${result.quality}</span>
      <h2>${result.chord}</h2>
      <p><strong>Example:</strong> ${result.example}</p>
      <p><strong>Scales:</strong> ${result.scales.join(", ")}</p>
      <p><strong>Target tones:</strong> ${result.targetTones.join(", ")}</p>
    </article>
  `;
});

document.getElementById("startQuizBtn").addEventListener("click", () => {
  const item = randomItem(chordScaleMap);
  currentQuiz = item;

  document.getElementById("quizQuestion").textContent =
    `Which scale can you use over ${item.chord}?`;

  document.getElementById("quizAnswer").value = "";
  document.getElementById("quizFeedback").textContent = "";
});

document.getElementById("checkQuizBtn").addEventListener("click", () => {
  if (!currentQuiz) return;

  const answer = document.getElementById("quizAnswer").value.toLowerCase().trim();

  const correct = currentQuiz.scales.some(scale =>
    scale.toLowerCase().includes(answer) || answer.includes(scale.toLowerCase())
  );

  total += 1;

  if (correct) {
    score += 1;
    document.getElementById("quizFeedback").textContent = "Correct.";
  } else {
    document.getElementById("quizFeedback").textContent =
      `Not quite. Good answers: ${currentQuiz.scales.join(", ")}`;
  }

  localStorage.setItem("quizScore", score);
  localStorage.setItem("quizTotal", total);

  updateScore();
});

updateScore();
