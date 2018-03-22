class EasyView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
    this.reset();
  }

  reset() {
    this.removeAllCounterObjects();
    this.removeBills();
  }

  update() {
    super.update();
    this.checkCounterDisplay();
    this.updateCoinAmount();
    this.displayTotal();
  }

  removeAllCounterObjects() {
    let objects = ["1cent", "2cent", "5cent", "10cent", "20cent", "50cent", "1euro", "2euro", "5euro",
                   "10euro", "20euro", "50euro"];
    for (let x = 0; x < objects.length; x++) {
      document.getElementById("counter"+objects[x]).style.display = "none";
    }
  }

  removeBills() {
    let bills = ["add5euro", "add10euro", "add20euro", "add50euro"]
    for (let x = 0; x < bills.length; x++) {
      document.getElementById(bills[x]).style.display = "none";
    }
  }

  updateCoinAmount() {
    let object = this.model.getCurrentCoinObject();
    let amount = this.model.getCurrentCoinAmount();
    let listNodes = document.getElementById(object).getElementsByTagName("p");
    let pElement = listNodes[0];
    pElement.innerHTML  = amount;
  }

  displayTotal(){
    let total = this.model.getCurrentTotal();
    let pElement = document.getElementById("userTotal");
    pElement.innerHTML  = total;
  }

  checkCounterDisplay() {
    let dontDisplay = this.model.getDontDisplay();
    let doDisplay = this.model.getDoDisplay();
    if (dontDisplay != null) {
      document.getElementById(dontDisplay).style.display = "none";
    } else if (doDisplay != null) {
      document.getElementById(doDisplay).style.display = "inline";
    }
  }

}
