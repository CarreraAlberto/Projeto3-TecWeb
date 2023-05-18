import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/login';
import NBA from './components/NBA/nba';
import Card from './components/Card/card';

function App() {
  const [telaAtual, setTelaAtual] = useState("login");

  const handleChangeTela = () => {
    setTelaAtual("outraTela");
  };

  return (
    <div className="App">
      <div className="appbar">
        <img className="logo"></img>
        <h1 className="titulo">NBA APP</h1>
      </div>
      
      <header>
        {telaAtual === "login" ? (
          <Login onChangeTela={handleChangeTela} />
        ) : (
          <NBA />
        )}
      </header>
    </div>
  );
}

export default App;
