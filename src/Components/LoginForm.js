import React, { useState } from "react";
import loginpng from "../Assets/login.png";
import "../Components/login.css";
import Home from "./Home";
function LoginForm(props) {
  const { uname, pass } = [1, 2];
  const [isSubmit, setIsSubmit] = useState(false);
  const handleLogin = () => {
    if (uname === "zahid" && pass === "zahid") {
      setIsSubmit(true);
    }
  };
  return (
    <div className="login-container">
      <div className="login-img">
        <img src={loginpng} alt="login" height={100} width={100} />
      </div>
      <div className="form">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>User Name</label>
          <input type="text" name="user" placeholder="Enter username" />
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" to="/home" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
