import { TodoItem } from "./todo-item";

export interface TodoItemGateway {
  save(task: string): number;
}
