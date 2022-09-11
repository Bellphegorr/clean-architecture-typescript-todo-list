import { GatewayProtocol } from "@/core/gateway-adapter";
import { TodoItem } from "@/core/todo-item";
import { TodoItemGateway } from "@/core/todo-item-gateway";

export class TodoItemGatewayImpl implements TodoItemGateway {
  constructor(private gatewayProtocol: GatewayProtocol) {}
  save(todoItem: TodoItem) {
    try {
      this.gatewayProtocol.save(todoItem);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

describe("TodoItemGatewayImpl", () => {
  let mockGatewayProtocol: GatewayProtocol;

  it("should create an instance", () => {
    expect(new TodoItemGatewayImpl(mockGatewayProtocol)).toBeTruthy();
  });
});
