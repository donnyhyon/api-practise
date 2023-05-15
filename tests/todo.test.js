const Todo = require("../src/entities/Todo");

describe("Todo tests", () => {
  it("should instatniate todo", () => {
    Todo.counter = 0;
    const newTodo = new Todo();
    expect(newTodo.id).toBe(1);
  });
});
