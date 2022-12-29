const fs = require('fs');
const rl = require('readline-sync');
const chalk = require('chalk');

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
console.log(chalk.red('🔥🔥🔥 Добро пожаловать в игру! 🔥🔥🔥'));
const userName = rl.question(chalk.yellow('🌸 Как тебя зовут? '));
console.log(`Привет ${chalk.blue(userName)}! Выбери тему:`);
const chooseTopic = rl.question(
  `${chalk.green(topic())}\n${chalk.magenta('==>🐾 ')}`
);

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

// Игра
let count = 0;
function quiz(question, answer) {
  const userAnswer = rl.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green('\nЭто правильный ответ! 😺'));
    count += 10;
  } else {
    console.log(chalk.red('\nОтвет неверный! 😿'));
    console.log(`${chalk.blue('Правильный ответ:')} ${chalk.magenta(answer)}`);
    count -= 5;
  }
  console.log(`Ваш счет: ${chalk.yellow(count)} баллов!`);
}

const questions = getQuestions();
const answers = getAnswers();

for (let i = 0; i < questions.length; i += 1) {
  quiz(
    `${chalk.bgMagenta('\nВопрос:')} ${chalk.cyan(questions[i])}\n`,
    answers[i]
  );
}

console.log(
  `${chalk.bgMagenta('\n💞Игра подошла к концу!💞')} \n🎈Ваш счет: ${chalk.blue(
    count
  )} баллов!🎈`
);
