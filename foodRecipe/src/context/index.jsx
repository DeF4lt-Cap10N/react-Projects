import { createContext, useState } from "react";
import axios from "axios"
export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipelist, setRecipeList] = useState([]);

  

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

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, loading, recipelist}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
