import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const ScrollTopToBottom = () => {
  const [productData, setProductData] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const data = await response.json();
        setProductData(data);
        console.log(data);
      } catch (error) {
        console.log(`API fault : ${error}`);
      }
    };
    fetchData();
  }, []);

  const handleScrolltoBottom = ()=>{
    bottomRef.current.scrollIntoView({behavior:"smooth"});
  }

  const handleScrollToTop = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
  }

  return (
    <>
      <div className="container">
        <div className="btn">
          <button onClick={handleScrolltoBottom}>Scroll to Bottom</button>
        </div>

        {productData.products && productData.products.length > 0
          ? productData.products.map((item, index) => (
              <div className="itemBox" key={index}>
                {item.title}
              </div>
            ))
          : null}
      </div>
      <div className="btn">
        <div ref={bottomRef}></div>
        <button onClick={handleScrollToTop}>scroll to Top</button>
      </div>
    </>
  );
};

export default ScrollTopToBottom;
