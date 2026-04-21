import database from "infra/database.js";

beforeAll(limpaDatabase);
async function limpaDatabase() {
  await database.query("drop schema public cascade; create schema public");
}
test("Espera que o GET migrations retorne 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migrations");
  expect(res.status).toBe(200);

  const responseBody = await res.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
