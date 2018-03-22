class Controller {
  constructor() {
    this.user = new UserModel();
    this.register = new CashRegisterModel();
    this.counter = new CounterModel();
    this.easyView = new EasyView(this.register, this.counter, this.user);
    this.hardView = new HardView(this.register, this.counter, this.user);
  }
}
