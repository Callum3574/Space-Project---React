import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import CreateDateInput from "../Components/DateInput.jsx";
import "../CSS/Mars.css";
import CreateImgTitle from "../Components/Title";
import Carousel from "react-bootstrap/Carousel";
import "../CSS/ImgContainer.css";

const MarsPage = ({ apiKey }) => {
  const [dateInputMars, setMarsDateInput] = useState(null);
  const [currentInputMars, setMarsCurrentInput] = useState("");
  const [marsSRC, setMarsSRC] = useState([]);
  const [cameraChoice, setCameraChoice] = useState("navcam");
  const [pictureInformation, setPictureInformation] = useState(null);

  const handleMarsDate = (e) => {
    const marsDate = e.target.value;
    setMarsCurrentInput(marsDate);
  };

  const inputDateMars = () => {
    setMarsDateInput(currentInputMars);
    console.log(dateInputMars);
    console.log(marsSRC);
  };

  const handleCameraClick = (e) => {
    const cameraChoice = e.target.value;
    setCameraChoice(cameraChoice);
  };

  useEffect(() => {
    fetchData();
  }, [dateInputMars, cameraChoice]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateInputMars}&camera=${cameraChoice}&api_key=${apiKey}`
      );

      const data = await res.json();
      setMarsSRC(data["photos"]);
      setPictureInformation(`SOL: ${data["photos"][0]["sol"]}`);
      console.log(marsSRC);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="wrapper">
      <div className="mars-flex-container">
        <h2 className="text">Mars Curiosity Rover</h2>
        <h5 className="text">Search by date and camera...</h5>
        <br />
        <CreateDateInput
          inputDate={inputDateMars}
          handleDataChange={handleMarsDate}
        />
        <div className="button-container">
          <div className="button-child">
            <Button
              className="cam-button"
              value="navcam"
              onClick={handleCameraClick}
            >
              NAVIGATION
            </Button>
          </div>
          <div className="button-child">
            <Button
              className="cam-button"
              value="fhaz"
              onClick={handleCameraClick}
            >
              FRONT HAZARD
            </Button>
          </div>
          <div className="button-child">
            <Button
              className="cam-button"
              value="rhaz"
              onClick={handleCameraClick}
            >
              REAR HAZARD
            </Button>
          </div>
        </div>
        {marsSRC && <CreateImgTitle titleInput={pictureInformation} />}

        <Carousel fade controls={true} className="picture-container">
          {marsSRC.map((src) => {
            return (
              <Carousel.Item interval={2000}>
                <img
                  src={src["img_src"]}
                  alt="mars"
                  className="nasa-picture"
                ></img>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MarsPage;
