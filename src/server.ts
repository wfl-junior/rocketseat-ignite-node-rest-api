import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/", async () => {
  const tables = await knex("sqlite_schema").select("*");

  return tables;
});

const port = 3333;

app
  .listen({ port })
  .then(() => console.log(`Server running at http://localhost:${port}`));
