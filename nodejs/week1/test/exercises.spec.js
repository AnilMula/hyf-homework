const request = require("supertest");
const app = require("../src/backend/server");
const meals = require("../src/backend/data/meals.json");
const reviews = require("../src/backend/data/reviews.json");
const reservations = require("../src/backend/data/reservations.json");

describe("GET /", () => {
  test("responds with corrected response", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Meal Sharing Web App");
  });
});

describe("GET /meals", () => {
  test("responds with all meals (with their reviews, if any) from data file", async () => {
    // Deep copy meals
    const copiedMeals = JSON.parse(JSON.stringify(meals));
    const mealsWithReviews = copiedMeals.map((meal) => {
      meal.reviews = reviews.filter((review) => review.meal_id == meal.id);
      return meal;
    });

    const response = await request(app).get("/meals");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(mealsWithReviews);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /cheapMeal", () => {
  test("route exists", async () => {
    const response = await request(app).get("/cheapMeal");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /largeMeal", () => {
  test("route exists", async () => {
    const response = await request(app).get("/largeMeal");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /randomMeal", () => {
  test("responds with a single random meal from the data file", async () => {
    try {
      expect(meals.length).toBeGreaterThan(1);
    } catch (error) {
      throw new Error(
        "Ensure your meals data file (meals.json) actually has more than one meal!"
      );
    }
    const response = await request(app).get("/randomMeal");
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe("object");
    expect(Array.isArray(response.body)).toBeFalsy();
  });
});

describe("GET /reservations", () => {
  test("responds with all the reservations from data file", async () => {
    const response = await request(app).get("/reservations");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(reservations);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /randResev", () => {
  test("responds with a single random reservation from the reservation file", async () => {
    try {
      expect(reservations.length).toBeGreaterThan(1);
    } catch (error) {
      throw new Error(
        "Ensure your reservations data file (reservations.json) actually has more than one reservation!"
      );
    }
    const response = await request(app).get("/randResev");
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe("object");
    expect(Array.isArray(response.body)).toBeFalsy();
  });
});
