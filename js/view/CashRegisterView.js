class CashRegisterView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    this.displayPayedStatus();
    if (this.model.PayedStatus) {
      this.displayPrice();
      this.displayAmountPayed()
      this.displayResult()
      this.displayChange();
    }
  }

  displayPayedStatus(){
    if (this.model.payedStatus){
      let status = "Betaald";
    } else {
      let status = "Niet betaald"
    }
    document.querySelector('#status').innerHTML = status;
  }

  displayPrice(){

  }

  displayAmountPayed(){

  }

  displayResult(){

  }

  displayChange(){

  }
}
