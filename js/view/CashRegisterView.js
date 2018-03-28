class CashRegisterView extends Observer {
  constructor(model, version) {
    super(model);
    this.model.addObserver(this);
  }

  update() {

  }

  displayPayedStatus(){

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
