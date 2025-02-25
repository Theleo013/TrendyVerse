import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "user",
        method: "POST",
        body: userData,
      }),
    }),
    getUser: builder.query({
      query() {
        return {
          url: "users",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
