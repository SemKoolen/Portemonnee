class Controller {
  constructor() {
    this.kassa = new KassaModel();
    this.toonbank = new ToonbankModel();
    this.dobbelView = new EasyView(this.kassa, this.toonbank);
    this.dobbelView = new HardView(this.kassa, this.toonbank);
  }
}
