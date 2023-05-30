import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./favoritos.css";
import axios from "axios";
import Card from "../Card/card";


export default function Favoritos(){
    const [favoritos, setFavoritos] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [time, setTime] = useState({});
    const [score, setScore] = useState(0);
  
    async function pegaFavoritos() {
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
          console.log(res.data);
          getListaTimes(res.data);
        })
      }
    useEffect(() => {
        pegaFavoritos();
        }, []);
    
    async function getListaTimes(lista) {
        let lista_times = [];
        Promise.all(lista.map(async (time) => {
          await getTime(time.id_time);
          lista_times.push({resultados: time, score: score});
        }))
        setFavoritos(lista_times);
        console.log(lista_times);
      }
      
    

    async function getTime(team) {
      let caminho = 'https://basketapi1.p.rapidapi.com/api/basketball/search/' + team;
      const options = {
        method: 'GET',
        url: caminho,
        headers: {
          'X-RapidAPI-Key': '7a65528b38msh5250b2f57bf92adp1c19e7jsnda56c1b7eef3',
          'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
        }
      };
      
      await axios.request(options)
      .then((res) => {
        setTime(res.data.results[0].entity)
        setScore(res.data.results[0].score)
      });
    }
    return(
    <div>
        <h1 className="titulo-favorito">Favoritos</h1>
        <Link to="/nba">
            <button className="btn_volta">home</button>
        </Link>
        {favoritos.map((time) => (
          <Card
            key={time.resultados.id}
            title={time.resultados.name}
            score={time.score}
            // imagem={imageUrl}
            pais={time.resultados.country.name}
            nickname={time.resultados.shortName}
            id_time={time.resultados.id}
          />
          
        ))}
    </div>
    );
}
