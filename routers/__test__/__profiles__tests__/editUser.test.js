const router = require("../../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-editUser", () => {
  it("user-editUser-succsses", async () => {
    const res = await request(app, router).patch("/editUser").send({
      name: "",
      gender: "",
      birthdate: "",
      city: "",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("updatedUser");
  });
});
