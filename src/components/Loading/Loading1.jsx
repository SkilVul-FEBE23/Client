import React from "react";
import loading from "../../img/loading.gif";
import "./Loading1.css";

function Loading1() {
  return (
    <div>
      <img src={loading} alt="" className="loading-gif" />
    </div>
  );
}

export default Loading1;
