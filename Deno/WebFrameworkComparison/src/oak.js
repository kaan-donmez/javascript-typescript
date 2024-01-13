import { Application } from "https://deno.land/x/oak@v12.6.2/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 3000 });