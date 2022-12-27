
const readlineSync = require('readline-sync') 

readlineSync.question('Нажми Enter')

class View {
    constructor() {
    }
    async userName() {
   const vopros = readlineSync.question('Как тебя зовут?');
   console.log('Ваш ответ', vopros)
    }


}

module.exports = View