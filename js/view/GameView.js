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