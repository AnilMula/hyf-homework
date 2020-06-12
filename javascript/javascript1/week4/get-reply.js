// voice assistant function in javascript
/* name should be global variable beacause the name is extracted 
in the first call to getReply and it is displayed in the second call 
 */
let name;
let todo = [];
function getReply(inputString) {
  inputString = inputString.trim();
  if (inputString.search("Hello my name is") == 0) {
    // this block of code is say hello to user and store user name in the global variable
    let positionOfName =
      inputString.search("Hello my name is Benjamin") +
      "Hello my name is".length;
    name = inputString.substring(positionOfName);
    return "Nice to meet you " + name;
  }
  if (inputString.search("What is my name") == 0) {
    // this block of code is dispaly name
    if (name != null) return "Your name is " + name;
    else return "Name is not defined";
  }
  // the following code is to add activity to "todo list"
  if (inputString.search("Add") == 0) {
    // now we have to find the activity
    let activity = inputString.substring(4, inputString.search("to my todo"));
    // length of add is 3 and one space so total 4
    todo.push(activity);
    return activity + "added to your todo";
  }

  // the following code is to remove from "todo list"
  if (inputString.search("Remove") == 0) {
    let activity = inputString.substring(7, inputString.search("from my todo"));
    todo.splice(activity, 1);
    return "Removed " + activity + "from your todo";
  }

  // the following code is to dispaly the activities todo
  if (inputString === "What is on my todo?") {
    let activities = "";
    for (let i = 0; i < todo.length; i++) {
      if (i == todo.length - 1) {
        // this part is to display last activity with and
        activities += "and " + todo[i];
      } else {
        // this part is to display all activities except last with ,
        activities += todo[i] + ",";
      }
    }
    return activities;
  }

  // the following code is to dispaly date in human readable format
  if (inputString === "What day is it today?") {
    let today = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      today.getDay() +
      ". of " +
      monthNames[today.getMonth()] +
      " " +
      today.getFullYear()
    );
  }
  // the following code is to do simple mathematics
  if (inputString.substring(0, 7) == "what is") {
    // now extract mathematical expression.
    let mathematicalExpression = inputString.substring(8);
    if (mathematicalExpression.search("\\+") != -1) {
      //because + is a meta character we had to use \\+
      // get the two numbers from the mathematical expression
      let number1 = mathematicalExpression.substring(
        0,
        mathematicalExpression.search("\\+") - 1
      );
      let number2 = mathematicalExpression.substring(
        mathematicalExpression.search("\\+") + 1
      );
      return parseInt(number1) + parseInt(number2);
    } else if (mathematicalExpression.search("-") != -1) {
      // get the two numbers from the mathematical expression
      let number1 = mathematicalExpression.substring(
        0,
        mathematicalExpression.search("-") - 1
      );
      let number2 = mathematicalExpression.substring(
        mathematicalExpression.search("-") + 1
      );
      return parseInt(number1) - parseInt(number2);
    } else if (mathematicalExpression.search("\\*") != -1) {
      // since * is a meta character we had to use \\*
      // get the two numbers from the mathematical expression
      let number1 = mathematicalExpression.substring(
        0,
        mathematicalExpression.search("\\*") - 1
      );
      let number2 = mathematicalExpression.substring(
        mathematicalExpression.search("\\*") + 1
      );
      return parseInt(number1) * parseInt(number2);
    } else return "not a valid input";
  }

  // the following code is to set a timer
  if (inputString.substring("Set a timer for")) {
    let timeInterval = parseInt(inputString.charAt(16)); //minutes
    console.log(
      "Timer set for " + timeInterval + " minutes" + "!!!!PLEASE WAIT!!!"
    );
    setTimeout(function () {
      console.log("Timer Done");
    }, timeInterval * 60 * 1000); // milli seconds
  }
}
console.log(getReply(" Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); //singing in the shower added to your todo
console.log(getReply("Add dressup to my todo"));
console.log(getReply("Add breakfast to my todo"));
console.log(getReply("What is on my todo?")); // will display all the activities
console.log(getReply("Remove fishing from my todo")); //Removed fishing from your todo
console.log(getReply("What is on my todo?")); // will display all the activities
console.log(getReply("What day is it today?")); //30. of August 2019
console.log(getReply("what is 13 + 2")); // we can use + - *
getReply("Set a timer for 2 minute");
