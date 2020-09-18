const express = require("express");
const router = express.Router();
const { request, response } = require("express");

router.get("/", (request, response) => {
  response.send("Basic calculator");
});

router.get("/add", async (request, response) => {
  //query parameter is object so get object values in an array
  const urlQueryParameters = Object.values(request.query);

  //here object values are strings, convert them to numbers
  const urlQueryParameterValues = urlQueryParameters.map((query) =>
    Number(query)
  );

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = urlQueryParameterValues.reduce(reducer);

  response.send(`sum is ${result}`);
});

router.get("/substract", (request, response) => {
  //query parameter is object so get object values in an array
  const urlQueryParameters = Object.values(request.query);

  //here object values are strings, convert them to numbers
  const urlQueryParameterValues = urlQueryParameters.map((query) =>
    Number(query)
  );

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator - currentValue;
  const result = urlQueryParameterValues.reduce(reducer);

  response.send(`substraction is ${result}`);
});

router.get("/multiply", (request, response) => {
  //query parameter is object so get object values in an array
  const urlQueryParameters = Object.values(request.query);

  //here object values are strings, convert them to numbers
  const urlQueryParameterValues = urlQueryParameters.map((query) =>
    Number(query)
  );

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  const result = urlQueryParameterValues.reduce(reducer);
  response.send(`Multiplication is ${result}`);
});

router.get("/divide", (request, response) => {
  //query parameter is object so get object values in an array
  const urlQueryParameters = Object.values(request.query);

  //here object values are strings, convert them to numbers
  const urlQueryParameterValues = urlQueryParameters.map((query) =>
    Number(query)
  );

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator / currentValue;
  const result = urlQueryParameterValues.reduce(reducer);
  response.send(`Division is ${result}`);
});

router.post("/add", (request, response) => {
  //request.body is an object so get object values in an array
  const requestBody = Object.values(request.body);

  //here object values are strings, convert them to numbers
  const requestBodyValues = requestBody.map((value) => Number(value));

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = requestBodyValues.reduce(reducer);
  console.log(request.body);

  response.send(`sum is ${result}`);
});

router.post("/substract", (request, response) => {
  //request.body is an object so get object values in an array
  const requestBody = Object.values(request.body);

  //here object values are strings, convert them to numbers
  const requestBodyValues = requestBody.map((value) => Number(value));

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator - currentValue;
  const result = requestBodyValues.reduce(reducer);

  response.send(`substraction is ${result}`);
});

router.post("/multiply", (request, response) => {
  //request.body is an object so get object values in an array
  const requestBody = Object.values(request.body);

  //here object values are strings, convert them to numbers
  const requestBodyValues = requestBody.map((value) => Number(value));

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  const result = requestBodyValues.reduce(reducer);

  response.send(`multiply is${result}`);
});

router.post("/divide", (request, response) => {
  //request.body is an object so get object values in an array
  const requestBody = Object.values(request.body);

  //here object values are strings, convert them to numbers
  const requestBodyValues = requestBody.map((value) => Number(value));

  //use array.reduce() to calculate result
  const reducer = (accumulator, currentValue) => accumulator / currentValue;
  const result = requestBodyValues.reduce(reducer);

  response.send(`division is ${result}`);
});
module.exports = router;
