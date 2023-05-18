import React from "react";
import "./card.css";


export default function Card(props) {
    return (
    <div className="card">
        <div className="card_inner">
          <div className="card__body card__body--front">
            <img className="img_time" src={props.imagem}/>
            <h2>{props.title}</h2>
          </div>
          <div className="card__body card__body--back">
            <h2>Score: {props.score}</h2>
            <h2>Country: {props.pais}</h2>
          </div>
        </div>
    </div>
    );
}