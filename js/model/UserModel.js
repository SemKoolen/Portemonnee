class UserModel extends Observable {
	constructor() {
    super();
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
		if (document.querySelector('#playername').value !== "") {
			return this.startValue;
		}
	}

	getVersion() {
		return this.version;
	}

  getName() {
    return this.name;
  }

}
