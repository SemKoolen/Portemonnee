class Controller {
  constructor() {
    this.user = new UserModel();
    this.userView = new UserView(this.user);
    document.getElementById("easy").addEventListener("click", (e) => this.user.pressedEasy());
    document.getElementById("hard").addEventListener("click", (e) => this.user.pressedHard());
    document.getElementById("next").addEventListener("click", (e) => this.pressedNext());
    document.getElementById("confirm").addEventListener("click", (e) => this.pressedConfirm());
    document.getElementById("start").addEventListener("click", (e) => this.onStartHandler());
  }

  onStartHandler() {
    this.user.pressedStart();
    if (this.user.getStartValue()) {
      this.startGame();
    }
  }

  startGame() {
    this.counter = new CounterModel();
    this.gameEasyView = new EasyView(this.counter, this.user.getVersion());
    this.gameState = new GameStateModel(this);
    this.gameView = new GameView(this.gameState);
    this.gameState.setNewQuestion(this.user.getVersion());
    this.gameState.setTimer();

    this.register = new CashRegisterModel(this.gameState.price);
    this.registerView = new CashRegisterView(this.register);

    this.createListeners();
  }

  //Creates 12 listeners for both the adding and subtracting of coins & bills.
  createListeners() {
    let buttons = ["1cent", "2cent", "5cent", "10cent", "20cent", "50cent", "1euro", "2euro", "5euro",
      "10euro", "20euro", "50euro"];
    let amounts = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50];

    for (let x = 0; x < buttons.length; x++) {
      document.getElementById("add" + buttons[x]).addEventListener("click", (e) => this.onClickMoney("add", amounts[x]));
      document.getElementById("subtract" + buttons[x]).addEventListener("click", (e) => this.onClickMoney("subtract", amounts[x]));
    }
  }

  //Tells counterHandler method what amount to be added or subtracted.
  //The method also uses the amount to figure out wich coin was clicked.
  onClickMoney(action, amount) {
    if (this.gameState.pressedConfirm === false) {
      this.counter.counterHandler(action, amount);
    }
  }

  pressedNext() {
    if (this.gameState.questionNumbers.length <= 10) {
      this.gameState.confirmData(this.register.amountPayedString, this.register.change, this.register.adjustedChange, this.register.result);
      this.gameState.setNewQuestion(this.user.getVersion());
      this.gameState.resetTimer();
      this.gameState.setTimer();
      this.gameState.pressConfirm(false);
      this.userView.disableButtons("next", true);
      this.userView.disableButtons("confirm", false);
      this.gameEasyView.removeAllCounterObjects();
      this.counter.reset();
    }


    if (this.gameState.questionNumbers.length > 10) {
      this.gameState.noQuestionLeft();
    }
    this.register.saveProductPrice(this.gameState.price);
    this.registerView.reset();
  }

  pressedConfirm() {
    this.gameState.pressConfirm(true);
    this.userView.disableButtons("next", false);
    this.userView.disableButtons("confirm", true);
    this.gameState.stopIntervalTimer();
    this.register.saveProductPrice(this.gameState.price);
    this.register.saveAmountPayed(this.counter.totalAmount);
    this.register.changePayedStatus(true);
    this.register.checkAnswer(this.counter.coinArray);
  }

}
