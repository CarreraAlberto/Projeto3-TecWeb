import React from "react";
import "./search.css";

export default function Search(props) {
  
  return (
    <form className="barra-pesquisa">
      <input type="text" name="pesquisa" placeholder="What team are you looking for?:" className="barra-pesquisa" onKeyDown={handleKeyDown}/>
      <button type="submit" className="botao-pesquisa">Search</button>
      {/* <button type="submit" onClick={chamaGetFilmes} className="botao"> Search</button> */}
    </form>
  );
}
