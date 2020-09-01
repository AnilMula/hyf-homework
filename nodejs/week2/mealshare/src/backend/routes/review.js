const express = require("express");
const app = express();
const reviewsData = require("../data/reviews.json");

app.get("/reviews", function (request, response) {
  response.send(reviewsData);
});

module.exports = app;
