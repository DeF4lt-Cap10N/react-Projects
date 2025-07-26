import React, { useContext } from "react";
import RecipeList from "../../components/recipeList";
import { GlobalContext } from "../../context";

const Home = () => {
  const { loading, recipelist } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading............Please wait!</div>;
  }
  return (
    <>
      <div className="flex justify-center items-center">
        {recipelist && recipelist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipelist.map((item) => (
              <RecipeList item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="lg:text-4xl text-2xl font-extrabold">
            Nothing to show. Please search Something!!
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
