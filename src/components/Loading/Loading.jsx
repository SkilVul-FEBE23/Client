import React from "react";
import loading from "../../img/loading.gif";
import "./Loading.css";

export default function Loading() {
  return (
    <div>
      <div>
        <img src={loading} alt="" className="loading-img" />
      </div>
    </div>
  );
}
