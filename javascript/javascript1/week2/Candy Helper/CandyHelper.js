function buyCandy() {
  amountToSpend = parseInt(document.getElementById("total-amount").value);
  boughtCandyPrices = [];
  candyTablePrices = [
    ["Sweet", 0.5],
    ["Chocolate", 0.7],
    ["Toffee", 1.1],
    ["Chewing-gum", 0.03],
  ];
  costOfCandy = 0;

  let candyType = document.getElementById("candy").value;
  let weight = parseInt(document.getElementById("weight").value);

  if (canBuyMoreCandy(candyType, weight)) {
    document.getElementById("output").innerHTML =
      '"You can buy more, so please do!"';
    addCandy(candyType, weight);
  } else {
    document.getElementById("output").innerHTML = "Enough candy for you!";
  }
}

function addCandy(candyType, weight) {
  boughtCandyPrices.push(candyType, weight); // push candy and cost of candy into an array
  amountToSpend -= costOfCandy; //since candy we reserved: reduce the amount to spend
}

function canBuyMoreCandy(candyType, weight) {
  // the function will check if we have more money to buy extra candies
  for (let i = 0; i < candyTablePrices.length; i++) {
    // iterate through candy prices table to calculate price of a candy
    if (candyTablePrices[i][0] === candyType) {
      costOfCandy = weight * candyTablePrices[i][1]; // cost = weight * price per gram
      // check if we have enough money to by the candy
      if (amountToSpend > costOfCandy) {
        // now we have enough money to buy the candy
        return true;
      } else {
        return false;
      }
    }
  }
}
