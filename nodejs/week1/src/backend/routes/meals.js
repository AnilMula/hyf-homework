const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");
const reviewData = require("../data/reviews.json");

//compare two json files to add reviews that matches a meal id
mealsData.forEach((meal) => {
  //iterate over meals data
  const matchedReviewData = []; // a temporary array to hold review data when there is a match
  reviewData.forEach((review) => {
    //iterate over reviews data
    if (meal.id == review.meal_id) {
      //if the meal has a review
      matchedReviewData.push(review);
    }
    if (matchedReviewData.length == 0) {
      // if there are no reviews for a meal
      meal["reviews"] = ["NO reviews Yet"];
    } else {
      meal["reviews"] = matchedReviewData;
    }
  });
});

app.get("/meals", function (request, response) {
  response.send(mealsData);
});

module.exports = app;
