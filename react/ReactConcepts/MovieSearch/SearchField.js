import React, { useState } from 'react';

const API_KEY = 'c8af3ccd';

const SearchField = (props) => {
  const [query, setQuery] = useState('');
  const { onMovieResult } = props;

  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const onSubmitSearch = () => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.Error) {
          onMovieResult([]);
          return;
        }

        onMovieResult(result.Search);
      });
  };

  return (
    <div>
      <input text="text" onChange={onChange} />
      <button onClick={onSubmitSearch}>Search</button>
    </div>
  );
};

export default SearchField;
