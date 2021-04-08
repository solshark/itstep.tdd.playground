import cuid from "cuid";

class Repository {
  #items;
  constructor() {
    this.#items = [];
  }
  get items() {
    return this.#items;
  }

  add(title) {
    const item = {
      id: cuid(),
      title: title,
    };
    this.#items.push(item);
    this.save();
    return item.id;
  }
  getById(id) {
    return this.#items.find((item) => item.id === id);
  }
  removeById(id) {
    this.#items = this.#items.filter((item) => item.id !== id);
    this.save();
  }
  save() {
    localStorage.setItem("items", JSON.stringify(this.#items));
  }
  restore() {
    this.#items = JSON.parse(localStorage.getItem("items"));
  }
}

export { Repository };
