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
    this.startPostPage();
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

  startPostPage() {
    if (this.model.questiondone === true) {
      console.log(this.model.prices);
      console.log(this.model.prices.length);
      document.querySelector('.wrapper').style.display = "none";
      document.querySelector('.prepage').style.display = "none";
      document.querySelector('.postpage').style.display = "grid";
      for (let i = 0; i < this.model.prices.length; i++) {
        document.querySelector("#price"+(i+1)).innerHTML = this.model.prices[i];
      }
      for (let i = 0; i < this.model.price.length; i++) {
        // document.querySelector("#paid"+(i+1)).innerHTML =  //++ PAID VALUE [i]
      }
      for (let i = 0; i < this.model.price.length; i++) {
        // document.querySelector("#change"+(i+1)).innerHTML =  //++ CHANGE VALUE [i]
      }
    }
    
  }
}