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
    if (err) console.log(err);
    else {
      console.log(`${player} Выбери Тему:`)
      files.forEach((files) => {
        console.log(files.slice(0, -4));
        
      });
      const number = readlineSync.question('Введи номер темы => ') 
        console.log(number)
    }
  });
   
}
getTopics();

 async function getQuestion()  {
for (let i=0; i<4; i+=0) {
  if (i === `${number}`) {
    async function showQuestions() {
  console.clear();
  const quezeNum = getTopics();
  const questionsList = fs.readFileSync(`./topics/${number}.txt`, "utf-8");
  const questions = questionsList
    .split("\n\n")
    .map((el) => ({ question: el.split("\n")[0], answer: el.split("\n")[1] }));

  return questions;
}
showQuestions();
  }
}
  }
  getQuestion()

// const rightAnswers = "Молодец";
// const wrongAnswers = "Ещё повезет!";


