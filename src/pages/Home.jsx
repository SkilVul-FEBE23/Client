import React from "react";
import Slider from "../components/slider/Slider";
import Event from "../components/event/Event";
import ProductList from "../components/productList/ProductList";

const Home = () => {
  return (
    <div>
      <Slider />
      <Event />
      <ProductList />
    </div>
  );
};

export default Home;
