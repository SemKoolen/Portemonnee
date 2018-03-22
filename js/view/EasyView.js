class EasyView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
    this.removeBills();
  }

  update() {
  }

  removeBills() {
    let bills = ["add5euro", "add10euro", "add20euro", "add50euro"]
    for (let x = 0; x > bills.length; x++) {
      document.getElementById(bills[x]).style.display = "none";
    }
  }

}
