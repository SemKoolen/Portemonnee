class GameStateModel extends Observable {
  constructor(controller) {
    super();

    //Used to execute a method when the time is 0
    this.controller = controller;

    this.productsList = new Products();

    this.questionNumber = 1;

    this.questiondone = false;

    this.questionNumbers = [];
    this.prices = [];
    this.paid = [];
    this.change = [];
    this.adjusted = [];
    this.results = [];
    this.pressedConfirm = false;
    this.time = 60;
    this.random;
    this.product;
  }

  resetTimer() {
    this.time = 60;
  }

  setTimer() {
    this.timeinterval = setInterval(this.timeInterval.bind(this), 1000);
  }

  timeInterval() {
    this.time--;

    this.notify();
    if (this.time <= 0) {
      clearInterval(this.timeinterval);
      this.time = 0;
      this.controller.pressedConfirm();
    }
  }

  stopIntervalTimer() {
    clearInterval(this.timeinterval);
  }

  setNewQuestion(version) {
    if (version === "easy") {
      this.random = Math.floor(Math.random() * (20 - 1)) + 1;
      while (this.questionNumbers.includes(this.random)) {
        this.random = Math.floor(Math.random() * (20 - 1)) + 1;
      }
    } else if (version === "hard") {
      this.random = Math.floor(Math.random() * (50 - 20)) + 20;
      while (this.questionNumbers.includes(this.random)) {
        this.random = Math.floor(Math.random() * (50 - 20)) + 20;
      }
    }

    this.questionNumbers.push(this.random);

    this.product = this.productsList.products.Product[this.random];

    this.id = this.product.Product_id;
    this.name = this.product.Product_name;
    this.price = this.product.Product_price;
    this.prices.push(this.product.Product_price);
    this.image = this.product.Product_picture;

    this.notify();
  }

  confirmData(pay, change, adjusted, result) {
    this.paid.push(pay);
    this.change.push(change);
    this.adjusted.push(adjusted);
    this.results.push(result);
  }

  noQuestionLeft() {
    this.questiondone = true;
    this.notify();
  }

  pressConfirm(v) {
    this.pressedConfirm = v;
  }
}
