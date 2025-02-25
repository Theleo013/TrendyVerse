import basketReducer from "@/redux/features/basketSlice";
import wishlistReducer from "@/redux/features/wishlistSlice";
import authReducer from "@/redux/features/authSlice";
import { productsApi } from "@/redux/api/products";
import { authApi } from "@/redux/api/auth";
import { checkoutApi } from "@/redux/api/checkoutApi";
import { contactApi } from "@/redux/api/contact";

export const reducer = {
  basket: basketReducer,
  wishlist: wishlistReducer,
  auth: authReducer,

  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [checkoutApi.reducerPath]: checkoutApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
};

export const middlewares = [
  productsApi.middleware,
  authApi.middleware,
  checkoutApi.middleware,
  contactApi.middleware,
];
