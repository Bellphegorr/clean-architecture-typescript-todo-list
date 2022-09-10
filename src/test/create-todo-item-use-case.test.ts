import { TodoItem } from "@/core/todo-item";
import { TodoItemGateway } from "@/core/todo-item-gateway";

class CreateTodoItemUseCase {
  constructor(private todoItemGateway: TodoItemGateway) {}

  execute(task: string = "") {
    let todoItemId = this.todoItemGateway.save(task);
    return todoItemId;
  }
}

describe("CreateTodoItemUseCase", () => {
  let mockTodoItemGateway: TodoItemGateway = {
    save: jest.fn(),
  };

  it("should create an instance", () => {
    expect(new CreateTodoItemUseCase(mockTodoItemGateway)).toBeTruthy();
  });

  it("should create a todo item", () => {
    let useCase = new CreateTodoItemUseCase(mockTodoItemGateway);
    let todoItemId = useCase.execute();
    expect(todoItemId).not.toBeNull();
  });

  it("should call todoItemGateway.save", () => {
    let useCase = new CreateTodoItemUseCase(mockTodoItemGateway);
    let task = "Buy Cheese";
    useCase.execute(task);
    expect(mockTodoItemGateway.save).toBeCalledWith(task);
  });

  it("should return a todo item with the correct id", () => {
    let useCase = new CreateTodoItemUseCase(mockTodoItemGateway);
    (mockTodoItemGateway.save as jest.Mock)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2);
    let receivedTodoItem = useCase.execute();
    let receivedTodoItem2 = useCase.execute();
    expect(receivedTodoItem).toEqual(1);
    expect(receivedTodoItem2).toEqual(2);
  });
});
