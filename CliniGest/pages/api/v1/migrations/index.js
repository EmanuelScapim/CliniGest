import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "/infra/database.js";

export default async function migrations(req, res) {
  const metodosPermitidos = ["GET", "POST"];
  if (!metodosPermitidos.includes(req.method)) {
    return res.status(405).json({
      error: `Método ${req.json} inválido`,
    });
  }

  let dbClient;
  try {
    dbClient = await database.getNovoClient();
    const OpcoesPadroesMigration = {
      dbClient: dbClient,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };
    if (req.method === "GET") {
      const migrationsPendentes = await migrationRunner(OpcoesPadroesMigration);
      return res.status(200).json(migrationsPendentes);
    }
    if (req.method === "POST") {
      const migrationsMigradas = await migrationRunner({
        ...OpcoesPadroesMigration,
        dryRun: false,
      });
      if (migrationsMigradas.length > 0) {
        return res.status(201).json(migrationsMigradas);
      }
      return res.status(200).json(migrationsMigradas);
    }
  } catch {
    console.error(error);
    throw new error(error);
  } finally {
    await dbClient.end();
  }
  return res.status(405).end();
}
