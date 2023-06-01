import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./favoritos.css";
import axios from "axios";
import ResultSearch from "../ResultSearch/result";


export default function Favoritos(){
    const [favoritos, setFavoritos] = useState([]);
    const [times, setTimes] = useState({});

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
        const lista_times = [];
        Promise.all(lista.map(async (time) => {
          await getTime(time.id_time);
          lista_times.push(times);
        }));
        setFavoritos(lista_times);
      }
    

    async function getTime(team) {
      let caminho = 'https://basketapi1.p.rapidapi.com/api/basketball/search/' + team;
      const options = {
        method: 'GET',
        url: caminho,
        headers: {
          'X-RapidAPI-Key': '6418c84e97msh9495c17f8ebaec6p1d0ccajsn2efc5b143de7',
          'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
        }
      };

      await axios.request(options)        
      .then((res) => {
        console.log(res.data.results[0].entity)
        setTimes({resultados: res.data.results[0].entity, score: res.data.results[0].score})
      });
    }  
    
    
    if(favoritos.length ==! 0){
      console.log(favoritos.length, 1);
    }


    return(
    <div>
        <h1 className="titulo-favorito">Favoritos</h1>
        <Link to="/nba">
            <button className="btn_volta">home</button>
        </Link>
        <div>
        {favoritos.map((time) => (
          Object.keys(favoritos).length !== 0 && <ResultSearch resultados={time.resultados} score={time.score} />
        ))}
        </div>
    </div>
    );
    
}
