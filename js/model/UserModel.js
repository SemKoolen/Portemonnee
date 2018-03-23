class UserModel extends Observable {
	constructor() {
    super();
		// document.getElementById("easy").addEventListener("click", (e) => this.pressedEasy());
		// document.getElementById("hard").addEventListener("click", (e) => this.pressedHard());
		// document.getElementById("start").addEventListener("click", (e) => this.pressedStart());
    this.name ;
		this.version = "hard";
  }

	pressedStart() {

	}

	clearInputValue(field) {
		this.inputField = field;
		this.notify();
	}

  saveName() {
    this.name = document.getElementById("playername").value;
  }

	pressedEasy() {
		this.version = "easy";
		this.notify();
	}

	pressedHard() {
		this.version = "hard";
		this.notify();
	}

	getInputField() {
		return this.inputField;
	}

	getVersion() {
		return this.version;
	}

  getName() {
    return this.name;
  }

}
