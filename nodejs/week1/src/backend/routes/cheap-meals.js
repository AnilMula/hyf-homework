//Respond with the json for all the meals
//(including it's reviews) that are cheap (you define what a cheap meal is)

const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");

// if the price of meal is below 85 then it is cheap meal
const cheapMeal = mealsData.filter((meal) => meal.price < 85);

app.get("/cheapMeal", function (request, response) {
  response.send(cheapMeal);
});

module.exports = app;
