import React from "react";
import Card from "../Card/card";
import axios from "axios";
import { useState } from "react";


export default function ResultSearch(props) {
    const [logoUrl, setLogoUrl] = useState("");
    function getLogoTime(id) {
        let caminho = 'https://basketapi1.p.rapidapi.com/api/basketball/team/' + id + '/image';
        const options = {
          method: 'GET',
          url: caminho,
          headers: {
            'X-RapidAPI-Key': '7a65528b38msh5250b2f57bf92adp1c19e7jsnda56c1b7eef3',
            'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
          }
        };
        
        axios.request(options)
        .then((res) => {
        const imgUrl = URL.createObjectURL(res.data);
        console.log(imgUrl);
        setLogoUrl(imgUrl);
        });
      }
      

    
    return (
        <div className= "resultado_filmes">
        {/* <Filme lista_filmes={props.resultados} */}       
        <Card key={props.resultados.id} title={props.resultados.name} score={props.score} imagem={logoUrl} pais={props.resultados.country}></Card>
    </div>);
}
