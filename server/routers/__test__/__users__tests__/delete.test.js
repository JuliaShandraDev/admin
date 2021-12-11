// const router = require("../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-delete", () => {
  it("user-delete-succsses", async () => {
    const res = await request(app).delete("/deleteUser").send({
      name: "userName",
      email: "userEmail@gmail.com",
      password: "userPassword54321",
      isAdmin: true,
      profiles: [],
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("allUsers");
  });
});
