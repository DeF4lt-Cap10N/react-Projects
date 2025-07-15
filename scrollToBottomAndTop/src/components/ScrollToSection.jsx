import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();

  const data = [
    {
      lable: "first Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      lable: "second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      lable: "third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      lable: "forth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
  ];

  function handletosection() {
    const pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        ScrollToSection
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin:"12px" }}>
        <button style={{padding:"8px" ,width:"78px"}} onClick={handletosection}>click</button>
      </div>

      <div>
        {data.map((item, index) => {
          return (
            <div ref={index === 3 ? ref : null} key={index} style={item.style}>
              {item.lable}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScrollToSection;
