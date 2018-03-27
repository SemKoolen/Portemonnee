class GameView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }
}