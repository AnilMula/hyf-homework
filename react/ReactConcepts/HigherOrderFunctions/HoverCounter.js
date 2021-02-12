import React from 'react';
import withCounter from './WithCounter';

function HoverCounter({ count, incrementCount }) {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  );
}

export default withCounter(HoverCounter, 10);
