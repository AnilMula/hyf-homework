/* The term Renderprop refers to a technique for sharing code between 
react components using a prop whose value is  a function */
import React from 'react';
import Button from './ButtonCount';
import Hover from './HoverCount';
import Counter from './Counter';

export default function Main() {
  return (
    <div>
      <Counter
        renderProps={(count, incrementCount) => (
          <Button count={count} incrementCount={incrementCount}></Button>
        )}
      ></Counter>

      <Counter
        renderProps={(count, incrementCount) => (
          <Hover count={count} incrementCount={incrementCount}></Hover>
        )}
      ></Counter>
    </div>
  );
}
