import { AddItemForm } from "./add-item.form";
let form;

beforeEach(() => {
  form = new AddItemForm();
  document.body.innerHTML = "";
  document.body.append(form.dom);
});
describe("AddItemForm", () => {
  it("should create", () => {
    expect.assertions(1);

    expect(form).toBeTruthy();
  });

  describe("Layout", () => {
    it("should render div#container", () => {
      expect.assertions(1);

      const container = document.getElementById("container");
      expect(container).toBeTruthy();
    });
    it("should render h3#header", () => {
      expect.assertions(1);
      const header = document.getElementById("header");
      expect(header).toBeTruthy();
    });
    it("should render input for title", () => {
      expect.assertions(1);
      const input = document.getElementById("inpTitle");
      expect(input).toBeTruthy();
    });
    it("should render button", () => {
      expect.assertions(1);
      const button = document.getElementById("btnAdd");
      expect(button).toBeTruthy();
    });
  });
  describe("btnAdd", () => {
    it("should call onItemAdded() method if clicked", () => {
      expect.assertions(1);
      document.body.innerHTML = "";

      const clickSpy = jest
        .spyOn(AddItemForm.prototype, "onAddItemClicked")
        .mockImplementation(() => {
          return true;
        });
      const f = new AddItemForm();
      document.body.append(f.dom);
      const button = document.getElementById("btnAdd");
      button.click();
      expect(clickSpy).toBeCalled();
    });
  });
});
