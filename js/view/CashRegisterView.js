class CashRegisterView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
    this.payedStatus = false;
    this.reset();
  }

  update() {
    if (this.model.payedStatus) {
      this.payedStatus = true;
    } else {
      this.payedStatus = false;
    }
    this.displayPayedStatus();
    if (this.payedStatus) {
      this.displayRegisterData(this.model.productPrice,
                               this.model.amountPayedString,
                               this.model.result,
                               this.model.calculateChange());
    } else {
      this.reset();
    }
  }

  reset() {
    document.querySelector('#status').innerHTML = "Niet betaald";
    document.querySelector('#price').innerHTML = "€ " + this.model.productPrice;
    document.querySelector('#payed').innerHTML = "€ 0.00";
    document.querySelector('#result').innerHTML = "Onbepaald";
    document.querySelector('#change').innerHTML = "€ 0.00";
  }

  displayPayedStatus() {
    let paymentStatus ;
    if (this.payedStatus){
      paymentStatus = "Betaald";
    } else {
      paymentStatus = "Niet betaald";
    }
    document.querySelector('#status').innerHTML = paymentStatus;
  }

  displayRegisterData(price, payed, result, change) {
    document.querySelector('#price').innerHTML = "€ " +  price;
    document.querySelector('#payed').innerHTML = "€ " +  payed;
    document.querySelector('#result').innerHTML = result;
    document.querySelector('#change').innerHTML = "€ " + change;
  }

}
