import Fastify from "fastify";
const fastify = Fastify({ logger: false });

fastify.get("/", (request, reply) => {
  return "Hello World";
});

fastify.listen({ port: 3000 });
