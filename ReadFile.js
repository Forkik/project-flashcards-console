const fs = require("fs");
const path = require("path");

class ReadFile {
  static readDir() {
    const pathDir = path.join(__dirname, "/topics/");
    const arrDir = fs.readdirSync(pathDir);
    let arrFile = [];

    for (let i of arrDir) {
      let arr = fs.readFileSync(pathDir + i, "utf-8").split("\r\n\r\n");
      let newArr = arr.map((el) => el.split("\r\n"));
      arrFile.push(newArr);
    }
    return arrFile;
  }
}

module.exports = ReadFile;
