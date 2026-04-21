test("Espera que a pagina de status retorne 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();

  const parseUpdatedAt = new Date(responseBody.atualizadoEm).toISOString();
  expect(responseBody.atualizadoEm).toEqual(parseUpdatedAt);

  expect(responseBody.dependecies.database.versaoBd).toEqual("16.13");
  expect(responseBody.dependecies.database.conexao_maxima).toEqual(100);
  expect(responseBody.dependecies.database.conexoes_abertas).toEqual(1);
});
