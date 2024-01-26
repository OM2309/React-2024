import React, { useEffect, useState } from "react";

const Filter = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setAllProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterButton = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const items = allProducts.filter((product) => product.category === category);
      setFilteredProducts(items);
    }
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-center">
        <button
          type="button"
          className="filter-button"
          onClick={() => filterButton("all")}
        >
          All
        </button>
        <button
          type="button"
          className="filter-button"
          onClick={() => filterButton("men's clothing")}
        >
          Men's
        </button>
        <button
          type="button"
          className="filter-button"
          onClick={() => filterButton("women's clothing")}
        >
          Women's
        </button>
        <button
          type="button"
          className="filter-button"
          onClick={() => filterButton("jewelery")}
        >
          Jewelery
        </button>
        <button
          type="button"
          className="filter-button"
          onClick={() => filterButton("electronics")}
        >
          Electronics
        </button>
      </div>

      <div className="mt-4 flex items-center justify-around flex-wrap">
        {filteredProducts.map((product) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={product.id}
          >
            <img
              className="w-40 h-40 object-contain mx-auto"
              src={product.image}
              alt={product.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{product.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
