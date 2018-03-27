class GameStateModel extends Observable {
  constructor() {
    super();
    this.question = 1;

    // this.setQuestionNumbers();


  }

  // setQuestionNumbers() {

  // }

  setNewQuestion() {
    let random = Math.floor(Math.random() * 25);
    var request = new XMLHttpRequest();
    request.open("GET", "pom.xml", false);
    request.setRequestHeader("Content-Type", "text/xml");
    request.send(null);
    let xml = request.responseXML;
    let products = xml.childNodes[0];
    let product = products.children[random];

   // Access each of the data values.
   let Id    = product.getElementsByTagName("Product_id")[0].childNodes[0].nodeValue;
   let Name  = product.getElementsByTagName("Product_name")[0].childNodes[0].nodeValue;
   let Price = product.getElementsByTagName("Product_price")[0].childNodes[0].nodeValue;
   let Image = product.getElementsByTagName("Product_picture")[0].childNodes[0].nodeValue;
   console.log(Id + ": " + Name + " " + Price + " " + Image);

  }

}
