const fs = require('fs');
const rl = require('readline-sync');
let count = 0;

// Темы
function topic() {
  const topics = fs.readdirSync('./topics', 'utf-8');
  const arr = topics.map((el) =>
    fs.readFileSync(`./topics/${el}`, 'utf-8').split('\n')
  );
  const top = arr.map((el) => el[0]);
  return top.join(',\n').replace(/,/g, '');
}

// Начало игры
console.log('Добро пожаловать в игру!');
const userName = rl.question('Как тебя зовут? ');
console.log(`Привет ${userName}! Выбери тему:`);
const chooseTopic = rl.question(`${topic()}\n ==>`);

// Вопросы
function getQuestions() {
  let quest = [];
  const topics = fs.readdirSync('./topics', 'utf-8');
  const arr = topics.map((el) =>
    fs.readFileSync(`./topics/${el}`, 'utf-8').split('\n')
  );
  const num = arr.map((el, i) => el[0][0]);

  for (let i = 0; i < arr.length; i += 1) {
    if (chooseTopic === num[i]) {
      const ask = arr[i];
      quest.push(ask.filter((el, i) => !((i + 1) % 3)));
      return quest.flat();
    }
  }
}

// Ответы
function getAnswers() {
  let answ = [];
  const topics = fs.readdirSync('./topics', 'utf-8');
  const arr = topics.map((el) =>
    fs.readFileSync(`./topics/${el}`, 'utf-8').split('\n')
  );
  const num = arr.map((el, i) => el[0][0]);

  for (let i = 0; i < arr.length; i += 1) {
    if (chooseTopic === num[i]) {
      const ask = arr[i];
      answ.push(ask.filter((el, i) => !(i % 3)));
      return answ.flat().slice(1);
    }
  }
}

function quiz(question, answer) {
  const userAnswer = rl.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('\nЭто правильный ответ!');
    count += 10;
  } else {
    console.log('\nОтвет неверный!');
    count -= 5;
  }
  console.log(`Ваш счет: ${count} баллов!`);
}

const questions = getQuestions();
const answers = getAnswers();

for (let i = 0; i < questions.length; i += 1) {
  quiz(`\nВопрос: ${questions[i]}\n`, answers[i]);
}

console.log(`Игра подошла к концу! Ваш счет: ${count} баллов!`);
