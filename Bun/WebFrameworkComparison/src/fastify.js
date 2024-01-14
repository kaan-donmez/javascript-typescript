import Fastify from "fastify";
const fastify = Fastify({ logger: false });
const port = 3000;

fastify.get("/", (request, reply) => {
    return "Hello world!";
});

fastify.listen({ port }, () => { console.log(`Listening on port ${port}...`) });