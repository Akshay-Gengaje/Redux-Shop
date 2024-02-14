import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="h-12 bg-[#593d88] text-white flex items-center md:px-20 justify-between">
      <h1>Redux Store</h1>

      <div className="space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive && "border-b-2 border-white"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${isActive && "border-b-2 border-white"}`
          }
        >
          Cart
        </NavLink>
      </div>
      <span className="">Cart Items : {cart.length}</span>
    </div>
  );
};

export default Navbar;
