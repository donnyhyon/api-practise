const Todo = require("./entities/Todo");

class TodoRepository {
  constructor() {
    this.todos = [];
  }
  createTodo(title, completed) {
    const newTodo = new Todo(title, completed);
    this.todos.push(newTodo);
    return newTodo;
  }
  getAllTodos() {
    return this.todos;
  }

  getByID(todoID) {
    const desiredTodo = this.todos.find((todo) => todo.id === todoID);
    return desiredTodo;
  }
}

module.exports = TodoRepository;
