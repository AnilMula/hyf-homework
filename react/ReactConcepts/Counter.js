import React, { useState, useEffect } from 'react';

//to illustrate button onClick and usestate
const Counter = (props) => {
  const { countFrom } = props;

  const [myCount, setMyCount] = useState(countFrom);
  useEffect(() => {
    console.log('componemt update');
  }, [myCount]);
  return (
    <div>
      <button onClick={() => setMyCount((prevCount) => prevCount - 1)}>
        -
      </button>
      <span>{myCount}</span>
      <button onClick={() => setMyCount((myCount) => myCount + 1)}>+</button>
    </div>
  );
};

export default Counter;
