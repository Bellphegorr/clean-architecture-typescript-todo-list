import { CreateTodoItemUseCase } from "@/app/create-todo-item-use-case";
import { TodoItemCreateController } from "@/interface/todo-item-create-controller";
import { TodoItemGateway } from "@/core/todo-item-gateway";

describe("TodoItemGatewayImpl", () => {
  const mockTodoItemGateway: TodoItemGateway = {
    save: jest.fn(),
  };

  it("should create an instance", () => {
    expect(
      new TodoItemCreateController(
        new CreateTodoItemUseCase(mockTodoItemGateway)
      )
    ).toBeTruthy();
  });

  it("should call save method", () => {
    const todoItemCreateController = new TodoItemCreateController(
      new CreateTodoItemUseCase(mockTodoItemGateway)
    );
    todoItemCreateController.createTodoItem("test");
    expect(mockTodoItemGateway.save).toHaveBeenCalled();
  });

  it("should call save method with correct params", () => {
    const todoItemCreateController = new TodoItemCreateController(
      new CreateTodoItemUseCase(mockTodoItemGateway)
    );
    todoItemCreateController.createTodoItem("test");
    expect(mockTodoItemGateway.save).toHaveBeenCalledWith({
      id: expect.any(String),
      task: "test",
      complete: false,
    });
  });

  it("should console.log output", () => {
    const todoItemCreateController = new TodoItemCreateController(
      new CreateTodoItemUseCase(mockTodoItemGateway)
    );
    console.log = jest.fn();
    todoItemCreateController.createTodoItem("test");
    expect(console.log).toHaveBeenCalledWith({
      id: expect.any(String),
      task: "test",
      complete: false,
    });
  });

  it("should return output", () => {
    const todoItemCreateController = new TodoItemCreateController(
      new CreateTodoItemUseCase(mockTodoItemGateway)
    );
    expect(todoItemCreateController.createTodoItem("test")).toEqual({
      id: expect.any(String),
      task: "test",
      complete: false,
    });
  });
});
