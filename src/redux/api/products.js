import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/redux/api/axiosBase";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://db-json-f558.onrender.com/" }),
  keepUnusedDataFor: 1000,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query() {
        return {
          url: "products",
          method: "GET",
        };
      },
    }),
    getProductByTitle: builder.query({
      query(title) {
        return {
          url: `products?title_like=${title}`,
          method: "GET",
        };
      },
    }),
    SearchProducts: builder.query({
      query(title) {
        return {
          url: `products?title_like=${title}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByTitleQuery,
  useLazySearchProductsQuery,
} = productsApi;
