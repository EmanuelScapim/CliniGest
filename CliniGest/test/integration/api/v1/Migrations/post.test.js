import database from "infra/database.js";

beforeAll(limpaDatabase);
async function limpaDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

test("Espera que o POST migrations retorne 200", async () => {
  const res1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(res1.status).toBe(201);

  const responseBody = await res1.json();
  expect(Array.isArray(responseBody)).toBe(true);

  const res2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  const responseBody2 = await res2.json();
  expect(responseBody2.length).toBe(0);
  expect(Array.isArray(responseBody2));
});
