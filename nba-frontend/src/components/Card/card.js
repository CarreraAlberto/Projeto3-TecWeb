import React from "react";
import "./card.css";
import axios from "axios";


export default function Card(props) {
  let botao = null;

  async function salvaFavorito() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/notes/',
      data: {
        'time': props.title,
      },
      headers: {
        Authorization: 'Token ' + JSON.parse(localStorage.getItem('token')).token
      }
    }
    console.log(JSON.parse(localStorage.getItem('token')).token);
    await axios.request(options)
    .then((res) => {
      console.log(res.data);
    })
  }

  if (window.location.pathname === "/nba") {
    botao = <button className="botao-salvar" onClick={salvaFavorito}></button>;
  } else if (window.location.pathname === "/favoritos") {
    botao = <button className="botao-delete" onClick={console.log("click")}></button>;
  }

  return (
    <div className="card">
      <div className="card_inner">
        <div className="card__body card__body--front">
          {botao}
          <img className="img_time" src={props.imagem} alt={props.title} />
          <h2>{props.title}</h2>
        </div>
        <div className="card__body card__body--back">
          {botao}
          <h2>{props.nickname}</h2>
          <h2>Score: {props.score}</h2>
          <h2>Country: {props.pais}</h2>
        </div>
      </div>
    </div>
  );
}
