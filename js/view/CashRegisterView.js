class CashRegisterView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
    this.payedStatus = false;
  }

  update() {
    if (this.model.payedStatus) {
      this.payedStatus = true;
    } else {
      this.payedStatus = false;
    }
    this.displayPayedStatus();
    if (this.payedStatus) {
      this.displayPrice(this.model.productPrice);
      this.displayAmountPayed(this.model.amountPayed);
      this.displayResult()
      this.displayChange();
    } else {
      this.reset();
    }
  }

  reset() {
    document.querySelector('#status').innerHTML = "";
    document.querySelector('#price').innerHTML = "";
    document.querySelector('#payed').innerHTML = "";
    document.querySelector('#result').innerHTML = "";
    document.querySelector('#change').innerHTML = "";
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

  displayPrice(price) {
    document.querySelector('#price').innerHTML = price;
  }

  displayAmountPayed(payed) {
    document.querySelector('#payed').innerHTML = payed;
  }

  displayResult() {

  }

  displayChange() {

  }
}
