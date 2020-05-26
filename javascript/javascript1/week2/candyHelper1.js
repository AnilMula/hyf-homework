const boughtCandyPrices = [];
const candyTablePrices = [
  ["Sweet", 0.5],
  ["Chocolate", 0.7],
  ["Toffee", 1.1],
  ["Chewing-gum", 0.03],
];
let amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  let costOfCandy = canBuyMoreCandy(candyType, weight);
  if (costOfCandy) {
    console.log('"You can buy more, so please do!"');
    boughtCandyPrices.push(candyType, costOfCandy); // push candy and cost of candy into an array
    amountToSpend -= costOfCandy; //since candy we reserved: reduce the amount to spend
  } else {
    console.log("Enough candy for you!");
  }
}

function canBuyMoreCandy(candyType, weight) {
  // the function will check if we have more money to buy extra candies
  let costOfCandy;
  for (let i = 0; i < candyTablePrices.length; i++) {
    // iterate through candy prices table to calculate price of a candy
    if (candyTablePrices[i][0] === candyType) {
      costOfCandy = weight * candyTablePrices[i][1]; // cost = weight * price per gram
      // check if we have enough money to by the candy
      if (amountToSpend > costOfCandy) {
        // now we have enough money to buy the candy
        return costOfCandy;
      } else {
        return 0;
      }
    }
  }
}
console.log("Amount in hands ", amountToSpend); // money in the pocket
addCandy("Sweet", 10);
addCandy("Sweet", 10);
addCandy("Sweet", 10);
addCandy("Sweet", 10);
addCandy("Sweet", 10);
console.log("candies bought");
console.log(boughtCandyPrices);
