import React from "react";
import "./login.css";


export default function Login() {
  return (
    <div className="areaGeral">
        <div className="form-area">
            <div className="form-title">
                <h3>Login</h3>
            </div>
            <div className="form-inputs">
                <label>
                    <input type="email" id="email" placeholder="Username"/>
                </label>
                <label>
                    <input type="password" id="pass" placeholder="Password" />
                </label>
                <button onClick={console.log("clickou")}>Sign In</button>
            </div>
        </div>
	</div>
  );
}