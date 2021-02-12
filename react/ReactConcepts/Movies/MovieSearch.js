import React, { useState } from 'react';
import SearchField from './SearchField';

const MovieSerach = () => {
  const [movies, setMovies] = useState('');

  const functionParamater = (getNewMovie) => {
    setMovies(getNewMovie);
  };
  return (
    <div>
      {movies}
      <SearchField movie={functionParamater}> </SearchField>
      {movies}
    </div>
  );
};

export default MovieSerach;
