let notes = [];

function saveNote(content, id) {
  // The function is to save notes like content (message)and id(like priority)

  notes.push({ content, id });
}
function getNote(id) {
  // the function is to find notes in the array of objects
  if (id == null || isNaN(id)) {
    return "getNote argument is null or not a number";
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id)
      return "content is '" + notes[i].content + "' for the id " + notes[i].id;
  }
  console.log("content can not found for);
}
function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ", has the following note text: " +
        notes[i].content
    );
  }
}
// unique feature I think would make this app better is
// to save a finished note(remove content and change priorities)
function endedNote(id) {
  // the function takes id a parameter as parameter
  // it removes content and id from the notes array
  // and it updates notes array by changing ids for the rest of objects
  if (id == null || id > notes.length) {
    return "pass valid id as an argument";
  }
  for (let i = 0; i <= notes.length; i++) {
    // first check if the arguments are exist in the notes
    if (notes[i].id == id) {
      // now we have valid content or id
      notes.splice(i, 1);
      for (let j = i; j < notes.length; j++) {
        notes[j].id = j + 1;
      }
      return (
        "note with id " +
        id +
        " deleted successfully and updated ids for the rest"
      );
    }
  }
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Visit Library", 3);
saveNote("Book Flight Tickets", 4);

console.log(getNote(3));

console.log(notes); // to see the contents of notes array
console.log(endedNote(4)); // you can pass id
console.log(notes);
logOutNotesFormatted(); // to display the notes in the formated string
