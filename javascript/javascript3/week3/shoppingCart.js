class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  searchProduct(productName) {
    return this.products.filter((product) => product.name == productName);
  }

  getTotal(currency) {
    // total price of all products
    let totalPrice = 0;
    this.products.forEach((product) => {
      totalPrice += product.price;
    });
    const h4 = document.createElement("h4");
    h4.innerHTML = `Total Price of all products : ${totalPrice}${currency}`;
    body.appendChild(h4);
  }

  renderProducts(currency) {
    this.products.forEach((product) => {
      const h3 = document.createElement("h3");
      body.appendChild(h3);
      h3.innerHTML = `${product.name} : ${product.price}${currency}`;
    });
  }

  getUser() {
    //
    //getUser should return a promise with the data from this
    //api: https://jsonplaceholder.typicode.com/users/1
    let randomNUmber = Math.floor(Math.random() * 10) + 1;
    fetch(`https://jsonplaceholder.typicode.com/users/${randomNUmber}`)
      .then((response) => response.json())
      .then((data) => {
        const h1 = document.createElement("h1");
        body.appendChild(h1);
        h1.innerHTML = `user name: ${data.name}`;
      });
  }
  async convertToCurrency(currency) {
    // https://api.exchangeratesapi.io/latest
    const response = await fetch("https://api.exchangeratesapi.io/latest");
    const data = await response.json();
    if (currency === "EUR") return data.base;
    else if (currency === "DKK") return data.rates.DKK;
  }

  showShoppingCart(currency, rate) {
    const shoppingCart = document.getElementById("shoppingCart");

    //item1
    const item1 = document.createElement("input");
    item1.setAttribute("type", "checkbox");
    item1.setAttribute("id", "item1");
    const item1Product = document.createElement("label");
    item1Product.innerText = `Bag ${10 * rate}${currency}`;

    const br1 = document.createElement("br");
    shoppingCart.append(item1, item1Product, br1);

    //<br>

    //item2
    const item2 = document.createElement("input");
    item2.setAttribute("type", "checkbox");
    item2.setAttribute("id", "item2");
    const item2Product = document.createElement("label");
    item2Product.innerText = `Mobile ${500 * rate}${currency}`;
    const br2 = document.createElement("br");
    shoppingCart.append(item2, item2Product, br2);

    //item3
    const item3 = document.createElement("input");
    item3.setAttribute("type", "checkbox");
    item3.setAttribute("id", "item3");
    const item3Product = document.createElement("label");
    item3Product.innerText = `Screen ${200 * rate}${currency}`;
    const br3 = document.createElement("br");
    shoppingCart.append(item3, item3Product, br3);

    //finish button
    const finishButton = document.createElement("button");
    finishButton.innerHTML = "finish";
    finishButton.setAttribute("id", "finish");

    shoppingCart.appendChild(finishButton);
    finishButton.addEventListener("click", selectedProducts);
  }
}
const shoppingCart = new ShoppingCart();

const body = document.querySelector("body");
//select currency
let userCurrency; //variable to store user selected currency
let xRate;
const select = document.getElementById("currency");
const selectHandler = () => {
  if (select.value == "EUR") {
    shoppingCart.convertToCurrency("EUR").then((data) => {
      userCurrency = data;
      xRate = 1;
      select.removeEventListener("change", selectHandler);
    });
  } else if (select.value == "DKK") {
    userCurrency = shoppingCart.convertToCurrency("DKK").then((data) => {
      userCurrency = "DKK";
      xRate = data;
      select.removeEventListener("change", selectHandler);
    });
  }
};
select.addEventListener("change", selectHandler);
//get button from document with id=button
const button = document.getElementById("shopping");
const selectedProducts = () => {
  if (document.getElementById("item1").checked) {
    shoppingCart.addProduct(new Product("Bag", 10 * xRate));
  }
  if (document.getElementById("item2").checked) {
    shoppingCart.addProduct(new Product("Mobile", 500 * xRate));
  }
  if (document.getElementById("item3").checked) {
    shoppingCart.addProduct(new Product("Screen", 200 * xRate));
  }
  //remove event handler for finish button
  const finishButton = document.getElementById("finish");
  finishButton.removeEventListener("click", selectedProducts);
  shoppingCart.renderProducts(userCurrency);
  shoppingCart.getTotal(userCurrency);
};

const clickHandler = () => {
  shoppingCart.getUser();
  console.log(userCurrency, xRate);
  shoppingCart.showShoppingCart(userCurrency, xRate);

  button.removeEventListener("click", clickHandler);
};
button.addEventListener("click", clickHandler);

//for currency converter

/* new Product("switch", 10)
  .convertToCurrency("DKK")
  .then((data) => console.log(data));
 */
