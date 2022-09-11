import { output } from "@/app/create-todo-item-use-case";
import { TodoItemGateway } from "@/core/todo-item-gateway";

export class TodoItemGatewayImpl implements TodoItemGateway {
  save(todoItem: output) {
    const todoItemToString = JSON.stringify(todoItem);
    const checkIfTodoItemExist = localStorage.getItem(todoItem.id);
    if (checkIfTodoItemExist) {
      return false;
    }
    localStorage.setItem(todoItem.id, todoItemToString);
    return true;
  }
}
