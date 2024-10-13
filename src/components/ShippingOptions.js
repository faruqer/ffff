// ShippingOptions.js
import React, { useState } from "react";

const ShippingOptions = ({ onShippingChange }) => {
  const [selectedShipping, setSelectedShipping] = useState("");

  const shippingMethods = [
    { id: 1, name: "Standard Shipping", cost: 5.00 },
    { id: 2, name: "Express Shipping", cost: 15.00 },
    { id: 3, name: "Next-Day Shipping", cost: 25.00 },
  ];

  const handleShippingChange = (event) => {
    const shippingMethod = event.target.value;
    setSelectedShipping(shippingMethod);
    const selectedMethod = shippingMethods.find(method => method.name === shippingMethod);
    onShippingChange(selectedMethod);
  };

  return (
    <div className="shipping-options">
      <h2>Select Shipping Method</h2>
      <select value={selectedShipping} onChange={handleShippingChange}>
        <option value="">-- Select Shipping Method --</option>
        {shippingMethods.map(method => (
          <option key={method.id} value={method.name}>
            {method.name} (${method.cost})
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShippingOptions;
