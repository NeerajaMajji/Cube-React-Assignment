import React from "react";
import CustomerDetailsPage from "./customerDetailsPage";
import { CustomerData } from "./customerData.type";
type CustomerDetails = {
  customerDetails: CustomerData;
};
// this component is only for rendering the details page
const RenderCustomerDetailsPage = ({ customerDetails }: CustomerDetails) => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      {/* here we are using ternary operator to show the component based on the data */}
      {customerDetails ? (
        // when data is there
        <CustomerDetailsPage customerDetails={customerDetails} />
      ) : (
        <div>
          {/* when nothing is there we will show this message */}
          <h1>Select a customer to see details</h1>
        </div>
      )}
    </div>
  );
};

export default RenderCustomerDetailsPage;
