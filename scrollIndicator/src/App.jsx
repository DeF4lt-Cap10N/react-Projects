import NavBar from "./components/NavBar"
import Products from "./components/Products"

function App() {

  return (
    <>
    <div className=" bg-black text-white pt-32 font-serif">
           <NavBar/>
          <Products url="https://dummyjson.com/products?limit=100"/>
    </div>

    </>
  )
}

export default App
