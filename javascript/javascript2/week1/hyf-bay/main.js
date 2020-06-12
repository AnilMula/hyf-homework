<<<<<<< HEAD
console.log("Script loaded");

const products = getAvailableProducts();

//function get color is to get a random color
function getColor() {
  let rgb1 = Math.floor(Math.random() * 256) + 1;
  let rgb2 = Math.floor(Math.random() * 256) + 1;
  let rgb3 = Math.floor(Math.random() * 256) + 1;
  return "color : rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
}

function getRating(ratingValue) {
  let ratingStar = "";
  for (let i = 0; i < ratingValue; i++) {
    ratingStar += "*";
  }
  return ratingValue + " : " + ratingStar;
}

function renderProducts(products) {
  // your code here
  const main = document.querySelector("main");
  main.setAttribute("style", "margin-left:3vw"); // left margin

  const newul = document.createElement("ul");
  main.appendChild(newul);

  const ul = document.querySelector("ul");
  products.forEach((product) => {
    const li = document.createElement("li");

    const h2 = document.createElement("h2");
    h2.style.cssText = "text-decoration:underline;" + getColor();
    //h2.setAttribute("style", getColor());

    h2.innerHTML = product.name;
    li.appendChild(h2);

    const span = document.createElement("span");
    span.setAttribute("style", getColor());
    span.innerHTML = "<b>.</b>price: " + product.price;
    li.appendChild(span);

    const div = document.createElement("div");
    div.setAttribute("style", getColor());
    div.innerHTML = "rating " + getRating(product.rating);
    li.appendChild(div);
    //li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

renderProducts(products);
=======
console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
  const main = document.querySelector("main");
  const newul = document.createElement("ul");
  main.appendChild(newul);

  const ul = document.querySelector("ul");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

renderProducts(products);
>>>>>>> f0afc11bedda60623ea91e876c2f6479c0231c61
