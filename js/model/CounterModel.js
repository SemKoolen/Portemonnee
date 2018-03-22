class CounterModel extends Observable {
	constructor() {
    super();
    this.totalAmount = 0 ;
    this.currentCoinObject ;
    this.createCoinArray();
  }

	getDontDisplay() {
		return this.dontDisplay;
	}

	getDoDisplay() {
		return this.doDisplay;
	}

	getCurrentCoinObject() {
		return this.currentCoinObject;
	}

	getCurrentCoinAmount() {
		return this.currentCoinAmount;
	}

	getCurrentTotal() {
		return this.totalAmount;
	}

  moneyHandler(action, amount) {
		console.log(amount);
			let coin = this.defineCoin(amount);
			if (action == "add") {
					this.coinArray[coin] = this.coinArray[coin] + 1;
					this.totalAmount += amount;
				} else if (action == "subtract") {
					this.coinArray[coin] = this.coinArray[coin] - 1;
					this.totalAmount -= amount;
    		}
				this.currentCoinAmount = this.coinArray[coin];

			if (this.coinArray[coin] == 1) {
				this.doDisplay = this.currentCoinObject;
				this.dontDisplay = null;
			}  else if (this.coinArray[coin] == 0) {
				this.dontDisplay = this.currentCoinObject;
				this.doDisplay = null ;
			}
    this.notify();
  }

  defineCoin(amount) {
    switch (amount) {
      case 0.01:
            this.currentCoinObject = "counter1cent";
            return 0;
            break;
      case 0.02:
            this.currentCoinObject = "counter2cent";
            return 1;
            break;
      case 0.05:
            this.currentCoinObject = "counter5cent";
            return 2;
            break;
      case 0.10:
            this.currentCoinObject = "counter10cent";
            return 3;
            break;
      case 0.20:
            this.currentCoinObject = "counter20cent";
            return 4;
            break;
      case 0.50:
            this.currentCoinObject = "counter50cent";
            return 5;
            break;
      case 1:
            this.currentCoinObject = "counter1euro";
            return 6;
            break;
      case 2:
            this.currentCoinObject = "counter2euro";
            return 7;
            break;
      case 5:
            this.currentCoinObject = "counter5euro";
            return 8;
            break;
      case 10:
            this.currentCoinObject = "counter10euro";
            return 9;
            break;
      case 20:
            this.currentCoinObject = "counter20euro";
            return 10;
            break;
      case 50:
            this.currentCoinObject = "counter50euro";
            return 11;
            break;
    }

  }

  createCoinArray() {
		this.coinArray = [];
		for (let x = 0; x < 12; x++) {
			this.coinArray[x] = 0;
		}
  }

}
