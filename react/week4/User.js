import React, { useState } from 'react';

function User({ user }) {
  const [showRepos, setShowRepos] = useState(false);
  const handleMouseOver = (e) => {
    setShowRepos(true);
  };
  return (
    <div>
      <div onMouseOver={handleMouseOver}>{user.login}</div>
    </div>
  );
}

export default User;
