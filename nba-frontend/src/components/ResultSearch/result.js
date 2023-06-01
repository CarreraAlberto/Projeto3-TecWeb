import React, { useState, useEffect } from "react";
import Card from "../Card/card";
import axios from "axios";

export default function ResultSearch(props) {
  const [imageUrl, setImageUrl] = useState("");

  async function getLogoTime() {
    let caminho = 'https://basketapi1.p.rapidapi.com/api/basketball/team/' + props.resultados.id + '/image';
    const options = {
      method: 'GET',
      url: caminho,
      headers: {
        'X-RapidAPI-Key': '0706172402msh3ded9bf3861ad1ep11c49fjsne36cc8fcd7be',
        'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
      },
      responseType: 'blob'
    };

    axios.request(options)
      .then(response => {
        setImageUrl(URL.createObjectURL(response.data));
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getLogoTime(props.resultados.id);
  }, [props.resultados.id]);

  console.log(props.resultados.id);
  return (
    <div className="resultado_filmes">
      <Card key={props.resultados.id} title={props.resultados.name} score={props.score} imagem={imageUrl} pais={props.resultados.country.name} nickname={props.resultados.shortName} id_time={props.resultados.id} />
    </div>
  );
}
