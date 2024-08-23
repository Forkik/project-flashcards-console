const fs = require("fs");
const path = require("path");
const { EOL } = require("os");

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "topics", fileName),
      "utf8",
      (err, data) => {
        if (err) return reject(err);
        try {
          const lines = data
            .trim()
            .split(`${EOL}`)
            .filter((el) => el !== "");
          const questions = [];
          for (let i = 0; i < lines.length; i += 2) {
            const question = lines[i];
            const answer = lines[i + 1];
            questions.push({ question, answer });
          }
          resolve(questions);
        } catch (parseErr) {
          reject(parseErr);
        }
      }
    );
  });
};

module.exports = readFile;
