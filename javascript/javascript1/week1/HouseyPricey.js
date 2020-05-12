/* housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. 
The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. 
The garden size is 70m2. This house costs 1.000.000.

Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above. */
function myFunction() {
    var wideInMetersPeter = document.getElementById("W1").value;
    var deepInMetersPeter = document.getElementById("D1").value;
    var heighInMetersPeter = document.getElementById("H1").value;
    var gardenSizeInM2Peter = document.getElementById("GSIM1").value;
    var housePricePeter = wideInMetersPeter * deepInMetersPeter * heighInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
    
    document.getElementById("HP1").value =  housePricePeter;

    var wideInMetersJulia = document.getElementById("W2").value;
    var deepInMetersJulia = document.getElementById("D2").value;
    var heighInMetersJulia = document.getElementById("H2").value;
    var gardenSizeInM2Julia = document.getElementById("GSIM2").value;
    var housePriceJulia = wideInMetersJulia * deepInMetersJulia * heighInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
    
    document.getElementById("HP2").value =  housePriceJulia;

    if(housePricePeter < 2500000) {
       window.alert("peter is paying too low"); 
    }
    else {
        window.alert("peter is paying too high"); 
    }
    if(housePriceJulia < 1000000){
        window.alert("Julia is paying too low"); 
    }
    else {
        window.alert("Julia is paying too high"); 
    }
    // window.alert(" You will be " + age + " years old in " + yearFuture); 
  }
       
