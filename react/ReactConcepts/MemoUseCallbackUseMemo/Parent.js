import React, { useCallback, useState, useMemo } from 'react';
import Child from './Child';

function Parent() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  function incrementLocal() {
    setLocalNumber((pre) => pre + 1);
  }
  function changeChildNumber(number) {
    setChildNumber(number);
  }
  const memorizedCallback = useCallback((number) => setChildNumber(number), []);
  return (
    <div>
      <Child number={childNumber} />
      <button changeNumber={memorizedCallback} onClick={incrementLocal}>
        Click me
      </button>
      <h1>Local:{localNumber}</h1>
    </div>
  );
}

export default Parent;
