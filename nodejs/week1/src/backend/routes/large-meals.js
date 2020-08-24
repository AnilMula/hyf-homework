const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");

// a meal is large if it can serve more people fx.10 or more
const largeMeal = mealsData.filter((meal) => meal.max_reservations > 10);

app.get("/largeMeal", function (request, response) {
  response.send(largeMeal);
});

module.exports = app;
