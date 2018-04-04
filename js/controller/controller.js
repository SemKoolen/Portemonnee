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
    if (this.user.getVersion() == "easy") {
      this.gameEasyView = new EasyView(this.counter, "easy");
      this.register = new CashRegisterModel("easy");
    }
    else if (this.user.getVersion() == "hard") {
      this.gameEasyView = new EasyView(this.counter, "hard");
      this.register = new CashRegisterModel("easy");
    }
    this.registerView = new CashRegisterView(this.register)
    this.gameState = new GameStateModel(this);
    this.gameView = new GameView(this.gameState);

    this.gameState.setNewQuestion();
    this.gameState.setTimer();

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
      this.gameState.setNewQuestion();
      this.gameState.resetTimer();
      this.gameState.setTimer();
      this.gameState.pressConfirm(false);
      this.userView.disableButtons("confirm", false);
      this.gameEasyView.removeAllCounterObjects();
      this.counter.reset();
      this.registerView.reset();
    }
    
    
    if (this.gameState.questionNumbers.length > 10) {
      this.gameState.noQuestionLeft();
    }
  }

  pressedConfirm() {
    this.gameState.pressConfirm(true);
    this.userView.disableButtons("next", false);
    this.userView.disableButtons("confirm", true);

    this.gameState.stopIntervalTimer();

    this.gameState.confirmData(this.counter.totalAmount, this.register.change);
    this.register.saveProductPrice(this.gameState.price);
    this.register.saveAmountPayed(this.counter.totalAmount);
    this.register.changePayedStatus(true);
    this.register.checkAnswer(this.counter.coinArray);
  }

}
