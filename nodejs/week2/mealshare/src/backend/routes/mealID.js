const express = require("express");
const router = express.Router();
const mealsData = require("../data/meals.json");

router.use("/meals/:id", function (request, response) {
  response.send(
    mealsData.filter((meal) => meal.id == parseInt(request.params.id))
  );
});

module.exports = router;
