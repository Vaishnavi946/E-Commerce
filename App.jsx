import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);   // store logged-in user
  const [page, setPage] = useState("login"); // which page to show

  // If logged in, show welcome
  if (user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
        🎉 Welcome, {user.email}!
        <br /><br />
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{page === "login" ? "Login Form" : "Signup Form"}</h2>

      <div className="toggle-btns">
        <button
          className={page === "login" ? "active" : ""}
          onClick={() => setPage("login")}
        >
          Login
        </button>
        <button
          className={page === "signup" ? "active" : ""}
          onClick={() => setPage("signup")}
        >
          Signup
        </button>
      </div>

      <div className="form-wrapper">
        {page === "login" ? (
          <Login setUser={setUser} />
        ) : (
          <Signup setUser={setUser} />
        )}
      </div>

      {page === "login" && (
        <p className="small-text">
          Not a member? <a href="#" onClick={() => setPage("signup")}>Signup now</a>
        </p>
      )}

      {page === "signup" && (
        <p className="small-text">
          Already a member? <a href="#" onClick={() => setPage("login")}>Login here</a>
        </p>
      )}
    </div>
  );
}

