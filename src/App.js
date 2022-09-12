import { useState } from "react";
import "./App.css";
import loginpng from "./Assets/login.png";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const { uname, pass } = ["zahid", "zahid"];
  const [isSubmit, setIsSubmit] = useState(false);
  const handleLogin = () => {
    if (uname === "zahid" && pass === "zahid" && isSubmit === false) {
      setIsSubmit(true);
    }
  };

  const LoginForm = () => {
    return isSubmit ? (
      <Home />
    ) : (
      <div className="container">
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
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <Link className="submit" type="submit" to="/home">
                Submit
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
