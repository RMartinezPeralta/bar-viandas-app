import { useEffect, useState } from "react";
import Product from "../components/Product";
import { products } from "../data";
import "./Home.css";

const Home = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      setProds((prev) => [...products]);
    };
    getProducts();
  }, []);

  return (
    <>
      <h2 className="subtitle">Menu disponible</h2>
      <div className="container">
        {prods?.map((p, i) => (
          <Product key={i} product={p} />
        ))}
      </div>
    </>
  );
};

export default Home;
