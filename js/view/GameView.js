class GameView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    this.setTimer();
    this.setProduct();
    this.startPostPage();
  }

  setTimer() {
    if (this.model.time < 10) {
      document.querySelector("#timer").innerHTML = "0:0" + this.model.time;
    } else {
      document.querySelector("#timer").innerHTML = "0:" + this.model.time;
    }
  }

  setProduct() {
    document.querySelector('#productprice').innerHTML = "€ " + this.model.price;
    document.querySelector('#productname').innerHTML = this.model.name;
    document.querySelector('#productimage').src = this.model.image;
    document.querySelector("#question").innerHTML = "Vraag: " + this.model.questionNumbers.length + "/10";
  }

  startPostPage() {
    if (this.model.questiondone === true) {
      console.log("cheese " + this.model.paid);
      this.src;
      document.querySelector('.wrapper').style.display = "none";
      document.querySelector('.prepage').style.display = "none";
      document.querySelector('.postpage').style.display = "grid";
      for (let i = 0; i < this.model.prices.length; i++) {
        document.querySelector("#price" + (i+1)).innerHTML = "€ "+ this.model.prices[i];
        document.querySelector("#paid"+(i+1)).innerHTML = "€ "+ this.model.paid[i];
        document.querySelector("#change"+(i+1)).innerHTML = "€ "+ this.model.change[i];
        document.querySelector("#adjusted"+(i+1)).innerHTML = "€ "+ this.model.adjusted[i];
        if (this.model.results[i] === "Perfect") {
          this.src = "images/green.png";
        } else if (this.model.results[i] === "Goed") {
          this.src = "images/orange.png";
        } else if (this.model.results[i] === "Fout") {
          this.src = "images/red.png";
        }
        document.querySelector("#result"+(i+1)).src = this.src;
      }
    }
  }
}