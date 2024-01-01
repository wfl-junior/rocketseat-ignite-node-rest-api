import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Hello World";
});

const port = 3333;

app
  .listen({ port })
  .then(() => console.log(`Server running at http://localhost:${port}`));
