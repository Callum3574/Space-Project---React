import React from "react";
import "../CSS/ImgContainer.css";

const CreateImgContainer = ({ src }) => {
  return (
    <div className="picture-container">
      <img src={src} className="nasa-picture" alt="space-pic" />
    </div>
  );
};

export default CreateImgContainer;
