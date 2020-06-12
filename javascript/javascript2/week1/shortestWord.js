const danishWords = [
  "bil",
  "plante",
  "kaffe",
  "bog",
  "øl",
  "planetarium",
  "år",
];

/* function shortestWord(wordList) {
  let shortWord = wordList[0];
  for (let i = 1; i < wordList.length; i++) {
    if (wordList[i].length < shortWord.length) {
      shortWord = wordList[i];
    }
  }
  return shortWord;
}
 */
//feedback implementation
function shortestWord(wordList) {
  //first find what is the shortest length of all words
  // first consider first word as the shortest
  let shortestWordLength = wordList[0].length;
  let shortestWords = [];
  danishWords.forEach((element) => {
    if (element.length < shortestWordLength) {
      shortestWordLength = element.length;
    }
  });

  danishWords.forEach((element) => {
    if (element.length == shortestWordLength) {
      shortestWords.push(element);
    }
  });
  return shortestWords;
}
console.log(shortestWord(danishWords));
