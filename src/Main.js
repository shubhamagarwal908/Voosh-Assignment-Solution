import React from "react";
import Logo from "./assets/vooshLogo.webp";
import MainImg from "./assets/main.webp";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="container">
      <div className="nav">
        <img src={Logo} alt={"logo"} className="nav-image" />
      </div>
      <div className="content">
        <div className="right-content">
          <p className="heading">
            Consolidate your restaurant's insight in one place. Unlock growth
          </p>
          <p className="sub-heading">
            Your one stop solution to view mission-critical data and insight
            from all your locations in one place
          </p>
          <button class="button-1" role="button">
            <Link
              to="/book-demo"
              style={{ textDecoration: "none", color: "white" }}
            >
              Book Demo
            </Link>
          </button>
        </div>

        <div className="container__main-image">
          <img src={MainImg} alt={"main"} className="main-image" />
        </div>
      </div>
    </div>
  );
}
