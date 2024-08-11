import React from "react";
import "./customerCard.css";
// this is shimmer loader or sketlon
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
