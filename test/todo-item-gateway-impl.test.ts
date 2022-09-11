import { GatewayProtocol } from "@/core/gateway-adapter";
import { TodoItem } from "@/core/todo-item";
import { TodoItemGateway } from "@/core/todo-item-gateway";

export class TodoItemGatewayImpl implements TodoItemGateway {
  constructor(private gatewayAdapter: GatewayProtocol) {}
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
  let mockGatewayProtocol: GatewayProtocol = {
    save: jest.fn(),
  };

  it("should create an instance", () => {
    expect(new TodoItemGatewayImpl(mockGatewayProtocol)).toBeTruthy();
  });

  it("should save a todo item", () => {
    const todoItemGateway = new TodoItemGatewayImpl(mockGatewayProtocol);
    const todoItem = new TodoItem("Test", false);
    const result = todoItemGateway.save(todoItem);
    expect(result).toBe(true);
  });
});
