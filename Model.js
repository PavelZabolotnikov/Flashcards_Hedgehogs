const fs = require('fs');

class Model {
  constructor(topics) {
    this.topics = topics;
  }
  modelMenu() {
    this.topics = fs.readdirSync('./topics', 'utf-8');
    const arr = this.topics.map((el) =>
      fs.readFileSync(`./topics/${el}`, 'utf-8').split('\n')
    );
    return arr.map((el) => el[0]);
  }
}
module.exports = Model;
