import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./product/Product";

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5555/partners")
        .then((res) => {
          console.log(res);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  return (
    <div>
        <div className="pl-list">
            {posts.map((item) => (
            <Product key={item._id} img={item.img} link={item.link} />
                ))}
        </div>
    </div>
  )
}

export default DataFetching