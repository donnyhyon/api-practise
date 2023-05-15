const request = require("supertest");
const app = require("../src");
const Todo = require("../src/entities/Todo");

describe("POST /todos", () => {
  it("should create a new todo item", async () => {
    const response = await request(app).post("/todos").send({
      title: "create api",
      completed: false,
    });
    expect(response.status).toBe(201);
    expect(response.body.title).toBe("create api");
    expect(response.body.completed).toBe(false);
    expect(response.body.id).toBeDefined();
  });
});

describe("GET /todos", () => {
  let todos = []; //where is best place to put this?
  Todo.counter = 0;
  it("should retrieve all todo items", async () => {
    todos.push(new Todo("create api", false));
    todos.push(new Todo("practise api", false));
    todos.push(new Todo("refactor api", false));
    todos.push(new Todo("complete api", false));

    const response = await request(app).get("/todos");
    console.log(response.body);
    expect(response.status).toBe(201);
    expect(response.body).toBe(4);
  });
});
