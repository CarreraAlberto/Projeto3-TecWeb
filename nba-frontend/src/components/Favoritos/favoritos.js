import React from "react";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./favoritos.css";
import axios from "axios";
import Card from "../Card/card";


export default function Favoritos(props){
    const [time, setTime] = useState({});
    async function pegaId() {
        const options = {
          method: 'GET',
          url: 'http://127.0.0.1:8000/api/notes/',
          headers: {
            Authorization: 'Token ' + JSON.parse(localStorage.getItem('token')).token
          }
        }
        console.log(JSON.parse(localStorage.getItem('token')).token);
        await axios.request(options)
        .then((res) => {
          console.log(res.data, "OOOOOOOOOOOOOOOBA\n\n\n");
          setTime(res.data);
        })
      }
    useEffect(() => {
        pegaId();
        }, []);
    return(
    <div>
        <h1 className="titulo-favorito">Favoritos</h1>
        <Link to="/nba">
            <button className="btn_volta">home</button>
        </Link>

    </div>
    );
}
