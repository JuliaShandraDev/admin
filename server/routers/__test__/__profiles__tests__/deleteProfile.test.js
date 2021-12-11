const router = require("../../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-deleteProfile", () => {
  it("user-deleteProfile-succsses", async () => {
    const res = await request(app, router)
      .delete("/deleteProfile")
      .send({ id: "profiles" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("updatedUser");
  });
});
