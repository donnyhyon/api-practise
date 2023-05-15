const request = require("supertest");
const app = require("../src");
const Todo = require("../src/entities/Todo");
const TodoRepository = require("../src/Repository/todoRepository");

describe("POST /todos", () => {
  const todoRepo = new TodoRepository();
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
  describe("GET /todos", () => {
    it("should retrieve all todo items", async () => {
      const todoRepo = new TodoRepository();
      todoRepo.createTodo("create api", false);
      todoRepo.createTodo("create api", false);
      todoRepo.createTodo("create api", false);
      todoRepo.createTodo("create api", false);

      const response = await request(app).get("/todos");
      expect(response.status).toBe(201);
      expect(response.body).toBe(4);
    });
  });
});
