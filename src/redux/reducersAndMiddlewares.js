import basketReducer from "@/redux/features/basketSlice";
import authReducer from "@/redux/features/authSlice";
import { productsApi } from "@/redux/api/products";
import { authApi } from "@/redux/api/auth";

export const reducer = {
  basket: basketReducer,
  auth: authReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const middlewares = [productsApi.middleware, authApi.middleware];
