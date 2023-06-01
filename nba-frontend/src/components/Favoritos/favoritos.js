import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import ResultSearch from "../ResultSearch/result";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [times, setTimes] = useState([]);

  async function pegaFavoritos() {
    const options = {
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/notes/',
      headers: {
        Authorization: 'Token ' + JSON.parse(localStorage.getItem('token')).token
      }
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      getListaTimes(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    pegaFavoritos();
  }, []);

  async function getListaTimes(lista) {
    const listaTimes = [];

    await Promise.all(
      lista.map(async (time) => {
        const timeData = await getTime(time.id_time);
        if (timeData && timeData.resultados && timeData.resultados.id) {
          listaTimes.push(timeData);
        }
      })
    );

    setFavoritos(listaTimes);
  }

  async function getTime(team) {
    const caminho = 'https://basketapi1.p.rapidapi.com/api/basketball/search/' + team;
    const options = {
      method: 'GET',
      url: caminho,
      headers: {
        'X-RapidAPI-Key': '0706172402msh3ded9bf3861ad1ep11c49fjsne36cc8fcd7be',
        'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      return { resultados: data.results[0].entity, score: data.results[0].score };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return (
    <div>
      <h1 className="titulo-favorito">Favoritos</h1>
      <Link to="/nba">
        <button className="btn_volta">home</button>
      </Link>
      <div>
        {favoritos.map((time, index) => (
          <ResultSearch key={index} resultados={time.resultados} score={time.score} />
        ))}
      </div>
    </div>
  );
}
