import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Clothes", img: "clothes.jpg" },
  { name: "Accessories", img: "/images/accessories1.jpg" },
  { name: "Toys", img: "/images/toys1.jpg" },
  { name: "Appliances", img: "/images/appliances1.jpg" },
  { name: "Gadgets", img: "/images/gadget1.jpg" },
];

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <header className="main-header">
        <h1>My E-Commerce</h1>
        <button onClick={() => navigate("/cart")}>Cart</button>
      </header>

      <main className="main-content">
        <h2>Categories</h2>
        <div className="cards-slider">
          {categories.map(cat => (
            <div className="card" key={cat.name} onClick={() => navigate(`/category/${cat.name}`)}>
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


