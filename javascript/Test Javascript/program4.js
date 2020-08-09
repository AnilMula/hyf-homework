class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  logProduct() {
    return `The Product is ${this.name} and price is ${this.price}`;
  }
}

const table = new Product("Table", 1200);
console.log(table.logProduct());
