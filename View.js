
const readlineSync = require('readline-sync') 

readlineSync.question('Нажми Enter')

class View {
    constructor() {
    }
    async userName() {
        
   const vopros = readlineSync.question('Как тебя зовут?');
   console.log('Ваш ответ', vopros)
    }
    async getTopics() {
        fs.readdir(__dirname, (err, files) => {
            if (err)
              console.log(err);
            else {
              console.log(`./topics`);
              files.forEach(file => {
                console.log(file);
              })
            }
          })
        
     
    }
//     userTema(){
//     const tema = readlineSync.question('Выбери тему?');
//     console.log('Введите вашу тему', tema)
//     }
}

module.exports = View