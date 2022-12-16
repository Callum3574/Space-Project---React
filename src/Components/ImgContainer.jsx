import React from "react";

const CreateImgContainer = ({ src }) => {
  return (
    <div className="picture-container">
      <img src={src} className="nasa-picture" />
    </div>
  );
};

export default CreateImgContainer;
