/* Find the individual number and the total number of danish letters in a string.

const danishString = ['Jeg har en blå bil'];
notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = ['Blå grød med rød bær'];
notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1} */
const danishString = ["Jeg har en blå bil"];
const danishString2 = ["Blå grød med rød bær"];

// this will remove all the spaces in the string
const newDanishString = danishString[0].split(/\s/).join(""); //Jegharenblåbil
const newDanishString2 = danishString2[0].split(/\s/).join(""); //Blågrødmedrødbær

function countOfDanishLetters(listOfWords) {
  // danish letters æ å ø
  let æCount = 0;
  let åCount = 0;
  let øCount = 0;
  for (let i = 0; i < listOfWords.length; i++) {
    if (listOfWords[i] === "æ" || listOfWords[i] === "Æ") æCount++;
    else if (listOfWords[i] === "å" || listOfWords[i] === "Å") åCount++;
    else if (listOfWords[i] === "ø" || listOfWords[i] === "Ø") øCount++;
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

countOfDanishLetters(newDanishString); // returns {total: 1, å: 1}

countOfDanishLetters(newDanishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
