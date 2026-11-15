import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addFavorite } from "../features/favoriteSlice";

import "./MobileCard.css";

function MobileCard({ mobile, onDelete }) {

  const dispatch = useDispatch();

  function handleFavorite() {

    if (!mobile) return;

    dispatch(addFavorite(mobile));

    alert("Mobile added to Favorites!");

  }

  if (!mobile) return null;

  return (

    <div className="mobile-card">

      <img
        src={mobile.image}
        alt={mobile.name}
        className="mobile-image"
      />

      <div className="mobile-content">

        <h2>{mobile.name}</h2>

        <p>Brand: {mobile.brand}</p>

        <p>Price: ₹{mobile.price}</p>

        <Link
          to={`/mobiles/${mobile.id}`}
          className="view-details-btn"
        >
          View Details
        </Link>

        <Link
          to={`/editmobile/${mobile.id}`}
          className="edit-btn"
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(mobile.id)}
        >
          Delete
        </button>

        <button
          className="favorite-btn"
          onClick={handleFavorite}
        >
          ❤ Add To Favorites
        </button>

      </div>

    </div>

  );
}

export default MobileCard;