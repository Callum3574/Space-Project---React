import React from "react";
import "../CSS/Space.css";
import { useState, useEffect } from "react";

const SpacePage = () => {
  const [DateInput, SetDateInput] = useState(null);
  const [CurrentInput, SetCurrentInput] = useState(null);
  const [SrcInput, setSRCinput] = useState(null);

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
        setSRCinput(data["hdurl"]);
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
        <h2 className="nasa-title"></h2>
      </div>

      <div className="picture-container">
        {SrcInput && <img src={SrcInput} className="nasa-picture" />}
      </div>

      <div className="description">
        <p className="nasa-description"></p>
      </div>

      <div className="bottom-border"></div>
    </div>
  );
};

export default SpacePage;
