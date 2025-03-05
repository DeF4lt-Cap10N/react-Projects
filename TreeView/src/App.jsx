import React from "react"
import Tree from "./components/Tree"
import menus from "./components/data"

 const App = () => {

  return (
    <>
    <Tree menus={menus}/>
    </>
  )
}

export default App