import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <StoreContext.Provider value={{ cart, setCart }}>
      {children}
    </StoreContext.Provider>
  );
}