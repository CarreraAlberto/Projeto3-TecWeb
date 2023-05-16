import React from "react";
import Search from "../Search/search";

export default function NBA() {
  
      return (<>
      <div className="appbar">
        <img className="logo"></img>
        <h1 className="titulo">NBA APP</h1>
      </div>

      <div className="corpo">
        {/* <Search getFilmes={getFilmes} className="BarraEbotao"/> */}
        <Search className="barra-botao"/>
        {/* <ResultSearch resultados={lista_detalhes}/> */}
      </div>
    </>) 
  }