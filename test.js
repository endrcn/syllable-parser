const SyllableParser = require("./SyllableParser");

const parser = new SyllableParser("TR");

console.log("örnek ->", parser.parse("örnek").join("-"));
console.log("okul ->", parser.parse("okul").join("-"));
console.log("kültür ->", parser.parse("kültür").join("-"));
console.log("robdöşambır ->", parser.parse("robdöşambır").join("-"));
console.log("robdöşambr ->", parser.parse("robdöşambr").join("-"));
console.log("tren ->", parser.parse("tren").join("-"));
console.log("spor ->", parser.parse("spor").join("-"));
console.log("sporcu ->", parser.parse("sporcu").join("-"));
console.log("makinist ->", parser.parse("makinist").join("-"));