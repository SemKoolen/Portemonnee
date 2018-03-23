class UserModel extends Observable {
	constructor() {
    super();
		document.getElementById("easy").addEventListener("click", (e) => this.pressedEasy());
		document.getElementById("hard").addEventListener("click", (e) => this.pressedHard());
		document.getElementById("start").addEventListener("click", (e) => this.pressedStart());
    this.name ;
		this.version = "easy";
		this.startValue = false;
  }

	pressedStart() {
		this.startValue = true;
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

	getStartValue() {
		return this.startValue;
	}

	getVersion() {
		return this.version;
	}

  getName() {
    return this.name;
  }

}
