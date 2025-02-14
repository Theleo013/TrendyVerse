import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { toast } from "react-toastify";

const initialState = {
  basket: [],
  basketTotalPrice: 0,
  basketTotalQuantity: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.basket[itemIndex].basketQuantity += 1;
        toast.info(
          `Increased ${state.basket[itemIndex].title} basket quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempBasket = { ...action.payload, basketQuantity: 1 };

        state.basket.push(tempBasket);

        toast.success(`${action.payload.title} added to basket`, {
          position: "bottom-left",
        });
      }
    },
    removeFromBasket: (state, action) => {
      const removeSingleItem = state.basket.filter(
        (basketItem) => basketItem.id !== action.payload.id
      );
      state.basket = removeSingleItem;
      toast.error(`${action.payload.title} removed from basket`, {
        position: "bottom-left",
      });
    },
    decreasedFromBasket: (state, action) => {
      const decreaseIndex = state.basket.findIndex(
        (decrease) => decrease.id === action.payload.id
      );
      if (state.basket[decreaseIndex].basketQuantity > 1) {
        state.basket[decreaseIndex].basketQuantity -= 1;

        toast.info(`Decreased ${action.payload.title} basket quantity`, {
          position: "bottom-left",
        });
      } else if (state.basket[decreaseIndex].basketQuantity === 1) {
        const removeSingleItem = state.basket.filter(
          (basketItem) => basketItem.id !== action.payload.id
        );
        state.basket = removeSingleItem;
        toast.error(`${action.payload.title} removed from basket`, {
          position: "bottom-left",
        });
      }
    },
    clearBasket: (state) => {
      state.basket = [];
      toast.error("Basket cleared", {
        position: "bottom-left",
      });
    },
    getTotals: (state) => {
      let { total } = state.basket.reduce(
        (cartTotal, cartItem) => {
          const { price, basketQuantity } = cartItem;
          const itemTotal = price * basketQuantity;
          cartTotal.total = itemTotal;
          return cartTotal;
        },
        {
          total: 0,
        }
      );
      state.basketTotalPrice = total;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  decreasedFromBasket,
  clearBasket,
  getTotals,
} = basketSlice.actions;

export const reducer = persistReducer(
  {
    key: "ECM:basket",
    storage,
    whitelist: ["basket", "basketTotalQuantity", "basketTotalPrice"],
  },
  basketSlice.reducer
);

export default reducer;
