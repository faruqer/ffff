import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>{product.name}</h2>
        <p style={styles.price}>
          Price: <span>${product.price}</span> 
          {product.bulkPrice && <span> (Bulk Price: ${product.bulkPrice})</span>}
        </p>
        <p style={styles.rating}>Rating: {product.rating} ⭐</p>
        <p style={styles.availability}>
          {product.availability ? "In Stock" : "Out of Stock"}
        </p>
        <p style={styles.description}>{product.description}</p>
        <h3 style={styles.commentTitle}>Comments:</h3>
        <ul style={styles.commentList}>
          {product.comments.map((comment, index) => (
            <li key={index} style={styles.comment}>
              {comment}
            </li>
          ))}
        </ul>
        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    margin: "20px",
  },
  imageContainer: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  content: {
    padding: "20px",
    textAlign: "left",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  price: {
    fontSize: "1.2rem",
    color: "#007bff",
    marginBottom: "10px",
  },
  rating: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#ffcc00",
  },
  availability: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: product => (product.availability ? "green" : "red"),
  },
  description: {
    fontSize: "0.95rem",
    marginBottom: "20px",
    color: "#555",
  },
  commentTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#333",
  },
  commentList: {
    paddingLeft: "20px",
    marginBottom: "20px",
    color: "#555",
  },
  comment: {
    marginBottom: "5px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ProductDetail;
