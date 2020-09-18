const express = require("express");
const app = express();
const port = 3000;
const calculator = require("./calculator/calculator");

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use("/calculator", calculator);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
