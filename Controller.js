class Controller {
  constructor(model, view, topic) {
    this.model = model
    this.view = view
    this.score = 0
  }

  async run() {
 const rightAnswer = 'Огонь 🔥🔥🔥'
 const wrongAnswer = 'Не отчаиваемся'
 const whoYou = await this.view.userName();
 this.topics = await this.model.readTopics();
 const elTopic = await this.view.chooseTopics(this.topics);
 const quesObj = await this.model.readQuestions(elTopic);
  } 


  
}

module.exports = Controller