const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
class View {
  constructor() {}
  show(question) {
    return new Promise((resolve, reject) => {
      rl.question(question, (name) => {
        console.log(`Привет, ${name}! Выбери тему:`);
        resolve(name);
      });
    });
  }
}
const view = new View();
async function main() {
  await view.show('Добро пожаловать в игру! Как тебя зовут? ');
  rl.close();
}
main();
module.exports = View;
