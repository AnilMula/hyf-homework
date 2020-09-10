const express = require("express");
const router = express.Router();
const reservationsData = require("../data/reservations.json");

router.get("/reservations/:id", function (request, response) {
  response.send(
    reservationsData.find(
      (reservation) => reservation.id == parseInt(request.params.id)
    )
  );
});

module.exports = router;
