//import all from core
import { CreateTodoItemUseCase } from "@/app/create-todo-item-use-case";
import { TodoItemGatewayImpl } from "@/interface/todo-item-gateway-impl";

class Main {
  createTodoItemUseCase: CreateTodoItemUseCase;

  constructor() {
    const todoItemGateway = new TodoItemGatewayImpl();
    this.createTodoItemUseCase = new CreateTodoItemUseCase(todoItemGateway);
  }

  exportCreateTodoItemUseCase() {
    return this.createTodoItemUseCase;
  }
}

export const main = new Main();
