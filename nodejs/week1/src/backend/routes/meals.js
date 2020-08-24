const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");
//const meals = JSON.parse(mealsData);

app.get("/meals", function (request, response) {
  response.send(mealsData);
});

module.exports = app;
