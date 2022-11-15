import React from "react";
import "./Product.css";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="blank" rel="noreferr">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
