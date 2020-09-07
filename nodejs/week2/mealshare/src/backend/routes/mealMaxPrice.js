const express = require("express");
const router = express.Router();
const mealsData = require("../data/meals.json");

///meals?maxPrice=90
router.get("/meals", function (request, response) {
  console.log(request.query);
  response.send(mealsData.filter((meal) => meal.price > 100));
});

module.exports = router;
