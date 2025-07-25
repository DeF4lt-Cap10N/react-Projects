import React, { useContext } from 'react'

import {GlobalContext} from "../../context"

const Home = () => {
  const {loading, recipelist} = useContext(GlobalContext);
  return (
    <div>Home</div>
  )
}

export default Home