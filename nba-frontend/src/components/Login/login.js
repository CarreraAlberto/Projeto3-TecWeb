import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="page">
      <div className="formLogin">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <label htmlFor="username">E-mail:</label>
        <input type="text" id="username" placeholder="Enter your e-mail" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />
        <a href="#">Forgot password?</a>
        <Link to="/nba">
          <button className="btn" type="button">Sign In</button>
        </Link>
      </div>
    </div>
  );
};