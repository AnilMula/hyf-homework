
    var dogYearOfBirth = 1980;
    var dogYearFuture = 2022;
    var dogYear = dogYearFuture - dogYearOfBirth;
    /* 
    0 for dog years
    1 for human years */
    var shouldShowResultInDogYears = 1; 
    
    if(shouldShowResultInDogYears == 0){
    console.log(" Your dog will be " + dogYear/10 + " human years old in " + dogYearFuture);
    }
    else if(shouldShowResultInDogYears == 1){
    console.log(" Your dog will be " + dogYear + " years old in " + dogYearFuture);    
    }
    else{
    console("please enter either 0 or 1 in Dog Age")
    }
  