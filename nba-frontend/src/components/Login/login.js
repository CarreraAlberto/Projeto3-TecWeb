import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login(props) {
  function handleKeyDown(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    getUser((document.getElementsByName("username")[0].value),(document.getElementsByName("email")[0].value), (document.getElementsByName("password")[0].value)); 
  }

  function criaUser(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    criaUsuario((document.getElementsByName("username")[0].value),(document.getElementsByName("email")[0].value), (document.getElementsByName("password")[0].value)); 

  }

  async function getUser(username, email, password) {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/token/',
      data: {
        'username': username,
        'email': email,
        'password': password
      }
    }
    axios.request(options)
    .then((res) => {
      console.log(res.data.token);
      localStorage.setItem('token', JSON.stringify(res.data));

      const options_token = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/notes/',
        headers: {
          Authorization: 'Token ' + res.data.token
        }
      
      };
      axios.request(options_token).then((res) => {
        console.log(res);
        window.location.replace("/nba");
      }
      )
    })
  
  }

  async function criaUsuario(username, email, password) {
    const options_create = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/users/',
      data: {
        'username': username,
        'email': email,
        'password': password
      }
    }
    await axios.request(options_create) 
    .then((res) => {
      const options = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/token/',
        data: {
          'username': username,
          'email': email,
          'password': password
        }
      }
      axios.request(options)
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
    
    });
  }

  return (
    <div className="page">
      <div className="formLogin">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter your username" name="username"/>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Enter your email" name="email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" name="password"/>
        <a type="submit" onClick={criaUser}>Sign Up</a>
        <button className="btn" type="submit" onClick={handleKeyDown}>Sign In</button>
      </div>
    </div>
  );
};
