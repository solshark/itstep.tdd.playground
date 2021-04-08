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
    return item.id;
  }
  getById(id) {
    return this.#items.find((item) => item.id === id);
  }
  removeById(id) {
    this.#items = this.#items.filter((item) => item.id !== id);
  }
}

export { Repository };
