require("dotenv").config();
const { summarize } = require("./summarize");

function getInput() {
  return new Promise(function (resolve, reject) {
    const stdin = process.stdin;
    let data = "";

    stdin.setEncoding("utf8");
    stdin.on("data", function (chunk) {
      data += chunk;
    });

    stdin.on("end", function () {
      resolve(data);
    });

    stdin.on("error", reject);
  });
}

getInput().then(summarize).catch(console.error);
