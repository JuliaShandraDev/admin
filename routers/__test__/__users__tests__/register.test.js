// const router = require("../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-register", () => {
  afterAll(() => {
    request(app).delete("/deleteProfile").send({});
  });

  it("user-register-succsses", async () => {
    const res = await request(app).post("/registration").send({
      name: "userName",
      email: "userEmail@gmail.com",
      password: "userPassword54321",
      isAdmin: true,
      profiles: [],
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("createdUser");
  });
});
