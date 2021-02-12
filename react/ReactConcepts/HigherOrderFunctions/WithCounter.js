import React, { useState } from 'react';

const WithCounter = (WrappedComponent, incrementNumber) => {
  function WithCounter2(props) {
    const [count, setCount] = useState(incrementNumber);
    return (
      <WrappedComponent
        count={count}
        incrementCount={setCount}
        {...props}
      ></WrappedComponent>
    );
  }

  return WithCounter2;
};
export default WithCounter;
