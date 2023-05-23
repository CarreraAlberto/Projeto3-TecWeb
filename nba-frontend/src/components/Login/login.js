import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  
  function handleKeyDown(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    props.getUser((document.getElementsByName("email")[0].value), (document.getElementsByName("password")[0].value)); 

  }

  return (
    <div className="page">
      <div className="formLogin">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <label htmlFor="username">E-mail:</label>
        <input type="text" id="username" placeholder="Enter your e-mail" name="email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" name="password"/>
        <a href="#">Sign Up</a>
        <Link to="/nba">
          <button className="btn" type="button">Sign In</button>
        </Link>
      </div>
    </div>
  );
};