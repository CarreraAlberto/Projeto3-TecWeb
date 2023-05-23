import './App.css';
import Login from './components/Login/login';
import NBA from './components/NBA/nba';
import Favoritos from './components/Favoritos/favoritos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="appbar">
          <img className="logo"></img>
          <h1 className="titulo">NBA APP</h1>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nba" element={<NBA />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  );
}

