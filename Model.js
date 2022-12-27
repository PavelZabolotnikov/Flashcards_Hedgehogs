class Model {
  constructor (topic,question){

  }
  async choseTopic() {
    const topArr = await fs.reddir('./topics');
    const topic = topArr.map((el)=> el.slice(0,-4));
    return topic;
  }
   async getQuestion(choice) {
    const file = await fs.readFile(`./topics/${choice}.txt`, 'utf-8');
    const array = file.split('\n\n').map((el)=> el.split('\n'));
    const answer = array.map((el)=> ({question: el[0], answers: [el[1],el[2],el[3]], true:el[4]})) 
    return answer;
  }
}

module.exports = Model