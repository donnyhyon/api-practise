import express from "express";
import Todo from "./entities/Todo"; //import is broken?  when running npm run dev

const app = express();
const port = 3000;
app.use(express.json());

let todos = [];
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

export { app };
