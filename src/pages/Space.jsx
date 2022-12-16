import React from "react";
import "../CSS/Space.css";
import { useState, useEffect } from "react";
import CreateImgContainer from "../Components/ImgContainer.jsx";
import CreateDateInput from "../Components/DateInput";
import CreateImgTitle from "../Components/Title.jsx";

const SpacePage = () => {
  const [DateInput, SetDateInput] = useState(null);
  const [CurrentInput, SetCurrentInput] = useState(null);
  const [SrcInput, setSRCinput] = useState(null);
  const [TitleInput, SetTitleInput] = useState(null);
  const [DescriptionInput, SetDescriptionInput] = useState(null);

  const handleDateChange = (e) => {
    const Date = e.target.value;
    SetCurrentInput(Date);
  };

  const InputDate = () => {
    SetDateInput(CurrentInput);
  };

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=88u7Vdtn2mchlreadL3NV33PEHngIuuEStrURSXH&date=${DateInput}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSRCinput(data["hdurl"]);
        SetTitleInput(data["title"]);
        SetDescriptionInput(data["explanation"]);
      });
  }, [DateInput]);

  return (
    <div className="flex-container">
      <div>
        <h4 className="text">Search by date...</h4>
      </div>

      <CreateDateInput
        handleDataChange={handleDateChange}
        inputDate={InputDate}
      />

      <CreateImgTitle TitleInput={TitleInput} />

      {SrcInput && <CreateImgContainer src={SrcInput} />}

      <div className="description">
        {DescriptionInput && (
          <p className="nasa-description">{DescriptionInput}</p>
        )}
      </div>

      <div className="bottom-border"></div>
    </div>
  );
};

export default SpacePage;
