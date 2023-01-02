import React from "react";
import "../CSS/Home.css";
import Carousel from "react-bootstrap/Carousel";

const HomePage = ({ signInCredentials }) => {
  return (
    <div className="wrapper">
      <div className="home-div">
        <h1 className="text">WELCOME TO SPACE EXPLORER </h1>
        <div className="flex-container-home">
          <div className="flex-container-child">
            <p className="text">
              Space Explorer uses an API created by NASA! This powerful API
              enables us to view pictures from outer space with a click of a
              button
            </p>

            <p className="text">
              This website enables you to select any date, ranging from the
              early 2000's up to recent times, and to retrieve a picture Nasa
              took on that day{" "}
            </p>
            <p className="text">
              Nasa currently has a Curosity Rover on Mars with various cameras.
              This API allows us to retrieve the pictures sent back from the
              rover{" "}
            </p>
          </div>
        </div>
        <div className="home-flex-container">
          <div className="home-container-child">
            <img
              className="spc-img"
              src="https://apod.nasa.gov/apod/image/2209/TarantulaNearIr_Webb_1396.jpg"
            ></img>
          </div>
          <div className="home-container-child">
            <img
              className="spc-img2"
              src="https://apod.nasa.gov/apod/image/2205/CatsPaw_Bemmerl_4412.jpg"
            ></img>
          </div>{" "}
          <div className="home-container-child">
            <img
              className="spc-img3"
              src="https://apod.nasa.gov/apod/image/2212/B33LRGB_fb.png"
            ></img>
          </div>{" "}
          <div className="home-container-child">
            <img
              className="spc-img4"
              src="https://apod.nasa.gov/apod/image/2212/Thor_Rochford_2404.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
