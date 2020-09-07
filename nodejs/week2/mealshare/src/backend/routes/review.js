const express = require("express");
const router = express.Router();
const reviewsData = require("../data/reviews.json");

router.get("/reviews", function (request, response) {
  response.send(reviewsData);
});

module.exports = router;
