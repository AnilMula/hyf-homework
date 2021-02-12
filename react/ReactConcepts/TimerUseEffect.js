import React, { useEffect, useState } from 'react';

export default function TimerUseEffect() {
  const [value, setValue] = useState(0);
  const [buttonText, setButtonText] = useState('Stop');
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let t;
    if (isRunning) {
      t = setInterval(() => {
        setValue(value + 1);
      }, 1000);
    }

    return () => {
      if (t) clearInterval(t);
    };
  }, [value, isRunning]);
  return (
    <div>
      Timer Using Use Effect<p>{value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          const isRunningNext = isRunning ? false : true;
          const nextButtonText = !isRunningNext ? 'Start' : 'Stop';

          setButtonText(nextButtonText);
          setIsRunning(isRunningNext);
        }}
      >
        {buttonText}
      </button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
