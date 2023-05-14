export class Todo {
  static counter = 0;
  constructor(title, completed) {
    this.id = ++Todo.counter;
    this.title = title;
    this.completed = completed;
  }
}
