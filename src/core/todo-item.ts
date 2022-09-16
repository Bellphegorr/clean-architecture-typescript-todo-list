export class TodoItem {
  private id: string;

  constructor(private task: string, private complete: boolean = false) {
    this.id = new Date().toISOString();
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
