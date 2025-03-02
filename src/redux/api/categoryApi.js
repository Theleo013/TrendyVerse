import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/redux/api/axiosBase";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3001/" }),
  keepUnusedDataFor: 1000,
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetCategoriesQuery } = categoryApi;
