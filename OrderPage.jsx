import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    paymentMethod: "cod",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      navigate("/cart");
      return;
    }

    setOrderPlaced(true);
    clearCart();
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (orderPlaced) {
    return (
      <div className="main-page" style={{ backgroundColor: "#6a0dad", minHeight: "100vh" }}>
        <header className="main-header">
          <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            My E-Commerce
          </h1>
          <nav>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/cart")}>Cart (0)</button>
          </nav>
        </header>
        <main className="main-content" style={{ textAlign: "center", color: "#fff", marginTop: "50px" }}>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your order, {formData.name}.</p>
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#fff",
              color: "#6a0dad",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="main-page" style={{ backgroundColor: "#6a0dad", minHeight: "100vh" }}>
      <header className="main-header">
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          My E-Commerce
        </h1>
        <nav>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/cart")}>Cart ({cartItems.length})</button>
        </nav>
      </header>

      <main
        className="main-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 20px",
          gap: "30px",
        }}
      >
        {/* Order Summary */}
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "#fff",
            color: "#000",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ marginBottom: "15px", textAlign: "center" }}>Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <hr style={{ margin: "10px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            backgroundColor: "#fff",
            color: "#000",
            padding: "40px",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Checkout</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#6a0dad",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Place Order
          </button>
        </form>
      </main>
    </div>
  );
}
