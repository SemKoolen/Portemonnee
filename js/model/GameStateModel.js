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
    this.pressedConfirm = false;
    this.time = 60;
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

  setNewQuestion() {
    document.getElementById("next").disabled = true;
    var random = Math.floor((Math.random() * 21) + 1);

    while (this.questionNumbers.includes(random)) {
      random = Math.floor((Math.random() * 21) + 1);
    }
    this.questionNumbers.push(random);

    let product = this.products.children[random - 1];

    // Access each of the data values.
    this.id = product.getElementsByTagName("Product_id")[0].childNodes[0].nodeValue;
    this.name = product.getElementsByTagName("Product_name")[0].childNodes[0].nodeValue;
    this.price = product.getElementsByTagName("Product_price")[0].childNodes[0].nodeValue;
    this.prices.push(product.getElementsByTagName("Product_price")[0].childNodes[0].nodeValue);
    this.image = product.getElementsByTagName("Product_picture")[0].childNodes[0].nodeValue;
    console.log(this.id + ": " + this.name + " " + this.price + " " + this.image);
    this.notify();
  }

  confirmData(pay, change) {
    this.paid.push(pay);
    this.change.push(change);
  }

  noQuestionLeft() {
    this.questiondone = true;
    console.log("noquestions");
    this.notify();
    this.stopIntervalTimer();
  }

  pressConfirm(v) {
    this.pressedConfirm = v;
  }
}
