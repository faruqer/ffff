// PaymentOptions.js
import React, { useState } from "react";

const PaymentOptions = ({ onPaymentChange }) => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const paymentMethods = [
    { id: 1, name: "Credit Card" },
    { id: 2, name: "PayPal" },
    { id: 3, name: "Bank Transfer" },
  ];

  const handlePaymentChange = (event) => {
    const paymentMethod = event.target.value;
    setSelectedPayment(paymentMethod);
    onPaymentChange(paymentMethod);
  };

  return (
    <div className="payment-options">
      <h2>Select Payment Method</h2>
      <select value={selectedPayment} onChange={handlePaymentChange}>
        <option value="">-- Select Payment Method --</option>
        {paymentMethods.map(method => (
          <option key={method.id} value={method.name}>
            {method.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaymentOptions;
