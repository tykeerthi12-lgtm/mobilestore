import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const favorites = useSelector(
    state => state.favorites
  );

  const [user, setUser] = useState(() => {
    return JSON.parse(
      localStorage.getItem("user") || "null"
    );
  });

  useEffect(() => {
    function updateUser() {
      setUser(
        JSON.parse(localStorage.getItem("user") || "null")
      );
    }

    window.addEventListener("authChanged", updateUser);

    return () => {
      window.removeEventListener("authChanged", updateUser);
    };
  }, []);

  function handleLogout() {

    localStorage.removeItem("user");

    setUser(null);

    alert("Logout Successful!");

    navigate("/login");
  }

  return (

    <nav className="navbar">

      <h2 className="logo">
        MobileStore
      </h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/mobiles">Mobiles</Link>

        <Link to="/favorites">
          Favorites ({favorites.length})
        </Link>

        {user ? (

          <>
            <span>Welcome, {user.name}</span>

            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </>

        ) : (

          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>

        )}

      </div>

    </nav>

  );

}

export default Navbar;