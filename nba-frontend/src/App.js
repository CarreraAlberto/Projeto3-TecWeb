import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login/login';
import NBA from './components/NBA/nba';
import Card from './components/Card/card';

function App() {
  return (
    <div className="App">
      <header>
        <NBA />
      </header>
    </div>
  );
}
export default App;
