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
    let output = {
      id: newTodoItem.getId(),
      task: task,
      complete: false,
    };
    this.todoItemGateway.save(output);
    return output;
  }
}
