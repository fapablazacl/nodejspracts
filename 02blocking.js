
var fs = require("fs");
var data = fs.readFileSync("file.txt");

console.log(data.toString());
console.log("This program ended!");

