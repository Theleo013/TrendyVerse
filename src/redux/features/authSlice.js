// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000";

// Login işlemi (GET isteği ile kullanıcıyı kontrol ediyoruz)
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      // json-server'da kullanıcıyı sorgulamak için GET isteği yapıyoruz.
      const response = await axios.get(`${API_URL}/login`, {
        params: {
          username: userData.username,
          password: userData.password,
        },
      });

      // Eğer kullanıcı bulunursa (array içinde dönecek), giriş başarılı.
      if (response.data.length > 0) {
        return { user: response.data[0], token: "mock-token-123" }; // Fake token
      } else {
        return rejectWithValue("Invalid username or password");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Register işlemi (POST isteği ile yeni kullanıcı ekleniyor)
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login işlemleri
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Register işlemleri
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
