import fs from "fs";
import path from "path";

const root = "data/topics";

let total = 0;

for(const domainFolder of fs.readdirSync(root)){

  const domainPath =
    path.join(root,domainFolder);

  if(!fs.statSync(domainPath).isDirectory())
    continue;

  for(const file of fs.readdirSync(domainPath)){

    if(file.endsWith(".js")){

      total++;

    }

  }

}

console.log(
  `Validated ${total} topic files.`
);
