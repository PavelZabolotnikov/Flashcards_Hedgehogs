const fs = require("fs");

const readlineSync = require("readline-sync");

 function privetstviePlayers(){
  console.clear();
  console.log("Приветствуем Вас на нашем квизе")
  console.log("Как Вас зовут")
  return readlineSync.question('Введи имя => ') 
}

const player = privetstviePlayers()


async function getTopics() {
  console.clear();
  fs.readdir(`./topics`, (err, files) => {
    if (err) console.log();
    else {
      console.log(`${player} Выбери Тему:`)
       files.forEach((files) => {
         console.log(files.slice(0, -4)); 
      });
      return  readlineSync.question('Введи номер темы => ') 
    }
  });   
}
getTopics()
const quezeNum =  getTopics() ;

async function showQuestions() {
  
  const questionsList = fs.readFileSync(`./topics/${quezeNum}.txt`, "utf-8");
  const questions = questionsList
    .split("\n\n")
    .map((el) => ({ question: el.split("\n")[0], answer: el.split("\n")[1] }));

  return questions;
}
showQuestions();



