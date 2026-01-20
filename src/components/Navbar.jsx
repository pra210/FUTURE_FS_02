import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

function Navbar() {
  const { cart } = useContext(StoreContext);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        color: "#fff",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 22, fontWeight: "bold" }}>
        🛒 MINI E-COMMERCE
      </span>

      {isLoggedIn && (
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link to="/home" style={{ color: "#fff" }}>
            Home
          </Link>

          <Link to="/checkout" style={{ color: "#fff" }}>
            Cart ({cart.length})
          </Link>

          <button
            onClick={logout}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;