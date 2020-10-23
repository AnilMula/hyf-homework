import React, { useState } from 'react';
import SearchUser from './SearchUser';
import SearchUserContext from './UserContext';

function Main() {
  const [username, setUsername] = useState('');
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <SearchUserContext.Provider value={username}>
        <h1>Github User Serach</h1>
        <input type="text" onChange={handleInputChange}></input>
        {username.length === 0 ? (
          <div>No results</div>
        ) : (
          <SearchUser></SearchUser>
        )}
      </SearchUserContext.Provider>
    </div>
  );
}

export default Main;
