import React, { useState } from 'react';

export default function Counter({ renderProps }) {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  return <div>{renderProps(count, incrementCount)}</div>;
}
