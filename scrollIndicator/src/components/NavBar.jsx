import React from "react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const getScrollValue = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    let howMuchScrolled = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let totalValue = (howMuchScrolled / height) * 100;
    setScrollPercentage(totalValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollValue);
    window.removeEventListener("scroll", () => {});
  });

  return (
    <>
     <div
        className="border-x-0  bg-cyan-400  rounded-full p-1  fixed top-0 left-0 right-0 backdrop-blur-md h-1 rounded-l-none"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
      <nav
        className="flex justify-between mx-10 bg-slate-300 text-fuchsia-400 p-4 
        rounded-2xl pt-5 bg-opacity-30  fixed top-4 left-0 right-0  backdrop-blur-md text-2xl"
      >
        <div className="">
          <a href="">Logo</a>
        </div>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <a href="" className="hover:font-bold hover:">
            Login
          </a>
        </div>
      </nav>

     
    </>
  );
};

export default NavBar;
