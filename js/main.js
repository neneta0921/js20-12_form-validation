document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    this.validate = new Validate();
  }
}
