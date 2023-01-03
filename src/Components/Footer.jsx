import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import "../CSS/Footer.css";

const CreateFooter = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-4">
            <a
              href="https://github.com/Callum3574"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CDBIcon fab icon="github" />
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-4 p-4">
            <a
              href="https://uk.linkedin.com/in/callum-hall-b62944211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CDBIcon fab icon="linkedin" />
            </a>
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default CreateFooter;
