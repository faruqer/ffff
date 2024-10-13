import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Retailer Dashboard</h1>
      <nav>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#wishlist">Wishlist</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;