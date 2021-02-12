import React, { useEffect, useState } from 'react';

function Repos({ user }) {
  const [repos, setrepos] = useState(0);
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setrepos(data.length);
      });
  }, [user]);

  return <div>{repos}</div>;
}

export default Repos;
