const audio = new Audio("./assets/audio/jazz.mp3");

audio.loop = true;
audio.volume = 0.4;

const button = document.createElement("button");
button.className = "music-toggle";
button.innerHTML = "♫ Jazz";

document.body.appendChild(button);

let playing = false;

button.addEventListener("click", async () => {
  try {
    if (!playing) {
      await audio.play();
      button.innerHTML = "❚❚ Pause";
      playing = true;
    } else {
      audio.pause();
      button.innerHTML = "♫ Jazz";
      playing = false;
    }
  } catch (err) {
    console.error(err);
    alert("Audio failed to load. Check assets/audio/jazz.mp3");
  }
});
