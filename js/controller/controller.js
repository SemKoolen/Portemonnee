class Controller {
  constructor() {
    this.speler = new SpelerModel();
    this.kassa = new KassaModel();
    this.toonbank = new ToonbankModel();
    this.dobbelView = new EasyView(this.kassa, this.toonbank, this.speler);
    this.dobbelView = new HardView(this.kassa, this.toonbank, this.speler);
  }
}
