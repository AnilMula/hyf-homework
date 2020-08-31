const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Meal Sharing Web App");
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// to display all the meals
const allMeals = require("./routes/meals");
app.get("/meals", allMeals);

//to dispaly a random meal
const randomMeal = require("./routes/meal");
app.get("/randomMeal", randomMeal);

//to dispaly a cheap meal
const cheapMeal = require("./routes/cheap-meals");
app.get("/cheapMeal", cheapMeal);

//to display large meal
const largeMeal = require("./routes/large-meals");
app.get("/largeMeal", largeMeal);

//all reservations
const reservations = require("./routes/reservations");
app.get("/reservations", reservations);

//random reservations
const randomReservations = require("./routes/reservation-random");
app.get("/randResev", randomReservations);

//export app for testing purposes
module.exports = server;
