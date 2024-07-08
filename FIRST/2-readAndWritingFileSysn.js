const readline = require("readline");
const fs = require("fs");

let textInp = fs.readFileSync("./Files/input.txt", "utf-8");

console.log(textInp);

fs.writeFileSync("./Files/output.txt", "Hello from NODE JS");
