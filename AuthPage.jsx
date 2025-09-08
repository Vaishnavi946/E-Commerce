import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/Auth.css"; // make sure styles are imported

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = () => {
    alert("Login successful!");
  };

  const handleSignup = () => {
    alert("Signup successful!");
  };

  return (
    <div className="auth-wrapper">
      {isSignup ? (
        <Signup onSignup={handleSignup} onSwitch={() => setIsSignup(false)} />
      ) : (
        <Login onLogin={handleLogin} onSwitch={() => setIsSignup(true)} />
      )}
    </div>
  );
}

export default AuthPage;
