import React from "react";

const Wishlist = ({ wishlistItems }) => {
  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
 