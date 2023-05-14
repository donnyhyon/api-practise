import request from "supertest";
import { app } from "../src";

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
