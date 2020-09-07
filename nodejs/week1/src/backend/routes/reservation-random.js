const express = require("express");
const router = express.Router();

const reservationsData = require("../data/reservations.json");

router.get("/randResev", function (request, response) {
  const randomNumber = Math.floor(Math.random() * reservationsData.length);

  response.send(reservationsData[randomNumber]);
});

module.exports = router;
