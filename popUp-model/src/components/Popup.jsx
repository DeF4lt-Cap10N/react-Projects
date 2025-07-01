import React from "react";
import { useState } from "react";
import PopupBox from "./PopupBox";

const Popup = () => {
  const [pop, setPop] = useState(false);

  function handleClick() {
    setPop(!pop);
  }

  function onClose(){
    setPop(false);
  }

  return (
    <>
    <div className="btn-container">
        <button onClick={handleClick}>Popup</button>
    </div>
   
      <div className="container">
        {pop && <PopupBox onClose={onClose} body={<div>custom Body</div>} />}
      </div>
    </>
  );
};

export default Popup;
