import React from "react";
import "./login.css";

export default function Login({ onChangeTela }) {
  const handleSignIn = () => {
    // Lógica de autenticação

    // Após o login bem-sucedido, chame a função onChangeTela para atualizar o estado no componente pai
    onChangeTela();
  };

  return (
    <div className="areaGeral">
      <div className="form-area">
        <div className="form-title">
          <h3>Login</h3>
        </div>
        <div className="form-inputs">
          <label>
            <input type="email" id="email" placeholder="Username" />
          </label>
          <label>
            <input type="password" id="pass" placeholder="Password" />
          </label>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
