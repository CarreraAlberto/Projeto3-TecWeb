import React from "react";
import { Link } from 'react-router-dom';
import "./favoritos.css";

export default function Favoritos(props){
    return(
    <div>
        <h1 className="titulo-favorito">Favoritos</h1>
        <Link to="/nba">
            <button className="btn_volta">home</button>
        </Link>
    </div>
    );
}
