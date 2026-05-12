
const audio = new Audio("assets/audio/jazz.mp3");

audio.loop = true;
audio.volume = 0.35;

const button = document.createElement("button");

button.innerText = "♫ Jazz";

button.className = "music-toggle";

document.body.appendChild(button);

let playing = false;

button.addEventListener("click", async () => {

  if (!playing) {

    await audio.play();

    button.innerText = "❚❚ Pause";

    playing = true;

  } else {

    audio.pause();

    button.innerText = "♫ Jazz";

    playing = false;

  }

});

