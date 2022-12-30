const fs = require("fs");
const readlineSync = require("readline-sync");
const chalk = require("chalk");
function getUserName() {
  console.clear();
  console.log(
    `❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ ${chalk.green(
      "Привет игрок! 🖐"
    )} ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
    `
  );
  console.log(
    "            Мы Ежи и хотим предложить сыграть тебе в игру!              "
  );
  console.log("                           Назови свое имя:                  ");
  return readlineSync.question(chalk.magenta("===>"));
}

const userName = getUserName();

function getNumberOfQweze() {
  const namesOfFiles = fs.readdirSync("./topics");
  let questionList = "";
  namesOfFiles.map(
    (el) =>
      (questionList += `                              ${
        fs.readFileSync(`./topics/${el}`, "utf-8").split("\n")[0]
      }\n`)
  );
  console.clear();
  console.log(
    `❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ ${chalk.yellow(`${userName}, выбери тему:`)}  ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤`);
  console.log(chalk.cyan(questionList));
  return readlineSync.question(chalk.magenta("===>"));
}

function quezeReader() {
  const quezeNum = getNumberOfQweze();
  const quezeFilesNames = fs.readdirSync("./topics");
  return fs.readFileSync(`./topics/${quezeFilesNames[quezeNum - 1]}`, "utf-8");
}

function runner() {
  console.log(`Приятно познакомиться ${userName}!`);
  const questionList = quezeReader().split("\n").slice(1);
  let counter = 0;
  for (let i = 0; i < questionList.length; i += 2) {
    // console.clear();
    console.log(chalk.bgGreen(`                               ${questionList[i]}                                            `));
    answer = readlineSync.question(chalk.magenta("===>"));
    if (answer.toLowerCase() === questionList[i + 1].toLowerCase()) {
      counter += 10;
      console.log(chalk.yellow(`                               Верно! Твои баллы: ${counter}                                            `));
    } else console.log(chalk.red(`                               Неверно! Правильный ответ: ${questionList[i + 1]}                                            `));
  }
  console.log(
    chalk.bgMagenta(`                               Квиз окончен! Ты набрал(а) ${counter} баллов! Хочешь повторить?                                            `
  ));
  const repeatAnswer = readlineSync.question(chalk.magenta("===>"));
  if (repeatAnswer.toLowerCase() === "да") return runner();
  return chalk.red("                               Спасибо за игру!                               ");
}

console.log(runner());
