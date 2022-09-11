import { TodoItem } from "@/core/todo-item";

describe("TodoItem", () => {
  it("should create an instance", () => {
    expect(new TodoItem("Buy Milk")).toBeTruthy();
  });

  it("check if message of non completed todo was made correctly", () => {
    let todo = new TodoItem("Buy Milk");
    expect(todo.printDetails()).toEqual("Buy Milk");
  });

  it("check if message of completed todo was made correctly", () => {
    let todo = new TodoItem("Buy Milk", true);
    expect(todo.printDetails()).toEqual("Buy Milk (complete)");
  });
});
