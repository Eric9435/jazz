
let audio = new Audio("/assets/audio/jazz.mp3");

audio.loop = true;
audio.volume = 0.4;

/* ========================================
   RESTORE POSITION
======================================== */

const savedTime = localStorage.getItem("jazz-time");

if (savedTime) {
  audio.currentTime = Number(savedTime);
}

/* ========================================
   RESTORE PLAY STATE
======================================== */

const shouldPlay =
  localStorage.getItem("jazz-playing") === "true";

/* ========================================
   SAVE TIME
======================================== */

audio.addEventListener("timeupdate", () => {

  localStorage.setItem(
    "jazz-time",
    audio.currentTime
  );

});

/* ========================================
   BUTTON
======================================== */

const button = document.createElement("button");

button.className = "music-toggle";

button.innerHTML = shouldPlay
  ? "❚❚ Pause"
  : "♫ Jazz";

document.body.appendChild(button);

/* ========================================
   AUTOPLAY RESTORE
======================================== */

window.addEventListener("load", async () => {

  if (shouldPlay) {

    try {

      await audio.play();

    } catch (e) {

      console.log(e);

    }

  }

});

/* ========================================
   TOGGLE
======================================== */

button.addEventListener("click", async () => {

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

});

