import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

const Home = () => { // ini untuk menampilkan banner dan produk
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => { // ini untuk menampilkan produk
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
