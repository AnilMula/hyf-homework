const button = document.querySelector("button");

const body = document.querySelector("body");

const clickHandler = () => {
  const h1 = document.createElement("h1");
  h1.innerHTML = "This is h1 tag";
  body.appendChild(h1);
};

button.addEventListener("click", clickHandler);
