import React from "react";
import Search from "../Search/search";
import ResultSearch from "../ResultSearch/result";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
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
          'X-RapidAPI-Key': 'dd84dd465fmsh7b77dae010e8332p1580cfjsn7a2a874b66ef',
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
      <div className="corpo">
        <Link to="/favoritos">
          <img className="icon"></img>
        </Link>
        <Search className="barra-botao" getTime={getTime}/>
        {Object.keys(time).length !== 0 && <ResultSearch resultados={time} score={score} />}
      </div>
    </div>) 
  }
