const TodoRepository = require("../src/todoRepository");
const Todo = require("../src/entities/Todo");

describe("Todo repo tests", () => {
  beforeEach(() => {
    Todo.counter = 0;
  });
  it("should create an in memory todo list", () => {
    const todoRepo = new TodoRepository();
    const result = todoRepo.getAllTodos();
    expect(result).toEqual([]);
  });

  it("should add a todo item to the array", () => {
    const todoRepo = new TodoRepository();
    todoRepo.createTodo("new todo", false);
    const result = todoRepo.getAllTodos();
    expect(result.length).toEqual(1);
    expect(result[0].title).toEqual("new todo");
  });

  it("should get specific todo by ID", () => {
    const todoRepo = new TodoRepository();
    todoRepo.createTodo("first todo", false);
    todoRepo.createTodo("second todo", false);
    console.log(todoRepo.getAllTodos());
    const result = todoRepo.getByID(2);
    expect(result.title).toEqual("second todo");
  });
});
