const express = require("express");
const router = express.Router();
const mealsData = require("../data/meals.json");

router.get("/meals", function (request, response) {
  // to verify for empty object
  if (
    Object.keys(request.query).length === 0 &&
    request.query.constructor === Object
  ) {
    response.send(mealsData);
  } else if (request.query.maxPrice) {
    response.send(
      mealsData.filter((meal) => meal.price == prequest.query.maxPrice)
    );
  } else if (request.query.title) {
    response.send(
      mealsData.filter((meal) => meal.title.includes(`${request.query.title}`))
    );
  } else if (request.query.createdAfter) {
    response.send(
      mealsData.filter((meal) => meal.created_date > request.query.createdAfter)
    );
  } else if (request.query.limit) {
    const limit = Number(request.query.limit);
    const limitedMeals = [];
    for (let i = 0; i < limit; i++) {
      //get a random number
      const randomNumber = Math.floor(Math.random() * mealsData.length);

      limitedMeals.push(mealsData[randomNumber]);
    }
    response.send(limitedMeals);
  }
});

module.exports = router;
