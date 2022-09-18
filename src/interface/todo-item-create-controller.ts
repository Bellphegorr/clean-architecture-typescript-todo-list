import { CreateTodoItemUseCase } from "@/app/create-todo-item-use-case";

export class TodoItemCreateController {
  createTodoItemUseCase: CreateTodoItemUseCase;

  constructor(createTodoItemUseCase: CreateTodoItemUseCase) {
    this.createTodoItemUseCase = createTodoItemUseCase;
  }

  createTodoItem(title: string) {
    const outputTodoItem = this.createTodoItemUseCase.execute(title);
    console.log(outputTodoItem);
    return outputTodoItem;
  }
}
