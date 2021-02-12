import React, { memo } from 'react';

function Child(props) {
  function changeNumber() {
    props.changeNumber(Math.random());
  }
  console.log('here');
  return (
    <div>
      <h1>child:{props.number}</h1>
      <button onClick={changeNumber}>click to change child number</button>
    </div>
  );
}

export default Child;
// react.memo is useful for performance of component,
// memo re-render the component if any of the props changes
