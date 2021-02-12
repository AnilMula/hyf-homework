/*HOC is to share the common functionality between the components
HOC is pattern where a function takes a component as an argument and returns a new component
const newComponent = HOC(originalComponent)  */
import React from 'react';
import User from './User';
import MyCurrentUser from './MyCurrentUser';

export default function Main() {
  const CurrentUser = MyCurrentUser(User);
  return (
    <div>
      <CurrentUser userid={1}></CurrentUser>
      <CurrentUser userid={2}></CurrentUser>
    </div>
  );
}
