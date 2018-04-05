class GameStateModel extends Observable {
  constructor(controller) {
    super();

    //Used to execute a method when the time is 0
    this.controller = controller;

    this.questionNumber = 1;

    this.request = new XMLHttpRequest();
    this.request.open("GET", "pom.xml", false);
    this.request.setRequestHeader("Content-Type", "text/xml");
    this.request.send(null);
    this.xml = this.request.responseXML;
    this.products = this.xml.childNodes[0];

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
      this.random = Math.floor(Math.random() * (22 - 1)) + 1;
      while (this.questionNumbers.includes(this.random)) {
        this.random = Math.floor(Math.random() * (22 - 1)) + 1;
      }
    } else if (version === "hard") {
      this.random = Math.floor(Math.random() * (49 - 23)) + 23;
      while (this.questionNumbers.includes(this.random)) {
        this.random = Math.floor(Math.random() * (49 - 23)) + 23;
      }
    }

    this.questionNumbers.push(this.random);

    this.product = this.products.children[this.random - 1];

    // Access each of the data values.
    this.id = this.product.getElementsByTagName("Product_id")[0].childNodes[0].nodeValue;
    this.name = this.product.getElementsByTagName("Product_name")[0].childNodes[0].nodeValue;
    this.price = this.product.getElementsByTagName("Product_price")[0].childNodes[0].nodeValue;
    this.prices.push(this.product.getElementsByTagName("Product_price")[0].childNodes[0].nodeValue);
    this.image = this.product.getElementsByTagName("Product_picture")[0].childNodes[0].nodeValue;
    console.log(this.id + ": " + this.name + " " + this.price + " " + this.image);
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
    console.log("noquestions");
    this.notify();
  }

  pressConfirm(v) {
    this.pressedConfirm = v;
  }
}
