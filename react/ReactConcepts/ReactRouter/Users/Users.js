import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/api`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
