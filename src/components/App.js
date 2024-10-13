import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Cart from "./Cart"; // Import Cart component
import Wishlist from "./Wishlist"; // Import Wishlist component
import OrderSummary from "./OrderSummary"; // Import OrderSummary component
import PoliciesLinks from "./PoliciesLinks"; // Import PoliciesLinks component
import ContactInfo from "./ContactInfo";
import ChatbotLink from "./ChatbotLink"; // Import ChatbotLink component
import ManufacturerCategorizer from "./ManufacturerCategorizer"; // Import ManufacturerCategorizer

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculate total dynamically

  // Sample categories
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
  ];

  // Sample manufacturers and their products categorized
  const manufacturers = [
    {
      id: 1,
      name: "Manufacturer A",
      category: "Electronics",
      products: [
        {
          id: 1,
          name: "Product A1",
          image: "https://via.placeholder.com/100",
          price: 29.99,
          bulkPrice: 24.99,
          rating: 4.5,
          availability: true,
          description: "Description for Product A1",
          comments: ["Great product!", "Loved it!"],
        },
        {
          id: 2,
          name: "Product A2",
          image: "https://via.placeholder.com/100",
          price: 19.99,
          bulkPrice: 17.99,
          rating: 4.0,
          availability: true,
          description: "Description for Product A2",
          comments: ["Good value.", "Satisfactory purchase."],
        },
      ],
    },
    {
      id: 2,
      name: "Manufacturer B",
      category: "Clothing",
      products: [
        {
          id: 3,
          name: "Product B1",
          image: "https://via.placeholder.com/100",
          price: 39.99,
          bulkPrice: 34.99,
          rating: 4.8,
          availability: true,
          description: "Description for Product B1",
          comments: ["Excellent quality!", "Highly recommended!"],
        },
        {
          id: 4,
          name: "Product B2",
          image: "https://via.placeholder.com/100",
          price: 24.99,
          bulkPrice: 22.99,
          rating: 4.2,
          availability: false,
          description: "Description for Product B2",
          comments: ["Not bad.", "Could be better."],
        },
      ],
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <h1>Welcome to the Retailer Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <ManufacturerCategorizer 
        categories={categories} 
        manufacturers={manufacturers} 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
      />

      <Cart cartItems={cartItems} total={total} />
      <Wishlist wishlistItems={[]} />
      <OrderSummary orderDetails={cartItems} />
      <ChatbotLink />
      <ContactInfo />
      <PoliciesLinks />
    </div>
  );
};

export default App;
