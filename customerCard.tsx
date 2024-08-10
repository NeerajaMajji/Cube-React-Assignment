import React from "react";
import "./CustomerCard.css";
type CustomerCard = {
  data: CustomerData;
  isSelected: boolean;
  onClick: () => void;
};

const CustomerCard = ({ data, isSelected, onClick }: CustomerCard) => {
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
