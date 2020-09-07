const express = require("express");
const app = express();

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

const allMeals = require("./routes/meals");
app.get("/meals", allMeals);

const specificMeal = require("./routes/mealID");
app.get("/meals/:id", specificMeal);

const allReservations = require("./routes/reservations");
app.get("/reservations", allReservations);

const specificReservation = require("./routes/reservationsID");
app.get("/reservations/:id", specificReservation);

const allReviews = require("./routes/review");
app.get("/reviews", allReviews);

const specificReview = require("./routes/reviewID");
app.get("/reviews/:id", specificReview);

module.exports = app;
