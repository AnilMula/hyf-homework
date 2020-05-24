let class07Students = []; // it is an empty array for a class that holds max 6 students
function addStudent(student) {
  // this is a inner function to add a student to the class
  class07Students.push(student);
}
function removeStudent() {
  /* this is a inner function to remove a student when the class is full
    and queen needs to be added */

  class07Students.pop();
}
function addStudentToClass(studentName) {
  /* the function takes a student name and adds to a class with the following conditions
    1.There can be only 6 students in a class. 
      If more students are tried to be added, 
      log out the following: "Cannot add more students to class 07".
    2.The same person cannot be added to the class. If the same person is added to the class, 
      log out the following: 'Student Benjamin is already in the class' 
      where Benjamin is substituted for the studentName.
    3.We are very fond of our Queen in Denmark, 
      so if the Queen is added to the class she should always get a space. Even if the class has been filled out.
    4.You cannot add an empty string to a class */

  if (studentName.toLowerCase === "Queen") {
    // if the student is a queen she must have a place in the class
    // first check if the queen is already in the class
    for (let i = 0; i < class07Students.length; i++) {
      if (class07Students[i] == "Queen") {
        // if the Queen already exist in the class just return a message
        console.log("yes");
        return "Queen already exist in the class";
      }
    }
    // we must add Queen in the class
    // check if the class is full
    if (class07Students.length == 6) {
      // now space must be created for the queen
      removeStudent();
      addStudent(studentName);
    } else {
      // here class is not full just call add student()
      addStudent(studentName);
    }
  } else {
    // here the student is not a queen
    // first check whether the string is empty
    if (studentName.trim() === "") {
      // student name is empty so return a log message
      return "empty name can not be added to a class";
    }
    // check the student already exist
    for (let i = 0; i < class07Students.length; i++) {
      if (class07Students[i] == studentName) {
        // if the Student already exist in the class just return a message
        return "student " + studentName + " already exist in the class";
      }
    }
    // check if the class is full
    if (class07Students.length == 6) {
      // now NO space for a new student
      return "No space for a new student";
    } else {
      // here class is not full just call add student()
      addStudent(studentName);
    }
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(addStudentToClass("Anil"));
console.log(addStudentToClass("Johnny"));
console.log(addStudentToClass("Hida"));
console.log(addStudentToClass("Thomas"));
console.log(addStudentToClass("   "));
console.log(addStudentToClass("Anil"));
console.log(addStudentToClass("Tina"));
console.log(addStudentToClass("Lia"));
console.log(getNumberOfStudents());
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Anil"));
console.log(class07Students);
