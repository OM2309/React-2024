import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const items = useSelector((state) => state.Cart.carts)
  return (
    <div className="flex items-center justify-between px-16">
      <div className="left">
        <h1 className="uppercase font-bold text-xl">Redux store</h1>
      </div>
      <div className="right flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span className="cartCount font-bold uppercase">Cart items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
