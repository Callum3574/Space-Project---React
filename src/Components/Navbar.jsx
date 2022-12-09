import React from "react";
import "../CSS/Nav.css";
import { Link } from "react-router-dom";

const CreateNavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">SPACE EXPLORER</h1>

      <ul className="nav-links">
        <li className="nav-text">
          <Link id="space-nav" to="Home">
            HOME
          </Link>
        </li>

        <li className="nav-text">
          <Link to="Space" id="space-nav">
            SPACE
          </Link>
        </li>

        <li className="nav-text">
          <Link id="space-nav" to="Mars">
            MARS
          </Link>
        </li>

        <li className="nav-text">
          <Link id="space-nav" to="Weather">
            WEATHER
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CreateNavBar;
