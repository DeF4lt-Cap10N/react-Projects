import React, { useState } from "react";

const Tabs = ({ tabsContents, onChange }) => {
  const [tabIndex, setTabIndex] = useState(0);

  function onClickHandle(currIndex){
    setTabIndex(currIndex);
    onChange(currIndex);
  }
  return (
    <div>
      <div className="flex justify-center">
        {tabsContents.map((tab, index) => (
          <div  onClick={()=>onClickHandle(index)} key={tab.label}>
            <span className="bg-pink-300 flex justify-center font-bold  m-2 p-3 w-20 rounded-full">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center font-extrabold text-3xl m-10 text-cyan-500">
        {
            tabsContents[tabIndex]&&tabsContents[tabIndex].content
        }
      </div>
    </div>
  );
};

export default Tabs;
