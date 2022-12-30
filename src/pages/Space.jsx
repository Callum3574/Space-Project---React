import React from "react";
import "../CSS/Space.css";
import { useState, useEffect } from "react";
import CreateImgContainer from "../Components/ImgContainer.jsx";
import CreateDateInput from "../Components/DateInput";
import CreateImgTitle from "../Components/Title.jsx";

const SpacePage = ({ apiKey }) => {
  const [dateInput, setDateInput] = useState(null);
  const [currentInput, setCurrentInput] = useState(null);
  const [srcInput, setSRCinput] = useState(null);
  const [titleInput, setTitleInput] = useState(null);
  const [descriptionInput, setDescriptionInput] = useState(null);

  const handleDateChange = (e) => {
    const Date = e.target.value;
    setCurrentInput(Date);
  };

  const InputDate = () => {
    setDateInput(currentInput);
  };

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSRCinput(data["hdurl"]);
        setTitleInput(data["title"]);
        setDescriptionInput(data["explanation"]);
      });
  }, [dateInput]);

  return (
    <div className="wrapper">
      <div className="flex-container">
        <h2 className="text">Nasa Picture of The Day</h2>
        <div>
          <h5 className="text">Search by date...</h5>
        </div>

        <CreateDateInput
          handleDataChange={handleDateChange}
          inputDate={InputDate}
        />

        {titleInput && <CreateImgTitle titleInput={titleInput} />}

        {srcInput && <CreateImgContainer src={srcInput} />}

        <div className="description">
          (<p className="nasa-description">{descriptionInput}</p>)
        </div>
      </div>
    </div>
  );
};

export default SpacePage;
