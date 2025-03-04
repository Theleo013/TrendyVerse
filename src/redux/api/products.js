import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/redux/api/axiosBase";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://dbjson-server.vercel.app/" }),
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
    getProductById: builder.query({
      query(id) {
        return {
          url: `products/${id}`,
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
  useGetProductByIdQuery,
  useLazySearchProductsQuery,
} = productsApi;
