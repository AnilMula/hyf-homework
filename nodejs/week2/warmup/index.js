const express = require("express");
const app = express();
const port = 3000;

app.get("/numbers/add", (req, res) => {
  const sum = Number(req.query.first) + Number(req.query.second);
  res.send(`Addition of ${req.query.first} and ${req.query.second} is` + sum);
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
  res.send(
    `Multiplication of ${req.params.first} and ${req.params.second} is` +
      parseInt(req.params.first) * parseInt(req.params.second)
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
