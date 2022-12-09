import React from "react";
import CreateNavBar from "../Components/Navbar";
import "../CSS/Space.css";

const SpacePage = () => {
  return (
    <div className="flex-container">
      <div>
        <h4 className="text">Search by date...</h4>
      </div>
      <div>
        <input className="date-input" type="date"></input>
        <button className="button-space">OK</button>
      </div>

      <div className="title-container">
        <h2 className="nasa-title"></h2>
      </div>

      <div className="picture-container">
        <img className="nasa-picture" />
      </div>

      <div className="description">
        <p className="nasa-description"></p>
      </div>

      <div className="bottom-border"></div>
    </div>
  );
};

export default SpacePage;
