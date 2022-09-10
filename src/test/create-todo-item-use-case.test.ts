import { TodoItem } from "@/core/todo-item";
import { TodoItemGateway } from "@/core/todo-item-gateway";

class TodoItemGatewayImpl implements TodoItemGateway {}

class CreateTodoItemUseCase {
  constructor(private todoItemGateway: TodoItemGateway) {}

  execute(task: string = "") {
    return new TodoItem(1, task);
  }
}

describe("CreateTodoItemUseCase", () => {
  it("should create an instance", () => {
    expect(new CreateTodoItemUseCase(new TodoItemGatewayImpl())).toBeTruthy();
  });

  it("should create a todo item", () => {
    let useCase = new CreateTodoItemUseCase(new TodoItemGatewayImpl());
    let todoItem = useCase.execute();
    expect(todoItem.printDetails()).not.toBeNull();
  });

  it("should create a todo item with task argument", () => {
    let useCase = new CreateTodoItemUseCase(new TodoItemGatewayImpl());
    let task = "Buy Cheese";
    let todoItem = useCase.execute(task);
    expect(todoItem.printDetails()).toEqual("1 Buy Cheese");
  });
});
