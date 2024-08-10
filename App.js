import React from "react";
import ReactDOM from "react-dom/client";
import CustomerDashboard from "./customerDashboard";

const App = () => {
  return <CustomerDashboard />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
