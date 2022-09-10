import { TodoItem } from "@/core/todo-item";
import { TodoItemGateway } from "@/core/todo-item-gateway";

type output = {
  id: string;
  task: string;
  complete: boolean;
};

class CreateTodoItemUseCase {
  constructor(private todoItemGateway: TodoItemGateway) {}

  execute(task: string = ""): output {
    let newTodoItem = new TodoItem(task, false);
    this.todoItemGateway.save(newTodoItem);
    return {
      id: newTodoItem.getId(),
      task: task,
      complete: false,
    };
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
    expect((mockTodoItemGateway.save as jest.Mock).mock.calls.length).toBe(1);
  });

  it("should call todoItemGateway.save with correct parameters", () => {
    let useCase = new CreateTodoItemUseCase(mockTodoItemGateway);
    let task = "Buy Cheese";
    let { id } = useCase.execute(task);
    expect((mockTodoItemGateway.save as jest.Mock).mock.calls[0][0]).toEqual({
      complete: false,
      id: id,
      task: "Buy Cheese",
    });
  });
});
