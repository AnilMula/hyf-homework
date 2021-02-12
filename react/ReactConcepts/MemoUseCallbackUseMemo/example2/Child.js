import React, { memo } from 'react';

function Child({ increment }) {
  console.log('child is rendering');
  return (
    <div>
      <h5>hello from child</h5>
      <button onClick={increment}></button>
    </div>
  );
}

export default memo(Child);
