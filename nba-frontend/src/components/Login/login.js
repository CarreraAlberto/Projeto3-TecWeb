import React from "react";

export default function Login() {
  return (
    <div class="areaGeral">
        <div class="form-area">
            <div class="form-title">
                <h3>Login</h3>
            </div>
            <div class="form-inputs">
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