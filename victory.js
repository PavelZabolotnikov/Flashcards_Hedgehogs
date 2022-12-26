const fs = require("fs");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

// const userName;

function getUserName() {
  console.clear();
  console.log(
    chalk.rgb(255, 10, 67).bold("Добро пожаловать на нашу викторину!")
  );
}

getUserName();
