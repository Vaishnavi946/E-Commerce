import React from "react";
import "../styles/Success.css";


export default function Success({ setPage }) {
  return (
    <div className="success-page">
      <h2>Success!</h2>
      <p>Your order has been placed successfully.</p>
      <button onClick={() => setPage("cart")}>Back to Cart</button>
    </div>
  );
}
