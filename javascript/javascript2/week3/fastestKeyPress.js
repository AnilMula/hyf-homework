//grab inpt field from the document
const input = document.querySelector("input");

//grab button from the document
const button = document.querySelector("button");

//grab the player1 box from the document
const player1 = document.getElementById("player1");

//grab the player2 box from the document
const player2 = document.getElementById("player2");

//declare a varible to hold maximum number of seconds
let totalNumbeOfSeconds;

//declare a click count variable for each player
let player1ClickCount = 0; //key s
let player2ClickCount = 0; //key l

input.addEventListener("input", () => {
  totalNumbeOfSeconds = parseInt(input.value);
});
button.addEventListener("click", startGame);
function keyPresscount(event) {
  if (totalNumbeOfSeconds > 0) {
    if (event.keyCode == 115) {
      player1ClickCount++;
      player1.innerHTML = `${player1ClickCount}`;
    }
    if (event.keyCode == 108) {
      player2ClickCount++;
      player2.innerHTML = `${player2ClickCount}`;
    }
  }
}
function startGame() {
  if (totalNumbeOfSeconds > 0) {
    // when game time is entered start listening to the key events
    document.addEventListener("keypress", keyPresscount);

    setTimeout(() => {
      if (player1ClickCount > player2ClickCount) {
        // if player 1 press count is more is wins and game over
        player1.innerHTML = `wins`;
        player2.innerHTML = ``;

        resetGame();
      } else if (player2ClickCount > player1ClickCount) {
        // if player 2 press count is more is wins and game over
        player1.innerHTML = ``;
        player2.innerHTML = `wins`;
        resetGame();
      } else {
        // if both players have same press count game is tie and game over
        player1.innerHTML = `draw`;
        player2.innerHTML = `draw`;
        resetGame();
      }
    }, totalNumbeOfSeconds * 1000);
  }
}
function resetGame() {
  //when game over clear both counters and remove key listener
  player1ClickCount = 0;
  player2ClickCount = 0;
  document.removeEventListener("keypress", keyPresscount);
}
