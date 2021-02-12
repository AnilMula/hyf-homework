import React from 'react';
import withCounter from './WithCounter';
function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  );
}

export default withCounter(ClickCounter, 5);
