import cuid from "cuid";

class Repository {
  constructor() {
    this.items = [];
  }
  add(title) {
    const item = {
      id: cuid(),
      title: title,
    };
    this.items.push(item);
    return item.id;
  }
  getById(id) {
    return this.items.find((item) => item.id === id);
  }
}

export { Repository };
