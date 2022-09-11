import { GatewayProtocol as GatewayAdapter } from "@/core/gateway-adapter";
import { TodoItem } from "@/core/todo-item";
import { TodoItemGatewayImpl } from "@/interface/todo-item-gateway-impl";

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
