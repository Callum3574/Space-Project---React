import React from "react";
import "../CSS/Title.css";

const CreateImgTitle = ({ titleInput }) => {
  return (
    <div className="title-container">
      <h2 className="nasa-title">{titleInput}</h2>
    </div>
  );
};

export default CreateImgTitle;
