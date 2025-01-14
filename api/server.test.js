// Write your tests here
const db = require("../data/dbConfig");
const request = require("supertest");
const server = require("./server");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("users").truncate();
});

test("sanity", () => {
  expect(true).toBe(true);
});

describe("[Get] /api/jokes", () => {
  test("should return a 401 status for not having token", async () => {
    const res = await request(server).get("/api/jokes/");
    expect(res.status).toBe(401);
  });
});
