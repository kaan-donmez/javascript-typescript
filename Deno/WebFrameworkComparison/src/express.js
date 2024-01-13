import express from "npm:express@4.18.2";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(3000);