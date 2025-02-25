import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { toast } from "react-toastify";
import { addToBasket } from "@/redux/features/basketSlice";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.wishlist[itemIndex].wishlistQuantity += 1;
        toast.info(
          `Increased ${state.wishlist[itemIndex].title} wishlist quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempWishlist = { ...action.payload, wishlistQuantity: 1 };

        state.wishlist.push(tempWishlist);

        toast.success(`${action.payload.title} added to Wishlist`, {
          position: "bottom-left",
        });
      }
    },

    removeFromWishlist: (state, action) => {
      const removeSingleItem = state.wishlist.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );
      state.wishlist = removeSingleItem;
      toast.error(`${action.payload.title} removed from Wishlist`, {
        position: "bottom-left",
      });
    },

    clearWishlist: (state) => {
      state.wishlist = [];
      toast.error("Wishlist cleared", {
        position: "bottom-left",
      });
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  moveAllToBasket,
} = wishlistSlice.actions;

export const reducer = persistReducer(
  {
    key: "ECM:wishlist",
    storage,
    whitelist: ["wishlist"],
  },
  wishlistSlice.reducer
);

export default reducer;
