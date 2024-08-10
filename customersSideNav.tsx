import React, { useEffect, useState } from "react";
import dataFormat from "./customersData.json";
import CustomerCard from "./customerCard";

const CustomerSideNav = ({ onSelectCustomer }) => {
  const [customersData, setCustomersData] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  useEffect(() => {
    setCustomersData(dataFormat);
  }, []);

  const handleCustomerClick = (customer) => {
    setSelectedCustomerId(customer.customerId);
    onSelectCustomer(customer);
  };

  return (
    <div style={{ width: "100%" }}>
      {customersData.map((customer) => (
        <CustomerCard
          key={customer.customerId}
          data={customer}
          isSelected={customer.customerId === selectedCustomerId}
          onClick={() => handleCustomerClick(customer)}
        />
      ))}
    </div>
  );
};

export default CustomerSideNav;
