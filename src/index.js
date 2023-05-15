const express = require("express");
const Todo = require("./entities/Todo"); //import is broken?  when running npm run dev
const TodoRepository = require("./todoRepository");
const app = express();
const port = 3000;
app.use(express.json());

// class Todo {
//   static counter = 0;
//   constructor(title, completed) {
//     this.id = ++Todo.counter;
//     this.title = title;
//     this.completed = completed;
//   }
// }

app.get("/todos", (req, res) => {
  res.status(201).json(todos);
});

app.post("/todos", (req, res) => {
  const { title, completed } = req.body;
  const newTodo = new Todo(title, completed);
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
