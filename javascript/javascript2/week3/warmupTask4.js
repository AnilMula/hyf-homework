const earthLogger = () => {
  console.log("EARTH");
};

const saturnLogger = () => {
  console.log("SATURN");
};

const planetLogFunction = (planet) => {
  planet();
};

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);
