const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const readFile = require('./ReadFile')

const topics = [
  { name: "Ночные ястребы", value: "./nighthawk_flashcard_data.txt" },
  { name: "Выдры", value: "./otter_flashcard_data.txt" },
  { name: "Еноты", value: "./raccoon_flashcard_data.txt" },
];

const startQuiz = async () => {
  try {
    const { topic } = await prompt({
      type: "list",
      name: "topic",
      message: "Выберите тему:",
      choices: topics,
    });

    const questions = await readFile(topic);

    for (const item of questions) {
      const { answer } = await prompt({
        type: "input",
        name: "answer",
        message: item.question,
      });

      if (answer.trim().toLowerCase() === item.answer.toLowerCase()) {
        console.log("Правильно!");
      } else {
        console.log(`Неправильно. Правильный ответ: ${item.answer}`);
      }
    }

    console.log("Викторина завершена!");
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

startQuiz();
