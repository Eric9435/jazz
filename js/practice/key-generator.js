export function randomKey(){

  const keys = [

    "C","Db","D","Eb","E","F",
    "Gb","G","Ab","A","Bb","B"

  ];

  return keys[
    Math.floor(Math.random()*keys.length)
  ];

}
