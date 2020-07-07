// fetch from movies api
const moviesPromise = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
);

//BY promise way
moviesPromise
  .then((response) => response.json())
  .then((movies) => {
    console.log(movies);
    //filter bad movies by rating less than 7
    const badMovies = movies.filter((movies) => movies.rating < 7);
    const badMoviesSince2000 = movies.filter(
      (movies) => movies.rating < 7 && movies.year >= 2000
    );
    console.log(badMovies);
    console.log(badMoviesSince2000);
  });
