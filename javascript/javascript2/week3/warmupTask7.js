const runAfterDelay = (delay, callback) => {
  setTimeout(callback, delay);
};

runAfterDelay(4000, function () {
  console.log("Message after delay");
});
