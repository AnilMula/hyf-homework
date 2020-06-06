const travelInformation = {
  speed: 50,
  destinationDistance: 511,
};
//travel information is an object with 2 properties speed and destination distance.
function calculateTime(speedAndDistance) {
  /* The parameter speedAndDistance is an object 
    with 2 properties speed and destination distance. */
  let totalTime;
  let timeInHours;
  let timeInMinutes;
  totalTime =
    speedAndDistance["destinationDistance"] / speedAndDistance["speed"];
  timeInHours = Math.floor(totalTime);
  timeInMinutes = Math.round((totalTime - timeInHours) * 60);
  return timeInHours + " hours " + timeInMinutes + " minutes";
}
const travelTime = calculateTime(travelInformation);
console.log(travelTime);
