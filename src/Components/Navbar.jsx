import React from "react";
import "./CSS/Nav.css";
import { Link } from "react-router-dom";

const CreateNavBar = () => {
  return (
    <nav class="navbar">
      <h1 class="nav-logo">SPACE EXPLORER</h1>

      <ul class="nav-links">
        <li className="nav-text">
          <Link id="space-nav" to="Home">
            HOME
          </Link>
        </li>

        <li className="nav-text">
          <Link id="space-nav" to="Space">
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
