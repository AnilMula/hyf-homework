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
  }
}
const button = document.querySelector("button");

button.addEventListener("click", getSpiritAnimalName);
