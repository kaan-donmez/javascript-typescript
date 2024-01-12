import Router from "@koa/router";
import Koa from "koa";

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "Hello World!";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
