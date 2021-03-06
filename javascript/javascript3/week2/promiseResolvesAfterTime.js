let resolvePromiseAfter; //global variable for promise
function createPromiseAfter(resolveAfter) {
  //this function is used to create a promise that resolves after time: given in setTime
  resolvePromiseAfter = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`promise resolved after ${resolveAfter / 1000} seconds`);
    }, resolveAfter);
  });
}
createPromiseAfter(3000); //function call to crate a promise after 2sec

//using promise way
resolvePromiseAfter.then((data) => console.log("Promise Output: " + data));
resolvePromiseAfter.catch((error) => console.log(console.log(error)));

//using async way
async function resolveFunctionAfterUsingAsync() {
  try {
    const data = await resolvePromiseAfter;
    console.log("ASYNC Outpt: " + data);
  } catch (error) {
    console.log(error);
  }
}
resolveFunctionAfterUsingAsync();
