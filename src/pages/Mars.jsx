import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import CreateDateInput from "../Components/DateInput.jsx";
import CreateImgContainer from "../Components/ImgContainer";
import "../CSS/Mars.css";
import CreateImgTitle from "../Components/Title";

const MarsPage = ({ apiKey }) => {
  const [dateInputMars, setMarsDateInput] = useState(null);
  const [currentInputMars, setMarsCurrentInput] = useState("");
  const [marsSRC, setMarsSRC] = useState(null);
  const [cameraChoice, setCameraChoice] = useState("navcam");
  const [pictureInformation, setPictureInformation] = useState(null);

  const handleMarsDate = (e) => {
    const marsDate = e.target.value;
    setMarsCurrentInput(marsDate);
  };

  const inputDateMars = () => {
    setMarsDateInput(currentInputMars);
    console.log(dateInputMars);
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
      setMarsSRC(data["photos"][0]["img_src"]);
      setPictureInformation(`SOL: ${data["photos"][0]["sol"]}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
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
        <CreateImgTitle titleInput={pictureInformation} />

        {marsSRC && <CreateImgContainer src={marsSRC} />}
      </div>
    </div>
  );
};

export default MarsPage;
