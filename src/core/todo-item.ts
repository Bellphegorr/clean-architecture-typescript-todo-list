export class TodoItem {
  constructor(
    private id: number,
    private task: string,
    private complete: boolean = false
  ) {}

  completeTask() {
    this.complete = true;
  }

  printDetails() {
    return `${this.id} ${this.task}${this.complete ? " (complete)" : ""}`;
  }
}
