const fs = require("fs");
const readlineSync = require("readline-sync");

function getUserName() {
  console.clear();
  console.log("Привет игрок! 🖐");
  console.log("Мы Ежи и хотим предложить сыграть тебе в игру!");
  console.log("Назови свое имя:");
  return readlineSync.question("===>");
}

const userName = getUserName();

function getNumberOfQweze() {
  const namesOfFiles = fs.readdirSync("./topics");
  let questionList = "";
  namesOfFiles.map(
    (el) =>
      (questionList += `${
        fs.readFileSync(`./topics/${el}`, "utf-8").split("\n")[0]
      }\n`)
  );
  console.clear();
  console.log(`${userName}, выбери тему:`);
  console.log(questionList);
  return readlineSync.question("===>");
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
    console.log(questionList[i]);
    answer = readlineSync.question("===>");
    if (answer.toLowerCase() === questionList[i + 1].toLowerCase()) {
      counter += 10;
      console.log(`Верно! Твои баллы: ${counter}`);
    } else console.log(`Неверно! Правильный ответ: ${questionList[i + 1]}`);
  }
  console.log("Квиз окончен! Хотите повторить?");
  const repeatAnswer = readlineSync.question("===>");
  if (repeatAnswer === "Да") return runner();
  return "Спасибо за игру!";
}

console.log(runner());
