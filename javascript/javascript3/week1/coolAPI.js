//fetch will get data from the url in the form of HTTP response
//json() method will retrive JSON body content from the response

//the api is an array of objects, unfortunately the api has only one object
// the object has five keys
/* 1.breeds
2. id
3.url
4.width
5.height */

fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((cats) => {
    console.log(cats[0].breeds); // it will dispaly breeds info
    console.log(cats[0].id); // it will display cats id
    console.log(cats[0].url); // it will display image loaction
    console.log(cats[0].width); //it will display width of image
    console.log(cats[0].height); // it will dispaly height of image
  });
