import React, { useContext, useState } from "react";
import products from "../data/products";
import { StoreContext } from "../context/StoreContext";

function Home() {
  const { cart, setCart } = useContext(StoreContext);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // 🔍 Filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* 🔍 SEARCH BAR (RIGHT SIDE) */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 14px",
            width: "250px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}>
        Products
      </h2>

      {/* 🟦 PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "10px",
                padding: "8px 14px",
                background: "#22c55e",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;