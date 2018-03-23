class UserView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    super.update();
    this.updateButtons();
    this.clearInputField();
  }

  updateButtons() {
    let version = this.model.getVersion();
    if (version == "easy") {
      document.getElementById("easyButton").style.backgroundColor = "LightGreen";
      document.getElementById("hardButton").style.backgroundColor = "Red";
    } else if (version == "hard"){
      document.getElementById("hardButton").style.backgroundColor = "LightGreen";
      document.getElementById("easyButton").style.backgroundColor = "Red";
    }
  }

  clearInputField() {
    let field = this.model.getInputField();
    if (document.getElementById(field).value == "Voornaam" || document.getElementById(field).value == "Achternaam") {
      document.getElementById(field).value = "";
    }
   }

}
