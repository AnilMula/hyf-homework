
    const dogYearOfBirth = 1980;
    const dogYearFuture = 2022;
    const dogYear = dogYearFuture - dogYearOfBirth;
    /* 
    0 for dog years
    1 for human years */
    const shouldShowResultInDogYears = true; 
    
    if(shouldShowResultInDogYears){
    console.log(" Your dog will be " + dogYear/10 + " human years old in " + dogYearFuture);
    }
    else {
    console.log(" Your dog will be " + dogYear + " years old in " + dogYearFuture);    
    }
  