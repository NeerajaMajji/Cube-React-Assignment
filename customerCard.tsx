import React from "react";
import "./customerCard.css";
import { CustomerData } from "./customerData.type";
type CustomerCard = {
  data: CustomerData;
  isSelected: boolean;
  onClick: () => void;
};
// this component is basically just to have customer card it will take data and it will show the card.
//it will only takes care of the showing card that's it, no logic development here.
const CustomerCard = ({ data, isSelected, onClick }: CustomerCard) => {
  return (
    <div
      onClick={onClick}
      className={`customer-card ${isSelected ? "selected" : ""}`} //based on isSelected flag handling the css.
    >
      <h3>{data.customerName}</h3>
      <p>{data.title}</p>
    </div>
  );
};

export default CustomerCard;
