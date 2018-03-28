class CounterModel extends Observable {
	constructor() {
		super();
		this.currentCoinObject;
		this.reset();
	}

	reset(){
		this.totalAmount = 0;
		this.createCoinArray();
	}

	//Creates a var for every coin/bill to be used in an array.
	createCoinArray() {
		this.coinArray = [];
		for (let x = 0; x < 12; x++) {
			this.coinArray[x] = 0;
		}
	}

	counterHandler(action, amount) {
		//Checks what kind of coin or bill it is
		let coin = this.defineCoin(amount);
		//Adds 1 to or subtracts 1 from that specific coin it's variable which
		//stores how many of that specific coin should be on the counter.
		//Adds new coins worth to the total.
		if (action == "add") {
			this.coinArray[coin] = this.coinArray[coin] + 1;
			this.totalAmount += amount;
		} else if (action == "subtract") {
			this.coinArray[coin] = this.coinArray[coin] - 1;
			this.totalAmount -= amount;
		}
		//Fixes bug where the new total amount is a few millionth off from the correct sum.
		this.totalAmount = Math.round(this.totalAmount * 100) / 100;
		//Saves amount of coins the specific coin being handled  outside the method.
		this.currentCoinAmount = this.coinArray[coin];

		//Checks if the coin should be made visible or not.
		if (this.coinArray[coin] == 1) {
			this.doDisplay = this.currentCoinObject;
			this.dontDisplay = null;
		} else if (this.coinArray[coin] == 0) {
			this.dontDisplay = this.currentCoinObject;
			this.doDisplay = null;
		}
		//Updates all views that listen to this model.
		this.notify();
	}

	//Saves the id of the div where the image and coin/bill count are of the given coin.
	//Returns the array index of the corresonding coin/bill.
	defineCoin(amount) {
		switch (amount) {
			case 0.01: this.currentCoinObject = "counter1cent"; return 0; break;
			case 0.02: this.currentCoinObject = "counter2cent"; return 1; break;
			case 0.05: this.currentCoinObject = "counter5cent"; return 2; break;
			case 0.10: this.currentCoinObject = "counter10cent"; return 3; break;
			case 0.20: this.currentCoinObject = "counter20cent"; return 4; break;
			case 0.50: this.currentCoinObject = "counter50cent"; return 5; break;
			case 1: this.currentCoinObject = "counter1euro"; return 6; break;
			case 2: this.currentCoinObject = "counter2euro"; return 7; break;
			case 5: this.currentCoinObject = "counter5euro"; return 8; break;
			case 10: this.currentCoinObject = "counter10euro"; return 9; break;
			case 20: this.currentCoinObject = "counter20euro"; return 10; break;
			case 50: this.currentCoinObject = "counter50euro"; return 11; break;
		}
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

}
