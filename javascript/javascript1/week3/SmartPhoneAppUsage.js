let activities = [];
function today() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear().toString().substr(-2);

  return dd + "/" + mm + "-" + yyyy;
}
function addActivity(date, activity, duration) {
  // the function will add activies object to activities array
  activities.push({ date, activity, duration });
}
function showStatus(activitiesObject) {
  let count = 0; // to count total activities
  let totalDuration = 0; // to sumup durations of all the activities
  if (activitiesObject.length == 0) {
    return "Add some activities before calling showStatus";
  }
  for (let i = 0; i < activitiesObject.length; i++) {
    totalDuration += activitiesObject[i].duration; // to sum up duration
    count++; // to sum up activities
  }
  return (
    "You have added " +
    count +
    "activities. They amount to " +
    totalDuration +
    " min. of usage"
  );
}
function usageLimit(activitiesObject) {
  // the function is to limit the user from using the smart phone
  const timeLimit = 30; // time limit in minutes
  let timeSpent = 0;
  for (let i = 0; i < activitiesObject.length; i++) {
    timeSpent += activitiesObject[i].duration;
    if (timeSpent > timeLimit)
      return "You have reached your limit, no more smartphoning for you!";
  }
}
function spentMostTimeOn(activitiesObject) {
  // the function will return the activity that was spent most time on
  let mostTimeActivity = activitiesObject[0]; // it is an object that stores activity that is spent most time
  for (let i = 0; i < activitiesObject.length; i++) {
    if (activitiesObject[i].duration > mostTimeActivity.duration)
      mostTimeActivity = activitiesObject[i];
  }
  return (
    "Most time spent on " +
    mostTimeActivity.activity +
    " and duration " +
    mostTimeActivity.duration
  );
}
// adding activities
addActivity(today(), "You Tube", 30);
addActivity(today(), "Facebook", 45);

//dispaly activities object
console.log(activities);

//dispaly return message from showStatus() function
console.log(showStatus(activities));

//display return message from usageLimit() function
console.log(usageLimit(activities));

//display message from spentMostTimeOn() function
console.log(spentMostTimeOn(activities));
