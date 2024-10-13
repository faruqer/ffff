import React from "react";

const Cart = ({ cartItems, total }) => {
  return (
    <div>
      <h2>Cart Overview</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
