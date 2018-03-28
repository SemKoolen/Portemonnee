class CashRegisterView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
  }
}
