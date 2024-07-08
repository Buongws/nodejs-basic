// #07 Reading & Writing files asynchronously
const readline = require("readline");
const fs = require("fs");

fs.readFile("./Files/start.txt", "utf-8", (error1, data1) => {
  console.log(data1);
  fs.readFile(`./Files/${data1}.txt`, "utf-8", (error2, data2) => {
    console.log(data2);
    //   if no error , the error2 will be null
    fs.readFile(`./Files/append.txt`, "utf-8", (error3, data3) => {
      console.log(data3);
      fs.writeFile("./Files/output.txt", `${data2}\n${data3}`, () => {
        console.log("Your file has been written");
      });
    });
  });
});

console.log("Reading files asynchronously");
