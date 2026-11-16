import { createSlice } from "@reduxjs/toolkit";

const initialFavorites = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: initialFavorites,

  reducers: {
    addFavorite: (state, action) => {
      const exists = state.some(
        mobile => String(mobile.id) === String(action.payload.id)
      );

      if (!exists) {
        state.push(action.payload);

        localStorage.setItem(
          "favorites",
          JSON.stringify(state)
        );
      }
    },

    removeFavorite: (state, action) => {
      const updated = state.filter(
        mobile => String(mobile.id) !== String(action.payload)
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updated)
      );

      return updated;
    }
  }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;