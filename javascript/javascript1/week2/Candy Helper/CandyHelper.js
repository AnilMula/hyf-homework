function initialize() {
  amountToSpend = parseInt(document.getElementById("total-amount").value);
  boughtCandyPrices = [];
  candyTablePrices = [
    ["Sweet", 0.5],
    ["Chocolate", 0.7],
    ["Toffee", 1.1],
    ["Chewing-gum", 0.03],
  ];
  costOfCandy = 0;
}

function buyCandy() {
  if (amountToSpend) {
    let candyType = document.getElementById("candy").value;
    let weight = parseInt(document.getElementById("weight").value);

    if (canBuyMoreCandy(candyType, weight)) {
      document.getElementById("output").style.color = "black";
      document.getElementById("output").innerHTML =
        '"You can buy more, so please do!"';
      addCandy(candyType, weight, costOfCandy);

      document.getElementById("output1").innerHTML =
        "Remaining Amount " + amountToSpend;
      let outputMessage = " ";
      for (let i = 0; i < boughtCandyPrices.length; i++) {
        outputMessage +=
          boughtCandyPrices[i].candyType +
          " " +
          boughtCandyPrices[i].weight +
          "grams and cost:" +
          boughtCandyPrices[i].price +
          "<br>";
      }
      document.getElementById("output2").innerHTML = outputMessage;
    } else {
      document.getElementById("output").style.color = "red";
      document.getElementById("output").innerHTML = "Enough candy for you!";
    }
  } else {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerHTML = "Enough candy for you!";
  }
}

function addCandy(candyType, weight, price) {
  boughtCandyPrices.push({ candyType, weight, price }); // push candy and cost of candy into an array
  amountToSpend -= costOfCandy; //since candy we reserved: reduce the amount to spend
}

function canBuyMoreCandy(candyType, weight) {
  /*   // the following code is display the remaining amount
  const initializeDiv = document.getElementById("initialize");
  const innerDiv = document.createElement("div");

  innerDiv.innerHTML = "remaining amount<br>" + amountToSpend;
  initializeDiv.appendChild(innerDiv); */
  // the function will check if we have more money to buy extra candies
  for (let i = 0; i < candyTablePrices.length; i++) {
    // iterate through candy prices table to calculate price of a candy
    if (candyTablePrices[i][0] === candyType) {
      costOfCandy = weight * candyTablePrices[i][1]; // cost = weight * price per gram
      // check if we have enough money to by the candy
      if (amountToSpend >= costOfCandy) {
        // now we have enough money to buy the candy
        return true;
      } else {
        return false;
      }
    }
  }
}
document.getElementById("buyButton").addEventListener("click", buyCandy);
