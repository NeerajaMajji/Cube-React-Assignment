import React from "react";
import CustomerDetailsPage from "./customerDetailsPage";

const RenderCustomerDetailsPage = ({ customerDetails }) => {
  return (
    <div>
      {customerDetails ? (
        <CustomerDetailsPage customerDetails={customerDetails} />
      ) : (
        <div>
          <h1>Select a customer to see details</h1>
        </div>
      )}
    </div>
  );
};

export default RenderCustomerDetailsPage;
