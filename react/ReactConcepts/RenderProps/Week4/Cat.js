import React from 'react';

export default function Cat({ x, y, handleMouseMove }) {
  return (
    <div onMouseMove={handleMouseMove}>
      The current cat position is ({x}, {y})
    </div>
  );
}
