export function playFrequency(

  frequency,
  duration = 1

){

  const ctx =
    new AudioContext();

  const osc =
    ctx.createOscillator();

  const gain =
    ctx.createGain();

  osc.frequency.value =
    frequency;

  osc.type = "sine";

  osc.connect(gain);

  gain.connect(ctx.destination);

  gain.gain.value = 0.1;

  osc.start();

  osc.stop(
    ctx.currentTime + duration
  );

}
