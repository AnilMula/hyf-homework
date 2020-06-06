const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium", "å"];

function shortestWord(wordList) {
  let shortWord = wordList[0];
  for (let i = 1; i < wordList.length; i++) {
    if (wordList[i].length < shortWord.length) {
      shortWord = wordList[i];
    }
  }
  return shortWord;
}
console.log(shortestWord(danishWords));
