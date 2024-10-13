import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart"; // Import Cart component
import Wishlist from "./Wishlist"; // Import Wishlist component
import OrderSummary from "./OrderSummary"; // Import OrderSummary component
import PoliciesLinks from "./PoliciesLinks"; // Import PoliciesLinks component
import ContactInfo from "./ContactInfo";
import ChatbotLink from "./ChatbotLink"; // Import ChatbotLink component

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null); // Track selected manufacturer
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculate total dynamically

  // Sample manufacturers and their products
  const manufacturers = [
    {
      id: 1,
      name: "Manufacturer A",
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

  const handleManufacturerSelect = (manufacturer) => {
    setSelectedManufacturer(manufacturer); // Set the selected manufacturer
    setSelectedProduct(null); // Reset the selected product
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      // Update the quantity if the product is already in the cart
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
          : item
      ));
    } else {
      // Add new product to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product to display its details
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null); // Close the product detail view
  };

  return (
    <div className="app">
      <Navbar />
      <h1>Welcome to the Retailer Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {!selectedManufacturer ? (
        <div className="manufacturer-list">
          <h2>Select a Manufacturer</h2>
          {manufacturers.map(manufacturer => (
            <div key={manufacturer.id} className="manufacturer-card" onClick={() => handleManufacturerSelect(manufacturer)}>
              <h3>{manufacturer.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="product-list">
          <h2>Products from {selectedManufacturer.name}</h2>
          {selectedManufacturer.products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price} (Bulk: ${product.bulkPrice})</p>
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  handleAddToCart(product); 
                }}
              >
                Add to Cart
              </button>
              <button onClick={() => handleProductClick(product)}>View Details</button>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="product-detail-overlay">
          <ProductDetail product={selectedProduct} />
          <button onClick={handleCloseDetail}>Close</button>
        </div>
      )}

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
