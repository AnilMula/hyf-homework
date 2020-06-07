const body = document.querySelector("body");
const output = document.createElement("div");
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
    button.disabled = true;
    const newButton = document.createElement("button");
    newButton.innerHTML = "Get new spirit animal name for" + x;
    body.appendChild(newButton);
    newButton.addEventListener("click", function () {
      output.innerHTML =
        x + "-" + spiritAnimalNames[Math.ceil(Math.random() * 10)];
      button.disabled = false;
      body.removeChild(newButton);
    });
  } else {
    output.innerHTML = ""; // this is needed to remove previous string when input is clear
  }
}
const button = document.querySelector("button");

button.addEventListener("click", getSpiritAnimalName);
