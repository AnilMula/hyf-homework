const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Meal Sharing Web App");
});

// to display all the meals
const allMeals = require("./routes/meals");
app.get("/meals", allMeals);

//to dispaly a random meal
const randomMeal = require("./routes/meal");
app.get("/randommeal", randomMeal);

//to dispaly a cheap meal
const cheapMeal = require("./routes/cheap-meals");
app.get("/cheapmeal", cheapMeal);

//to display large meal
const largeMeal = require("./routes/large-meals");
app.get("/largemeal", largeMeal);

//all reservations
const reservations = require("./routes/reservations");
app.get("/reservations", reservations);

//random reservations
const randomReservations = require("./routes/reservation-random");
app.get("/randresevrvation", randomReservations);

const server = app.listen(port, () => {
  console.log(`Example router listening at http://localhost:${port}`);
});

//export router for testing purposes
module.exports = server;
