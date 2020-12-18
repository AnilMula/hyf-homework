import React from 'react';
import { Link } from 'react-router-dom';

function User({ user }) {
  return (
    <div>
      <div className="">
        {/* <a href={`https://github.com/${user.login}`}>{user.login}</a> */}
        <Link to={`/user/${user.login}`}>{user.login}</Link>

        <img src={user.avatar_url} alt="user-avatar" className="circle"></img>
      </div>
    </div>
  );
}

export default User;
