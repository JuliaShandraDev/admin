const router = require("../../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-createProfile", () => {
  it("user-createProfile-succsses", async () => {
    const res = await request(app, router).patch("/createProfile").send({
      name: "Ivan",
      gender: "female",
      birthdate: "10.10.2010",
      city: "kyiv",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("updatedUser");
  });
});
