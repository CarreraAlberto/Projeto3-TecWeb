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
          'X-RapidAPI-Key': '7f2799f3a8mshf4df2249c60510ap17e9abjsnd79d436711d0',
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
