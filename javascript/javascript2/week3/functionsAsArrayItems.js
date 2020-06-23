const functionsArray = [
  () => {
    console.log(" Its  a funny Joke!!!");
  },

  () => {
    console.log("Its a very Bad Joke");
  },

  () => {
    console.log("its itme for programming not jokes time");
  },
];
functionsArray.forEach((functio) => {
  functio();
});
