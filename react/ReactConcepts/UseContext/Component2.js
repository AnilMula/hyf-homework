import React, { useContext } from 'react';
import Component3 from './Component3';
import { ThemeContext } from './Main';

export default function Component2() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p style={theme}>Component2</p>
      <Component3></Component3>
    </div>
  );
}
