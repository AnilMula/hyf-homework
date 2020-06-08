/* Find the individual number and the total number of danish letters in a string.

const danishString = ['Jeg har en blå bil'];
notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = ['Blå grød med rød bær'];
notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1} */
const danishString = ["Jeg har en blå bil"];
const danishString2 = ["Blå grød med rød bær"];

function countOfDanishLetters(listOfWords) {
  // danish letters æ å ø
  let æCount = 0;
  let åCount = 0;
  let øCount = 0;
  for (let i = 0; i < listOfWords[0].length; i++) {
    if (listOfWords[0][i] === "æ" || listOfWords[0][i] === "Æ") æCount++;
    else if (listOfWords[0][i] === "å" || listOfWords[0][i] === "Å") åCount++;
    else if (listOfWords[0][i] === "ø" || listOfWords[0][i] === "Ø") øCount++;
  }
  let totalLetters = æCount + åCount + øCount;
  console.log(
    "Total Danish Words:" +
      totalLetters +
      " æ: " +
      æCount +
      " ø: " +
      øCount +
      " å: " +
      åCount
  );
}

countOfDanishLetters(danishString); // returns {total: 1, å: 1}

countOfDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
