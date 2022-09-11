import { TodoItem } from "./todo-item";

export interface GatewayProtocol {
  save(todoItem: TodoItem): void;
}
