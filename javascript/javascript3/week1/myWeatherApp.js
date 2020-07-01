const myAPPID = "b9de5d75f14006e0c4a46eb1efb30dc4";
const cityName = document.querySelector("input");

//grab the ul from document to add the data
const resultData = document.getElementById("app-data");

//grab button from the the document to display result and add a event listener
const displayData = document.getElementById("get-data");

// the callback function will add data to the document in the form of list elemenmts
const addData = (data) => {
  const li = document.createElement("li");
  li.innerHTML = data;
  li.id = "new";
  resultData.insertBefore(
    li,
    resultData.childNodes[resultData.childNodes.length - 2]
  );
};

//the call back function will process the fetched data from the url
//and decode the needed information and call the addData function
const processData = (data) => {
  if (data.cod == 404) {
    window.alert("city not found");
  } else if (data.cod == 400) {
    window.alert("city name empty");
  } else {
    console.log(data);

    // display city name
    addData(`City Name : ${data.name}`);

    //display maxomum temperature
    addData(`Maximum Temperature : ${data.main.temp_max} degrees`);

    //display minimum temperature
    addData(`Maximum Temperature : ${data.main.temp_min} degrees`);

    // display wind spped
    addData(`Wind Speed : ${data.wind.speed} meters per sec`);

    //display clouds status
    addData(`Clouds : ${data.weather[0].description}`);

    // display sunrise time
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    addData(`Sun rise : ${sunrise}`);

    //display sunsetTime
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    addData(`Sun Set : ${sunset}`);

    // remove enent listener for button to avoid display multiple times
    displayData.removeEventListener("click", getData);
  }
};

//the callback function will clear the data of the previous
const clearData = () => {
  const removableFields = document.querySelectorAll("[id='new']");
  console.log(removableFields);
  removableFields.forEach((element) => resultData.removeChild(element));
};
// define a function to get the data
const getData = () => {
  //fetch the weather data for the city
  clearData();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${myAPPID}`
  )
    .then((response) => response.json())
    .then((data) => {
      processData(data);
    });
};
// add event listener for change of input -- city name
cityName.addEventListener("change", () => {
  // add an event listener for the button
  displayData.addEventListener("click", getData);
});
