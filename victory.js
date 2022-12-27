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
  namesOfFiles.map((el) => (questionList += `${el.slice(0, el.length - 4)}\n`));
  console.clear();
  console.log("Выберите тему:");
  console.log(questionList);
  return readlineSync.question("===>");
}
const quezeNum = getNumberOfQweze();

console.log(userName);
console.log(quezeNum);
