const body = document.querySelector("body");

const output = document.createElement("div");
body.appendChild(output);

function getName() {
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
}
function getSpiritAnimalName() {
  getName();
  button.disabled = true;
  const newButton = document.createElement("button");
  newButton.innerHTML = "Get new spirit animal name for";
  body.appendChild(newButton);
  newButton.addEventListener("click", getName);
}

// to get the select option value :: to select event
const select = document.getElementById("eventType");
select.addEventListener("onChange", function () {
  console.log(select.options[select.selectedIndex].value);
});

const button = document.querySelector("button");

button.addEventListener("click", getSpiritAnimalName);
