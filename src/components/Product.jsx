import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
const Product = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="flex flex-wrap">
      {status === "loading" ? (
        <div className="flex h-[calc(100vh-20vh)] w-screen justify-center items-center text-xl font-bold">
          Loading...
        </div>
      ) : (
        data.map((product) => {
          const { id, title, price, image, description } = product;
          return (
            <div
              className="mx-auto mt-11 w-80 flex flex-col justify-between transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-2xl duration-300 hover:scale-105 hover:shadow-lg"
              key={id}
            >
              <img
                className="h-48 w-full object-scale-down bg-white p-1"
                src={image}
                alt="Product Image"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    {title}
                  </h2>
                  <p className="mb-2 text-base dark:text-gray-300 text-gray-700 line-clamp-2">
                    {description}
                  </p>
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
                  <button
                    className="bg-black text-white dark:text-black dark:bg-white w-full my-2 py-2 rounded-lg"
                    onClick={() => handleAdd(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Product;
