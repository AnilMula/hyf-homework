import React, { useContext } from 'react';
import ThemeContect from './ThemeContext';

export default function ChangeTheme() {
  const { theme, changeTheme } = useContext(ThemeContect);
  return (
    <div>
      <p>Click the button to change theme</p>
      <button
        onClick={() => {
          changeTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        ChangeTheme
      </button>
    </div>
  );
}
