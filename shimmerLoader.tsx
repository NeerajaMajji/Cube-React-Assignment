import React from "react";
import "./customerCard.css";

const ShimmerLoader = () => {
  return (
    <div className="shimmerLoader">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="shimmerItem"></div>
      ))}
    </div>
  );
};

export default ShimmerLoader;
