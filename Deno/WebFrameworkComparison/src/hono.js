import { Hono } from "npm:hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello World!"));

Deno.serve({ port: 3000 }, app.fetch);
