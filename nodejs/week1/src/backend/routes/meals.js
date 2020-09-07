const express = require("express");
const router = express.Router();

const mealsData = require("../data/meals.json");
const reviewData = require("../data/reviews.json");

//compare two json files to add reviews that matches a meal id
mealsData.forEach((meal) => {
  //iterate over meals data
  const mealsWithReview = []; // a temporary array to hold review data when there is a match
  reviewData.forEach((review) => {
    //iterate over reviews data
    if (meal.id == review.meal_id) {
      //if the meal has a review
      mealsWithReview.push(review);
    }
    meal["reviews"] = mealsWithReview;
  });
});

router.use("/meals", function (request, response) {
  response.send(mealsData);
});

module.exports = router;
