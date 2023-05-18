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
          'X-RapidAPI-Key': 'bf4f0312ccmsh2f2b045a972b41bp13f83ejsn1a2f2198ac11',
          'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
        }
      };
      
      await axios.request(options)
      .then((res) => {
        setTime(res.data.results[0].entity)
        setScore(res.data.results[0].score)
      });
    }
  
    return (<div>
      <div className="appbar">
        <img className="logo"></img>
        <h1 className="titulo">NBA APP</h1>
      </div>

      <div className="corpo">
        <Search className="barra-botao" getTime={getTime}/>
        {Object.keys(time).length !== 0 && <ResultSearch resultados={time} score={score} />}
      </div>
    </div>) 
  }
