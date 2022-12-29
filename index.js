const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* Name */
function namequestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (name) => {
      console.log(`Привет, ${name}! Выбери тему:`);
      resolve(name);
    });
  });
}

/* temi */
function topic() {
  const topics = fs.readdirSync('./topics', 'utf-8');
  const arr = topics.map((el) =>
    fs.readFileSync(`./topics/${el}`, 'utf-8').split('\n')
  );
  const top = arr.map((el) => el[0]);
  return top.join(',\n').replace(/,/g, '');
}

let top = [];
function topicquestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (topicone) => {
      top.push(topicone);
      resolve(topicone);
    });
  });
}

let quest = [];
function qq() {
  const topicsq = fs.readdirSync('./topics', 'utf-8');
  const arrq = topicsq.map((el) =>
    fs.readFileSync(`./topics/${el}`, 'utf-8').split('\n')
  );
  // console.log(arrq, 'ghghh'); // 4
  for (let i = 0; i < arrq.length; i += 1) {
    if (String(top) === arrq[i][0]) {
      const as = arrq[i];
      quest.push(as.filter((el, i) => !((i + 1) % 3)));
      return quest.flat();
    }
  }
}
const qqq = qq();

// let quest = [];
// let answ = [];
// function qwerty() {
//   quest.push(qqq.filter((el, i) => !((i + 1) % 3)));
//   answ.push(qqq.filter((el, i) => !(i % 3)));
// }
// qwerty();

let questions = [qqq];
// let answq = answ.flat().slice(1);

async function main() {
  await namequestion('Как тебя зовут? ');
  await topicquestion(`${topic()} \nТвой ответ:====> `);
  await top;
  await qq();
  await qqq;

  let answers = [];
  count = 0;
  // asking questions one by one
  for (let question of questions) {
    // wait for the answer
    let answer = await new Promise((resolve) => rl.question(question, resolve));

    if (answer === 'i') {
      count += 10;
      console.log('yes', count);
    } else {
      count -= 5;
      console.log('no', count);
    }
    console.log(`You said: ${answer}`);

    answers.push(answer);
  }

  // close at the end
  rl.close();

  console.log(answers);
}
main();
