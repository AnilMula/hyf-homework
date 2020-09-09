const express = require("express");
const router = express.Router();
const { request, response } = require("express");

router.get("/", (request, response) => {
  response.send("Basic calculator");
});

router.get("/add", async (request, response) => {
  const result =
    Number(request.query.firstParam) + Number(request.query.secondParam);
  console.log(request.body);
  response.send(
    `sum of ${request.query.firstParam} and ${request.query.secondParam} is ${result}`
  );
});

router.get("/substract", (request, response) => {
  const result =
    Number(request.query.firstParam) - Number(request.query.secondParam);

  response.send(
    `substraction of ${request.query.firstParam} and ${request.query.secondParam} is ${result}`
  );
});

router.get("/multiply", (request, response) => {
  const result =
    Number(request.query.firstParam) * Number(request.query.secondParam);
  response.send(
    `Multiplication of ${request.query.firstParam} and ${request.query.secondParam} is ${result}`
  );
});

router.get("/divide", (request, response) => {
  const result =
    Number(request.query.firstParam) / Number(request.query.secondParam);
  response.send(
    `Division of ${request.query.firstParam} and ${request.query.secondParam} is ${result}`
  );
});

router.post("/add", (request, response) => {
  const result =
    Number(request.body.firstParam) + Number(request.body.secondParam);

  response.send(
    `sum of ${request.body.firstParam} and ${request.body.secondParam} is ${result}`
  );
});

router.post("/substract", (request, response) => {
  const result =
    Number(request.body.firstParam) - Number(request.body.secondParam);

  response.send(
    `sum of ${request.body.firstParam} and ${request.body.secondParam} is ${result}`
  );
});

router.post("/multiply", (request, response) => {
  const result =
    Number(request.body.firstParam) * Number(request.body.secondParam);

  response.send(
    `sum of ${request.body.firstParam} and ${request.body.secondParam} is ${result}`
  );
});

router.post("/divide", (request, response) => {
  const result =
    Number(request.body.firstParam) / Number(request.body.secondParam);

  response.send(
    `sum of ${request.body.firstParam} and ${request.body.secondParam} is ${result}`
  );
});
module.exports = router;
