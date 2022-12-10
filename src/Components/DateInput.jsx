import React from "react";

const CreateDateInput = ({ handleDateChange, InputDate }) => {
  return (
    <div className="date-container">
      <input
        onChange={handleDateChange}
        className="date-input"
        type="date"
      ></input>
      <button onClick={() => InputDate()} className="button-space"></button>
    </div>
  );
};

export default CreateDateInput;
