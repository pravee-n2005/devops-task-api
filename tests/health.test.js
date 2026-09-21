const request = require("supertest");
const app = require("../src/app");

describe("Task API", () => {
  test("POST /tasks should require a title", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Title is required");
  });
});