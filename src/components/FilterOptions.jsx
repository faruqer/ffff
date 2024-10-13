import React, { useState } from "react";

const FilterOptions = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    rating: "",
  });

  // Update filters and call the parent callback
  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...filters, [filterType]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Pass updated filters to parent
  };

  return (
    <div>
      <h3>Filter Options</h3>

      {/* Category Filter */}
      <label>Category</label>
      <select
        value={filters.category}
        onChange={(e) => handleFilterChange("category", e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="home">Home</option>
      </select>

      {/* Price Range Filter */}
      <label>Price Range</label>
      <select
        value={filters.priceRange}
        onChange={(e) => handleFilterChange("priceRange", e.target.value)}
      >
        <option value="">Select Price Range</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-500">$100 - $500</option>
      </select>

      {/* Rating Filter */}
      <label>Rating</label>
      <select
        value={filters.rating}
        onChange={(e) => handleFilterChange("rating", e.target.value)}
      >
        <option value="">Select Rating</option>
        <option value="1">1 Star & Up</option>
        <option value="2">2 Stars & Up</option>
        <option value="3">3 Stars & Up</option>
        <option value="4">4 Stars & Up</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
};

export default FilterOptions;
