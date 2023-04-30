export default class Dor {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(number: number, hasGift = false, selected = false, open = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get open() {
    return this.#open;
  }

  switchSelected() {
    const selected = !this.selected;
    return new Dor(this.number, this.hasGift, selected, this.open);
  }
  unSelect() {
    const selected = false;
    return new Dor(this.number, this.hasGift, selected, this.open);
  }
  openDor() {
    const open = true;
    return new Dor(this.number, this.hasGift, this.selected, open);
  }
}
