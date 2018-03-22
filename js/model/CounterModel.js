class CounterModel extends Observable {
	constructor() {
    super();
    this.totalAmount ;
    this.dontDisplay ;
    this.currentCoinDiv ;
    this.createCoinAmountVars();
  }

  moneyHandler(action, amount) {
    let coin = this.defineCoin(amount);
    if (action == "add") {
      this.addToCoinTotal(coin);
      this.totalAmount = +this.totalAmount + +amount;
      if (coin == 1) {
        this.doDisplay = coin;
      }
    } else {
      this.subtractFromCoinTotal(coin);
      this.totalAmount -= amount;
      if (coin == 0) {
        this.dontDisplay = this.currentCoinDiv;
      }
    }
    this.notify();
  }

  addToCoinTotal(coin) {
    coin ++;
  }

  subtractFromCoinTotal(coin) {
    coin --;
  }

  changeCoinTotal() {
    switch (amount) {
      case 0.01:
            this.currentCoinDiv = "counter1cent";
            return this.total1Cent;
            break;
      case 0.02:
            this.currentCoinDiv = "counter2cent";
            return this.total2Cent;
            break;
      case 0.05:
            this.currentCoinDiv = "counter5cent";
            return this.total5Cent;
            break;
      case 0.10:
            this.currentCoinDiv = "counter10cent";
            return this.total10Cent;
            break;
      case 0.20:
            this.currentCoinDiv = "counter20cent";
            return this.total20Cent;
            break;
      case 0.50:
            this.currentCoinDiv = "counter50cent";
            return this.total50Cent;
            break;
      case 1:
            this.currentCoinDiv = "counter1euro";
            return this.total1Euro;
            break;
      case 2:
            this.currentCoinDiv = "counter2euro";
            return this.total2Euro;
            break;
      case 5:
            this.currentCoinDiv = "counter5euro";
            return this.total5Euro;
            break;
      case 10:
            this.currentCoinDiv = "counter10euro";
            return this.total10Euro;
            break;
      case 20:
            this.currentCoinDiv = "counter20euro";
            return this.total20Euro;
            break;
      case 50:
            this.currentCoinDiv = "counter50euro";
            return this.total50Euro;
            break;
    }

  }

  createCoinAmountVars() {
    this.total1Cent ;
    this.total2Cent ;
    this.total5Cent ;
    this.total10Cent ;
    this.total20Cent ;
    this.total50Cent ;
    this.total1Euro ;
    this.total2Euro ;
    this.total5Euro ;
    this.total10Euro ;
    this.total20Euro ;
    this.total50Euro ;
  }


}
