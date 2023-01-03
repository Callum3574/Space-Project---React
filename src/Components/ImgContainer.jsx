import React from "react";
import "../CSS/ImgContainer.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const CreateImgContainer = ({ src }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click me to download this image!
    </Tooltip>
  );
  return (
    <div className="picture-container">
      <img src={src} className="nasa-picture" alt="space-pic" />
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button className="button-space">DOWNLOAD</Button>
      </OverlayTrigger>
    </div>
  );
};

export default CreateImgContainer;
