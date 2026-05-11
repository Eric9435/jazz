import { playFrequency }
from "./audio-engine.js";

export function playMajorTriad(){

  playFrequency(261.63);
  playFrequency(329.63);
  playFrequency(392.00);

}
