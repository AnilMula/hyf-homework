function getFullName(firstname, surname, useFormalName){
    if(useFormalName == false){
        return firstname + " " + surname;
    }
    else{
        return  "lord " + firstname + " " + surname;
    }
}

const fullname1 = getFullName("Anil","Mula",false);
const fullname2 = getFullName("Kristen", "Threshow", true);
console.log(fullname1);
console.log(fullname2);