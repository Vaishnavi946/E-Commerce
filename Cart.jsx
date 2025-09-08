import React from "react";
import "../styles/Cart.css";


export default function Cart({ setPage }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <p>No items yet!</p>
      <button onClick={() => setPage("checkout")}>Proceed to Checkout</button>
    </div>
  );
}
