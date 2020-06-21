/* Create a function that takes 2 parameters: delay and stringToLog. 
Calling this function should log out the stringToLog after delay seconds.
Call the function you have created with some different arguments. */
const stringToLogWithDealy = (delay, stringToLog) => {
  setTimeout(() => {
    window.alert(stringToLog);
  }, delay);
};
stringToLogWithDealy(2000, "log message with 2 sec delay");
stringToLogWithDealy(5000, "log message with 5 sec delay");
