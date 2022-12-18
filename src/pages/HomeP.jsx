import React from "react";
import "../CSS/Home.css";
import Carousel from "react-bootstrap/Carousel";
import CreateFooter from "../Components/Footer.jsx";
import LoginPage from "../pages/Login";
import Forms from "./Login";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="home-div">
        <h1 className="text">WELCOME TO SPACE EXPLORER</h1>
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
          <Carousel className="home-container-child" fade controls={false}>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2211/StanHondaTLE-ISS1108.jpg"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2211/Lobster_Blanco_4000.jpg"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2210/Pelican_Almeida_2000.jpg"
              ></img>
            </Carousel.Item>
          </Carousel>
          <Carousel className="home-container-child" fade controls={false}>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2210/Lu20220729-0826.jpg"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2210/LDN673.jpg"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2202/IC342Feller.jpg"
              ></img>
            </Carousel.Item>
          </Carousel>
          <Carousel className="home-container-child" fade controls={false}>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p2016a-m-2000x1374.png"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2212/a17anaglyph_vanMeijgaarden_f.jpg"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2212/GeminidoverBluemoonvalley-2000.jpg"
              ></img>
            </Carousel.Item>
          </Carousel>
          <Carousel className="home-container-child" fade controls={false}>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2210/CannonSupernova_English_8404.jpg"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2212/Pleiades_Estes_3000.jpg"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="home-pic-fade"
                src="https://apod.nasa.gov/apod/image/2212/M16Pillar_WebbOzsarac_1668.jpg"
              ></img>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <CreateFooter />
    </div>
  );
};

export default HomePage;
