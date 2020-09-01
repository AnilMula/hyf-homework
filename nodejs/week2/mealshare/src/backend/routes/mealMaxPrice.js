const express = require("express");
const app = express();
const mealsData = require("../data/meals.json");

///meals?maxPrice=90
app.get("/meals", function (request, response) {
  console.log(request.query);
  response.send(mealsData.filter((meal) => meal.price > 100));
});

module.exports = app;
