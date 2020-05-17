function getFullName(firstname, surname, useFormalName){
    if(useFormalName == false){
        return firstname + " " + surname;
    }
    else{
        return  "lord " + firstname + " " + surname;
    }
}

var fullname1 = getFullName("Anil","Mula",false);
var fullname2 = getFullName("Kristen", "Threshow", true);
console.log(fullname1);
console.log(fullname2);