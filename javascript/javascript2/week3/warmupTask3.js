/* Create a button in html. When clicking this button, 
use the function you created in the previous task to log out the text: 
Called after 5 seconds 5 seconds after the button is clicked. */

const stringToLogWithDealy = (delay, stringToLog) => {
  setTimeout(() => {
    window.alert(stringToLog);
  }, delay);
};

const button = document.querySelector("button");

button.addEventListener("click", () => {
  stringToLogWithDealy(5000, "called after 5 seconds");
});
