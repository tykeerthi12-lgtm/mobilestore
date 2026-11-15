import { useSelector, useDispatch } from "react-redux";

import { removeFavorite } from "../features/favoriteSlice";

import "./Favorites.css";

function Favorites() {

  const favorites = useSelector(
    state => state.favorites
  );
  console.log("Redux Favorites:", favorites);

  const dispatch = useDispatch();

  return (

    <div className="favorites-page">

      <h1>My Favorite Mobiles</h1>

      {favorites.length === 0 ? (

        <p className="empty-message">
          No favorite mobiles found.
        </p>

      ) : (

        <div className="mobiles">

          {favorites.map((mobile, index) => {

            if (!mobile) return null;

            return (

              <div
                className="mobile-card"
                key={mobile.id ?? index}
              >

                <img
                  src={mobile.image || ""}
                  alt={mobile.name || "Mobile"}
                  className="mobile-image"
                />

                <div className="mobile-content">

                  <h2>{mobile.name || "Unknown Mobile"}</h2>

                  <p>
                    Brand: {mobile.brand || "Not available"}
                  </p>

                  <p>
                    Price: ₹{mobile.price ?? "Not available"}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFavorite(mobile.id))
                    }
                  >
                    Remove Favorite
                  </button>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </div>

  );

}

export default Favorites;