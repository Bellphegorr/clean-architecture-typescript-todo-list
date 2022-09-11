import { TodoItemGatewayImpl } from "@/interface/todo-item-gateway-impl";
import { output } from "@/app/create-todo-item-use-case";

describe("TodoItemGatewayImpl", () => {
  it("should create an instance", () => {
    expect(new TodoItemGatewayImpl()).toBeTruthy();
  });
});
