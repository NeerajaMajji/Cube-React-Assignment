import React, { useState } from "react";
import CustomerSideNav from "./customersSideNav";
import RenderCustomerDetailsPage from "./renderCustomersDetailsPage";
import { CustomerData } from "./customerData.type";

const CustomerDashboard = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  // This function handles the customer selection event.
  // It receives the customer data from the CustomerSideNav component
  // and updates the state with the selected customer's information.
  const handleCustomerSelect = (customer: CustomerData) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="wholeContainer">
      <div className="sideNavContainer">
        {/* sending callback function to the CustomerSideNav. */}
        <CustomerSideNav onSelectCustomer={handleCustomerSelect} />
      </div>
      {/* passing selected customer to the RenderCustomerDetailsPage. */}
      <RenderCustomerDetailsPage customerDetails={selectedCustomer} />
    </div>
  );
};

export default CustomerDashboard;
