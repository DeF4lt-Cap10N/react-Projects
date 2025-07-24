import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Details from "./pages/Details/index";
import Favourite from "./pages/favourite/index";
import Home from "./pages/homes/index";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
