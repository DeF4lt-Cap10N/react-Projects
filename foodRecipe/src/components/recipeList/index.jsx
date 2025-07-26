import React from "react";
import { Link } from "react-router-dom";
const RecipeList = ({ item }) => {
  if (!item) return null;

  return (
    <div className="p-4 overflow-hidden">
      <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 duration-300  gap-5 h-[450px]">
        <div>
          <img
            src={item.image_url}
            alt={item.title || "Recipe Image"}
            className="w-full h-60 object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-blue-400">{item.title}</h2>
          <p className="text-xl font-bold text-gray-500 ">{item.publisher}</p>
        </div>

        <div className="p-3 bg-green-700 text-white w-1/3 text-center rounded-full ">
          <Link to={`/details/${item.id}`}>Deatils</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
