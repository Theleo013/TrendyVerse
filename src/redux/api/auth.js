import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "user",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.query({
      query: (credentials) => ({
        url: `user?username=${credentials.username}&password=${credentials.password}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        if (response.length === 1) {
          console.log("response data", response);
          return {
            success: true,
            user: response[0],
            token: `fake-token-${response[0].id}`,
          };
        } else {
          return { success: false, message: "Invalid username or password." };
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLazyLoginUserQuery } = authApi;
