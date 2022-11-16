import "./ProductList.css";
import Product from "../product/Product";
// import { products } from "../../data";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://63733e60348e94729906c3f7.mockapi.io/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">pengetahuan Bullying</h1>
        <p className="pl-desc">
          Merupakan website pemerintahan yang berkaitan dengan bullying yang
          dapat anda baca dan pelajari.
        </p>
      </div>
      <div className="pl-list">
        {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
        {posts.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
