import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCurrentUser = (Component) => {
  const NewComponent = ({ userid }, props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then((response) => setUser(response.data));
    }, [userid]);
    if (!user) return 'Loading....';
    return <Component {...props} user={user}></Component>;
  };
  return NewComponent;
};
export default MyCurrentUser;
