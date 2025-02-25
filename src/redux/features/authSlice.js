import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/redux/api/auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.loginUser.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, action) => {
          if (action.payload.success) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false;
          } else {
            state.error = action.payload.message;
            state.loading = false;
          }
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchRejected,
        (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        }
      );
  },
});

export const { logout } = authSlice.actions;

export const reducer = persistReducer(
  {
    key: "ECM:auth",
    storage,
    whitelist: ["user", "token"],
  },
  authSlice.reducer
);

export default reducer;
