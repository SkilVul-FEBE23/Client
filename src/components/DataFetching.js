import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./product/Product";

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios.get("https://63733e60348e94729906c3f7.mockapi.io/posts")
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
            <Product key={item.id} img={item.img} link={item.link} />
                ))}
        </div>
    </div>
  )
}

export default DataFetching