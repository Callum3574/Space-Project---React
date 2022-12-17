import React from "react";
import "../CSS/ImgContainer.css";

const CreateImgContainer = ({ src }) => {
  return (
    <div className="picture-container">
      <img src={src} className="nasa-picture" />
    </div>
  );
};

export default CreateImgContainer;
