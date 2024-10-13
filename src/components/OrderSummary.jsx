import React from "react";

const OrderSummary = ({ orderDetails }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {orderDetails.map((detail, index) => (
          <li key={index}>{detail.name}: ${detail.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
