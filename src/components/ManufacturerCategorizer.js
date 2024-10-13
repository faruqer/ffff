// ManufacturerCategorizer.js
import React, { useState } from "react";
import ProductDetail from "./ProductDetail";

const ManufacturerCategorizer = ({ categories, manufacturers, cartItems, setCartItems }) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  const handleCategorySelect = (event) => {
    const category = event.target.value;
    setSelectedCategory(category); // Set the selected category
    setSelectedManufacturer(null); // Reset selected manufacturer
  };

  const handleManufacturerSelect = (manufacturer) => {
    setSelectedManufacturer(manufacturer); // Set the selected manufacturer
    setSelectedProduct(null); // Reset selected product
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
          : item
      ));
    } else {
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
    <div>
      <div className="category-select">
        <h2>Select a Category</h2>
        <select value={selectedCategory} onChange={handleCategorySelect}>
          <option value="">-- Select a Category --</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {!selectedManufacturer ? (
        <div className="manufacturer-list">
          <h2>Select a Manufacturer</h2>
          {manufacturers
            .filter(manufacturer => !selectedCategory || manufacturer.category === selectedCategory)
            .map(manufacturer => (
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
    </div>
  );
};

export default ManufacturerCategorizer;
