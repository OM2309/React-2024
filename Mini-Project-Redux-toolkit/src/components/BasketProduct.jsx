import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProduct = () => {
  const { products, amount, total } = useSelector((store) => store.basket);
  return (
    <div>
      <div>
        {products.map((item, i) => (
          <Product
            key={i}
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly py-8">
        <p>Total</p>
        <p className="text-2xl font-medium">{total}</p>
      </div>
    </div>
  );
};

export default BasketProduct;
