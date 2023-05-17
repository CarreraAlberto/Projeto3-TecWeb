import React from "react";
import Search from "../Search/search";
import ResultSearch from "../ResultSearch/result";
import { useState } from "react";
import axios from "axios";
import "./nba.css"

export default function NBA() {
    const [time, setTime] = useState({});
    const [score, setScore] = useState(0);
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
        // console.log(res.data.results[0].entity, "1");
      });
    }
  
    return (<div>
      <div className="appbar">
        <img className="logo"></img>
        <h1 className="titulo">NBA APP</h1>
      </div>

      <div className="corpo">
        {/* <Search getFilmes={getFilmes} className="BarraEbotao"/> */}
        <Search className="barra-botao" getTime={getTime}/>
        <ResultSearch resultados={time} score={score}/>
      </div>
    </div>) 
  }