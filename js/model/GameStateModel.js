class GameStateModel extends Observable {
  constructor() {
    super();
    this.question = 1;

    // this.setQuestionNumbers();


  }

  // setQuestionNumbers() {

  // }

  setNewQuestion() {
    var request = new XMLHttpRequest();
    request.open("GET", "../../pom.xml", false);
    request.send();
    var xml = request.responseXML;

    x = xml.getElementsByTagName("Product")[0];
    y = x.childNodes[0];
    z = y.nodeValue;
    
  }

}