import React from "react";

const CreateDateInput = ({ handleDataChange, inputDate }) => {
  return (
    <div>
      <input
        onChange={handleDataChange}
        className="date-input"
        type="date"
      ></input>

      <button className="button-space" onClick={inputDate}>
        OK
      </button>
    </div>
  );
};

export default CreateDateInput;
