import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Cart.carts);

  const truncateText = (text, numWords) => {
    const words = text.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    } else {
      return text;
    }
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="flex items-center justify-around flex-wrap">
        {products.map((product) => (
          <div
            className="max-w-xs h-full rounded overflow-hidden shadow-lg"
            key={product.id}
          >
            <img
              className="max-h-48 w-full object-contain"
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
                onClick={() => handleRemove(product.id)}
              >
                Remove
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
    </>
  );
};

export default Cart;
