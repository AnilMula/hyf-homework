/* import React, { useState } from 'react';

export default function HoverCount() {
  const [hover, setHover] = useState(0);

  const handleMouseOver = () => {
    setHover((count) => count + 1);
  };
  return (
    <div>
      <h2 onMouseOver={handleMouseOver}>hovered {hover} times</h2>
    </div>
  );
} */
import React from 'react';

export default function HoverCount({ count, incrementCount }) {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
    </div>
  );
}
