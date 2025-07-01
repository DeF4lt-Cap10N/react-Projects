import React from "react";

const PopupBox = ({ id, header, body , footer, onClose }) => {
  return (
    <>
      <div id={id || "model"}>
        <div className="content">
          <div className="header">
            <h1>{header?header:"Header"}</h1>
            <span onClick={onClose} className="close-model-icon">&times;</span>
          </div>
          <div className="body">
            <h2>{body?body:"Body"}</h2>
          </div>
          <div className="footer">
            <h3>{footer?footer:"footer"}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupBox;
