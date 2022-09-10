import { TodoItem } from "./todo-item";

export interface TodoItemGateway {
  save(todoItem: TodoItem): number;
}
