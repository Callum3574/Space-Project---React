import React from "react";
import "../CSS/Nav.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const CreateNavBar = ({ successfulSignIn, signInCredentials }) => {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">SPACE EXPLORER</h1>

      <ul className="nav-links">
        <li className="nav-text">
          <Link id="space-nav" to="/">
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

        {!successfulSignIn ? (
          <li style={{ zIndex: "2" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="PROFILE"
              menuVariant="light"
            >
              <NavDropdown.Item to="Login" href="Login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Signup">Register</NavDropdown.Item>
            </NavDropdown>
          </li>
        ) : (
          <NavDropdown
            style={{ color: "white", padding: "10px" }}
            id="nav-dropdown-light-example"
            title="PROFILE"
            menuVariant="light"
          >
            <p style={{ textAlign: "center" }}>
              Signed in as {signInCredentials["email"]}
            </p>
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
          </NavDropdown>
        )}
      </ul>
    </nav>
  );
};

export default CreateNavBar;
