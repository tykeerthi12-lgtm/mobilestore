import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";

function Navbar() {

  const favorites = useSelector(
    state => state.favorites
  );

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

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      </div>

    </nav>

  );

}

export default Navbar;