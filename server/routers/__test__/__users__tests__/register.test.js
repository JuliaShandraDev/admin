import { user } from "./testUser";
// const router = require("../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-register", () => {
  afterAll(() => {
    request(app).delete("/deleteProfile").send(user);
  });

  it("user-register-succsses", async () => {
    const res = await request(app).post("/registration").send(user);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("createdUser");
  });
});
