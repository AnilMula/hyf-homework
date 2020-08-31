const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");
const reviewData = require("../data/reviews.json");

app.get("/randomMeal", function (request, response) {
  //get a random number
  const randomNumber = Math.floor(Math.random() * mealsData.length);
  const randomMeal = mealsData[randomNumber];

  //iterate over meals data
  const matchedReviewData = []; // a temporary array to hold review data when there is a match
  reviewData.forEach((review) => {
    //iterate over reviews data
    if (randomMeal.id == review.meal_id) {
      //if the meal has a review
      matchedReviewData.push(review);
    }
    randomMeal["reviews"] = matchedReviewData;
  });

  response.send(randomMeal);
});

module.exports = app;
