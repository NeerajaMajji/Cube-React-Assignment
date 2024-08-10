import React, { useState } from "react";
import CustomerSideNav from "./customersSideNav";
import RenderCustomerDetailsPage from "./renderCustomersDetailsPage";

const CustomerDashboard = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerSelect = (customer: CustomerData) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="wholeContainer">
      <div className="sideNavContainer">
        <CustomerSideNav onSelectCustomer={handleCustomerSelect} />
      </div>
      <div className="detailsContainer">
        <RenderCustomerDetailsPage customerDetails={selectedCustomer} />
      </div>
    </div>
  );
};

export default CustomerDashboard;
