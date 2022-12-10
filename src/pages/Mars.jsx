import React from "react";
import CreateDateInput from "../Components/DateInput";
import CreatePictureContainer from "../Components/ImgContainer";
import { useState } from "react";

const MarsPage = ({ HandleDateChange }) => {
  const [CameraState, SetCameraState] = useState(null);

  return (
    <div className="flex-container-mars">
      <div>
        <h4 className="text">Search by date and camera type...</h4>
      </div>
      <CreateDateInput />
      <div>
        <select>
          <option>NAVCAM</option>
          <option>FRONT</option>
          <option>REAR</option>
        </select>
      </div>
      <CreatePictureContainer />
    </div>
  );
};

export default MarsPage;
