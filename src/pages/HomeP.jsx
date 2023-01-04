import React from "react";
import "../CSS/Home.css";
import background from "../Assets/Astro.png";
import rock1 from "../Assets/Rock0027.png";
import rock2 from "../Assets/Rock0028.png";
import stars from "../Assets/stars.png";
import planet from "../Assets/Planet.png";

const HomePage = ({ signInCredentials }) => {
  return (
    <div className="wrapper">
      <div className="home-div">
        <div className="space-pictures">
          <img className="spaceman" src={background}></img>

          <img className="rock" src={rock1}></img>
          <img className="rock1" src={rock2}></img>
        </div>
        <div className="title-text">
          <h1
            className="my-5 display-2 fw-bold ls-tight px-5"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Space Explorer <br />
            <span className="title-text-nasa">NASA API</span>
          </h1>

          <p className="px-1" style={{ color: "hsl(218, 81%, 85%)" }}>
            Space Explorer uses an API created by NASA! This powerful API
            enables us to view pictures from outer space with a click of a
            button
          </p>

          <p className="px-2" style={{ color: "hsl(218, 81%, 85%)" }}>
            This website enables you to select any date, ranging from the early
            2000's up to recent times, and to retrieve a picture Nasa took on
            that day{" "}
          </p>
        </div>
        {/* <h1 className="tracking-in-expand">WELCOME TO SPACE EXPLORER </h1>
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
          <hr className="breakpoint"></hr>
        </div>
        <h1 className="tracking-in-expand sub">WHAT YOU MIGHT FIND...</h1>
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
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
