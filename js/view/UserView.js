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
    if (document.querySelector('#playername').value !== "") {
      if(this.model.getStartValue()){
        document.querySelector('.mainpage').style.display = "block";
        document.querySelector('.prepage').style.display = "none";
        this.reload_js('Controller.js');
      }
    } else {
      document.querySelector('#startError').innerHTML = "Geen naam ingevoerd!";
    }
  }

  reload_js(src) {
    ('script[src="' + src + '"]').remove();
    ('<script>').attr('src', src).appendTo('head');
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
