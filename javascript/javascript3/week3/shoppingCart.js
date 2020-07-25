class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    // https://api.exchangeratesapi.io/latest
    fetch("https://api.exchangeratesapi.io/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.rates.DKK);
      });
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

  getTotal() {
    // total price of all products
    let totalPrice = 0;
    this.products.forEach((product) => {
      totalPrice += product.price;
    });
    const h4 = document.createElement("h4");
    h4.innerHTML = `Total Price of all products : ${totalPrice}EUR`;
    body.appendChild(h4);
  }

  renderProducts() {
    this.products.forEach((product) => {
      const h3 = document.createElement("h3");
      body.appendChild(h3);
      h3.innerHTML = `${product.name} : ${product.price}EUR`;
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
        h1.innerHTML = data.name;
      });
  }
  showShoppingCart() {
    const shoppingCart = document.getElementById("shoppingCart");

    //item1
    const item1 = document.createElement("input");
    item1.setAttribute("type", "checkbox");
    item1.setAttribute("id", "item1");
    const item1Product = document.createElement("label");
    item1Product.innerText = "bag 10EUR";
    shoppingCart.append(item1, item1Product);

    //item2
    const item2 = document.createElement("input");
    item2.setAttribute("type", "checkbox");
    item2.setAttribute("id", "item2");
    const item2Product = document.createElement("label");
    item2Product.innerText = "mobile 500EUR";
    shoppingCart.append(item2, item2Product);

    //item3
    const item3 = document.createElement("input");
    item3.setAttribute("type", "checkbox");
    item3.setAttribute("id", "item3");
    const item3Product = document.createElement("label");
    item3Product.innerText = "Screen 200EUR";
    shoppingCart.append(item3, item3Product);

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
//get button from document with id=button
const button = document.getElementById("shopping");
const selectedProducts = () => {
  if (document.getElementById("item1").checked) {
    shoppingCart.addProduct(new Product("bag", 10));
  }
  if (document.getElementById("item2").checked) {
    shoppingCart.addProduct(new Product("mobile", 500));
  }
  if (document.getElementById("item3").checked) {
    shoppingCart.addProduct(new Product("Screen", 200));
  }
  //remove event handler for finish button
  const finishButton = document.getElementById("finish");
  finishButton.removeEventListener("click", selectedProducts);
  shoppingCart.renderProducts();
  shoppingCart.getTotal();
};
const clickHandler = () => {
  shoppingCart.getUser();
  shoppingCart.showShoppingCart();

  button.removeEventListener("click", clickHandler);
};
button.addEventListener("click", clickHandler);
new Product("switch", 10).convertToCurrency("DKK");
