import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
     <nav className="flex items-center m-3 justify-between text-xl" >
      <h1>
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h1>
      <div className="flex items-center gap-10 mr-3">
        <input type="text" placeholder="Type here .."  className="border-2 pl-5 p-2 rounded-full"/>
        <h1>
          <NavLink to={"/"}>Home</NavLink>
        </h1>
        <h1>
          <NavLink to={"/favourite"}>Favourite</NavLink>
        </h1>
      </div>
     </nav>
    </>
  );
};

export default Navbar;
