import React from "react";
import "./search.css";

export default function Search(props) {
  //pedro gay
    function capitalize(str) {
        return str.toLowerCase().split(' ').map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
      }

    function chamaGetTime(event) {
        if (event.key === "Enter") {
          event.preventDefault(); // previne o comportamento padrão do formulário
          props.getTime(capitalize(document.getElementsByName("time")[0].value));
        }
        event.preventDefault(); // previne o comportamento padrão do formulário
        props.getTime(capitalize(document.getElementsByName("time")[0].value));
      }

    return (
        <form className="barra-botao">
            <input type="text" name="time" placeholder="What team are you looking for?" className="barra-pesquisa"/>
            <button type="submit" onClick={chamaGetTime} className="botao">Search</button>
        </form>
    );
}
