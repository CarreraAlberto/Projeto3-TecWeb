import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login(props) {
  function handleKeyDown(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    getUser((document.getElementsByName("email")[0].value), (document.getElementsByName("password")[0].value)); 

  }

  async function getUser(email, password) {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/token/',
      data: {
        'username': email,
        'password': password
      }
    }
    await axios.request(options)
    .then((res) => {
      const options_token = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/notes/',
        headers: {
          Authorization: 'Token ' + res.data.token
        }
      
      };
      axios.request(options_token).then((res) => {
        console.log(res.data[0]);
        window.location.replace("/nba");
      }
      )
    })
  
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
        {/* <Link to="/nba"> */}
        <button className="btn" type="submit" onClick={handleKeyDown}>Sign In</button>
        {/* </Link> */}
      </div>
    </div>
  );
};
