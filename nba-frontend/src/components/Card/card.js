import React from "react";
import "./card.css";

export default function Card() {
    return (
    <div className="card">
        <div className="card_inner">
          <div className="card__body card__body--front">
            <img className="img_time" />
            <h2>Cortinas FC</h2>
          </div>
          <div className="card__body card__body--back">
            <h2>Descrição:</h2>
            <h2>Corinthians o time do povo porra</h2>
          </div>
        </div>
    </div>
    );
}