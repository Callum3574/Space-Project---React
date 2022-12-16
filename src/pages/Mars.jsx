import React, { useState } from "react";
import CreateDateInput from "../Components/DateInput.jsx";

const MarsPage = () => {
  return (
    <div>
      <div>
        <h2 className="text">Mars Curiosity Rover</h2>
        <select name="Cameras">
          <option value="fhaz">FHAZ</option>
          <option value="rhaz">RHAZ</option>
          <option value="navcam">NAVCAM</option>
        </select>
        <br />
        <br />
        <CreateDateInput
          inputDate={InputDateMars}
          handleDateChange={handleMarsDate}
        />
      </div>
    </div>
  );
};

export default MarsPage;
