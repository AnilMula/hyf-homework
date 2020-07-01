//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
const key = "Jdx97xepx2rB2D7Avf4fbhOQiGActDYy";

//grab the input field and its value
const word = document.getElementById("search-word");
const number = document.getElementById("total-number");

//grab the div element to add output to
const outputWindow = document.getElementById("image-box");

const displayImages = (element) => {
  const image = document.createElement("img"); //bitly_gif_url
  image.setAttribute("src", element.images.fixed_width_small_still.url);
  outputWindow.appendChild(image);
};
const search = () => {
  //get the input text and number
  const searchWord = word.value;
  const totalNumber = number.value;

  //clear the previous output
  outputWindow.innerHTML = "";

  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=${key}&limit=${totalNumber}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.data.forEach((record) => {
        displayImages(record);
      });
    });
};
//add an event listener to the input field
document.querySelector("button").addEventListener("click", search);
