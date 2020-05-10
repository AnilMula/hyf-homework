function myFunction() {
    var dogYearOfBirth = document.getElementById("DYOB").value;
    var dogYearFuture = document.getElementById("DYF").value;
    var dogYear = parseInt(dogYearFuture) - parseInt(dogYearOfBirth);
    var shouldShowResultInDogYears = document.getElementById("DA").value;
    
    if(shouldShowResultInDogYears == 0){
    window.alert(" Your dog will be " + dogYear/10 + " human years old in " + dogYearFuture);
    }
    else if(shouldShowResultInDogYears == 1){
    window.alert(" Your dog will be " + dogYear + " years old in " + dogYearFuture);    
    }
    else{
    window.alert("please enter either 0 or 1 in Dog Age")
    }
  }
       
