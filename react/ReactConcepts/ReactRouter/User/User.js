import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.about}</p>
    </div>
  );
}

export default User;
