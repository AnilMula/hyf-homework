import React, { useState } from 'react';

export default function Position({ renderProps }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  return <div>{renderProps(x, y, handleMouseMove)}</div>;
}
