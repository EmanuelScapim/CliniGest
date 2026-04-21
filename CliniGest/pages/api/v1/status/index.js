import database from "/infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResults = await database.query("SHOW server_version");
  const databaseVersionValue = databaseVersionResults.rows[0].server_version;

  const conexoesMaximasVisualizacao = await database.query(
    "SHOW max_connections",
  );
  const conexoesMaximasResultado =
    conexoesMaximasVisualizacao.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const conexoesAbertasNoBandoDeDados = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const conexoesAbertasNoBancoDeDadosResultado =
    conexoesAbertasNoBandoDeDados.rows[0].count;

  res.status(200).json({
    atualizadoEm: updatedAt,
    dependecies: {
      database: {
        versaoBd: databaseVersionValue,
        conexao_maxima: parseInt(conexoesMaximasResultado),
        conexoes_abertas: conexoesAbertasNoBancoDeDadosResultado,
      },
    },
  });
}

export default status;
