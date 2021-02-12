import React from 'react';
//import { Col } from 'react-bootstrap';
import logo from './anil.jpg';

import './App.css';
import Main from '../src/CustomHookGuessNumber/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Class</p>
      </header>
      <Main></Main>
    </div>
  );
}

export default App;
