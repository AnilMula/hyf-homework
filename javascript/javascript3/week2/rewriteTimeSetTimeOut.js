function setTimeoutPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Called after 3 seconds");
    }, time);
  });
}

//using promise way
setTimeoutPromise(3000).then((data) => {
  console.log(data);
});

//using async way
async function setTimeOutByAsync() {
  try {
    const data = await setTimeoutPromise(3000);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
setTimeOutByAsync();
