import React from "react";
import CustomerDetailsPage from "./customerDetailsPage";
type CustomerDetails = {
  customerDetails: CustomerData;
};

const RenderCustomerDetailsPage = ({ customerDetails }: CustomerDetails) => {
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
