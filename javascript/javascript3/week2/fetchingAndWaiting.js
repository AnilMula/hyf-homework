/* The 3 steps: do for promises and async

Fetch some data from an api.
After that data has been fetched, wait 3 seconds
Log out the data from the api */

//By using promises
const promiseMovies = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
);
setTimeout(() => {
  promiseMovies
    .then((response) => response.json())
    .then((data) => console.log(data));
}, 3000);

//By using Async
async function fetchAndWaiting() {
  try {
    const promiseMovies = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    setTimeout(async () => {
      const data = await promiseMovies.json();
      console.log(data);
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}
fetchAndWaiting();
//As of now i am comfortable with promiseway because it is
//1.easy to write
//2.readable
//3.less code
//4. no need to remember to write aync await keywords and function call
