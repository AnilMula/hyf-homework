import React, { useEffect, useState } from 'react';
import NewToDo from './NewToDo';

export default function ToDo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => {
      if (t) clearInterval(t);
    };
  }, [seconds]);

  const red = { color: 'red' };

  return (
    <div>
      <div>
        you have used <span style={red}>{seconds}</span> seconds on this website
      </div>
      <NewToDo />
    </div>
  );
}
