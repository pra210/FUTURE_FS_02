import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Cart() {
  const { cart } = useContext(StoreContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}
    </div>
  );
}

export default Cart;
