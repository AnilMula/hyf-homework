const express = require("express");
const app = express();

const reservationsData = require("../data/reservations.json");

app.get("/randResev", function (request, response) {
  const randomNumber = Math.floor(Math.random() * reservationsData.length);

  response.send(reservationsData[randomNumber]);
});

module.exports = app;
