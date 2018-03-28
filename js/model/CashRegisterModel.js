class CashRegisterModel extends Observable {
	constructor() {
    super();
		this.reset();
  }

	reset(){
		this.changePayedStatus(false);
	}

	changePayedStatus(status){
		this.payedStatus = status;
	}

	savePrice(){
		
	}

	saveAmountPayed(){

	}

	getPayedStatus(){
		return this.payedStatus;
	}

	getPrice(){

	}

	getAmountPayed(){

	}

}
