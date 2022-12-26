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

console.log(userName);
