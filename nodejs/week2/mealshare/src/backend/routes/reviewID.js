const express = require("express");
const router = express.Router();
const reviewsData = require("../data/reviews.json");

router.get("/reviews/:id", function (request, response) {
  if (isNaN(Number(request.params.id))) {
    response.status(400).send(" id is not number");
  } else {
    response.send(
      reviewsData.find((review) => review.id == parseInt(request.params.id))
    );
  }
});

module.exports = router;
