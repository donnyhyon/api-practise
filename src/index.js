const express = require("express");
const Todo = require("./entities/Todo"); //import is broken?  when running npm run dev
const TodoRepository = require("./Repository/todoRepository");
const app = express();
const port = 3000;
app.use(express.json());

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
