import React, { useState } from 'react';
import SearchField from './SearchField';
import SearchResult from './SearchResult';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);

  const onMovieResult = (movieResult) => {
    setMovies(movieResult);
  };

  return (
    <div>
      <SearchField onMovieResult={onMovieResult} />
      <SearchResult movies={movies} />
    </div>
  );
};

export default MovieSearch;
