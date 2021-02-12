import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';
import Position from './Position';

export default function Main() {
  return (
    <div style={{ height: 800 }}>
      <Position
        renderProps={(x, y, handleMouseMove) => (
          <Mouse x={x} y={y} handleMouseMove={handleMouseMove}></Mouse>
        )}
      ></Position>
      <Position
        renderProps={(x, y, handleMouseMove) => (
          <Cat x={x} y={y} handleMouseMove={handleMouseMove}></Cat>
        )}
      ></Position>
    </div>
  );
}
