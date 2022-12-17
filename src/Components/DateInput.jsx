import React from "react";
import "../CSS/DateInput.css";
import Button from "react-bootstrap/Button";

const CreateDateInput = ({ handleDataChange, inputDate }) => {
  return (
    <div>
      <input
        onChange={handleDataChange}
        className="date-input"
        type="date"
      ></input>
      <Button className="button-space" onClick={inputDate}>
        OK
      </Button>
    </div>
  );
};

export default CreateDateInput;
