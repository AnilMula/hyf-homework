import React, { useState } from 'react';
import Movie from './Movie';

const SearchResult = (props) => {
  const [selectedMovie, setSelectedMovie] = useState();

  const { movies } = props;

  const onClickMovie = (imdbID) => {
    console.log('clicked a movie', imdbID);
    setSelectedMovie(imdbID);
  };

  console.log('selectedMovie', selectedMovie);

  return (
    <div>
      {movies.length === 0 && <span>There is no result</span>}

      {movies.map((movie) => {
        return (
          <Movie
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            onClickMovie={onClickMovie}
          />
        );
      })}
    </div>
  );
};

export default SearchResult;
