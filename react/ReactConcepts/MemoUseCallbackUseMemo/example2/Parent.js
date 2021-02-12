import React, { useCallback, useState } from 'react';
import Child from './Child';

function Parent() {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState('');

  const incrementNumber = useCallback(() => {
    setNumber((pre) => pre + 1);
  }, []);
  return (
    <div>
      <h1>hello from parent</h1>
      <button onClick={incrementNumber}>increment parent{number}</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Child increment={incrementNumber} counter={number}></Child>
    </div>
  );
}

export default Parent;
