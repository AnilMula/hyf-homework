import React, { useContext } from 'react';
import { ThemeContext } from './Main';

export default function Component3() {
  const theme = useContext(ThemeContext);
  const createAdder = (addBy) => (number) => number + addBy;
  const add3 = createAdder(3);
  console.log(add3(4));
  return (
    <div style={theme}>
      <p>Component3</p>
    </div>
  );
}
