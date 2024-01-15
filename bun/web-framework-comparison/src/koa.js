import koa from 'koa';

const app = new koa();
const port = 3000;

app.use(async ctx => {
    ctx.body = 'Hello World!';
}
);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});