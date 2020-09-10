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
    if (isNaN(Number(request.query.maxPrice))) {
      response.status(400).send(" id is not number");
    } else {
      response.send(
        mealsData.filter((meal) => {
          return meal.price < Number(request.query.maxPrice);
        })
      );
    }
  } else if (request.query.title) {
    response.send(
      mealsData.filter((meal) => meal.title.includes(`${request.query.title}`))
    );
  } else if (request.query.createdAfter) {
    if (isNaN(Date.parse(request.query.createdAfter))) {
      response.status(400).send(" date not parsable");
    } else {
      response.send(
        mealsData.filter(
          (meal) => meal.created_date < request.query.createdAfter
        )
      );
    }
  } else if (request.query.limit) {
    if (isNaN(Number(request.query.limit))) {
      response.status(400).send(" id is not number");
    } else {
      const limit = Number(request.query.limit);
      const limitedMeals = [];
      for (let i = 0; i < limit; i++) {
        limitedMeals.push(mealsData[i]);
      }
      response.send(limitedMeals);
    }
  }
});

module.exports = router;
