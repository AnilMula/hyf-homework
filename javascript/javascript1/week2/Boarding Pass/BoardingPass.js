function getFullName(firstname, lastname, useFormalName){
    if(useFormalName == false){
        
        document.getElementById("Fullname").innerHTML = firstname + " " +lastname;
    }
    else{
        document.getElementById("Fullname").innerHTML = `Lord ${firstname} ${lastname}`;
    }
}
function getBoardingCard(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let useFormalName = document.getElementById("formalname").checked;
    // the folloeing code is to display and hide a div
    var x = document.getElementById("boardingcard-hidden");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    // end of code to dispaly and hide a div
    getFullName(firstname,lastname,useFormalName);

}
