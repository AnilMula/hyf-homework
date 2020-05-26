function getEventWeekday() {
  /* The purpose of this function is to return a weekday 
    that is number of days from today */
  // days is string array that holds all the week days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(); // d is an instance of an  Date object
  let today = d.getDay(); // getday() method returns a number 0=sunday...6=saturday
  today += parseInt(document.getElementById("numdays").value);

  document.getElementById("weekday").innerHTML =
    " The event is on " + days[today % 7]; //return a weekday that is number of days from today
}
