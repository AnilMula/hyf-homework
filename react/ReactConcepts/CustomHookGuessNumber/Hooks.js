import { useState } from 'react';

function Hooks() {
  const [unlock, setUnlock] = useState(false);

  const onUnlock = () => {
    setUnlock(true);
  };

  return { unlock, onUnlock, setUnlock };
}

export default Hooks;
