const express = require("express");
const router = express.Router();
const reservationsData = require("../data/reservations.json");

router.get("/reservations", function (request, response) {
  response.send(reservationsData);
});

module.exports = router;
