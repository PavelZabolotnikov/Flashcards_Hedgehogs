class Model {
  constructor (topic,question){

  }
  async choseTopic() {
    const topArr = await fs.reddir('./topics');
    const topic = topArr.map((el)=> el.slice(0,-4));
    return topic;
  }
   async getQuestion(choice) {
    
  
}

module.exports = Model