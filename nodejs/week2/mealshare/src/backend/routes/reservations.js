const express = require("express");
const app = express();
const reservationsData = require("../data/reservations.json");

app.get("/reservations", function (request, response) {
  response.send(reservationsData);
});

module.exports = app;
