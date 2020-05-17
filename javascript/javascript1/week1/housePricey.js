/* housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. 
The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. 
The garden size is 70m2. This house costs 1.000.000.

Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above. */

const wideInMetersPeter = 8;
const deepInMetersPeter = 10;
const heighInMetersPeter = 10;
const gardenSizeInM2Peter = 100;
const housePricePeter = wideInMetersPeter * deepInMetersPeter * heighInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;

const wideInMetersJulia = 5;
const deepInMetersJulia = 11;
const heighInMetersJulia = 8;
const gardenSizeInM2Julia = 70;
const housePriceJulia = wideInMetersJulia * deepInMetersJulia * heighInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;


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


   
