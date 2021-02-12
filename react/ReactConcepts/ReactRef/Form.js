import React, { useEffect, useRef } from 'react';

export default function Form() {
  const inputRef = useRef('');

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div>
      <p>username</p>
      <input ref={inputRef} type="text"></input>
    </div>
  );
}
