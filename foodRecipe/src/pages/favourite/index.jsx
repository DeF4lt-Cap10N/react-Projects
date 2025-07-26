import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeList from "../../components/recipeList";

const Favourite = () => {
  const {favouriteItem} = useContext(GlobalContext);

  return (
    <div className="flex justify-center items-center">
      {favouriteItem && favouriteItem.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favouriteItem.map((item) => (
            <RecipeList item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="lg:text-4xl text-2xl font-extrabold">
          Nothing to show. Please add Something!!
        </div>
      )}
    </div>
  );
};

export default Favourite;
