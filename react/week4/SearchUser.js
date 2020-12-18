import React, { useEffect, useState, useContext } from 'react';
import User from './User';
import SearchUserContext from './UserContext';

function SearchUser() {
  const username = useContext(SearchUserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then((response) => response.json())
      .then((data) => {
        setIsloading(false);
        setUsers(data.items);
      });
  }, [username]);
  return (
    <div>
      {typeof users === 'undefined' ? (
        <div>
          Maximum number of login attempts exceeded. Please try again later.
        </div>
      ) : users === null || isLoading ? (
        <div>loading..</div>
      ) : (
        <div>
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchUser;
