const button = document.querySelector("button");

const getGeoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    output.innerHTML = "Geolocation is not supported by this browser.";
  }
};

function showPosition(position) {
  output.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

const output = document.getElementById("demo");

button.addEventListener("click", getGeoLocation);
