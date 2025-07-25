import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam } = useContext(GlobalContext);

  console.log(searchParam);
  return (
    <>
      <nav className="flex items-center m-3 justify-between text-xl">
        <h1>
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h1>
        <div className="flex items-center gap-10 mr-3">
          <form>
            <input
              type="text"
              placeholder="Type here .."
              className="border-2 pl-5 p-2 rounded-full"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
          </form>

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
