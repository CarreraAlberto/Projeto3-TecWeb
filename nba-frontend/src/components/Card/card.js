import React, { useEffect } from "react";

export default function Card(props) {
  useEffect(() => {
    props.getLogoTime();
  }, [props.getLogoTime]);

  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.title}</h2>
        <p>{props.score}</p>
      </div>
      <div className="card-body">
        <img src={props.imagem} alt="Logo do time" />
        <div className="card-body-content">
          <p>
            <strong>País:</strong> {props.pais}
          </p>
          <p>
            <strong>Apelido:</strong> {props.nickname}
          </p>
        </div>
      </div>
    </div>
  );
}
