import React, { useState, useEffect } from "react";
import CreateDateInput from "../Components/DateInput.jsx";
import CreateImgContainer from "../Components/ImgContainer";

const MarsPage = () => {
  const [DateInputMars, SetMarsDateInput] = useState(null);
  const [CurrentInputMars, SetMarsCurrentInput] = useState("");
  const [marsSRC, setMarsSRC] = useState(null);
  const handleMarsDate = (e) => {
    const marsDate = e.target.value;
    SetMarsCurrentInput(marsDate);
  };

  const InputDateMars = () => {
    SetMarsDateInput(CurrentInputMars);
    console.log(DateInputMars);
  };

  useEffect(() => {
    fetchData();
  }, [DateInputMars]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${DateInputMars}&camera=fhaz&api_key=88u7Vdtn2mchlreadL3NV33PEHngIuuEStrURSXH`
      );

      const data = await res.json();
      // console.log(data);
      setMarsSRC(data["photos"][0]["img_src"]);
    } catch (e) {
      console.error(e);
    }
  };

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
          handleDataChange={handleMarsDate}
        />

        <CreateImgContainer src={marsSRC} />
      </div>
    </div>
  );
};

export default MarsPage;
