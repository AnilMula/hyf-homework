import React from 'react';

export default function Mouse({ x, y, handleMouseMove }) {
  return (
    <div onMouseMove={handleMouseMove}>
      The current mouse position is ({x}, {y})
    </div>
  );
}
