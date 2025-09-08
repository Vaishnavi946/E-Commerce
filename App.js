import { useState } from "react";
import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Input states for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Input states for signup
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogin = () => setIsLoggedIn(true);
  const handleSignup = () => setIsLoggedIn(true);

  if (isLoggedIn) {
    return (
      <div className="main-page">
        <header className="main-header">
          <h1>My Website</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <div className="main-content">
          <h2>Welcome to the Main Page!</h2>
          <p>This is your dashboard or main content area after login.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="page-heading">{isLogin ? "Welcome Back!" : "Create Account"}</h1>

        <div className="form-container">
          <div className={`form-slider ${isLogin ? "slide-login" : "slide-signup"}`}>
            
            {/* Login Form */}
            <div className="form login-form">
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button
                onClick={handleLogin}
                disabled={!loginEmail || !loginPassword} // button enabled only if both fields are filled
              >
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <span onClick={toggleForm} className="toggle-link">
                  Signup
                </span>
              </p>
            </div>

            {/* Signup Form */}
            <div className="form signup-form">
              <h2>Signup</h2>
              <input
                type="text"
                placeholder="Name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <button
                onClick={handleSignup}
                disabled={!signupName || !signupEmail || !signupPassword} // enabled only if all fields are filled
              >
                Signup
              </button>
              <p>
                Already have an account?{" "}
                <span onClick={toggleForm} className="toggle-link">
                  Login
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
