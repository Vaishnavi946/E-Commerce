import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="main-page">
      {/* Header same as MainPage */}
      <header className="main-header">
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          My E-Commerce
        </h1>
        <nav>
          <button onClick={() => navigate("/")}>Home</button>
          <button
            style={{ minWidth: "80px" }}
            onClick={() => navigate("/cart")}
          >
            Cart ({cartItems.length})
          </button>
        </nav>
      </header>

      <main className="main-content">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            <div className="cards-slider">
              {cartItems.map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Total: ₹{totalPrice}</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={clearCart}>Clear Cart</button>
                <button onClick={() => navigate("/order")}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
<button onClick={() => navigate("/order")}>Proceed to Order</button>