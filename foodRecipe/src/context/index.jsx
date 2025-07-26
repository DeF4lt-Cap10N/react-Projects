import { createContext, useState } from "react";
import axios from "axios"

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipelist, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouriteItem, setFavouriteItem] = useState([]);
  

  async function handleSubmit(event){
    event.preventDefault();
    setLoading(true);
    try{
      const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      console.log(response.data);

      const value = response.data;
      setRecipeList(value.data.recipes);
      setSearchParam("");
      setLoading(false);
    }
    catch(err){
      console.log(`fetch api error : ${err}`);
    }
  }


  function addFavouriteItem(itemIdx){
    let getFavouritelist = [...favouriteItem];
    const index = getFavouritelist.findIndex((e)=>e.id===itemIdx.id);

    if(index===-1){
      getFavouritelist.push(itemIdx);
    }
    else{
      getFavouritelist.splice(index, 1);
    }
    setFavouriteItem(getFavouritelist);
   
  }

 console.log("favourite:", favouriteItem);


  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, loading, recipelist, recipeDetails, setRecipeDetails, addFavouriteItem, favouriteItem}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
