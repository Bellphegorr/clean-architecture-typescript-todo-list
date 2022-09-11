import { GatewayProtocol as GatewayAdapter } from "@/core/gateway-adapter";
import { TodoItem } from "@/core/todo-item";
import { TodoItemGateway } from "@/core/todo-item-gateway";

export class TodoItemGatewayImpl implements TodoItemGateway {
  constructor(private gatewayAdapter: GatewayAdapter) {}
  save(todoItem: TodoItem) {
    try {
      debugger;
      this.gatewayAdapter.save(todoItem);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

describe("TodoItemGatewayImpl", () => {
  const mockGatewayAdapter: GatewayAdapter = {
    save: jest.fn(),
  };

  it("should create an instance", () => {
    expect(new TodoItemGatewayImpl(mockGatewayAdapter)).toBeTruthy();
  });

  it("should save a todo item", () => {
    const todoItemGateway = new TodoItemGatewayImpl(mockGatewayAdapter);
    const todoItem = new TodoItem("Test", false);
    const result = todoItemGateway.save(todoItem);
    expect(result).toBe(true);
  });

  it("should not save a todo item", () => {
    const mockGatewayAdapterWithError: GatewayAdapter = {
      save: jest.fn(() => {
        throw new Error("Error");
      }),
    };
    const todoItemGateway = new TodoItemGatewayImpl(
      mockGatewayAdapterWithError
    );
    const todoItem = new TodoItem("Test", false);
    const result = todoItemGateway.save(todoItem);
    expect(result).toBe(false);
  });
});
