import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [message, setMessage] = useState(""); // For temporary notification

  const categoryItems = products.filter(item => item.category === categoryName);

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.name} added to cart!`);

    // Hide message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="main-page">
      <header className="main-header">
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>My E-Commerce</h1>
        <nav>
          <button onClick={() => navigate("/cart")}>Cart</button>
        </nav>
      </header>

      {message && <div className="cart-message">{message}</div>}

      <main className="main-content">
        <h2>{categoryName}</h2>
        <div className="cards-slider">
          {categoryItems.map(item => (
            <div className="card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

