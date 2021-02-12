import React from 'react';
import Component1 from './Component1';
import Component3 from './Component3';

const themes = {
  light: {
    foreground: '#022200',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(themes.dark);

export default function Main() {
  return (
    <div>
      <h1>this is the parent for use context example</h1>

      <Component1></Component1>
      <ThemeContext.Provider value={themes.light}>
        <Component3></Component3>
      </ThemeContext.Provider>
    </div>
  );
}
