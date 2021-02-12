/* import React, { useState } from 'react';

export default function ButtonCount() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>clicked {count} times</button>
    </div>
  );
} */

import React from 'react';

export default function ButtonCount({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>clicked {count} times</button>
    </div>
  );
}
