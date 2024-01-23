import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const dispatach = useDispatch();
  React.useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
   
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const truncateText = (text, numWords) => {
    const words = text.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    } else {
      return text;
    }
  };

  const handleAdd = (product) => {
    dispatach(add(product));
  };


  return (
    <div className="grid md:grid-cols-5 grid-cols-3 gap-3 justify-around flex-wrap px-4">
      {products.map((product) => (
        <div
          className="w-80 h-90 rounded overflow-hidden shadow-lg"
          key={product.id}
        >
          <img
            className="h-20 w-20 mx-auto object-contain"
            src={product.image}
            alt="Product"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">
              {truncateText(product.description, 20)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={() => handleAdd(product)}
            >
              Add to cart
            </button>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {product.category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {product.rating.rate}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
