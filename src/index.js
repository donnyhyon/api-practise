import express from "express";
import { Todo } from "./entities/Todo";

const app = express();
const port = 3000;
app.use(express.json());

let todos = [];

app.post("/todos", (req, res) => {
  const { title, completed } = req.body;
  const newTodo = new Todo(title, completed);
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export { app };
