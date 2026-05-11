export function randomTargetTone(){

  const tones = [

    "3rd",
    "7th",
    "9th",
    "#11",
    "13",
    "b9",
    "#9"

  ];

  return tones[
    Math.floor(Math.random()*tones.length)
  ];

}
