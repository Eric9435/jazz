const audio = new Audio("/assets/audio/jazz.mp3");

audio.loop = true;
audio.preload = "auto";
audio.volume = 0;

const savedTime = Number(localStorage.getItem("jazz-time") || 0);
const shouldPlay = localStorage.getItem("jazz-playing") === "true";

if (savedTime > 0) {
  audio.currentTime = savedTime;
}

audio.addEventListener("timeupdate", () => {
  localStorage.setItem("jazz-time", audio.currentTime);
});

const button = document.createElement("button");
button.className = "music-toggle";
button.innerHTML = shouldPlay ? "❚❚ Pause" : "♫ Jazz";
document.body.appendChild(button);

function fadeTo(target) {
  const step = target > audio.volume ? 0.04 : -0.04;

  const timer = setInterval(() => {
    audio.volume = Math.max(0, Math.min(0.4, audio.volume + step));

    if (
      (step > 0 && audio.volume >= target) ||
      (step < 0 && audio.volume <= target)
    ) {
      audio.volume = target;
      clearInterval(timer);
    }
  }, 80);
}

window.addEventListener("load", async () => {
  if (shouldPlay) {
    try {
      await audio.play();
      fadeTo(0.4);
    } catch (e) {
      console.log("Audio restore blocked until user interaction.");
    }
  }
});

button.addEventListener("click", async () => {
  if (audio.paused) {
    await audio.play();
    localStorage.setItem("jazz-playing", "true");
    button.innerHTML = "❚❚ Pause";
    fadeTo(0.4);
  } else {
    fadeTo(0);
    setTimeout(() => audio.pause(), 700);
    localStorage.setItem("jazz-playing", "false");
    button.innerHTML = "♫ Jazz";
  }
});
