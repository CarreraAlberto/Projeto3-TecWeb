import React from "react";
import "./card.css";


export default function Card(props) {
  let botao = null;

  if (window.location.pathname === "/favoritos") {
    botao = <button className="botao-salvar" onClick={() => console.log("clik")}></button>;
  } else if (window.location.pathname === "/nba") {
    botao = <button className="botao-delete" onClick={() => console.log("clik")}></button>;
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
