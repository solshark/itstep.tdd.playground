import { Repository } from "./repository";
describe("Repository", () => {
  let repo;
  beforeEach(() => {
    repo = new Repository();
  });
  it("should init with empty items list", () => {
    expect.assertions(1);
    expect(repo.items).toStrictEqual([]);
  });
  describe("method add()", () => {
    it("should generate id for new item", () => {
      expect.assertions(2);
      const TITLE = "New item to buy";
      const id = repo.add(TITLE);
      expect(id).not.toBeFalsy();
      expect(repo.items.find((i) => i.id === id)).toBeTruthy();
    });
  });
});
