const jokeCreater = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};

const logFunnyJoke = () => {
  console.log("Funny Joke");
};

const logBadJoke = () => {
  console.log("Bad Joke");
};

jokeCreater(true, logFunnyJoke, logBadJoke);
