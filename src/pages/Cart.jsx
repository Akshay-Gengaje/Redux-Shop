import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10"> Cart </h1>

      {cart.map(({ id, title, price, image }) => {
        return (
          <div
            className="mx-auto mt-2 w-[80%] flex  justify-between transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-2xl duration-300 hover:scale-105 hover:shadow-lg"
            key={id}
          >
            <img
              className="h-24  object-scale-down bg-white p-1"
              src={image}
              alt="Product Image"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  {title}
                </h2>
              </div>
              <div>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $ {price}
                  </p>
                  <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    $ {parseFloat(price + 5).toFixed(2)}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
            <button
              className="bg-white w-40 m-3 h-fit my-2 py-2 rounded-lg"
              onClick={() => handleRemove(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
