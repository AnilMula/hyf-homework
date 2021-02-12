import React, { useState } from 'react';
import ThemeContect from './ThemeContext';
import ChangeTheme from './ChangeTheme';
import './Week4.css';

export default function Main() {
  const [theme, changeTheme] = useState('');
  return (
    <div className={theme}>
      <ThemeContect.Provider value={{}}>
        {console.log(theme)}
        <ChangeTheme></ChangeTheme>
      </ThemeContect.Provider>
    </div>
  );
}
