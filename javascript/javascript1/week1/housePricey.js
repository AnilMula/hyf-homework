/* housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. 
The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. 
The garden size is 70m2. This house costs 1.000.000.

Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above. */

var wideInMetersPeter = 8;
var deepInMetersPeter = 10;
var heighInMetersPeter = 10;
var gardenSizeInM2Peter = 100;
var housePricePeter = wideInMetersPeter * deepInMetersPeter * heighInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;

var wideInMetersJulia = 5;
var deepInMetersJulia = 11;
var heighInMetersJulia = 8;
var gardenSizeInM2Julia = 70;
var housePriceJulia = wideInMetersJulia * deepInMetersJulia * heighInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;


if(housePricePeter < 2500000) {
   console.log("peter is paying too low"); 
}
else {
    console.log("peter is paying too high"); 
}
if(housePriceJulia < 1000000){
    console.log("Julia is paying too low"); 
}
else {
    console.log("Julia is paying too high"); 
}


   
