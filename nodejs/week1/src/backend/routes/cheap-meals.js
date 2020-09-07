//Respond with the json for all the meals
//(including it's reviews) that are cheap (you define what a cheap meal is)

const express = require("express");
const router = express.Router();

const mealsData = require("../data/meals.json");
// get reviews from the reviews.json
const reviewData = require("../data/reviews.json");

// if the price of meal is below 85 then it is cheap meal
const cheapMeal = mealsData.filter((meal) => meal.price < 75);

//compare two json files to add reviews that matches a meal id
cheapMeal.forEach((meal) => {
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

router.use("/cheapMeal", function (request, response) {
  response.send(cheapMeal);
});

module.exports = router;
