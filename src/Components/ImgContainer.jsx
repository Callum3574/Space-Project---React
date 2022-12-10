import React from "react";

const CreatePictureContainer = ({ SrcInput }) => {
  return (
    <div className="picture-container">
      {SrcInput && (
        <img src={SrcInput} className="nasa-picture" alt="space-picture" />
      )}
    </div>
  );
};

export default CreatePictureContainer;
