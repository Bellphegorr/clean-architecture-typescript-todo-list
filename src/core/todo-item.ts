import { randomUUID } from "crypto";

export class TodoItem {
  private id: string;

  constructor(private task: string, private complete: boolean = false) {
    this.id = randomUUID();
  }

  getId() {
    return this.id;
  }

  completeTask() {
    this.complete = true;
  }

  printDetails() {
    return `${this.task}${this.complete ? " (complete)" : ""}`;
  }
}
