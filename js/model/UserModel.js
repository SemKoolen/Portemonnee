class UserModel extends Observable {
	constructor() {
    super();
    this.name ;
  }

  saveName() {
    this.name = document.getElementById("nameInput").value;
  }

  getName() {
    return this.name;
  }

}
