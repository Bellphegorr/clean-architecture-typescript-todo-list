import { output } from "@/app/create-todo-item-use-case";

export interface TodoItemGateway {
  save(todoItem: output): boolean;
}
