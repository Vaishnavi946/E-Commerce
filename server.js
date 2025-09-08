// server.js (ES module version)
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Temporary in-memory "database"
let users = [];

// Signup route
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Email and password required" });
  }

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ email, password });
  console.log("Registered users:", users);

  return res.json({ success: true, email });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  // Optionally set a cookie
  res.cookie("user", email, {
    httpOnly: true,
    sameSite: "lax",
  });

  return res.json({ success: true, email });
});

// Logout route
app.post("/logout", (req, res) => {
  res.clearCookie("user");
  return res.json({ success: true });
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

// Dummy products
const products = [
  { id: 1, name: "iPhone 15", price: 79999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Samsung Galaxy S24", price: 69999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "MacBook Air", price: 99999, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Sony Headphones", price: 4999, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Smart Watch", price: 9999, image: "https://via.placeholder.com/150" }
];

// Products endpoint
app.get("/products", (req, res) => {
  res.json(products);
});
