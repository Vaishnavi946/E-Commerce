import React from "react";
import "../styles/Checkout.css";

export default function Checkout({ cart, setPage }) {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-box">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="checkout-item">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <button onClick={() => setPage("success")}>Confirm Purchase</button>
          </div>
        )}
      </div>
    </div>
  );
}

