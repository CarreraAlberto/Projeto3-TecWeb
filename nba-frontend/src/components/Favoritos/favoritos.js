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
          // console.log(res.data);
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
        }));
      }
      
    

    async function getTime(team) {
      let caminho = 'https://basketapi1.p.rapidapi.com/api/basketball/search/' + team;
      const options = {
        method: 'GET',
        url: caminho,
        headers: {
          'X-RapidAPI-Key': '7f2799f3a8mshf4df2249c60510ap17e9abjsnd79d436711d0',
          'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
        }
      };
      
      await axios.request(options)
      .then((res) => {
        console.log(res.data.results[0].entity)
        // setTime(res.data.results[0].entity)
        // setScore(res.data.results[0].score)
        favoritos.push({resultados: res.data.results[0].entity, score: res.data.results[0].score});
      });
    }
    
    if(favoritos.length ==! 0){
      console.log(favoritos);
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
