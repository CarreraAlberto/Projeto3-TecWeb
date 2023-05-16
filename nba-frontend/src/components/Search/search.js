import React from "react";
import "./search.css";

export default function Search(props) {

    function capitalize(str) {
        return str.toLowerCase().split(' ').map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
      }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
          event.preventDefault(); // previne o comportamento padrão do formulário
          props.getFilmes(capitalize(document.getElementsByName("genero")[0].value)); 
        }
      }

    return (
        <form className="barra-botao">
            <input type="text" name="time" placeholder="What team are you looking for?" className="barra-pesquisa" onKeyDown={handleKeyDown}/>
            {/* <button type="submit" onClick={chamaGetFilmes} className="botao"> Search</button> */}
            <button type="submit" className="botao">Search</button>
        </form>
    );
}
