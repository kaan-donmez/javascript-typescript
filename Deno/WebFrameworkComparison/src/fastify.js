import Fastify from "npm:fastify";
const fastify = Fastify({ logger: false });

fastify.get("/", () => {
  return "Hello World!";
});

fastify.listen({ port: 3000 });