import { TodoItem } from "@/core/todo-item";
import { TodoItemGateway } from "@/core/todo-item-gateway";

export type output = {
  id: string;
  task: string;
  complete: boolean;
};

export class CreateTodoItemUseCase {
  constructor(private todoItemGateway: TodoItemGateway) {}

  execute(task: string = ""): output {
    let newTodoItem = new TodoItem(task, false);
    this.todoItemGateway.save(newTodoItem);
    return {
      id: newTodoItem.getId(),
      task: task,
      complete: false,
    };
  }
}
