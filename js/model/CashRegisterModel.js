class CashRegisterModel extends Observable {
	constructor() {
    super();
		this.reset();
		this.answerArray = [];
  }

	reset(){
		this.changePayedStatus(false);
		this.notify();
	}

	changePayedStatus(status){
		this.payedStatus = status;
		this.notify();
	}

	saveProductPrice(price){
		this.productPrice = price;
	}

	saveAmountPayed(amount){
		this.amountPayed = amount;
		let decimals = this.decimals(amount);
		if (decimals !== 2){
			if (decimals == 0) { this.amountPayed += ".00"};
			if (decimals == 1) { this.amountPayed += "0"};
		}
	}

	checkAnswer(array){
		this.array = array;
		this.optimalAnswer();
		console.log(this.answerArray);
		console.log(this.array);
		//checks if the arrays are equal.
		if (JSON.stringify(this.array) === JSON.stringify(this.answerArray)) {
			console.log("Perfect");
			this.result = "Perfect";
		} else if (this.amountPayed == this.productPrice){
			console.log("Voldoende");
			this.result = "Voldoende";
		} else {
			console.log("Fout");
			this.result = "Fout";
		}
		this.notify();
	}

	optimalAnswer(){
		this.answerArray = [];
		this.price = this.productPrice;
		for (let x = 0; x < 11; x++) {
			this.answerArray[x] = 0;
		}

		while (this.price > 0) {
			switch(true) {
				case (this.price >= 50):   this.price -= 50;   this.answerArray[11]++; break;
				case (this.price >= 20):   this.price -= 20;   this.answerArray[10]++; break;
				case (this.price >= 10):   this.price -= 10;   this.answerArray[9]++; break;
				case (this.price >= 5):    this.price -= 5;    this.answerArray[8]++; break;
				case (this.price >= 2):    this.price -= 2;    this.answerArray[7]++; break;
				case (this.price >= 1):    this.price -= 1;    this.answerArray[6]++; break;
				case (this.price >= 0.5):  this.price -= 0.5;  this.answerArray[5]++; break;
				case (this.price >= 0.2):  this.price -= 0.2;  this.answerArray[4]++; break;
				case (this.price >= 0.1):  this.price -= 0.1;  this.answerArray[3]++; break;
				case (this.price >= 0.05): this.price -= 0.05; this.answerArray[2]++; break;
				case (this.price >= 0.02): this.price -= 0.02; this.answerArray[1]++; break;
				case (this.price >= 0.01): this.price -= 0.01; this.answerArray[0]++; break;
			}
			this.price = Math.round(this.price * 100) / 100;
		}
	}

	decimals(num) {
		var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
		if (!match) { return 0; }
		return Math.max(
	     0,
	     // Number of digits right of decimal point.
	     (match[1] ? match[1].length : 0)
	     // Adjust for scientific notation.
	     - (match[2] ? +match[2] : 0));
	}

}
