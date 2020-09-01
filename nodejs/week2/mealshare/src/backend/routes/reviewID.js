const express = require("express");
const app = express();
const reviewsData = require("../data/reviews.json");

app.get("/reviews/:id", function (request, response) {
  response.send(reviewsData.filter((review) => review.id == request.params.id));
});

module.exports = app;
