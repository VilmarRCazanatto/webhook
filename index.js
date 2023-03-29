import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req);

  res.sendStatus(200);
});

app.listen(80, (err) => {
  console.log("Server runnig...");
  console.log(err ?? "Sem erros");
});
