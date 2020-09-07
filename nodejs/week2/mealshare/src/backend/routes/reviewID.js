const express = require("express");
const router = express.Router();
const reviewsData = require("../data/reviews.json");

router.get("/reviews/:id", function (request, response) {
  response.send(
    reviewsData.filter((review) => review.id == parseInt(request.params.id))
  );
});

module.exports = router;
