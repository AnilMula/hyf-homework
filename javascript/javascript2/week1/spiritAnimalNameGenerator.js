const body = document.querySelector("body");

// create a div to write output to
const output = document.createElement("div");
//apply few styles
output.style.color = "green";
body.appendChild(output);

function getSpiritAnimalName() {
  const x = document.getElementById("name").value;
  const spiritAnimalNames = [
    "Alligator",
    "Ant",
    "Badger",
    "Bat",
    "Bear",
    "Bee",
    "Blue Jay",
    "Bobcat",
    "Buffalo",
    "Bull",
    "Butterfly",
    "Cardinal",
  ];
  if (x.length > 0) {
    output.innerHTML =
      x + "-" + spiritAnimalNames[Math.ceil(Math.random() * 10)];
  } else {
    output.innerHTML = ""; // this is needed to remove previous string when input is clear
  }

  /* button.disabled = true;
  const newButton = document.createElement("button");
  newButton.innerHTML = "Get new spirit animal name for";
  body.appendChild(newButton);
  newButton.addEventListener("click", getName); */
}

// to get the select option value :: to select event

const select = document.getElementById("eventType");

select.addEventListener("change", function () {
  const button = document.querySelector("button");
  const textField = document.querySelector("input");
  if (select.value === "click") {
    //adding event listener on mouse click
    button.addEventListener("click", getSpiritAnimalName);

    //remove other two events---hover mouse on button and input on the text field
    button.removeEventListener("mouseover", getSpiritAnimalName);
    textField.removeEventListener("input", getSpiritAnimalName);
  } else if (select.value === "hover") {
    //adding event listener for hover on mouse
    button.addEventListener("mouseover", getSpiritAnimalName);

    //remove other two events--- click and input on text field
    button.removeEventListener("click", getSpiritAnimalName);
    textField.removeEventListener("input", getSpiritAnimalName);
  } else if (select.value == "input") {
    //adding event listener for input on text field
    textField.addEventListener("input", getSpiritAnimalName);

    //remove other two events----mouseover and click
    button.removeEventListener("mouseover", getSpiritAnimalName);
    button.removeEventListener("click", getSpiritAnimalName);
  }
});
