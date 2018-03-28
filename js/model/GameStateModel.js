class GameStateModel extends Observable {
  constructor() {
    super();
    this.question = 1;

    this.request = new XMLHttpRequest();
    this.request.open("GET", "pom.xml", false);
    this.request.setRequestHeader("Content-Type", "text/xml");
    this.request.send(null);
    this.xml = this.request.responseXML;
    this.products = this.xml.childNodes[0];

    this.questionNumbers = [];

    this.questionAnswered = false;

    // this.setQuestionNumbers();


  }

  setNewQuestion() {
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
    this.image = product.getElementsByTagName("Product_picture")[0].childNodes[0].nodeValue;
    console.log(this.id + ": " + this.name + " " + this.price + " " + this.image);
    this.notify();
  }

  pressedNext() {
    if (this.questionNumbers.length <= 9 && this.questionAnswered) { //++ check questionanswered
      this.questionAnswered = false;
      this.setNewQuestion();
    } else if (!this.questionAnswered) {
      window.alert("Je hebt de vraag nog niet beantwoord.");
    } else {
      //++ 10 vragen gehad event
      console.log("10 vragen gedaan");
    }
  }

  pressedConfirm() {
    this.questionAnswered = true;
  }
}
