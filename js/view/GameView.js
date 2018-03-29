class GameView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    this.setProductPrice();
    this.setProductName();
    this.setProductImage();
    this.setQuestionNumber();
    this.setTimer();
  }

  setTimer() {
    if (this.model.time < 10) {
      document.querySelector("#timer").innerHTML = "0:0" + this.model.time;
    } else {
      document.querySelector("#timer").innerHTML = "0:" + this.model.time;
    }
  }

  setProductPrice() {
    document.querySelector('#productprice').innerHTML = "€ " + this.model.price;
  }

  setProductName() {
    document.querySelector('#productname').innerHTML = this.model.name;
  }

  setProductImage() {
    document.querySelector('#productimage').src = this.model.image;
  }

  setQuestionNumber() {
    document.querySelector("#question").innerHTML = "Vraag: " + this.model.questionNumbers.length + "/10";
  }
}