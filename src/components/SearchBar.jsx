import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => (
  <div style={{ display: "flex", width: "300px" }}> {/* Set width here */}
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: "8px", flex: 1, borderRadius: "20px 0 0 20px", border: "1px solid #ccc", outline: "none" }}
    />
    {searchTerm && (
      <button onClick={() => setSearchTerm("")} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
        &#10005;
      </button>
    )}
    <button onClick={onSearch} style={{ padding: "8px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "0 20px 20px 0", cursor: "pointer" }}>
      Search
    </button>
  </div>
);

export default SearchBar;
