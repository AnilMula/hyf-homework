function myFunction() {
let firstWords = ["Easy", "Awesome", "Wonderful","Ideal","Professional","Creative","Hub","Solution"];
let secondWords = ["Feasible", "Valuable", "Pricy","Incredible","Hoody","Easy", "Awesome", "Wonderful"];
const num1 = document.getElementById("I1").value;
const num2 = document.getElementById("I2").value;;
let startupName = firstWords[num1] + ' ' + secondWords[num2];
    window.alert(" The startup: " +  " \" " + startupName  + " \" " + " contains " + startupName.length + " characters");
  }
       
