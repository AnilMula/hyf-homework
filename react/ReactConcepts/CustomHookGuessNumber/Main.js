import React from 'react';
import { GuessTheNumber } from './GuessTheNumber';

function Main() {
  return (
    <div>
      <GuessTheNumber length={10} max={4}></GuessTheNumber>
    </div>
  );
}

export default Main;
