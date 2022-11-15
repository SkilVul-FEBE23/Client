import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">pengetahuan Bullying</h1>
        <p className="pl-desc">
          Merupakan hasil projek web devlopment dengan menggunakan bahasa
          pemrograman HTML,CSS,Javascript dan reactJS.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
