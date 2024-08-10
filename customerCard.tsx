import React from "react";
import "./CustomerCard.css";

const CustomerCard = ({ data, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`customer-card ${isSelected ? "selected" : ""}`}
    >
      <h3>{data.customerName}</h3>
      <p>{data.title}</p>
    </div>
  );
};

export default CustomerCard;
