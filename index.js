const fs = require('fs')
const readlineSync = require('readline-sync') 

readlineSync.question('Нажми Enter')

const vopros = readlineSync.question('Как тебя зовут?');
   console.log('Ваш ответ', vopros)


   async function getTopics() {     
fs.readdir(`./topics`, (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("Темы");
      files.forEach(file => {
        console.log(file.slice(0, -4));
      })
    }
  })
}
getTopics()
const tema = readlineSync.question('Выбери тему'); 


async function showQuestions() {
    const questionsList = fs.readFileSync(`./topics/Выдры.txt`, 'utf-8')
    const questions = questionsList.split('\n\n').map((el) => ({ question: el.split('\n')[0], answer: el.split('\n')[1] }));
    
    console.log( questions)
}
showQuestions()



const rightAnswers = 'Молодец'
const wrongAnswers = 'Ещё повезет!'

