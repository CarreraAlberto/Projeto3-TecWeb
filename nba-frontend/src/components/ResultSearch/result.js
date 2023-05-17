import React, { useState, useEffect } from "react";
import Card from "../Card/card";
import axios from "axios";

export default function ResultSearch(props) {
  const [imageUrl, setImageUrl] = useState("");

  async function getLogoTime(id) {
    let caminho = 'https://basketapi1.p.rapidapi.com/api/basketball/team/' + id + '/image';
    const options = {
      method: 'GET',
      url: caminho,
      headers: {
        'X-RapidAPI-Key': 'bf4f0312ccmsh2f2b045a972b41bp13f83ejsn1a2f2198ac11',
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

  return (
    <div className="resultado_filmes">
      <Card key={props.resultados.id} title={props.resultados.name} score={props.score} imagem={imageUrl} pais={props.resultados.country.name} nickname={props.resultados.shortName} />
    </div>
  );
}
