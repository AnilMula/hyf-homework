const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");
const reviewData = require("../data/reviews.json");

// a meal is large if it can serve more people fx.10 or more
const largeMeal = mealsData.filter((meal) => meal.max_reservations > 10);

//compare two json files to add reviews that matches a meal id
largeMeal.forEach((meal) => {
  //iterate over meals data
  const matchedReviewData = []; // a temporary array to hold review data when there is a match
  reviewData.forEach((review) => {
    //iterate over reviews data
    if (meal.id == review.meal_id) {
      //if the meal has a review
      matchedReviewData.push(review);
    }
    meal["reviews"] = matchedReviewData;
  });
});

app.get("/largeMeal", function (request, response) {
  response.send(largeMeal);
});

module.exports = app;
