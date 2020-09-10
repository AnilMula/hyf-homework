const express = require("express");
const router = express.Router();
const mealsData = require("../data/meals.json");

router.use("/meals/:id", function (request, response) {
  if (isNaN(Number(request.params.id))) {
    response.status(400).send(" id is not number");
  } else {
    response.send(
      mealsData.find((meal) => meal.id == parseInt(request.params.id))
    );
  }
});

module.exports = router;
