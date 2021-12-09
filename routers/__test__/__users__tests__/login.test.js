// const router = require("../../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-login", () => {
  it("user-login-succsses", async () => {
    const res = await request(app).post("/login").send({
      name: "userName",
      password: "userPassword54321",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("createdUser");
  });
});
