class GameView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    this.setProductPrice();
    this.setProductName();
    this.setProductImage();
  }

  setProductPrice() {
    document.querySelector('#productprice').innerHTML = "€ " + this.model.price;
  }

  setProductName() {
    document.querySelector('#productname').innerHTML = this.model.name;
  }

  setProductImage() {
    document.querySelector('#productimage').src = this.model.image;
    console.log(this.model.image);
    
  }
}