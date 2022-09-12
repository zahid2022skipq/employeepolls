import React from "react";
import loginpng from "../Assets/login.png";
import "../Components/login.css";
function LoginForm() {
    const 
  const handleLogin = () => {};
  return (
    <div className="login-container">
      <div className="login-img">
        <img src={loginpng} alt="login" height={100} width={100} />
      </div>
      <div className="form">
        <form onSubmit={handleLogin}></form>
        <h2>Login</h2>
        <label>User Name</label>
        <input type="text" name="user" placeholder="Enter username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </div>
    </div>
  );
}

export default LoginForm;
