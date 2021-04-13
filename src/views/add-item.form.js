import { el, mount } from "redom";
export class AddItemForm {
  #dom;
  #header;
  #input;
  #button;
  constructor() {
    this.#dom = el("div#container", "AddItemForm");
    this.#header = el("h3#header", "Add item");
    this.#input = el("input#inpTitle");
    this.#button = el("button#btnAdd", "Add item");
    mount(this.#dom, this.#header);
    mount(this.#dom, this.#input);
    mount(this.#dom, this.#button);
    this.#button.addEventListener("click", this.onAddItemClicked);
  }
  get dom() {
    return this.#dom;
  }

  onAddItemClicked() {
    alert("Add new item logic here");
  }
}
