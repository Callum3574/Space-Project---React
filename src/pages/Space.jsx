import React from "react";
import "../CSS/Space.css";
import { useState, useEffect } from "react";

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

  const InputDate = (e) => {
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
        console.log(data);
        setSRCinput(data["hdurl"]);
        SetTitleInput(data["title"]);
        SetDescriptionInput(data["explanation"]);
      });
  });

  return (
    <div className="flex-container">
      <div>
        <h4 className="text">Search by date...</h4>
      </div>
      <div>
        <input
          onChange={handleDateChange}
          className="date-input"
          type="date"
        ></input>
        <button onClick={() => InputDate()} className="button-space">
          OK
        </button>
      </div>

      <div className="title-container">
        {TitleInput && <h2 className="nasa-title">{TitleInput}</h2>}
      </div>

      <div className="picture-container">
        {SrcInput && <img src={SrcInput} className="nasa-picture" />}
      </div>

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
