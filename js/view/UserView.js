class UserView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
    document.querySelector('.mainpage').style.display = "none";
    document.querySelector('.prepage').style.display = "block";
  }

  update() {
    super.update();
    this.updateButtons();
    this.checkStart();
  }

  checkStart() {
      if(this.model.getStartValue()){
        document.querySelector('.mainpage').style.display = "block";
        document.querySelector('.prepage').style.display = "none";
      } else if (document.querySelector('#playername').value == ""){
      document.querySelector('#startError').innerHTML = "Geen naam ingevoerd!";
    }
  }

  updateButtons() {
    let version = this.model.getVersion();
    if (version == "easy") {
      document.querySelector("#hard").classList.remove("active");
      document.querySelector("#easy").classList.add("active");
    } else if (version == "hard"){
      document.querySelector("#easy").classList.remove("active");
      document.querySelector("#hard").classList.add("active");
    }
  }

}
