//import all from core
import { CreateTodoItemUseCase } from "@/app/create-todo-item-use-case";
import { TodoItemGatewayImpl } from "@/interface/todo-item-gateway-impl";
import { TodoItemCreateController } from "@/interface/todo-item-create-controller";

class Main {
  createTodoItemUseCase: CreateTodoItemUseCase;
  createTodoItemController: TodoItemCreateController;

  constructor() {
    const todoItemGateway = new TodoItemGatewayImpl();
    this.createTodoItemUseCase = new CreateTodoItemUseCase(todoItemGateway);
    this.createTodoItemController = new TodoItemCreateController(
      this.createTodoItemUseCase
    );
  }
}
