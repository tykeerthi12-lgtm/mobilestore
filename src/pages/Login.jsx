import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const loggedUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!loggedUser) {
      alert("Invalid Email or Password!");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: loggedUser.name,
        email: loggedUser.email
      })
    );

    // Update Navbar login status
    window.dispatchEvent(new Event("authChanged"));

    alert("Login Successful!");

    navigate("/");
  }

  return (
    <div className="login-page">
      <div className="login-container">

        <h2>Welcome Back!</h2>

        <p className="login-subtitle">
          Login to your MobileStore account
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="login-footer">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;