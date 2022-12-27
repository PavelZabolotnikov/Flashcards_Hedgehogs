class Model {
  constructor (){
  }
  async getTopics(dir) {
    const topicArr = await fs.readdir(dir);
    const topic = topicArr.map((el) => el.slice(0, -4));
    return topic;
  }

    async readQuestions(choise) {
    const questionsList = await fs.readFile(`./topics/${choise}.txt`, 'utf-8');
    const questions = questionsList.split('\n\n').map((el) => ({ question: el.split('\n')[0], answer: el.split('\n')[1] }));
    return questions;
  }
}
module.exports = Model
