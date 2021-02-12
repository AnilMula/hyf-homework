import React, { useEffect, useState } from 'react';
import User from './User';

function SearchUser({ username }) {
  const [isLoading, setIsloading] = useState(true);
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then((response) => response.json())
      .then((data) => {
        setIsloading(false);
        setuser(data.items);
      });
  }, [username]);
  console.log(user);
  return (
    <div>
      {typeof user === 'undefined' ? (
        <div>
          Maximum number of login attempts exceeded. Please try again later.
        </div>
      ) : user === null || isLoading ? (
        <div>loading..</div>
      ) : (
        <div>
          {user.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchUser;
