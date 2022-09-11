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
