import React, { useEffect, useState } from "react";
import dataFormat from "./customersData.json";
import CustomerCard from "./customerCard";
import { CustomerData } from "./customerData.type";
// Basically this component is responsible for rendering a list of customer cards
// based on the provided customer data. It handles the selection of a customer
// and tells the selected customer back to the CustomerDashboard component via a callback.
const CustomerSideNav = ({ onSelectCustomer }) => {
  const [customersData, setCustomersData] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  // useEffect hook to load the customer data when the component mounts.
  // The data is imported from a local JSON file and stored in the state.
  useEffect(() => {
    setCustomersData(dataFormat);
  }, []);

  const handleCustomerClick = (customer) => {
    setSelectedCustomerId(customer.customerId);
    onSelectCustomer(customer); //calling the callback function passed from the CustomerDashboard component.
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Map over the customersData array and render a CustomerCard component for each customer.
          The isSelected prop determines if the current customer is selected, 
          and the onClick prop handles the selection logic. */}
      {customersData.map((customer: CustomerData) => (
        <CustomerCard
          key={customer.customerId}
          data={customer}
          isSelected={customer.customerId === selectedCustomerId}
          onClick={() => handleCustomerClick(customer)} // Triggering customer selection when a card is clicked
        />
      ))}
    </div>
  );
};

export default CustomerSideNav;
