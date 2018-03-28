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
		if (this.payedStatus) {
			this.notify();
		}
	}

	saveProductPrice(price){
		this.productPrice = price;
	}

	saveAmountPayed(amount){
		this.amountPayed = amount;
	}

}
