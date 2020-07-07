function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position);
      reject(position);
    });
  });
}

//using promise way
getCurrentLocation().then((response) => {
  console.log(response.coords.latitude);
  console.log(response.coords.longitude);
});
getCurrentLocation().catch((response) => console.log(response));

//using asyncway
async function getCurrentLocationByAsync() {
  try {
    const data = await getCurrentLocation();
    console.log(data.coords.latitude);
    console.log(data.coords.longitude);
  } catch (error) {
    console.log(error);
  }
}
getCurrentLocationByAsync();
