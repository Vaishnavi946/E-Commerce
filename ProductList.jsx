import ProductCard from "../components/ProductCard";
import "./ProductList.css";

const products = [
  { id: 1, name: "iPhone 15", price: 79999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Samsung Galaxy S24", price: 69999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "MacBook Air", price: 99999, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Sony Headphones", price: 4999, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Smart Watch", price: 9999, image: "https://via.placeholder.com/150" },
];

export default function ProductList({ handleAddToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}
