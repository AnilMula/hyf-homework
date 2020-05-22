let boughtCandyPrices = [];
const candyTablePrices = [ ['Sweet', 0.5] ,[ 'Chocolate', 0.7], [ 'Toffee', 1.1],[ 'Chewing-gum',0.03]];
let amountToSpend = Math.random() * 100;
//let amountRemaining = amountToSpend; // initially amount remaing is amount to spend
let spentMoney = 0;
function addCandy(candyType, weight){
    /* the function takes a candy name and weight of candy bought,
    it calculates price for candy  and adds it to the boughtCandyPrices array */
    let costOfCandy;
    for(let i = 0; i < candyTablePrices.length; i++){
        // iterate through candy prices table to calculate price of a candy
        if(candyTablePrices[i][0] === candyType){
            costOfCandy = weight * candyTablePrices[i][1];// cost = weight * price per gram
            // check if we have enough money to by the candy
            if(amountToSpend > costOfCandy){
                // now we have enough money to buy the candy
                boughtCandyPrices.push(candyType, costOfCandy);// push candy and cost of candy into an array
                amountToSpend -= costOfCandy; //since candy we reserved: reduce the amount to spend
            } 
            else{
                console.log("No more money to buy extra candies");
                amountToSpend = 0; // when we do not have money to buy extra candies 
                // make amouuntToSpend is ZERO, This is very importent to break the loop
            }
        }
    }
} 
function canBuyMoreCandy(){
    // the function will check if we have more money to buy extra candies
    if(amountToSpend > 0){
        addCandy('Sweet',20); // call the function to check whether candy can be bought
    }
    else{
        console.log("No more money to buy extra candies");
        amountToSpend = 0;// when we do not have money to buy extra candies 
        // make amouuntToSpend is ZERO, This is very importent to break the loop
    } 
}
console.log("Amount in hands ",amountToSpend); // money in the pocket
while(amountToSpend > 0){
    canBuyMoreCandy();
}
console.log("candies bought");
console.log(boughtCandyPrices);
