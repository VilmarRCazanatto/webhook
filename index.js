import express from "express";

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.sendStatus(200);
});

app.listen(8080, (err) => {
  console.log("Server runnig...");
  console.log(err ?? "Sem erros");
});
