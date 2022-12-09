import React from "react";
import "../CSS/Home.css";

const HomePage = () => {
  return (
    <div>
      <h1>WELCOME TO SPACE EXPLORER</h1>

      <div className="flex-container-home">
        <div className="flex-container-child">
          <p>
            Space Explorer uses an API created by NASA! This powerful API
            enables us to view pictures from outer space with a click of a
            button
          </p>
          <p>
            This website enables you to select any date, ranging from the early
            2000's up to recent times, and to retrieve a picture Nasa took on
            that day{" "}
          </p>
          <p>
            Nasa currently has a Curosity Rover on Mars with various cameras.
            This API allows us to retrieve the pictures sent back from this
            rover{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
