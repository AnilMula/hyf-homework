function dressByWeather(temperature){
    /* this function takes temperature in centigrades as parameter and 
    returns what clothes to wear in that time */
    if(temperature <= 0){
        // for temperatures below 0 degrees centigrades
        return ["Double-layered hooded down jackets (Preferably waterproof)","snow shoe"];
    }
    else if(temperature > 0 && temperature <= 10){
        // for temperatures above 1 and below 10 degrees centigrades
        return ["winter jacket","Sweaters", "Jumpers", "Turtlenecks"];
    }
    else if( temperature > 10 && temperature <= 15){
        // for temperatures above 10 and below 15 degrees centigrades
        return [ "Shirts", "Hoodies", "Leather jackets"];
    }
}
const clothesToWear1 = dressByWeather(18);
console.log(clothesToWear1);

const clothesToWear2 = dressByWeather(10);
console.log(clothesToWear2);

const clothesToWear3 = dressByWeather(0);
console.log(clothesToWear3);