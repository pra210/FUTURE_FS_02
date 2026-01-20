import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(StoreContext);

  return (
    <div style={{
      width: "220px",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      background: "#fff"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />

      <h4>{product.name}</h4>
      <p>₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "8px 12px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;