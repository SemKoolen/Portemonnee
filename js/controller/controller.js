class Controller {
  constructor() {
      this.user = new UserModel();
      this.userView = new UserView(this.user);
      this.gameState = new GameStateModel();
      this.gameView = new GameView(this.gameState);
      if (this.startValue) { startGame() };
  }

  startGame(){
    this.register = new CashRegisterModel();
    this.counter = new CounterModel();
    if (this.user.getVersion() == "easy") { this.gameView = new EasyView(this.counter, "easy")}
    else if (this.user.getVersion() == "hard") { this.gameView = new EasyView(this.counter, "hard")}
    this.createListeners();
  }

  //Creates 12 listeners for both the adding and subtracting of coins & bills.
  createListeners(){
    let buttons = ["1cent", "2cent", "5cent", "10cent", "20cent", "50cent", "1euro", "2euro", "5euro",
                   "10euro", "20euro", "50euro"];
    let amounts = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20 ,50];

    for (let x = 0; x < buttons.length; x++) {
    document.getElementById("add"+buttons[x]).addEventListener("click", (e) => this.onClickMoney("add",amounts[x]));
    document.getElementById("subtract"+buttons[x]).addEventListener("click", (e) => this.onClickMoney("subtract",amounts[x]));
    }
  }

  //Tells counterHandler method what amount to be added or subtracted.
  //The method also uses the amount to figure out wich coin was clicked.
  onClickMoney(action, amount) {
    this.counter.counterHandler(action, amount);
  }

}
