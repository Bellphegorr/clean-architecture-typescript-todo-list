import { TodoItem } from "../core/todo-item";

describe("TodoItem", () => {
  it("should create an instance", () => {
    expect(new TodoItem(1, "Buy Milk")).toBeTruthy();
  });

  it("check if message of non completed todo was made correctly", () => {
    let todo = new TodoItem(1, "Buy Milk");
    expect(todo.printDetails()).toEqual("1 Buy Milk");
  });

  it("check if message of completed todo was made correctly", () => {
    let todo = new TodoItem(1, "Buy Milk", true);
    expect(todo.printDetails()).toEqual("1 Buy Milk (complete)");
  });
});
