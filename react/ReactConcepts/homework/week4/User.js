import React from 'react';

function User({ user }) {
  return (
    <div>
      <div>{user.login}</div>
    </div>
  );
}

export default User;
