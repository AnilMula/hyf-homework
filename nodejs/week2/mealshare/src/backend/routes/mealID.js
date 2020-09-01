const express = require("express");
const app = express();
const mealsData = require("../data/meals.json");

app.get("/meals/:id", function (request, response) {
  response.send(mealsData.filter((meal) => meal.id == request.params.id));
});

module.exports = app;
