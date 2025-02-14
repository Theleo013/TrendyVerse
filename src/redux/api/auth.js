import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/redux/api/axiosBase";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3000/" }),
  keepUnusedDataFor: 1000,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "users",
          method: "POST",
          data,
        };
      },
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
