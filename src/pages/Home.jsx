import Product from "../components/Product";

const Home = () => {
  return (
    <div className="mt-10 min-h-screen">
      <h1 className="text-2xl font-bold text-center">
        Welcome To The Redux Toolkit Store
      </h1>
      <section>
        <Product />
      </section>
    </div>
  );
};

export default Home;
