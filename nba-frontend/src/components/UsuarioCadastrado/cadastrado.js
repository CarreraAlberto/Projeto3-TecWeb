import React, { useEffect } from "react";
import "./cadastrado.css";

export default function Cadastrado() {
  useEffect(() => {
    const popup = document.querySelector(".popup");
    popup.style.display = "block";
    
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  }, []);

  return (
    <div className="popup" style={{ display: "none" }}>
      <div className="message">Usuário cadastrado!</div>
    </div>
  );
}