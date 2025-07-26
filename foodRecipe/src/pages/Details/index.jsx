import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import axios from "axios";

const Details = () => {
  const params = useParams();
  console.log(params);

  const { recipeDetails, setRecipeDetails, addFavouriteItem, favouriteItem } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getrecipeDetails() {
      try {
        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
        );
        const value = response.data;
        console.log(value.data.recipe);
        if (value?.data) {
          setRecipeDetails(value?.data.recipe);
        }
      } catch (err) {
        console.log(`details fetch error ${err}`);
      }
    }

    getrecipeDetails();
  }, [params.id]);

  if (!recipeDetails) {
    return (
      <div className="text-center mt-10 text-lg">Loading recipe details...</div>
    );
  }

  return (
    <>
      <div className="flex max-w-4xl mx-auto p-4 gap-10">
        <div className="w-1/2">
          <img
            src={recipeDetails.image_url}
            alt={recipeDetails.title}
            className="w-full rounded-3xl shadow-lg mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{recipeDetails.title}</h1>
          <div className="flex flex-col mt-5  justify-between text-lg text-gray-600 mb-4">
            <span>
              Publisher: <strong>{recipeDetails.publisher}</strong>
            </span>
            <span>
              Cooking Time: <strong>{recipeDetails.cooking_time} min</strong>
            </span>
            <span>
              Servings: <strong>{recipeDetails.servings}</strong>
            </span>
          </div>
          <div
            onClick={() => addFavouriteItem(recipeDetails)}
            className="bg-black text-white w-1/2 text-center p-4 rounded-full font-bold hover:ring-2 transition-transform duration-300 active:scale-90 cursor-pointer"
          >
            <button>
              {favouriteItem &&
              favouriteItem.length > 0 &&
              favouriteItem.findIndex(
                (item) => item.id === recipeDetails.id
              ) !== -1
                ? "remove Favourite"
                : "add favourite"}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2"> Ingredients:</h2>
          <ul className="list-disc list-inside space-y-1">
            {recipeDetails.ingredients.map((ing, idx) => (
              <li key={idx}>{ing.description}</li>
            ))}
          </ul>
          <a
            href={recipeDetails.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline text-sm"
          >
            View Full Recipe on {recipeDetails.publisher}
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
