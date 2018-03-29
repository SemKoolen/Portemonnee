class CashRegisterModel extends Observable {
	constructor() {
    super();
		this.reset();
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
	}

	checkAnswer(array){
		this.array = array;
		// for (let x = 0; x < this.array.length; x++) {
		//
		// }
		this.optimalAnswer();
	}

	optimalAnswer(){
		this.answerArray = [];
		this.price = this.productPrice;
		for (let x = 0; x < 11; x++) {
			this.answerArray[x] = 0;
		}
		console.log(this.answerArray.length);
		debugger;

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
		console.log(this.answerArray)

	}

}
