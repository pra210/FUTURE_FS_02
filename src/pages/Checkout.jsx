import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Checkout() {
  const { cart } = useContext(StoreContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    // 🔵 BLUE BACKGROUND
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
      }}
    >
      {/* ⬜ WHITE CARD */}
      <div
        style={{
          background: "#fff",
          width: "450px",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Cart Summary</h2>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "15px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
              }}
            />
            <div>
              <h4 style={{ margin: 0 }}>{item.name}</h4>
              <p style={{ margin: 0 }}>₹ {item.price}</p>
            </div>
          </div>
        ))}

        <hr />

        <h3>Total: ₹ {total}</h3>

        <button
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "10px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => alert("Payment Successful ✅")}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;