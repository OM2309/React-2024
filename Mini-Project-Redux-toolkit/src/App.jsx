import React from "react";
import Navbar from "./components/Navbar";
import BasketProduct from "./components/BasketProduct";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-medium mt-2 py-4">
        Redux Store
      </h1>
      <BasketProduct/>
    </div>
  );
};

export default App;
