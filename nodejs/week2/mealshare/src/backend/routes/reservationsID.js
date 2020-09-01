const express = require("express");
const app = express();
const reservationsData = require("../data/reservations.json");

app.get("/reservations/:id", function (request, response) {
  response.send(
    reservationsData.filter(
      (reservation) => reservation.id == request.params.id
    )
  );
});

module.exports = app;
