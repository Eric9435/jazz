
const audio = new Audio("/assets/audio/jazz.mp3");

audio.loop = true;
audio.volume = 0.4;

/* ========================================
   RESTORE TIME
======================================== */

const savedTime = localStorage.getItem("jazz-current-time");

if (savedTime) {
  audio.currentTime = parseFloat(savedTime);
}

/* ========================================
   RESTORE PLAY STATE
======================================== */

const wasPlaying = localStorage.getItem("jazz-playing") === "true";

/* ========================================
   SAVE TIME
======================================== */

setInterval(() => {

  localStorage.setItem(
    "jazz-current-time",
    audio.currentTime
  );

}, 1000);

/* ========================================
   BUTTON
======================================== */

const button = document.createElement("button");

button.className = "music-toggle";

button.innerHTML = wasPlaying
  ? "❚❚ Pause"
  : "♫ Jazz";

document.body.appendChild(button);

/* ========================================
   AUTORESTORE PLAY
======================================== */

if (wasPlaying) {

  audio.play().catch(() => {});

}

/* ========================================
   TOGGLE
======================================== */

button.addEventListener("click", async () => {

  try {

    if (audio.paused) {

      await audio.play();

      localStorage.setItem(
        "jazz-playing",
        "true"
      );

      button.innerHTML = "❚❚ Pause";

    } else {

      audio.pause();

      localStorage.setItem(
        "jazz-playing",
        "false"
      );

      button.innerHTML = "♫ Jazz";

    }

  } catch (err) {

    console.error(err);

  }

});

