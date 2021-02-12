import React, { useState } from 'react';
import SearchUser from './SearchUser';

function Main() {
  const [username, setUsername] = useState('');
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Github User Serach</h1>
      <input type="text" onChange={handleInputChange}></input>
      {username.length === 0 ? (
        <div>No results</div>
      ) : (
        <SearchUser username={username}></SearchUser>
      )}
    </div>
  );
}

export default Main;
