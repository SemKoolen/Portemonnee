class Controller {
  constructor() {
    this.user = new UserModel();
    this.register = new CashRegisterModel();
    this.counter = new CounterModel();
    this.easyView = new EasyView(this.register, this.counter, this.user);
    // this.hardView = new HardView(this.register, this.counter, this.user);
    this.createListeners();
  }

  onClickMoney(action, amount) {
    this.counter.moneyHandler(action, amount);
  }

  createListeners(){
    let buttons = ["1cent", "2cent", "5cent", "10cent", "20cent", "50cent", "1euro", "2euro", "5euro",
                   "10euro", "20euro", "50euro"];
    let amounts = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1, 2, 5, 10, 20 ,50];

    for (let x = 0; x > buttons.length; x++) {
    document.getElementById("add"+buttons[x]).addEventListener("click", (e) => this.onClickMoney("add",amounts[x]));
    document.getElementById("subtract"+buttons[x]).addEventListener("click", (e) => this.onClickMoney("subtract",amounts[x]));
    }
  }

}
