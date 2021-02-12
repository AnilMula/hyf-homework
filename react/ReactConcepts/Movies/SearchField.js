import React, { useState } from 'react';

const SearchField = (props) => {
  const { movie } = props;

  const [value, getInput] = useState('');
  const handleOnChange = (event) => {
    const value = event.target.value;
    getInput(value);
    movie(value);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange}></input>
      <p>{value}</p>
    </div>
  );
};

export default SearchField;
