import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <>
      {/* Navbar ALWAYS visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />

        <Route
          path="/checkout"
          element={isLoggedIn ? <Checkout /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;