import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import profile from "../Assets/profile.png";
function Navigation() {
  return (
    <>
      <div className="container">
        <Link className="link active" to="/home">
          Home
        </Link>
        <Link className="link" to="/leaderboard">
          Leaderboard
        </Link>
        <Link className="link" to="/new">
          New
        </Link>

        <div className="profile">
          <img src={profile} height={30} width={30} alt="profile" />
        </div>
        <label style={{ marginLeft: "-180px", marginTop: "10px" }}>
          zahidali
        </label>
        <Link className="link" to="/">
          Logout
        </Link>
      </div>
    </>
  );
}

export default Navigation;
