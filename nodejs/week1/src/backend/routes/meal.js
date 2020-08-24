const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");

app.get("/randomMeal", function (request, response) {
  //get a random number
  const randomNumber = Math.floor(Math.random() * mealsData.length);

  response.send(mealsData[randomNumber]);
});

module.exports = app;
