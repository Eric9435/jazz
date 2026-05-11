import { randomKey }
from "./key-generator.js";

export function generate251(){

  const key = randomKey();

  return {

    key,

    progression:
      `ii - V - I in ${key}`

  };

}
